<template>
  <div>
    <q-form class="shadow p-3 mb-5 bg-white rounded mx-auto text-center">
      <fieldset class="mx-auto">
        <div class="form-group categroy-selection">
          <div v-if="selected_function == null">
            <label for="selectFunction"><h2><strong>{{label}}</strong></h2></label>

            <q-select id="selectFunction" class="form-control" @input="val => { onSelectedFunctionChange(val) }"
            label = "Please select a functionality"
            :options="options"/>
          </div>
          <m-t-p-function-component v-if="selected_function != null"
                                    @mtp-function-changed="onFunctionStateChange($event)"
                                    v-bind:function_definition="selected_function"
                                    :existing_fields="existing_fields"/>
        </div>
        <q-btn v-on:click="onDeleteComponentClick()" round color="primary" label="Delete"/>
      </fieldset>
    </q-form>

  </div>
</template>

<script>
import MTPFunctionComponent from './MTPFunctionComponent'
export default {
  name: 'MTPCategoryComponent',
  components: { MTPFunctionComponent },
  props: {
    category_definition: Object,
    id: String,
    // use this to pass values to the fields you want to be pre-filled
    // should contain the function_name and value for the fields
    // e.g.: {"function_name": "currency_converter", "from_currency": "RON", "to_currency": "EUR"....}
    existing_fields: null
  },
  data () {
    return {
      name: '',
      label: '',
      result: '',
      selected_function: null,
      options: []
    }
  },
  created () {
    this.name = this.category_definition.category
    this.label = this.category_definition.label
    this.category_definition.functions.forEach(func => {
      this.options.push(func.label)
    })
    if (this.existing_fields != null) {
      this.selected_function = this.category_definition.functions.find(f => f.name === this.existing_fields.function_name)
      delete this.existing_fields.function_name
    }
  },
  methods: {
    onSelectedFunctionChange (event) {
      console.log(event)
      // eslint-disable-next-line camelcase
      const selected_option = event
      // eslint-disable-next-line camelcase
      this.selected_function = this.category_definition.functions.find(mtp_function => mtp_function.label === selected_option)
      console.log(this.selected_function)
    },
    onFunctionStateChange (event) {
      // eslint-disable-next-line camelcase
      const { name: category_name, id } = this
      this.$emit('mtp-category-component-changed', { ...event, category_name, id })
    },
    onDeleteComponentClick (event) {
      const { id } = this
      this.$emit('mtp-category-component-delete', { id })
    }
  }
}
</script>

<style scoped>
</style>
