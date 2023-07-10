export default defineEventHandler(async () => {

    const { apiUrl, apiKey } = useRuntimeConfig()

    const { data } = await $fetch(`${apiUrl}/v2/top-headlines?country=us&apiKey=${apiKey}`);

    return data;
})

// export default async function () {
//     try {
//       const apiUrl = process.env.API_URL;
//       const apiKey = process.env.API_KEY;
//       const response = await this.$fetch(`${apiUrl}/v2/top-headlines?country=us&apiKey=${apiKey}`);
  
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         console.error('Failed to fetch headlines:', response.status);
//         return null;
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       return null;
//     }
//   }