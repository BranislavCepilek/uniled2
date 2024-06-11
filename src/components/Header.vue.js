import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
export default (await import('vue')).defineComponent({
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
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ((['nav-bar', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen || __VLS_ctx.$route.path === '/info' ? 'bg-secondary' : 'bg-transparent', 'sticky top-0 z-50 transition-colors duration-300'])) }, });
    __VLS_styleScopedClasses = (['nav-bar', isScrolled || isMenuOpen || $route.path === '/info' ? 'bg-secondary' : 'bg-transparent', 'sticky top-0 z-50 transition-colors duration-300']);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("flex items-center") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("flex items-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), ...{ class: ("flex items-center") }, }));
    if (__VLS_ctx.isScrolled || __VLS_ctx.$route.path === '/info' || __VLS_ctx.isMenuOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("./img/logo_tmavy.png"), ...{ class: ("h-10 mr-3") }, alt: ("Uniled logo"), });
        // @ts-ignore
        [isScrolled, isScrolled, isMenuOpen, isMenuOpen, $route, $route,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("./img/logo_svetly.png"), ...{ class: ("h-10 mr-3") }, alt: ("Uniled logo"), });
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleMenu) }, "data-collapse-toggle": ("navbar-default"), type: ("button"), ...{ class: ((['inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen || __VLS_ctx.$route.path === '/info' ? 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' : 'text-white'])) }, "aria-controls": ("navbar-default"), "aria-expanded": ("false"), });
    __VLS_styleScopedClasses = (['inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2', isScrolled || isMenuOpen || $route.path === '/info' ? 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' : 'text-white']);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("sr-only") }, });
    // @ts-ignore
    [isScrolled, isMenuOpen, $route, toggleMenu,];
    if (__VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen || __VLS_ctx.$route.path === '/info') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("./img/menu_tmavy.png"), "aria-hidden": ("true"), alt: ("Menu icon"), });
        // @ts-ignore
        [isScrolled, isMenuOpen, $route,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("./img/menu_svetly.png"), "aria-hidden": ("true"), alt: ("Menu icon"), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden w-full md:block md:w-auto") }, id: ("navbar-default"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center") }, });
    if (__VLS_ctx.$route.path === '/') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("flex justify-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.closeMenu) }, href: ("#about"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, });
        __VLS_styleScopedClasses = (['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']);
        // @ts-ignore
        [isScrolled, isMenuOpen, $route, closeMenu,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("flex justify-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.closeMenu) }, href: ("#services"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, });
        __VLS_styleScopedClasses = (['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']);
        // @ts-ignore
        [isScrolled, isMenuOpen, closeMenu,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("flex justify-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.closeMenu) }, href: ("#gallery"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, });
        __VLS_styleScopedClasses = (['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']);
        // @ts-ignore
        [isScrolled, isMenuOpen, closeMenu,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("flex justify-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.closeMenu) }, href: ("#contact"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, });
        __VLS_styleScopedClasses = (['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']);
        // @ts-ignore
        [isScrolled, isMenuOpen, closeMenu,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("flex justify-center") }, });
        // @ts-ignore
        const __VLS_6 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, to: ("/info"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, to: ("/info"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ ...{ 'onClick': {} }, to: ("/info"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, }));
        __VLS_styleScopedClasses = (['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || isMenuOpen ? 'text-primary' : 'text-secondary']);
        let __VLS_12;
        const __VLS_13 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        // @ts-ignore
        [isScrolled, isMenuOpen, closeMenu,];
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        let __VLS_9;
        let __VLS_10;
    }
    if (__VLS_ctx.$route.path === '/info') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("flex justify-center") }, });
        // @ts-ignore
        const __VLS_14 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ 'onClick': {} }, to: ("/"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.$route.path === '/info' || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, }));
        const __VLS_16 = __VLS_15({ ...{ 'onClick': {} }, to: ("/"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.$route.path === '/info' || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ ...{ 'onClick': {} }, to: ("/"), ...{ class: ((['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', __VLS_ctx.isScrolled || __VLS_ctx.$route.path === '/info' || __VLS_ctx.isMenuOpen ? 'text-primary' : 'text-secondary'])) }, }));
        __VLS_styleScopedClasses = (['block py-2 pl-3 pr-4 font-montserrat-semibold text-[16px] rounded md:border-0 md:p-0', isScrolled || $route.path === '/info' || isMenuOpen ? 'text-primary' : 'text-secondary']);
        let __VLS_20;
        const __VLS_21 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        // @ts-ignore
        [isScrolled, isMenuOpen, $route, $route, closeMenu,];
        (__VLS_19.slots).default;
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
        let __VLS_17;
        let __VLS_18;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['max-w-screen-xl'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['mr-3'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['mr-3'];
        __VLS_styleScopedClasses['sr-only'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['md:block'];
        __VLS_styleScopedClasses['md:w-auto'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['md:p-0'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['md:flex-row'];
        __VLS_styleScopedClasses['md:space-x-8'];
        __VLS_styleScopedClasses['md:mt-0'];
        __VLS_styleScopedClasses['md:border-0'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "Header";
    let __VLS_internalComponent;
}
