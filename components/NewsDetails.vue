<template>
    <div>
        <!-- <h1>{{ news.title }}</h1> -->

        <!-- <h1>{{ id }}</h1> -->

        <!-- <div v-for="news in articles.articles" :key="news.title"> -->

            <img :src="article?.urlToImage ? article.urlToImage : 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'" alt="" class="w-full h-1/2 flex justify-center items center">
            <h1 class="text-3xl">{{article.title}}</h1>
            <p>{{ article.description }}</p>

        <!-- </div> -->
        

    </div>
</template>

<script setup>

// const { articles } = defineProps(['articles'])



const { article } = defineProps(['article']);

// console.log(article);
// const { id } = useRoute().params


// const { news } = defineProps(['news'])


</script>

<style lang="scss" scoped>

</style>