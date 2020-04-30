<template>

  <!--        <routines-table/>-->
  <div class="q-pa-md q-gutter-sm">
    <q-btn to="/add_routine" style="background: goldenrod; color: white" label="Add Routine"/>
  </div>

</template>

<script>
// import RoutinesTable from '../components/RoutinesTable'

export default {
  name: 'ControlIndex',
  // components: { RoutinesTable },
  // middleware: 'authenticated',
  methods: {
    // onAddRoutineClick() {
    //     this.$router.push("/routine/add")
    // }
  },
  // head () {
  //   return {
  //     title: 'Control Page',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'Manage your already created routines or create a new one'
  //       }
  //     ]
  //   }
  // },
  mounted () {
  }
}
</script>
<style scoped>

</style>
