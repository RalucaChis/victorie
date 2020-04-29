<template>
    <div>
        <routines-table/>
        <b-button  class="float-right">
            <b-icon-plus/>
            Add routine
        </b-button>
    </div>
</template>

<script>
import RoutinesTable from '../../components/RoutinesTable'

export default {
  components: { RoutinesTable },
  // middleware: 'authenticated',
  methods: {
    // onAddRoutineClick() {
    //     this.$router.push("/routine/add")
    // }
  },
  head () {
    return {
      title: 'Control Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Manage your already created routines or create a new one'
        }
      ]
    }
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
