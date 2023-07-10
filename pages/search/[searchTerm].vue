<template>
    <div>
        <div>
            <!-- <NewsCard :article="articles.articles[0]" /> -->

            <!-- <div v-for="article in articles" :key="article.title">
                <h1>{{ article.title }}</h1>

            </div> -->
        
        </div>
    </div>
</template>

<script setup>

// const { news } = defineProps(['news'])
const { searchTerm } = useRoute().params
console.log(searchTerm);


const {data: articles} = await useFetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=73f1f46d561f4d7182f74512dfc8b56c`)

console.log(articles.value);

// :articles="articles.value.articles"

</script>

<style lang="scss" scoped>

</style>