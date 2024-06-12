<template>
  <footer class="text-gray-600 bg-secondary">
    <div
      class="max-w-screen-xl container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex md:justify-start justify-center md:pt-4 lg:pt-4">
          <img class="md:h-[50px] lg:h-[50px] h-[35px]" src="./img/logo_tmavy.png" alt="">
        </a>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="flex flex-col md:items-start lg:items-start items-center lg:w-1/3 md:w-1/2 w-full px-4 p-4">
          <h2
            class="font-montserrat-semibold text-[18px] md:text-[24px] lg:text-[24px] text-headings tracking-widest mb-3 text-primary">
            Firemné údaje:</h2>
          <p class="font-montserrat text-[14px] md:text-[18px] lg:text-[18px] text-[#E8D7A0]">UNILED s.r.o.
            <br> Piaristická 72/31 <br>949 01 Nitra
          </p>
        </div>
        <div class="flex flex-col md:items-start lg:items-start items-center lg:w-1/3 md:w-1/2 w-full px-4 p-4">
          <h2
            class="font-montserrat-semibold text-[18px] md:text-[24px] lg:text-[24px] text-headings tracking-widest mb-3 text-primary">
            IČO:</h2>
          <p class="font-montserrat text-[14px] md:text-[18px] lg:text-[18px] text-[#E8D7A0]">56 154 143</p>
        </div>
        <div class="flex flex-col md:items-start lg:items-start items-center lg:w-1/3 md:w-1/2 w-full px-4 p-4">
          <h2
            class="font-montserrat-semibold text-[18px] md:text-[24px] lg:text-[24px] text-headings tracking-widest mb-3 text-primary">
            Mail:</h2>
          <p class="font-montserrat text-[14px] md:text-[18px] lg:text-[18px] text-[#E8D7A0]"><a
              href="mailto:obchod@uniled.sk">obchod@uniled.sk</a></p>
        </div>
      </div>

    </div>
    <div class="bg-paragraphs">
      <div class="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
        <p class="font-montserrat-semibold text-[12px] md:text-[16px] lg:text-[16px] text-primary text-center">Copyright
          ©
          UNILED 2024</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer"
}
</script>
