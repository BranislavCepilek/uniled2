<template>
  <section class="text-gray-600 body-font bg-primary" id="services">
    <div class="max-w-screen-xl container mx-auto py-20">
      <div class="flex flex-col text-center w-full mb-16">
        <h1 class="sm:text-3xl text-2xl font-medium title-font  text-secondary">Naše služby pokrývajú nasledovné
          oblasti</h1>
      </div>
      <div class="flex flex-wrap text-center">
        <div class="p-4 lg:w-1/6 md:w-1/3 w-1/2">
          <div class="border-2 border-paragraphs px-4 py-6 rounded-lg">
            <img src="./img/design.png" alt="" class="w-[60px] h-[60px] inline-block">
            <p class="leading-relaxed mt-4 text-paragraphs">Dizajn <br>a koncept</p>
          </div>
        </div>
        <div class="p-4 lg:w-1/6 md:w-1/3 w-1/2">
          <div class="border-2 border-paragraphs px-4 py-6 rounded-lg">
            <img src="./img/project_management.png" alt="" class="w-[60px] h-[60px] inline-block">
            <p class="leading-relaxed mt-4 text-paragraphs">Projektové<br> manažovanie</p>
          </div>
        </div>
        <div class="p-4 lg:w-1/6 md:w-1/3 w-1/2">
          <div class="border-2 border-paragraphs px-4 py-6 rounded-lg">
            <img src="./img/manufactury.png" alt="" class="w-[60px] h-[60px] inline-block">
            <p class="leading-relaxed mt-4 text-paragraphs">Efektívna <br> výroba</p>
          </div>
        </div>
        <div class="p-4 lg:w-1/6 md:w-1/3 w-1/2">
          <div class="border-2 border-paragraphs px-4 py-6 rounded-lg">
            <img src="./img/instalation.png" alt="" class="w-[60px] h-[60px] inline-block">
            <p class="leading-relaxed mt-4 text-paragraphs">Profesionálna<br> inštalácia</p>
          </div>
        </div>
        <div class="p-4 lg:w-1/6 md:w-1/3 w-1/2">
          <div class="border-2 border-paragraphs px-4 py-6 rounded-lg">
            <img src="./img/warehouse.png" alt="" class="w-[60px] h-[60px] inline-block">
            <p class="leading-relaxed mt-4 text-paragraphs">Možnosť<br> skladovania</p>
          </div>
        </div>
        <div class="p-4 lg:w-1/6 md:w-1/3 w-1/2">
          <div class="border-2 border-paragraphs px-4 py-6 rounded-lg">
            <img src="./img/maintenance.png" alt="" class="w-[60px] h-[60px] inline-block">
            <p class="leading-relaxed mt-4 text-paragraphs">Údržba <br> a servis</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
    export default{
        name: "Services"
    }
</script>