<template>
  <b-table :fields="fields" :items="routines">
    <template v-slot:cell(routine_name)="data">
      <div>{{
        data.value
        }}
      </div>
        <b-button pill variant="outline-secondary" v-on:click="onPlayRoutineClick(data.item.id)" class="add-btn">
          <b-icon-play-fill/>
        </b-button>
<!--      <nuxt-link :to="`/routine/edit/${data.item.id}`">-->
        <b-button pill variant="outline-secondary"  class="add-btn">
          <b-icon-pencil/>
        </b-button>
<!--      </nuxt-link>-->
      <b-button pill variant="outline-secondary" v-on:click="onDeleteRoutineClick(data.item.id)" class="add-btn">
        <b-icon-trash-fill/>
      </b-button>
    </template>
  </b-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RoutinesTable',

  data () {
    return {
      new_routines: [],
      fields: [
        'routine_name',
        'state',
        {
          key: 'created_at',
          label: 'Date added'
        },
        {
          key: 'updated_at',
          label: 'Date last change'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      routines: 'getAllRoutines'
    })
  },
  methods: {
    ...mapActions(['set_routines', 'deleteRoutine', 'playRoutine', 'fetchAllRoutines']),
    ...mapGetters(['getAllRoutines']),

    onPlayRoutineClick (id) {
      try {
        this.playRoutine(id)
      } catch (error) {
        this.notify_error(error)
      }
      this.$store.dispatch('fetchAllRoutines')
        .then(response => this.set_routines(response.data))
    },
    onDeleteRoutineClick (id) {
      this.new_routines = this.routines.filter(routine => routine.id !== id)
      this.set_routines(this.new_routines)
      try {
        this.deleteRoutine(id)
      } catch (error) {
        this.notify_error(error)
      }
    }
  }
}
</script>

<style scoped></style>
