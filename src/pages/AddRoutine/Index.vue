<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input v-model="text" label="Routine Name"/>
      </div>
      <br>
      <div class="q-gutter-md">
      <q-btn-dropdown color="primary" label="Status">
      <q-list>
        <q-item clickable v-close-popup v-model="user_input">
          <q-item-section >
            <q-item-label>Active</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup v-model="user_input">
          <q-item-section >
            <q-item-label>Inactive</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
        </div>
      <br>
      <q-date
        v-model="date"
        landscape
      />
      <br>
    </div>
    <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" label="Save Routine"/>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'AddRoutineIndex',
  data () {
    return {
      date: '',
      text: '',
      user_input: ''
    }
  }
}
</script>
<style scoped>

</style>
