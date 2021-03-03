<template>
  <div>
    <header class="header">
      <img src="@/assets/blue-space.png" class="header__img">
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // computed: {
  //     ...mapState({
  //         news: state => state.news
  //     })
  // }
}
</script>

<style lang="scss" scoped>
.header {
  height: 80vh;
  

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
}
</style>