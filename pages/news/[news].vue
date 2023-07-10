<template>
    <div>
        <div>
            <NewsDetails :article="filteredArticles[0]" />
            <!-- <h1>{{ filteredArticles[0].title }}</h1> -->
        
        </div>
    </div>
</template>

<script setup>

const { news } = useRoute().params
console.log(news);


const {data: articles} = await useFetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f3798e116eb342b2bae58e7f0cbd9c11`)

// const {data: articles} = await useFetch(`https://newsapi.org/v2/everything?q=${news}&apiKey=73f1f46d561f4d7182f74512dfc8b56c`)
// console.log(articles.value);

const filteredArticles = ref([]);

// Filter the articles array based on the news parameter
if (articles.value && articles.value.articles) {
  filteredArticles.value = articles.value.articles.filter((article) =>
    article.title.toLowerCase().includes(news.toLowerCase())
  );
}

</script>

<style lang="scss" scoped>

</style>