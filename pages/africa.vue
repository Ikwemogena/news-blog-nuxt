<template>
    <div class="font-display pb-8 mb-8">
        <div class="lg:flex justify-between items-center mx-8 mb-2">
            <div class="text-sm">
                <p>{{formattedDate}}</p>
                <p><span>Today's paper</span></p>
            </div>

            <div>
                <h1>International News For The Nation</h1>
            </div>
            <div class="flex items-center p-0">
                <img src="../assets/weather-icon.svg" alt="">
                <div class="m-0">
                    <p>Africa</p>
                    <p class="text-sm"> <span>weather</span> </p>
                    <p><span>today</span></p>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center gap-4">
            <div>
                <!-- <p>kionuvw</p> -->
            </div>
            <div class="flex items-end mr-0">
                <div class=" flex flex-col items-start p-4 mb-20 pb-10">
                    <div class="flex justify-center w-32">
                        <!-- <h3 class="text-xl font-bold">Black Lives Matter</h3> -->
                        <h3 class="text-xl font-bold">{{ news.articles[0].title }}</h3>
                    </div>

                    <p class="w-48 gray-text ">
                        “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people.
                    </p>
                </div>
                <div class="image-container flex justify-center">
                    <img :src="news.articles[0].urlToImage" alt="Your Image" class="grid-image">
                    <div class="grid-overlay">
                        <div class="grid-cell div1"> </div>
                        <div class="grid-cell div2"> </div>
                        <div class="grid-cell div3"> </div>
                        <div class="grid-cell div4"> </div>
                        <div class="grid-cell div5"> </div>
                        <div class="grid-cell div6"> </div>
                        <div class="grid-cell div7"> </div>
                        <div class="grid-cell div8"> </div>
                    </div>
                
                </div>
                <div class="w-48 p-4">
                    <div class="flex justify-center gap-4">
                        <button class="border rounded px-4 hover:font-bold">Prev</button>
                        <button class="border rounded px-4">Next</button>
                    </div>

                    <p class="gray-text ">
                        “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people.
                    </p>
                </div>
            </div>

            <div class="controls flex justify-center w-full items-center">
                <!-- <p>Next</p> -->
                <!-- <div>
                    <button>Prev</button>
                    <button>Next</button>
                </div> -->
                <p class="mx-20"><span>“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people.“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. discrimination and inequality against black people.“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. Discrimination and inequality against black people.“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people.</span></p>
            </div>
        </div>
        <div class="flex items-center justify-center ">
            <p class="flex items-center justify-center">
                <!-- <span>“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. “Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people.“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. discrimination and inequality against black people.“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people. Discrimination and inequality against black people.“Black Lives Precious” is a decentralised international activism movement against racism, discrimination and inequality against black people.</span> -->
            </p>
        </div>
        <!-- <Trending /> -->

        
    </div>
    <Trending /> 
</template>

<script setup>

// const currentDate = ref(new Date().toLocaleDateString());

const currentDate = ref(new Date());

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const formattedDate = ref(currentDate.value.toLocaleDateString(undefined, options));

// const { articles } = await useFetch(`${apiUrl}/v2/top-headlines?country=us&apiKey=${apiKey}`)
const {data: news} = await useFetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f3798e116eb342b2bae58e7f0cbd9c11`)
console.log(news.value.articles)


// const { data: news  } = await useFetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f3798e116eb342b2bae58e7f0cbd9c11`);
// console.log(news.value.articles[0]);
</script>

<style scoped>
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



.image-container {
    /* background-color: #AFAFAF; */
    position: relative;
    /* display: inline-block; */
    display: flex;
    /* border-radius: 0.5rem; */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    /* max-width: 960px; Adjust the value as per your preference */
    /* max-height: 400px;  Adjust the value as per your preference */
    margin: 0 auto;
    border-radius: 100px;
}

.grid-overlay {
    background-color: rgba(27, 15, 15, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* max-height: 400px; */
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    /* border-radius: 0.5rem; */
    /* border-radius: 10px; */
    pointer-events: none;
    overflow: hidden;
    /* background-color: #AFAFAF; */
}

.grid-cell {
    border: 4px solid white;
    overflow: hidden;
    /* border-radius: 10px; */
}

.grid-overlay::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.grid-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 100px; */
}

.div1 { 
    grid-area: 4 / 1 / 6 / 2;
    /* border-radius: 2rem; */
    /* background-color: #fff; */
}
.div2 { grid-area: 1 / 3 / 2 / 5; }
.div3 { grid-area: 1 / 2 / 2 / 3; }
.div4 {
    grid-area: 5 / 4 / 6 / 5;
    /* background-color: #fff; */
}
.div5 { grid-area: 2 / 4 / 5 / 5; }
.div6 { grid-area: 2 / 2 / 5 / 4; }
.div7 { grid-area: 5 / 2 / 6 / 4; }
.div8 { grid-area: 1 / 1 / 4 / 2; }

</style>