<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, repudiandae consectetur? Fugiat dignissimos modi aut, eos excepturi ullam asperiores et deserunt impedit nihil sint quis tenetur, totam temporibus. Quas, fugit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam delectus numquam optio culpa animi ea dolore! Maiores harum voluptates et rem temporibus. Ratione porro a similique eaque aliquam dolorum!</p>


        <!-- <div v-for="(article,index) in news.articles" :key="article.id">
            <div v-if="index < 2">
                <img :src="article.urlToImage" alt="">
                <p>{{index}}</p>
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
            </div>
        </div> -->

    </div>
</template>

<script setup>

console.log('about page');

// const { data: news } = await useFetch('/api/news/fetchNews')

// limitedArticles = data.articles.slice(0, 3)

// console.log(news.articles); undefined here but displays in the template

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}

</style>