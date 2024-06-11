<template>
    <section class="text-gray-600 body-font relative bg-primary" id="contact">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font  text-secondary">Kontaktujte nás</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-paragraphs">Ak máte akékoľvek otázky,
                    neváhajte nás kontaktovať. Sme tu pre vás.</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-secondary">Meno</label>
                            <input type="text" id="name" name="name"
                                class="w-full bg-paragraphs rounded border border-secondary focus:border-paragraphs focus:bg-secondary focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        </div>
                    </div>
                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-secondary">Email</label>
                            <input type="email" id="email" name="email"
                                class="w-full bg-paragraphs rounded border border-secondary focus:border-paragraphs focus:bg-secondary focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-secondary">Správa</label>
                            <textarea id="message" name="message"
                                class="w-full bg-paragraphs rounded border border-secondary focus:border-paragraphs focus:bg-secondary focus:ring-2 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-8 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <button
                            class="flex mx-auto text-paragraphs bg-secondary border-0 py-3 px-14 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">Odoslať</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        name: "Contact"
    }
</script>

<style scoped>
</style>