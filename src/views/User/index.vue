<template>
  <div class="user">
    <UserInfo />
    <UserOrderTabbar />
    <UserOtherEntry />
  </div>
</template>
<script>
import UserInfo from './components/UserInfo'
import UserOrderTabbar from './components/UserOrderTabbar'
import UserOtherEntry from './components/UserOtherEntry'
export default {
  components: {
    UserInfo,
    UserOrderTabbar,
    UserOtherEntry
  }
}
</script>
