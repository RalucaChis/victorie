<template>
  <q-page class="flex flex-center">
    <img
      alt="trio4ever"
      src="~assets/trio.png"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  mounted () {
    setTimeout(function () {
      this.$router.push('/Control')
    }.bind(this), 3000)
  }
}
</script>
