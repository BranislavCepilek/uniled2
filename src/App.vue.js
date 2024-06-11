import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [Header, Header,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({ ...{ class: ("sticky top-0 z-50") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("sticky top-0 z-50") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ class: ("sticky top-0 z-50") }, }));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(Header, __VLS_1);
    // @ts-ignore
    const __VLS_5 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({}));
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    // @ts-ignore
    [Footer,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({}));
    const __VLS_15 = __VLS_pickFunctionalComponentCtx(Footer, __VLS_12);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['sticky'];
        __VLS_styleScopedClasses['top-0'];
        __VLS_styleScopedClasses['z-50'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Header: Header,
                Footer: Footer,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
