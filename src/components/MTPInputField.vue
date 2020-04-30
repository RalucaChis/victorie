<template>
  <div>
    <q-input v-if="field_definition.type !== 'dropdown'" type="field_definition.type"
                  required="field_definition.required" hint="field_definition.help_text"
                  v-model="user_input"
    />
    <q-select v-if="field_definition.type === 'dropdown'"
                   required="field_definition.required"
                   hint="field_definition.help_text" v-model="user_input">
                   :options="options"
    </q-select>
  </div>
</template>

<script>
export default {
  name: 'MTPInputField',
  props: {
    // should contain keys like: name, label, options, required etc
    field_definition: Object,
    // contains the value of the field
    // eslint-disable-next-line vue/require-prop-type-constructor
    field_value: ''
  },
  data () {
    return {
      user_input: '',
      options: this.field_definition.options
    }
  },
  // check if properties from "data" have been changed
  watch: {
    // this function will be called when "user_input" changes
    // eslint-disable-next-line camelcase
    user_input: function (new_value) {
      const { name } = this.field_definition
      this.$emit('mtp-input-changed', { name, new_value })
    }
  },
  created () {
    if (this.field_value !== '') { this.user_input = this.field_value }
  }
}
</script>

<style scoped>
</style>
