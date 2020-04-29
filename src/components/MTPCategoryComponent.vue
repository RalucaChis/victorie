<template>
  <div>
    <b-form class="shadow p-3 mb-5 bg-white rounded mx-auto text-center">
      <fieldset class="mx-auto">
        <div class="form-group categroy-selection">
          <div v-if="selected_function == null">
            <label for="selectFunction"><h2><strong>{{label}}</strong></h2></label>

            <select id="selectFunction" class="form-control" v-on:change="onSelectedFunctionChange($event)">
              <option disabled value selected="selected">Please select a functionality</option>
              <option v-for="mtp_function in category_definition.functions"
                      :key="mtp_function.name" :value="mtp_function.name">
                {{ mtp_function.label }}
              </option>
            </select>
          </div>
          <m-t-p-function-component v-if="selected_function != null"
                                    @mtp-function-changed="onFunctionStateChange($event)"
                                    v-bind:function_definition="selected_function"
                                    :existing_fields="existing_fields"/>
        </div>
        <b-button pill variant="outline-secondary" v-on:click="onDeleteComponentClick()" class="add-btn">
          <b-icon-trash-fill/>
        </b-button>
      </fieldset>
    </b-form>

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
      selected_function: null
    }
  },
  created () {
    this.name = this.category_definition.category
    this.label = this.category_definition.label

    if (this.existing_fields != null) {
      this.selected_function = this.category_definition.functions.find(f => f.name === this.existing_fields.function_name)
      delete this.existing_fields.function_name
    }
  },
  methods: {
    onSelectedFunctionChange (event) {
      const selected_option = event.target.options[event.target.selectedIndex].value
      this.selected_function = this.category_definition.functions.find(mtp_function => mtp_function.name === selected_option)
    },

    onFunctionStateChange (event) {
      // the child MTPFunctionComponent component will emit the values of it's input fields
      // when it's input fields emit that they have been changed (aka the user has entered something)
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
