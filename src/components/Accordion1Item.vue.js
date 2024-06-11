export default (await import('vue')).defineComponent({
    name: "Accordion1Item",
    data() {
        return {
            activeAccordion: null
        };
    },
    methods: {
        toggleAccordion(id) {
            this.activeAccordion = this.activeAccordion === id ? null : id;
        }
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("accordion-collapse"), "data-accordion": ("collapse"), ...{ class: ("flex flex-col gap-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("accordion-collapse-heading-1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(1);
                // @ts-ignore
                [toggleAccordion,];
            } }, type: ("button"), ...{ class: ("flex items-center justify-between w-full p-5 font-medium text-left text-paragraphs  bg-secondary rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-white font-montserrat-semibold text-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ "data-accordion-icon": (true), ...{ class: ("w-3 h-3 rotate-180 shrink-0") }, "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 10 6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M9 5 5 1 1 5"), });
    if (__VLS_ctx.activeAccordion === 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 rounded-xl bg-secondary flex flex-col gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        // @ts-ignore
        [activeAccordion,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("accordion-collapse-heading-2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(2);
                // @ts-ignore
                [toggleAccordion,];
            } }, type: ("button"), ...{ class: ("flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-white font-montserrat-semibold text-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ "data-accordion-icon": (true), ...{ class: ("w-3 h-3 rotate-180 shrink-0") }, "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 10 6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M9 5 5 1 1 5"), });
    if (__VLS_ctx.activeAccordion === 2) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 rounded-xl bg-secondary flex flex-col gap-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("tel:0948655006"), ...{ class: ("font-montserrat-extrabold") }, });
        // @ts-ignore
        [activeAccordion,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:obchod@uniled.sk"), ...{ class: ("font-montserrat-extrabold") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("accordion-collapse-heading-3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(3);
                // @ts-ignore
                [toggleAccordion,];
            } }, type: ("button"), ...{ class: ("flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-white font-montserrat-semibold text-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ "data-accordion-icon": (true), ...{ class: ("w-3 h-3 rotate-180 shrink-0") }, "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 10 6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M9 5 5 1 1 5"), });
    if (__VLS_ctx.activeAccordion === 3) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 rounded-xl bg-secondary") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        // @ts-ignore
        [activeAccordion,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("accordion-collapse-heading-4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(4);
                // @ts-ignore
                [toggleAccordion,];
            } }, type: ("button"), ...{ class: ("flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-white font-montserrat-semibold text-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ "data-accordion-icon": (true), ...{ class: ("w-3 h-3 rotate-180 shrink-0") }, "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 10 6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M9 5 5 1 1 5"), });
    if (__VLS_ctx.activeAccordion === 4) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 rounded-xl bg-secondary") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        // @ts-ignore
        [activeAccordion,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("accordion-collapse-heading-5"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(5);
                // @ts-ignore
                [toggleAccordion,];
            } }, type: ("button"), ...{ class: ("flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-white font-montserrat-semibold text-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ "data-accordion-icon": (true), ...{ class: ("w-3 h-3 rotate-180 shrink-0") }, "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 10 6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M9 5 5 1 1 5"), });
    if (__VLS_ctx.activeAccordion === 5) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 rounded-xl bg-secondary") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        // @ts-ignore
        [activeAccordion,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("accordion-collapse-heading-6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(6);
                // @ts-ignore
                [toggleAccordion,];
            } }, type: ("button"), ...{ class: ("flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-white font-montserrat-semibold text-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ "data-accordion-icon": (true), ...{ class: ("w-3 h-3 rotate-180 shrink-0") }, "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 10 6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M9 5 5 1 1 5"), });
    if (__VLS_ctx.activeAccordion === 6) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 rounded-xl bg-secondary") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        // @ts-ignore
        [activeAccordion,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ id: ("accordion-collapse-heading-7"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleAccordion(7);
                // @ts-ignore
                [toggleAccordion,];
            } }, type: ("button"), ...{ class: ("flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-white font-montserrat-semibold text-[24px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ "data-accordion-icon": (true), ...{ class: ("w-3 h-3 rotate-180 shrink-0") }, "aria-hidden": ("true"), xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 10 6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ stroke: ("currentColor"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M9 5 5 1 1 5"), });
    if (__VLS_ctx.activeAccordion === 7) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-4 rounded-xl bg-secondary") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        // @ts-ignore
        [activeAccordion,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-2 text-white font-montserrat-regular text-[16px]") }, });
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-paragraphs'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-semibold'];
        __VLS_styleScopedClasses['text-[24px]'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rotate-180'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-semibold'];
        __VLS_styleScopedClasses['text-[24px]'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rotate-180'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['font-montserrat-extrabold'];
        __VLS_styleScopedClasses['font-montserrat-extrabold'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-semibold'];
        __VLS_styleScopedClasses['text-[24px]'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rotate-180'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-semibold'];
        __VLS_styleScopedClasses['text-[24px]'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rotate-180'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-semibold'];
        __VLS_styleScopedClasses['text-[24px]'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rotate-180'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-semibold'];
        __VLS_styleScopedClasses['text-[24px]'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rotate-180'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-semibold'];
        __VLS_styleScopedClasses['text-[24px]'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['rotate-180'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded-xl'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['font-montserrat-regular'];
        __VLS_styleScopedClasses['text-[16px]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = "Accordion1Item";
    let __VLS_internalComponent;
}
