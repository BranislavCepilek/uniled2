<template>
    <div class="container max-w-full md:flex-row lg:flex-row flex flex-col justify-center gap-10 py-4 bg-secondary">
        <div class="marquee">
            <div class="marquee-inner">
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
                <h2 class="text-content font-montserrat-regular text-paragraphs">Profesionálne vianočné osvetlenie</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Hero2"
}
</script>

<style scoped>
.container {
    overflow: hidden;
}

.marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    width: 100%;
    position: relative;
}

.marquee-inner {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
}

@keyframes marquee {
    100% {
            transform: translateX(0%);
        }

    0% {
        transform: translateX(-50%);
    }
}

.text-content {
    display: inline-block;
    padding-right: 2em;
    /* Adjust space between repeats */
    text-align: center;
    font-size: 16px;
    /* Adjust for different screen sizes */
}

@media (min-width: 768px) {
    .text-content {
        font-size: 28px;
    }
}

@media (min-width: 1024px) {
    .text-content {
        font-size: 28px;
    }
}
</style>