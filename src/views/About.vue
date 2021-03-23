<template>
  <div class="about">
    <video autoplay loop muted class="about__video">
      <source src="@/assets/space-eyes.mp4" alt="video.mp4">
    </video>
    <h1>We are space eyes</h1>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');

.about {
  height: 90vh;
  position: relative;

  h1 {
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    font-size: 80px;
    font-family: Anton;
    top: 57%;
    left: 53.5%;
    transform: translate(-57%, -50.6%);
    position: absolute;
  }
  &__video {
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>