<template>
  <footer class="flex text-white flex-wrap w-5/6 mx-auto xl:my-20">
    <div class="xl:w-1/5 w-full xl:text-center xl:my-3 my-5">
      <img src="~/assets/img/logo2.png" alt="notzero logo" />
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <a :href="`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`" target="_blank">
        <img src="~/assets/img/phoneyellow.svg" class="inline" alt="Phone" /> {{phoneNumber}}
      </a>
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <address>Ibadan, Oyo-state, Nigeria.</address>
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <p>{{new Date().getFullYear()}} &copy; NOTZERO</p>
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <a href="mailto:hello@notzero.tech" target="_blank">hello@notzero.tech</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: '+2348038325215',
      message: "Hello NotZero"
    }
  }
}
</script>