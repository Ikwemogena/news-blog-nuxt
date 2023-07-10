<template>
    <div class="font-display ">
        <div class="flex justify-center">
            <h2 class="font-bold">Trending News</h2>
        </div>
        <div class="px-10">            
            <div class="flex justify-between items-start gap-6" style="align-items: stretch;"> 
                <div class="w-96 flex flex-col space-between">
                    <!-- first section, trending news -->
                    <div v-for="(article, index) in news.articles" :key="article.title">
                        <div v-if="index < 2" class="pb-1">
                            <h3 class="text-xl font-bold">{{ article.title}}</h3>
                            <p class="gray-text">{{ article.description }}</p>

                            <div class="flex justify-between items-center py-2 text-sm">
                                <div class="flex items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" class="profile-picture">
                                    <div>
                                        <p class="truncate">{{ article.author ? article.author:'Author Not Available' }}</p>
                                        <p><span>Photographer</span></p>
                                    </div>
                                </div>
                                <div class="flex flex-col items-end">
                                    <p><span>{{ formatDate(article.publishedAt) }}</span></p>
                                    <p>National News</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- middle section of trending  news -->
                <!-- <div class="max-w-xl flex flex-col border" v-for="(article, index) in news.articles" :key="article.title"> -->
                <div class="max-w-xl flex flex-col w-[100]">
                    <div >
                        <div >
                            <img :src="news.articles[3].urlToImage ? news.articles[3].urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'" alt="" class="rounded">
                            <div class="flex justify-between py-2 text-sm">
                                <div class="flex items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" class="profile-picture">
                                    <div>
                                        <!-- <p>{{ article.author ? article.author:'Author Not available' }}</p> -->
                                        <p v-if="news.articles[4].author">{{ news.articles[4].author.includes(',') ? `${news.articles[4].author}, and others`:news.articles[4].author  }}</p>
                                        <p v-else>Author Not available</p>
                                        <!-- <p>'David''David''David''David''David''David''David''David'</p> -->
                                        <p><span>Photographer</span></p>
                                    </div>
                                </div>
                                <div class="flex flex-col items-end">
                                    <p><span>{{ formatDate(news.articles[4].publishedAt) }}</span></p>
                                    <p>National News</p>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <h3 class="text-xl font-bold">{{ news.articles[3].title }}</h3>
                            <!-- <h3 class="text-2xl font-bold">TITLgutvybionu97gsshmovph un oslk vfubonmvoernE</h3>  -->
                            <p class="gray-text">{{ news.articles[3].description }}</p>
                            <!-- <p >descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription</p> -->
                        </div>
                    </div>
                </div>

                <!-- third section of trending -->
                <div class="w-96">
                    <div >
                        <div>
                        <h3 class="text-xl font-bold">{{ news.articles[4].description }}</h3>
                        
                        <img :src="news.articles[4].urlToImage ? news.articles[4].urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'" alt="" class="rounded">
                        <!-- <p class="gray-text">{{ news.articles[4].urlToImage }}</p> -->

                        <div class="flex justify-between py-8 text-sm">
                            <div class="flex items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" class="profile-picture">
                                <div>
                                    <!-- <p>{{ article.author ? article.author:'Author Not available' }}</p> -->
                                    <p v-if="news.articles[4].author">{{ news.articles[4].author.includes(',') ? `${news.articles[4].author}, and others`:news.articles[4].author  }}</p>
                                    <p v-else>Author Not available</p>
                                    <!-- <p>'David''David''David''David''David''David''David''David'</p> -->
                                    <p><span>Photographer</span></p>
                                </div>
                            </div>
                            <div class="flex flex-col items-end">
                                <p><span>{{ formatDate(news.articles[4].publishedAt) }}</span></p>
                                <p>National News</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>

        

        <!-- more section of trending news -->
        <div class="flex mt-10 mb-10  pb-20 gap-4 article">
            <div v-for="(article, index) in news.articles" :key="article.title">
                <div class="" @click="clickHandler(article)">
                    <NuxtLink :to="`/news/${article.title}`" v-if="index > 4">
                        <img :src="article.urlToImage ? article.urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'" alt="" class=" h-64 border rounded-lg">
                        <div class="max-w-sm">
                            <div>
                                <h3 class="text-2xl truncate">{{ article.title }}</h3>
                                <p class="gray-text truncate">{{ article.description ? article.description : 'No Description' }}</p>
                            </div>

                            <div class="flex justify-between text-sm pt-4">
                                <div class="flex items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="" class="profile-picture">
                                    <div>
                                        <!-- <p>{{ article.author ? article.author:'Author Not available' }}</p> -->
                                        <p v-if="article.author">{{ article.author.includes(',') ? `${article.author.split(', ')[0]}, and others`:article.author  }}</p>
                                        <p v-else>Author Not available</p>
                                        <!-- <p>'David''David''David''David''David''David''David''David'</p> -->
                                        <p><span>Photographer</span></p>
                                    </div>
                                </div>
                                <div class="flex flex-col items-end">
                                    <p ><span>{{ formatDate(article.publishedAt) }}</span></p>
                                    <p>National News</p>
                                </div>
                            </div>
                        </div>
                        <!-- <NuxtLink :to="`/products/${product.id}`"> -->
                        <!-- <NuxtLink to="/news">
                            <p class="border rounded p-2 my-4">View News</p>
                        </NuxtLink> -->
                    </NuxtLink>
                </div>
            </div>
            
        </div>


        <!-- <div v-for="article in news.articles" :key="article.title">
            {{ article.title }}
        </div> -->

    </div>
</template>

<script setup>



const formatDate = (value) => {
  const date = new Date(value);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

// const { data: news } = await useFetch('/api/news/fetchNews')
try {
    const {data: news} = await useFetch('http://localhost:3000/api/news/fetchNews')
    console.log(news)
} catch (error) {
    console.log(error)
}

const {data: news} = await useFetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f3798e116eb342b2bae58e7f0cbd9c11`)
console.log(news.value)

// console.log(news.value.articles)

function clickHandler(article) {
    console.log('clicked', article)
}
</script>

<style scoped>
/* p{
    font-size: 20px;
} */
h1{
    font-size: 2.5rem;
    font-weight: 700;
    font-family: Playfair Display;
    /* font-size: 36px; */
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;

}
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

span{
    /* font-size: 1rem; */
    color: #AFAFAF;
}

li {
    font-size: 14px;
}

/* .article>img {
    width: 70%;
    height: 80%;
    object-fit: cover;
} */



.profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}


.article {
    overflow: hidden;
    overflow-x: scroll;   /* Enable vertical scrolling */
    scroll-behavior: smooth;
  /* max-height: 400px;    Set a maximum height for the scrollable area */
  scrollbar-width: none; /* Hide the scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide the scrollbar for IE and Edge */
}
.article::-webkit-scrollbar {
  width: 0; /* Hide the scrollbar for Chrome, Safari, and Opera */
}
</style>
