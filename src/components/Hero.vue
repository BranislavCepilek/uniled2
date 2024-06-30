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
                <!-- <div class="flex justify-center">
                    <a href="UNILED_katalog_2024.pdf" 
                    class="inline-flex bg-secondary border-0 py-3 px-14 focus:outline-none rounded-2xl text-lg text-paragraphs mt-[80px]" target="_blank"
                    download>Stiahnuť from public</a>        
                </div>
                <div class="flex justify-center">
                    <a href="../assets/UNILED_katalog_2024.pdf" 
                    class="inline-flex bg-secondary border-0 py-3 px-14 focus:outline-none rounded-2xl text-lg text-paragraphs mt-[80px]" target="_blank"
                    download>Stiahnuť from assets</a>        
                </div>
                <div class="flex justify-center">
                    <object src="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf" type="application/pdf" width="400" height="500" download>This is object to be downloaded</object>
                </div>
                <div class="flex justify-center">
                    <a href="" download="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf"><button
                            class="inline-flex bg-secondary border-0 py-3 px-14 focus:outline-none rounded-2xl text-lg text-paragraphs mt-[80px]">Stiahnuť
                            katalóg</button></a>    
                    <object src="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf" type="application/pdf" width="400" height="500"></object> 
                    <iframe src="https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf" style="width: 400px; height: 500px;" frameborder="0" allowfullscreen>This is iframe</iframe>    
                </div> -->
                <!-- <div class="flex justify-center">
                    <button v-on:click="onDownloadClick()" 
                    class="inline-flex bg-secondary border-0 py-3 px-14 focus:outline-none rounded-2xl text-lg text-paragraphs mt-[80px]">DOWNLOAD</button>
                </div>
                <div>
                    <a :href="pdfUrl" download="katalog-gpt.pdf" target="_blank" style="color: greenyellow"><button>Stiahni katalog</button></a>
                </div>
                <div style="color: aqua;">
                    <button @click="downloadPDF">Stiahnut PDF</button>
                </div> -->
                <div class="flex justify-center">
                    <iframe style="border: 1px solid #777;" src="https://indd.adobe.com/embed/c8c884ea-f779-45c4-967e-a881f39f1e02?startpage=1&allowFullscreen=true" width="525px" height="371px" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import axios from 'axios';
export default {
    name: "Hero",
    data() {
        return {
            // pdfUrl: 'https://s3.eu-central-1.amazonaws.com/uniled.sk/katalog/UNILED_katalog_2024.pdf',
            pdfUrl: 'https://main.d3pu8oljuui1n.amplifyapp.com/files/UNILED_katalog_2024.pdf'
        }
    },
    methods: {
        onDownloadClick(){
            axios({
                url: this.pdfUrl,
                method: 'GET',
                responseType: 'blob', 
                headers: {
                    'Content-Type': 'application/pdf',
                    'Accept': 'application/pdf',
                    "Access-Control-Allow-Origin": "true",
                    "Access-Control-Allow-Headers": "true",
                    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE",
                    "Access-Control-Max-Age": "86400"
                }
            }).then((response) => {
                console.log("Success", response)
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');
                
                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'katalog.pdf')
                document.body.appendChild(fileLink);
                
                console.log(fileURL);
                console.log(fileLink);
                fileLink.click();
                document.body.removeChild(fileLink);
            });
        },
        downloadPDF(){
            const link = document.createElement('a');
            link.href = this.pdfUrl;
            link.setAttribute('download', 'katalogGPT.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>

<style scoped>
#sekcia1 {
    background-image: url("./img/hero.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>