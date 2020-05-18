<template>
  <footer class="flex text-white flex-wrap">
    <section class="w-1/2 xl:m-20 m-5">
      <img src="~/assets/img/logo2.png" class="my-10" alt="notzero logo" />
      <a href="tel:+2349030836199" class="block my-10">
        <img src="~/assets/img/phone.svg" class="inline" alt="Phone" /> +2349030836199
      </a>
      <address class="my-10">Oluyole, Ibadan, Nigeria.</address>
    </section>
    <section class="text-center text-white w-full m-10">
      <p>{{new Date().getFullYear()}} &copy; NotZero</p>
      <div>
        <a href="mailto:info@notzero.com" target="_blank">info@notzero.com</a>
      </div>
    </section>
  </footer>
</template>