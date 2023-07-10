<template>
    <div>
        <div class="flex flex-col gap-4 justify-between">
            <NuxtLink :to="`/news/${article.title}`">
                <h1>{{ article.title }}</h1>
                <img :src="article.urlToImage" :alt="article.title">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { article } = defineProps(['article']);
// console.log(article)

</script>

<style scoped>

</style>