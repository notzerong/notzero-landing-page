<template>
  <header class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center align-middle px-4 py-3 sm:p-0">
      <div class="sm:ml-24 mt-4">
        <img class="h-8" src="~/assets/img/logo.svg" alt="Not Zero Logo" />
      </div>
      <div class="sm:hidden mt-4">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="w-1/2 px-2 pt-2 pb-4 sm:flex sm:p-0 sm:mt-4 sm:justify-evenly"
    >
      <a
        href="#"
        class="active block mx-3 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
      >Home</a>
      <a
        href="#"
        class="mt-1 block px-2 pb-1 pt-2 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      >Services</a>
<!--      <a-->
<!--        href="/contact"-->
<!--        class="mt-1 block mx-3 px-2 pb-1 pt-2 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"-->
<!--      >Contact Us</a>-->
      <nuxt-link to="/contact"><span
        class="mt-1 block mx-3 px-2 pb-1 pt-2 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      >Contact Us</span></nuxt-link>
      <a
        href="#"
        class="badge mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
      >09030836199</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>
<style>
.active {
  @apply font-bold py-2 px-4 rounded bg-yellow-500 text-white;
  &:hover {
    @apply bg-yellow-700;
  }
}
.badge {
  @apply rounded-full p-2;
  border: 1px solid #f2c94c;
  &:hover {
    @apply bg-yellow-500;
  }
}
</style>
