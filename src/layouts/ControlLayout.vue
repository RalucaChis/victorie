<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Control Page
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <RoutinesTable/>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import RoutinesTable from 'components/RoutinesTable'

export default {
  name: 'ControlLayout',

  components: {
    RoutinesTable
  }
}

</script>
