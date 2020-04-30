<template>
  <div>
    <q-form class="q-gutter-md" v-for="field in function_definition.fields" :key="field.name" :label="field.label" >
      <m-t-p-input-field v-bind:field_definition="field"
                         v-bind:field_value="fields_state[field.name]"
                         @mtp-input-changed="onInputFieldChange($event)"/>
    </q-form>
<!--    <q-form class="q-gutter-md" v-if="function_definition.result!=null"-->
<!--                  v-for="field in [function_definition.result]"-->
<!--                  :key="field.name" :label="field.label">-->
<!--      <m-t-p-input-field-->
<!--        v-bind:field_definition="function_definition.result"-->
<!--        v-bind:field_value="result_state" @mtp-input-changed="onInputResultChange($event)"-->
<!--      />-->
<!--    </q-form>-->
  </div>
</template>

<script>
import MTPInputField from './MTPInputField'
export default {
  name: 'MTPFunctionComponent',
  components: { MTPInputField },
  props: {
    function_definition: Object,
    existing_fields: null
  },
  data () {
    return {
      name: '',
      label: '',
      fields_state: {},
      result_state: ''
    }
  },
  created () {
    this.name = this.function_definition.name
    this.label = this.function_definition.label
    if (this.existing_fields != null) {
      this.result_state = this.existing_fields.result
      this.fields_state = { ...this.existing_fields.parameters }
    }
  },
  methods: {
    // the MTPInputField child components emit events when input fields are changed
    // these events contain the name of the field and the new value
    // e.g.: {"name": "stock_price", "new_value": 123}
    onInputFieldChange (event) {
      this.fields_state[event.name] = event.new_value
      // eslint-disable-next-line camelcase
      const { name: function_name } = this.function_definition
      const parameters = { ...this.fields_state }
      this.$emit('mtp-function-changed', { parameters, function_name })
    },
    onInputResultChange (event) {
      // eslint-disable-next-line camelcase
      const { name: function_name } = this.function_definition
      this.result_state = event.new_value
      const result = this.result_state
      this.$emit('mtp-function-changed', { result, function_name })
    }
  }
}
</script>

<style scoped>
</style>
