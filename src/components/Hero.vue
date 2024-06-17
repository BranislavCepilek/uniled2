<template>
    <section id="sekcia1" class="text-gray-600 body-font lg:mt-[-125px] md:mt-[-125px] mt-[-188px]">
        <div class="container mx-auto flex px-4 lg:py-42 md:py-42 py-52 items-center justify-center flex-col">
            <div class="text-center lg:w-2/3 w-full">
                <h1 class="font-montserrat-black md:text-[82px] lg:text-[82px] text-[52px] mb-4 text-secondary">UNILED
                    s.r.o
                </h1>
                <p
                    class="font-montserrat-regular md:text-[24px] lg:text-[24px] text-[24px] mt-[40px] text-paragraphs tracking-widest">
                    Preskúmajte našu širokú ponuku profesionálneho vianočného osvetlenia a nájdite perfektné svetlá pre
                    váš domov alebo podnik. Kliknite na tlačidlo nižšie a získajte prístup k nášmu najnovšiemu katalógu.
            </p>
                <div class="flex justify-center">
                    <a href="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf" class="inline-flex bg-secondary border-0 py-3 px-14 focus:outline-none rounded-2xl text-lg text-paragraphs mt-[80px]" download="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf">Stiahnuť</a>        
                </div>
                <div class="flex justify-center">
                    <!-- <a href="" download="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf"><button
                            class="inline-flex bg-secondary border-0 py-3 px-14 focus:outline-none rounded-2xl text-lg text-paragraphs mt-[80px]">Stiahnuť
                            katalóg</button></a>    
                    <object src="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf" type="application/pdf" width="400" height="500"></object>  -->
                    <iframe src="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf" style="width: 400px; height: 500px;" frameborder="0" allowfullscreen></iframe>    
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: "Hero"
}
</script>

<style scoped>
#sekcia1 {
    background-image: url("./img/hero.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>