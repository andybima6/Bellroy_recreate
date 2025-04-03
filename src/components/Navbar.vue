<script setup lang="ts">
interface MenuItem {
  name: string;
  submenu?: { name: string; icon?: string }[];
}
const menuItems: MenuItem[] = [
  { name: "Featured" },
  { name: "Bags" },
  {
    name: "Wallets",
    submenu: [
      { name: "Billfolds", icon: "/images/billfolds.png" },
      { name: "Card Holders", icon: "/images/card-holders.png" },
      { name: "Zip Wallets", icon: "/images/zip-wallets.png" },
      { name: "Passport Holders", icon: "/images/passport-holders.png" },
      { name: "RFID Protected", icon: "/images/rfid-protected.png" },
      { name: "All Wallets", icon: "/images/all-wallets.png" },
    ],
  },
  { name: "Accessories" },
  { name: "Tech" },
  { name: "Travel" },
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
        <a href="/" class="flex-shrink-0">
          <img src="../../public/image/bellroy.png" alt="Bellroy" class="h-16 w-26 -translate-y-4" />
        </a>

        <!-- Navigation -->
        <div class="hidden lg:flex space-x-16">
          <div v-for="item in menuItems" :key="item.name" class="relative group flex justify-start">
            <a href="#" class="text-gray-700 hover:text-bellroy-brown transition-colors text-sm font-medium py-4">
              {{ item.name }}
            </a>

            <!-- Submenu -->
            <div v-if="item.submenu" class="absolute top-full left-0 w-screen bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-1 group-hover:translate-y-0 z-50">
              <div class="container mx-auto px-6 py-8">
                <div class="grid grid-cols-6 gap-8">
                  <a v-for="subitem in item.submenu" :key="subitem.name" href="#" class="text-center group/item">
                    <div class="aspect-square bg-gray-50 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
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
