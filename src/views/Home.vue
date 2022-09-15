<script lang="ts"></script>

<template>
  <div class="container">
    <div id="navbar"></div>
    <main></main>
  </div>
</template>

<style lang="css" scoped>
main {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#070808),
    to(#3c4240)
  );
  background: -o-linear-gradient(top, #070808 0%, #3c4240 100%);
  background: linear-gradient(to bottom, #070808 0%, #3c4240 100%);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 32px;
}
#navbar {
  height: 32px;
  background: linear-gradient(to bottom, #555 0%, #272727 33%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#555),
    color-stop(33%, #272727)
  );
  text-shadow: 0px -1px 0px rgb(0 0 0 / 80%);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 32px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}
</style>
