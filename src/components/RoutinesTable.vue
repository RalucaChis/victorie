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
      ],
      routines: [
        {
          name: 'Detect Dog and close doors',
          created_at: new Date('2020-01-01T20:00:01').toGMTString(),
          updated_at: new Date('2020-01-02T16:21:01').toGMTString(),
          status: 'active'
        },
        {
          name: 'Email me when Microsoft stock is worth buying',
          created_at: new Date('2020-03-01T20:00:01').toGMTString(),
          updated_at: new Date('2020-03-01T11:44:35').toGMTString(),
          status: 'inactive'
        },
        {
          name: 'Turn on heating system after 16pm ',
          created_at: new Date('2020-02-01T16:00:01').toGMTString(),
          updated_at: new Date('2020-02-02T19:21:01').toGMTString(),
          status: 'active'
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
