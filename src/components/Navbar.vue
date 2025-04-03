<script setup lang="ts">
interface MenuItem {
  name: string;
  submenu1?: { name: string }[];
  submenu?: { name: string; icon?: string }[];
}
const menuItems: MenuItem[] = [
  {
    name: "Featured",
    submenu1: [{ name: "Backpacks" }],
  },
  {
    name: "Bags",
    submenu: [
      { name: "Backpacks", icon: "../../public/image/backpack.png" },
      { name: "Sling & Crossbody Bags", icon: "../../public/image/sling.png" },
      { name: "Tote & Shoulders Bags  ", icon: "../../public/image/tote.png" },
      { name: "Market & Cooler Bags ", icon: "../../public/image/market.png" },
      { name: "Work Bags", icon: "../../public/image/work.png" },
      { name: "Duffel Bags", icon: "../../public/image/duffel.png" },
      { name: "All Wallets", icon: "../../public/image/all_wallets.png" },
    ],
  },
  {
    name: "Wallets",
    submenu: [
      { name: "Billfolds", icon: "../../public/image/billfolds.png" },
      { name: "Card Holders", icon: "../../public/image/card_holder.png" },
      { name: "Zip Wallets", icon: "../../public/image/zip_wallets.png" },
      { name: "Passport Holders", icon: "../../public/image/passport.png" },
      { name: "RFID Protected", icon: "../../public/image/rfid.png" },
      { name: "All Wallets", icon: "../../public/image/all_wallets.png" },
    ],
  },
  {
    name: "Accessories",
    submenu: [
      { name: "Packing Cubes", icon: "../../public/image/packing.png" },
      { name: "Key Holders", icon: "../../public/image/key_holder.png" },
      { name: "Pouches", icon: "../../public/image/pouches.png" },
      { name: "Folios ", icon: "../../public/image/follios.png" },
      { name: "All Wallets", icon: "../../public/image/all_wallets.png" },
    ],
  },
  {
    name: "Tech",
    submenu: [
      { name: "IPhone Cases", icon: "../../public/image/iphone.png" },
      { name: "Pixel Cases", icon: "../../public/image/pixel.png" },
      { name: "Samsung Cases", icon: "../../public/image/samsung.png" },
      { name: "Earbud Cases", icon: "../../public/image/earbud.png" },
      { name: "AirTag Cases", icon: "../../public/image/airTag.png" },
      { name: "Watch Bands", icon: "../../public/image/watch.png" },
      { name: "Laptop & Tablet Sleeves", icon: "../../public/image/laptop.png" },
      { name: "Tech Organizers", icon: "../../public/image/tech.png" },
      { name: "All Wallets", icon: "../../public/image/all_wallets.png" },
    ],
  },
  {
    name: "Travel",
    submenu: [
      { name: "Travel Bags", icon: "../../public/image/travel_bags.png" },
      { name: "Packing cubes", icon: "../../public/image/cubes.png" },
      { name: "RFID & Travel Wallets", icon: "../../public/image/rfid_travel.png" },
      { name: "Toiletry Bags", icon: "../../public/image/toiletry.png" },
      { name: "All Wallets", icon: "../../public/image/all_wallets.png" },
    ],
  },
  { name: "About Us" },
];
</script>
<template>
  <nav class="bg-white border-b border-gray-200">
    <!-- Free shipping banner -->
    <div class="py-1 text-end text-sm"><span>Free shipping available on most items</span></div>

    <div class="container mx-auto px-2 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="">
          <img src="../../public/image/bellroy.png" alt="Bellroy" class="h-16 w-26 -translate-y-4" />
        </a>

        <!-- Navigation -->
        <div class="hidden lg:flex space-x-16">
          <div v-for="item in menuItems" :key="item.name" class="relative group flex justify-start">
            <a href="#" class="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium py-4">
              {{ item.name }}
            </a>

            <!-- Submenu -->
            <div v-if="item.submenu" class="absolute top-full left-0 w-max bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-1 group-hover:translate-y-0 z-50">
              <div class="border-t border-gray-200 w-full translate-y-6"></div>
              <div class="container mx-auto px-6 py-8">
                <div class="grid grid-cols-6 gap-8">
                  
                  <a v-for="subitem in item.submenu" :key="subitem.name" href="#" class="text-center group/item">
                    <div class="rounded-lg mt-12 mb-12 flex items-center justify-center overflow-hidden">
                      <img :src="subitem.icon" :alt="subitem.name" class="w-20 h-20 object-contain transition-transform duration-300 group-hover/item:scale-110" />
                    </div>
                    
                    <span class="text-sm text-gray-900 group-hover/item:text-bellroy-brown transition-colors">
                      {{ subitem.name }}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Menu -->
        <div class="flex items-center space-x-6">
          <a href="#" class="text-sm text-gray-600 hover:text-bellroy-brown">Need help?</a>
          <a href="#" class="text-sm text-gray-600 hover:text-bellroy-brown">Find In-Store</a>
          <button class="text-gray-700 hover:text-bellroy-brown">
            <span class="material-icons">mail_outline</span>
          </button>
          <button class="text-gray-700 hover:text-bellroy-brown">
            <span class="material-icons">search</span>
          </button>
          <button class="text-gray-700 hover:text-bellroy-brown">
            <span class="material-icons">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.group:hover .group-hover\:opacity-100 {
  pointer-events: auto;
}
.group .group-hover\:opacity-100 {
  pointer-events: none;
}
</style>
