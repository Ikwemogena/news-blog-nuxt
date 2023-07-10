<template>
    <div>
        <div>
            <h1 class="text-3xl flex justify-center pb-2">{{article.title}}</h1>
            <img :src="article?.urlToImage ? article.urlToImage : 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'" alt="" class="w-full h[20] flex justify-center items center">
            <p>{{ article.description }}</p>
        </div>
        <div>
            <h1 class="text-3xl flex justify-center pb-2">More News</h1>
            <div class="grid grid-cols-3 gap-4">
                <!-- <h1>{{ news.articles[0].title }}</h1> -->
                <NewsCard :article="news.articles[0]" />
                <NewsCard :article="news.articles[1]" />
                <NewsCard :article="news.articles[2]" />
            </div>
        </div>
    </div>
</template>

<script setup>

const { article } = defineProps(['article']);


const { data: news } = await useFetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=f3798e116eb342b2bae58e7f0cbd9c11`
);

</script>

<style lang="scss" scoped>

</style>

