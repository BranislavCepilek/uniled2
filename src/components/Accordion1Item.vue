<template>

    <div id="accordion-collapse" data-accordion="collapse" class="flex flex-col gap-8">
        <h2 id="accordion-collapse-heading-1">
            <button @click="toggleAccordion(1)" type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-paragraphs  bg-secondary rounded-xl">
                <span class="text-white font-montserrat-semibold text-[24px]">1. Úvodné ustanovenia</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div v-if="activeAccordion === 1">
            <div class="p-4 rounded-xl bg-secondary flex flex-col gap-4">
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">1.1 Predávajúcim je UNILED s. r.
                    o., so sídlom Piaristická 72/31, IČO: 56 154 143, zapísaná v Obchodnom registri Okresného súdu
                    Žilina.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">1.2 Tieto obchodné podmienky
                    (ďalej len „podmienky“) upravujú vzťahy medzi firmou UNILED s.r.o (ďalej len „predávajúci“) a jej
                    zákazníkmi (ďalej len „kupujúci“) v súvislosti s predajom vianočného osvetlenia a súvisiacich
                    produktov.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">1.3 Predávajúci nemá internetový
                    obchod. Predaj prebieha na základe telefonického kontaktu s kupujúcim, ktorému je následne zaslaná
                    cenová ponuka e-mailom alebo iným dohodnutým spôsobom.</p>
            </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
            <button @click="toggleAccordion(2)" type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl">
                <span class="text-white font-montserrat-semibold text-[24px]">2. Objednávka a uzavretie zmluvy</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div v-if="activeAccordion === 2">
            <div class="p-4 rounded-xl bg-secondary flex flex-col gap-4">
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">2.1 Kupujúci môže objednať tovar
                    telefonicky na čísle <a href="tel:0948655006" class="font-montserrat-extrabold">+421 948 655 006</a> alebo e-mailom na adrese <a
                        href="mailto:obchod@uniled.sk" class="font-montserrat-extrabold">obchod@uniled.sk</a></p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">2.2 Po obdržaní objednávky
                    predávajúci vypracuje cenovú ponuku, ktorá bude zaslaná kupujúcemu e-mailom.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">2.3 Zmluva medzi predávajúcim a
                    kupujúcim je uzavretá momentom potvrdenia cenovej ponuky kupujúcim prostredníctvom e-mailu alebo
                    iným dohodnutým spôsobom.</p>
            </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
            <button @click="toggleAccordion(3)" type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl">
                <span class="text-white font-montserrat-semibold text-[24px]">3. Cena a platobné podmienky</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div v-if="activeAccordion === 3">
            <div class="p-4 rounded-xl bg-secondary">
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">3.1 Ceny uvedené v cenovej
                    ponuke sú konečné a zahŕňajú všetky dane a poplatky, ak nie je uvedené inak.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">3.2 Platba za tovar sa
                    uskutočňuje na základe vystavenej faktúry, ktorú kupujúci obdrží spolu s cenovou ponukou alebo po
                    potvrdení objednávky.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">3.3 Splatnosť faktúry je 7 dní
                    od jej vystavenia, ak nie je dohodnuté inak.</p>
            </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
            <button @click="toggleAccordion(4)" type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl">
                <span class="text-white font-montserrat-semibold text-[24px]">4. Dodacie podmienky</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div v-if="activeAccordion === 4">
            <div class="p-4 rounded-xl bg-secondary">
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">4.1 Dodacia lehota je uvedená v
                    cenovej ponuke. Ak nie je uvedené inak, štandardná dodacia lehota je 14 dní od potvrdenia
                    objednávky.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">4.2 Predávajúci zabezpečí
                    doručenie tovaru prostredníctvom kuriérskej služby na adresu uvedenú kupujúcim.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">4.3 Náklady na dopravu niesu
                    zahrnuté v cenovej ponuke, ak nie je uvedené inak.</p>
            </div>
        </div>
        <h2 id="accordion-collapse-heading-5">
            <button @click="toggleAccordion(5)" type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl">
                <span class="text-white font-montserrat-semibold text-[24px]">5. Odstúpenie od zmluvy a
                    reklamácie</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div v-if="activeAccordion === 5">
            <div class="p-4 rounded-xl bg-secondary">
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">5.1 Kupujúci má právo odstúpiť
                    od zmluvy do 7 dní od prevzatia tovaru bez udania dôvodu. Tovar musí byť vrátený nepoškodený a v
                    pôvodnom balení.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">5.2 V prípade vrátenia tovaru
                    kupujúci znáša náklady na dopravu.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">5.3 Reklamácie tovaru je možné
                    uplatniť telefonicky alebo e-mailom. Predávajúci je povinný vybaviť reklamáciu do 30 dní od jej
                    prijatia.</p>
            </div>
        </div>
        <h2 id="accordion-collapse-heading-6">
            <button @click="toggleAccordion(6)" type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl">
                <span class="text-white font-montserrat-semibold text-[24px]">6. Ochrana osobných údajov</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div v-if="activeAccordion === 6">
            <div class="p-4 rounded-xl bg-secondary">
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">6.1 Predávajúci spracováva
                    osobné údaje kupujúcich v súlade s platnými právnymi predpismi o ochrane osobných údajov.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">6.2 Osobné údaje budú použité
                    výlučne na účely vybavenia objednávky a komunikácie s kupujúcim.</p>
            </div>
        </div>
        <h2 id="accordion-collapse-heading-7">
            <button @click="toggleAccordion(7)" type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-secondary rounded-xl">
                <span class="text-white font-montserrat-semibold text-[24px]">7. Záverečné ustanovenia</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5 5 1 1 5" />
                </svg>
            </button>
        </h2>
        <div v-if="activeAccordion === 7">
            <div class="p-4 rounded-xl bg-secondary">
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">7.1 Tieto podmienky nadobúdajú
                    platnosť a účinnosť dňom ich zverejnenia.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">7.2 Predávajúci si vyhradzuje
                    právo na zmenu týchto podmienok. Zmenené podmienky budú zverejnené a nadobúdajú platnosť dňom ich
                    zverejnenia.</p>
                <p class="mb-2 text-white font-montserrat-regular text-[16px]">7.3 Právne vzťahy medzi
                    predávajúcim a kupujúcim sa riadia právom Slovenskej republiky.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Accordion1Item",
    data() {
        return {
            activeAccordion: null as number | null 
        };
    },
    methods: {
        toggleAccordion(id: number) { 
            this.activeAccordion = this.activeAccordion === id ? null : id;
        }
    }
}
</script>