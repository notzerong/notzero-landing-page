<template>
  <footer class="flex text-white flex-wrap w-5/6 mx-auto xl:my-20">
    <div class="xl:w-1/5 w-full xl:text-center xl:my-3 my-5">
      <img src="~/assets/img/logo2.png" alt="notzero logo" />
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <a href="tel:+2349030836199">
        <img src="~/assets/img/phoneyellow.svg" class="inline" alt="Phone" /> +2349030836199
      </a>
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <address>Oluyole, Ibadan, Nigeria.</address>
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <p>{{new Date().getFullYear()}} &copy; NotZero</p>
    </div>
    <div class="xl:w-1/5 w-full xl:text-center my-3">
      <a href="mailto:info@notzero.ng" target="_blank">info@notzero.ng</a>
    </div>
  </footer>
</template>