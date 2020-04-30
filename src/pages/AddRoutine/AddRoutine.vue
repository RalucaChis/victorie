<template>
  <div>
    <m-t-p-routine-component
      :availableUiComponents="availableUiComponents"
      :routine_name="routine_name"
      :definedComponents="definedComponents"
      @mtp-defined-components-changed="save_components($event)"
    />

    <b-button
      pill
      variant="outline-secondary"
      v-on:click="submitRoutine()"
      class="add-btn"
    >Save Routine
    </b-button>

  </div>
</template>

<script>
import MTPRoutineComponent from '../../components/MTPRoutineComponent'
export default {
  name: 'AddRoutinePage',
  components: { MTPRoutineComponent },
  head () {
    return {
      title: 'Routine Page'
    }
  },
  methods: {
    // eslint-disable-next-line camelcase
    save_components (transmitted_components) {
      // eslint-disable-next-line camelcase
      this.definedComponents = [...transmitted_components]
    },
    submitRoutine () {
      // eslint-disable-next-line camelcase
      // const { routine_name, definedComponents: defined_components } = this
      // eslint-disable-next-line no-unused-vars
      // const jsonObject = utils.create_routine_object(
      //   defined_components,
      //   routine_name
      // )
      // try {
      //   this.sendRoutineToBackend(jsonObject);
      // } catch (error) {
      //   this.notify_error(error);
      // }
    }
  },

  data () {
    return {
      routine_name: null,
      definedComponents: [],
      availableUiComponents: {
        condition: [
          {
            category: 'numbers',
            label: 'Numbers',
            functions: [
              {
                name: 'relation',
                label: 'Relations between numbers',
                fields: [
                  {
                    name: 'left_value',
                    label: 'Left Value',
                    type: 'text',
                    required: true,
                    help_text: 'Left value to be compared'
                  },
                  {
                    name: 'operator',
                    label: 'Operator',
                    type: 'dropdown',
                    required: true,
                    select_multiple: false,
                    options: [
                      {
                        name: 'Greater than',
                        value: '>'
                      },
                      {
                        name: 'Greater or equal than',
                        value: '>='
                      },
                      {
                        name: 'Equal To',
                        value: '=='
                      },
                      {
                        name: 'Lower or equal than',
                        value: '<='
                      },
                      {
                        name: 'Lower than',
                        value: '<'
                      },
                      {
                        name: 'Not Equal To',
                        value: '!='
                      }
                    ],
                    help_text: 'What relation should there be between the two values?'
                  },
                  {
                    name: 'right_value',
                    label: 'Right Value',
                    type: 'number',
                    required: true,
                    help_text: 'Right value to be compared'
                  }
                ]
              }
            ]
          }
        ],
        operation: [
          {
            category: 'finance',
            label: 'Finance',
            functions: [
              {
                name: 'currency_converter',
                label: 'Currency Converter',
                result: {
                  name: 'result',
                  label: 'Result Variable Name',
                  type: 'text'
                },
                fields: [
                  {
                    name: 'quantity',
                    label: 'Amount/Quantity',
                    type: 'number',
                    required: true,
                    help_text: 'The amount you want to convert'
                  },
                  {
                    name: 'from_currency',
                    label: 'Original Currency',
                    type: 'text',
                    required: true,
                    help_text: 'The currency you want to convert'
                  },
                  {
                    name: 'to_currency',
                    label: 'Converted Currency',
                    type: 'text',
                    required: true,
                    help_text: 'The currency you want to convert in'
                  }
                ]
              },
              {
                name: 'stock_price',
                label: 'Stock price',
                result: {
                  name: 'result',
                  label: 'Result Variable Name',
                  type: 'text'
                },
                fields: [
                  {
                    name: 'company_symbol',
                    label: 'Company Name',
                    type: 'text',
                    required: true,
                    help_text: 'Name of the company'
                  }
                ]
              }
            ]
          },
          {
            category: 'messaging',
            label: 'Messaging',
            functions: [
              {
                name: 'send_email',
                label: 'Send Email',
                fields: [
                  {
                    name: 'recipient',
                    label: 'Recipient Email Address',
                    type: 'text',
                    required: true
                  },
                  {
                    name: 'subject',
                    label: 'Subject',
                    type: 'text',
                    required: true
                  },
                  {
                    name: 'content',
                    label: 'Message',
                    type: 'text',
                    required: true
                  }
                ]
              },
              {
                name: 'send_discord_message',
                label: 'Send Discord Message',
                fields: [
                  {
                    name: 'username',
                    label: 'Bot name',
                    type: 'text',
                    required: false
                  },
                  {
                    name: 'content',
                    label: 'Message',
                    type: 'text',
                    required: true
                  }
                ]
              }
            ]
          },
          {
            category: 'random',
            label: 'Random',
            functions: [
              {
                name: 'joke',
                label: 'Fetch Random Jokes',
                result: {
                  name: 'result',
                  label: 'Store joke in variable:',
                  type: 'text'
                },
                fields: []
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
