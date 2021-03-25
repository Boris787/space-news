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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  &__video {
    top: 0;
    left: 0;
    width: 100%;
  }
}
@media screen and (max-width: 1200px) {
  .about {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 60px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .about {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 50px;
    }
  }
}
@media screen and (max-width: 769px) {
  .about {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 38px;
    }
  }
}
@media screen and (max-width: 480px) {
  .about {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 24px;
    }
  }
}
@media screen and (max-width: 320px) {
  .about {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 15px;
    }
  }
}
</style>