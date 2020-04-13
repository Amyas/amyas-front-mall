<template>
  <div id="app">
    <RouterView />
    <BottomNavBar />
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
