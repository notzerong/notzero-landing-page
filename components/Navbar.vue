<template>
  <header
    :class="{'scrolled': !atTopOfPage}"
    class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 fixed w-full"
  >
    <div class="flex items-center justify-between align-middle px-4 py-3 sm:p-0 w-full">
      <div class="md:ml-24 mt-4">
        <img class="h-8" src="~/assets/img/logo.svg" alt="NotZero Logo" />
      </div>
      <div class="md:hidden mt-4">
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
      class="w-full px-2 pt-2 pb-4 md:flex sm:p-0 md:mt-4 md:justify-evenly"
    >
      <nuxt-link to="/">
        <a
          href="#home"
          :class="{'active': activeSection === 'home'}"
          class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          @click="setActiveSection('home')"
        >Home</a>
      </nuxt-link>
      <a
        href="#aboutus"
        :class="{'active': activeSection === 'aboutus'}"
        class="mt-1 block px-2 pb-1 pt-2 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2"
        @click="setActiveSection('aboutus')"
      >About Us</a>
      <a
        href="#services"
        :class="{'active': activeSection === 'services'}"
        class="mt-1 block px-2 pb-1 pt-2 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2"
        @click="setActiveSection('services')"
      >Services</a>
      <a
        href="#contactus"
        :class="{'active': activeSection === 'contactus'}"
        class="mt-1 block px-2 pb-1 pt-2 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2"
        @click="setActiveSection('contactus')"
      >Contact Us</a>
      <a
        href="tel:+2349030836199"
        class="badge mt-1 block px-2 py-1 text-primary font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2"
      >
        <img src="~/assets/img/phone.svg" class="inline" alt="Phone" /> +2349030836199
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      isOpen: false,
      atTopOfPage: true,
      activeSection: "home"
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 500) {
        if (this.atTopOfPage) this.atTopOfPage = false;
      } else {
        if (!this.atTopOfPage) this.atTopOfPage = true;
      }
    },
    setActiveSection(page) {
      this.isOpen = false;
      this.activeSection = page;
    }
  }
};
</script>
<style>
.active {
  @apply font-bold py-2 px-4 rounded bg-yellow-500 text-white;
  &:hover {
    @apply bg-yellow-600;
  }
}
header {
  background: #2c2c2c;
}
header.scrolled {
  z-index: 10;
  background: #000;
}
.badge {
  @apply rounded-full p-2;
  border: 1px solid #f2c94c;
  /* &:hover {
    @apply bg-yellow-500;
  } */
}
</style>
