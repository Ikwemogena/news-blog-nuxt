<template>
    <div>
        <header>
            <div class="flex justify-center p-6 border-b-4">
                <div class="flex gap-4">
                    <img src="../assets/logo.svg" alt="">
                    <h1 class="font-bold text-xl">THE NEWS</h1>
                </div>
                <!-- <div class="flex gap-4">
                    <img src="../assets/search.svg" alt="">
                    <img src="../assets/bell.svg" alt="">
                    <img src="../assets/user.svg" alt="">
                </div> -->
            </div>
            <nav class="md:flex justify-between p-6 py-10">

                <div class="flex">
                    <img src="../assets/menu.svg" alt="" class="pr-2">
                    <NewsSearch />

                </div>
                <ul class="md:flex gap-4">
                    <li>
                        <NuxtLink to="/">International</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/africa">Africa</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/asia">Asia</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Europe</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="">Other</NuxtLink>
                    </li>
                </ul>
                <!-- sign up -->
                <div class="flex gap-4">
                    <button class="bg-gray text-black border rounded-full px-4">Login</button>
                    <button class="bg-black text-white border rounded-full px-4">Subscribe Now</button>
                </div>
            </nav>
        </header>
        <!-- output page content using slot -->

        <div class="container mx-auto p-4">
            <slot />
        </div>

        
        <footer>
            <hr>
            
            
            <div class="p-8">
                <div class="flex justify-between">
                    <div>
                        <h4>Want to work with us?</h4>

                    </div>

                    <div class="flex gap-6">
                        <div>
                            <h4>Marketplace</h4>
                            <ul>
                                <li>Email Marketing</li>
                                <li>Explore</li>
                                <li>All NFTs</li>
                                <li>Membership</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Community</h4>
                            <ul>
                                <li>Email Marketing</li>
                                <li>Explore</li>
                                <li>All NFTs</li>
                                <li>Membership</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Help</h4>
                            <ul>
                                <li>Email Marketing</li>
                                <li>Explore</li>
                                <li>All NFTs</li>
                                <li>Membership</li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div class="flex justify-between">
                    <div class="flex gap-6">
                        <p>terms an conditions</p>
                        <p>privacy policy</p>
                    </div>
                    <div class="flex gap-6">
                        <p>icons</p>
                        <p>icons</p>
                        <p>icons</p>
                    </div>
                </div>
            </div>



        </footer>

   </div>
</template>

<script setup>

</script>

<style scoped>

.router-link-exact-active {
    background-color: #272727;
    color: #FFFFFF;
    padding: 8px 27px;
    border-radius: 20px;
}
li{
    color: #AFAFAF;
}
</style>