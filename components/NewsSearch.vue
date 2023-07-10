<template>
    <div>
        <form @submit.prevent="searchNews" >
            <div class="flex gap-2">
                <input v-model="searchNewsItem" type="text" placeholder="Search For News" @change="searchNews" class="border rounded">
                <button class="border px-2 rounded"> Enter</button>
            </div>
        </form>

        <!-- <NewsCard :article="articles.articles[0]" /> -->

    </div>
</template>

<script setup>

// const { searchTerm } = useRoute().params

const searchNewsItem = ref('')
// console.log(searchTerm)

// console.log(searchTerm.value);

// function searchNews() {
//     console.log(searchTerm.value);  
// }

const router = useRouter();



// function searchNews() {
//     console.log(searchNewsItem.value);

//     const {data: articles} = useFetch(`https://newsapi.org/v2/everything?q=${searchNewsItem.value}&apiKey=73f1f46d561f4d7182f74512dfc8b56c`);

//     console.log(articles.value);

    
//     // console.log(searchTerm.value);
//     // console.log(articles.value)
//     // Perform search logic or API request here
    
//     // Navigate to the search page
//     router.push({ name: 'search', query: { q: searchNewsItem.value } });
//     // searchNewsItem.value =''
// }

async function searchNews() {
  try {
    const { data: articles } = await useFetch(`https://newsapi.org/v2/everything?q=${searchNewsItem.value}&apiKey=73f1f46d561f4d7182f74512dfc8b56c`)
    console.log(articles.value)
    // Perform any further data processing or logic here
    // ...
    // Navigate to the search page
    router.push({ name: 'search', query: { q: searchNewsItem.value } })
    // Reset the input field if needed
    // searchNewsItem.value = ''
  } catch (error) {
    console.log(error)
  }
}

</script>

<style scoped>

</style>