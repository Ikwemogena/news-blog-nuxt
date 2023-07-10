<template>
    <div>
        <div>
            <NewsDetails :article="articles.articles[0]" />
        
        </div>
    </div>
</template>

<script setup>

// const { news } = defineProps(['news'])
const { news } = useRoute().params
console.log(news);


const {data: articles} = await useFetch(`https://newsapi.org/v2/everything?q=${news}&apiKey=73f1f46d561f4d7182f74512dfc8b56c`)
console.log(articles.value);

// console.log(articles.value.articles);

// :articles="articles.value.articles"

</script>

<style lang="scss" scoped>

</style>