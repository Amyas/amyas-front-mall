<template>
  <div id="app">
    <RouterView />
    <BottomNavBar v-if="$route.meta.navbar" />
  </div>
</template>
<script>
import BottomNavBar from '@/components/BottomNavBar'
export default {
  components: {
    BottomNavBar
  }
}
</script>
