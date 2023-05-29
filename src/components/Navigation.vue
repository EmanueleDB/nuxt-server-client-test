<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink> |
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss">
nav {
  height: 50px;
  background: orange;
}
</style>
