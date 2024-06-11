<template>
  <nav
    :class="['nav-bar', isScrolled || isMenuOpen || $route.path === '/info' ? 'bg-secondary' : 'bg-transparent', 'sticky top-0 z-50 transition-colors duration-300']">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center">
        <img v-if="isScrolled || $route.path === '/info' || isMenuOpen" src="./img/logo_tmavy.png" class="h-10 mr-3"
          alt="Uniled logo">
        <img v-else src="./img/logo_svetly.png" class="h-10 mr-3" alt="Uniled logo">
      </RouterLink>
      <button data-collapse-toggle="navbar-default" type="button"
        :class="['inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2', isScrolled || isMenuOpen || $route.path === '/info' ? 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' : 'text-white']"
        aria-controls="navbar-default" aria-expanded="false" @click="toggleMenu">
        <span class="sr-only">Open main menu</span>
        <img v-if="isScrolled || isMenuOpen || $route.path === '/info'" src="./img/menu_tmavy.png" aria-hidden="true"
          alt="Menu icon">
        <img v-else src="./img/menu_svetly.png" aria-hidden="true" alt="Menu icon">
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center">
          <template v-if="$route.path === '/'">
            <li class="flex justify-center">
              <a href="#about" @click="closeMenu"
                :class="['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']">O
                nás</a>
            </li>
            <li class="flex justify-center">
              <a href="#services" @click="closeMenu"
                :class="['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']">Služby</a>
            </li>
            <li class="flex justify-center">
              <a href="#gallery" @click="closeMenu"
                :class="['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']">Galéria</a>
            </li>
            <li class="flex justify-center">
              <a href="#contact" @click="closeMenu"
                :class="['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']">Kontakt</a>
            </li>
            <li class="flex justify-center">
              <RouterLink to="/info" @click="closeMenu"
                :class="['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']">
                Informácie</RouterLink>
            </li>
          </template>
          <template v-if="$route.path === '/info'">
            <li class="flex justify-center">
              <RouterLink to="/" @click="closeMenu"
                :class="['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || $route.path === '/info' || isMenuOpen ? 'text-primary' : 'text-secondary']">
                Domov</RouterLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: "Header",
  setup() {
    const isScrolled = ref(false);
    const isMenuOpen = ref(false);
    const route = useRoute();

    const onScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener('scroll', onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
    });

    const toggleMenu = () => {
      const menu = document.getElementById("navbar-default");
      if (menu) {
        menu.classList.toggle("hidden");
        isMenuOpen.value = !isMenuOpen.value;
      }
    };

    const closeMenu = () => {
      const menu = document.getElementById("navbar-default");
      if (menu) {
        menu.classList.add("hidden");
        isMenuOpen.value = false;
      }
    };

    return {
      isScrolled,
      isMenuOpen,
      route,
      toggleMenu,
      closeMenu
    };
  }
};
</script>

<style scoped>
.bg-transparent {
  background-color: transparent;
}

.bg-secondary {
  background-color: #BE8C33;
}
</style>