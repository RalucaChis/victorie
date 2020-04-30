<template>
  <q-table
    title="Control Page"
    :data="routines"
    :columns="fields"
    row-key="name"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RoutinesTable',
  data () {
    return {
      fields: [
        {
          name: 'desc',
          required: true,
          label: 'Name',
          align: 'left',
          field: 'name',
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'desc',
          required: true,
          label: 'Status',
          align: 'left',
          field: 'status',
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'desc',
          required: true,
          label: 'Date added',
          align: 'left',
          field: 'created_at',
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'desc',
          required: true,
          label: 'Date last change',
          align: 'left',
          field: 'updated_at',
          sortable: true,
          style: 'width: 500px'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      routines: 'getAllRoutines'
    })
  }
}
</script>

<style scoped></style>
