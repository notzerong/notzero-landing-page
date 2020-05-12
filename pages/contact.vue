<template>
  <div>
    <Navbar />
    <h1>Welcome to contact us</h1>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  import Navbar from "~/components/Navbar";

  export default {
    // components: {
    //   Logo,
    //   Navbar
    // }
  };
</script>

<style scoped>
  h1 {
    color: #fff;
  }
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
</style>
