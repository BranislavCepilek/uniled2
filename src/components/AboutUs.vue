<template>
  <section class="bg-primary text-gray-600 body-font" id="about">
    <div class="max-w-screen-xl container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow w-full md:w-1/2 lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="font-merriweather text-[42px] md:text-[56px] lg:text-[56px] text-secondary mb-4 w-full">O nás</h1>
        <p
          class="font-montserrat text-[16px] md:text-[16px] lg:text-[18px] text-paragraphs mb-8 leading-relaxed w-full">
          Vstúpte do sveta
          Vianoc s našou
          firmou, ktorá je vášnivým sprievodcom
          svetla a radosti.
          Sme spoločnosťou so špecializáciou výhradne na vianočné osvetlenie a
          skúsenosti s predajom vianočného osvetlenia zbierame už tretím rokom.
          Naša vášeň a skúsenosti nás radia medzi špičkových poskytovateľov
          profesionálneho vianočného osvetlenia.</p>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 flex justify-center md:justify-end lg:justify-end">
        <img
          class="object-cover h-[250px] w-full md:h-[300px] md:w-[380px] lg:h-[300px] lg:w-[380px] object-center rounded-2xl shadow-2xl"
          alt="Vianočné osvetlenie" src="./img/about.png">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
    export default{
        name: "AboutUs"
    }
</script>