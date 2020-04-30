<template>
  <div>
    <!-- Iterate over all already defined components and display them-->
    <q-list>
      <q-item>
        <q-item-section v-for="component in defined_components_copy" :key="component.id">
          <m-t-p-category-component :category_definition="component.category_definition"
                                    :id="component.id"
                                    :existing_fields="component.existing_fields"
                                    @mtp-category-component-changed="onCategoryStateChange($event)"
                                    @mtp-category-component-delete="onDeleteComponentEmit($event)"/>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="text-center">
      <q-btn v-on:click="onAddComponentClick('condition')" color="primary" icon="plus" label="Add a new condition"/>
      <q-btn v-on:click="onAddComponentClick('operation')" color="primary" icon="plus" label="Add a new operation"/>
    </div>

    <div class="category_type_selector"/>
    <!--                      Display the category dropdown only if a category hasn't been chosen yet-->
    <div v-if="selectedCategoryType !== null">
      <label for="selectCategory"><h2><strong>{{selectedCategoryType}}</strong></h2></label>

      <select id="selectCategory" class="form-control" v-on:change="onSelectedCategoryChange($event)">
        <option disabled value selected="selected">Please select a category</option>
        <option v-for="mpt_category in availableUiComponents[selectedCategoryType]"
                :key="mpt_category.category" :value="mpt_category.category">
          {{ mpt_category.label }}
        </option>
      </select>
    </div>
    </div>
<!--  </q-btn-dropdown>-->
</template>

<script>
import MTPCategoryComponent from './MTPCategoryComponent'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'MTPRoutineComponent',
  props: {
    routine_name: String,
    availableUiComponents: Object,
    definedComponents: Array
  },
  components: { MTPCategoryComponent },
  data () {
    return {
      // defined_components_copy is a copy of the prop definedComponents
      // as it should be avoided to mutate a prop directly since the value will be overwritten whenever the parent component re-renders
      defined_components_copy: this.definedComponents,
      selectedCategoryType: null
    }
  },
  methods: {
    onSelectedCategoryChange (event) {
      // Add a new empty component in the ui after the category was selected (finance, messaging etc)
      // eslint-disable-next-line camelcase
      const selected_option = event.target.options[event.target.selectedIndex].value

      // eslint-disable-next-line camelcase
      const category_definition = this.availableUiComponents[this.selectedCategoryType].find(category => category.category === selected_option)
      const component = {
        type: this.selectedCategoryType, // condition or operation
        id: uuidv4(),
        category_definition
      }

      this.defined_components_copy.push(component)
      this.selectedCategoryType = null
    },
    // eslint-disable-next-line camelcase
    onCategoryStateChange (new_catagory_state) {
      // eslint-disable-next-line camelcase
      const { id } = new_catagory_state
      // eslint-disable-next-line camelcase
      const component_index = this.defined_components_copy.findIndex(component => component.id === id)

      this.defined_components_copy[component_index] = {
        ...this.defined_components_copy[component_index],
        // eslint-disable-next-line camelcase
        ...new_catagory_state
      }
      const components = [...this.defined_components_copy]
      this.emitChangesInDefinedComponents(components)
    },
    onAddComponentClick (componentType) {
      this.selectedCategoryType = componentType
      document.querySelector('.category_type_selector').scrollIntoView({ behavior: 'smooth' })
    },
    onDeleteComponentEmit ({ id }) {
      this.defined_components_copy = this.defined_components_copy.filter(component => component.id !== id)
      const components = [...this.defined_components_copy]
      this.emitChangesInDefinedComponents(components)
    },
    emitChangesInDefinedComponents (components) {
      this.$emit('mtp-defined-components-changed', components)
    }
  }
}
</script>

<style scoped>

</style>
