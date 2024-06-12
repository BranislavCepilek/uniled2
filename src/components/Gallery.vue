<template>
  <section class="text-gray-600 body-font bg-primary" id="gallery">
    <div class="max-w-screen-xl container py-24 mx-auto flex flex-wrap px-4">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font  text-secondary">Galéria</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-paragraphs">Vybrané ukážky z nášho katalógu vianočného
          osvetlenia.</p>
      </div>
      <div class="flex flex-wrap flex-col md:flex-row lg:flex-row md:-m-2 -m-1">
        <div class="flex flex-wrap w-full md:w-1/2 lg:w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full object-cover h-full object-center block rounded-2xl"
              src="../assets/hviezdy.jpeg">
          </div>
          <!-- <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block rounded-2xl"
              src="https://dummyimage.com/501x301">
          </div> -->
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full h-full object-cover object-center block rounded-2xl"
              src="../assets/anjeli-a-hviezdy.jpeg">
          </div>
        </div>
        <div class="flex flex-wrap w-full md:w-1/2 lg:w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full h-full object-cover object-center block rounded-2xl"
              src="../assets/hviezdy2.jpeg">
          </div>
          <!-- <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block rounded-2xl"
              src="https://dummyimage.com/502x302">
          </div> -->
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full object-cover h-full object-center block rounded-2xl"
              src="../assets/vlocky.jpeg">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
    export default{
        name: "Gallery"
    }
</script>