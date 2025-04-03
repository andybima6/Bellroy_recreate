<script setup lang="ts">
import { ref } from "vue";

const isSidebarOpen = ref(false);

// Function to toggle sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

type SubmenuItem = {
  name?: string;
  href: string;
  icon?: string;
};

type GroupedSubmenuItem = {
  title: string;
  items: SubmenuItem[];
};

type IconSubmenuItem = {
  name?: string; // Tambahkan `name` agar bisa digunakan di menu
  icon: string;
  href?: string;
};

interface MenuItem {
  name: string;
  submenu?: (IconSubmenuItem | GroupedSubmenuItem)[];
}

const menuItems: MenuItem[] = [
  {
    name: "Featured",
    submenu: [
      {
        title: "Popular",
        items: [
          { name: "Best Seller", href: "/activity" },
          { name: "New Releases", href: "/collection" },
          { name: "Student & Graduates", href: "/collection" },
          { name: "The Outlet", href: "/collection" },
          { name: "Value Sets", href: "/collection" },
        ],
      },
      {
        title: "Bestsellers",
        items: [
          { name: "Work", href: "/work" },
          { name: "Travel", href: "/new-releases" },
          { name: "Outdoor", href: "/new-releases" },
          { name: "Campus", href: "/new-releases" },
        ],
      },
      {
        title: "By Collection",
        items: [
          { href: "/work", icon: "/image/backpack.png" },
          { href: "/new-releases", icon: "/image/backpack.png" },
          { href: "/new-releases", icon: "/image/backpack.png" },
          { href: "/new-releases", icon: "/image/backpack.png" },
        ],
      },
    ],
  },
  {
    name: "Bags",
    submenu: [
      { name: "Backpacks", href: "/backpacks", icon: "/image/backpack.png" },
      { name: "Sling & Crossbody Bags", href: "/sling", icon: "/image/sling.png" },
      { name: "Tote & Shoulder Bags", href: "/tote", icon: "/image/tote.png" },
      { name: "Market & Cooler Bags", href: "/market", icon: "/image/market.png" },
      { name: "Work Bags", href: "/work-bags", icon: "/image/work.png" },
      { name: "Duffel Bags", href: "/duffel", icon: "/image/duffel.png" },
      { name: "All Wallets", href: "/wallets", icon: "/image/all_wallets.png" },
    ],
  },
  {
    name: "Wallets",
    submenu: [
      { name: "Billfolds", href: "/billfolds", icon: "/image/billfolds.png" },
      { name: "Card Holders", href: "/card-holders", icon: "/image/card_holder.png" },
      { name: "Zip Wallets", href: "/zip-wallets", icon: "/image/zip_wallets.png" },
      { name: "Passport Holders", href: "/passport", icon: "/image/passport.png" },
      { name: "RFID Protected", href: "/rfid", icon: "/image/rfid.png" },
      { name: "All Wallets", href: "/wallets", icon: "/image/all_wallets.png" },
    ],
  },
  {
    name: "Accessories",
    submenu: [
      { name: "Packing Cubes", href: "/packing", icon: "/image/packing.png" },
      { name: "Key Holders", href: "/key-holders", icon: "/image/key_holder.png" },
      { name: "Pouches", href: "/pouches", icon: "/image/pouches.png" },
      { name: "Folios", href: "/folios", icon: "/image/Follios.png" },
      { name: "All Wallets", href: "/wallets", icon: "/image/all_wallets.png" },
    ],
  },
  {
    name: "Tech",
    submenu: [
      { name: "iPhone Cases", href: "/iphone", icon: "/image/iphone.png" },
      { name: "Pixel Cases", href: "/pixel", icon: "/image/pixel.png" },
      { name: "Samsung Cases", href: "/samsung", icon: "/image/samsung.png" },
      { name: "Earbud Cases", href: "/earbud", icon: "/image/earbud.png" },
      { name: "AirTag Cases", href: "/airtag", icon: "/image/airtag.png" },
      { name: "Watch Bands", href: "/watch", icon: "/image/watch.png" },
      { name: "Laptop & Tablet Sleeves", href: "/laptop", icon: "/image/laptop.png" },
      { name: "Tech Organizers", href: "/tech", icon: "/image/tech.png" },
      { name: "All Wallets", href: "/wallets", icon: "/image/all_wallets.png" },
    ],
  },
  {
    name: "Travel",
    submenu: [
      { name: "Travel Bags", href: "/travel-bags", icon: "/image/travel_bags.png" },
      { name: "Packing Cubes", href: "/cubes", icon: "/image/cubes.png" },
      { name: "RFID & Travel Wallets", href: "/rfid-travel", icon: "/image/rfid_travel.png" },
      { name: "Toiletry Bags", href: "/toiletry", icon: "/image/toiletry.png" },
      { name: "All Wallets", href: "/wallets", icon: "/image/all_wallets.png" },
    ],
  },
  {
    name: "About Us",
    submenu: [
      { name: "Company Info", href: "/about", icon: "/image/travel_bags.png" },
      { name: "Careers", href: "/careers", icon: "/image/travel_bags.png" },
      { name: "Contact Us", href: "/contact", icon: "/image/travel_bags.png" },
    ],
  },
];

// Track open submenu in sidebar
const openSubmenuIndex = ref<number | null>(null);

const toggleSubmenu = (index: number) => {
  openSubmenuIndex.value = openSubmenuIndex.value === index ? null : index;
};
</script>

<template>
  <nav class="bg-white border-b border-gray-200">
    <!-- Free shipping banner -->
    <div class="py-1 text-end text-sm text-gray-500 hidden 2xl:block">
      <span>Free shipping available on most items</span>
    </div>

    <div class="container mx-auto px-2 py-4">
      <div class="flex items-center justify-between">
        <!-- Sidebar Toggle Button (visible only on less than 2xl) -->
        <button @click="toggleSidebar" class="text-gray-700 hover:text-orange-500 transition-colors xl:block 2xl:hidden">
          <span class="material-icons">menu</span>
        </button>
        <!-- Logo -->
        <a href="/" class="mt-4">
          <img src="../../public/image/bellroy.png" alt="Bellroy" class="h-16 w-26 -translate-y-4" />
        </a>

        <!-- Desktop Navigation (hidden on less than 2xl) -->
        <div class="hidden 2xl:flex space-x-16">
          <div v-for="item in menuItems" :key="item.name" class="relative group flex justify-start">
            <a href="#" class="text-gray-700 hover:text-orange-500 transition-colors text-[18px] py-4">
              {{ item.name }}
            </a>

            <!-- Submenu -->
            <div v-if="item.submenu" class="absolute top-full left-0 w-max bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-1 group-hover:translate-y-0 z-50">
              <div class="border-t border-gray-200 w-full translate-y-6"></div>
              <div class="container mx-auto px-6 py-8">
                <!-- Template khusus untuk Featured menu -->
                <div v-if="item.name === 'Featured'" class="grid grid-cols-4 gap-8">
                  <div v-for="(group, index) in item.submenu" :key="index" class="featured-group">
                    <!-- Cek apakah ini adalah GroupedSubmenuItem -->
                    <template v-if="'title' in group">
                      <h3 class="text-sm font-bold text-gray-900 mb-4">{{ group.title }}</h3>

                      <!-- Cek apakah semua items hanya memiliki icon tanpa teks -->
                      <ul
                        :class="{
                          'flex flex-row gap-4 items-center': group.items.every((item) => item.icon && !item.name),
                          'space-y-2': !group.items.every((item) => item.icon && !item.name),
                        }"
                      >
                        <li
                          v-for="(subItem, subIndex) in group.items"
                          :key="subIndex"
                          :class="{
                            'flex items-center': subItem.name,
                          }"
                        >
                          <img v-if="subItem.icon" :src="subItem.icon" :alt="subItem.name" class="w-16 h-16" />
                          <a v-if="subItem.name" :href="subItem.href" class="text-sm text-gray-600 hover:text-bellroy-brown">
                            {{ subItem.name }}
                          </a>
                        </li>
                      </ul>
                    </template>

                    <!-- Jika hanya ikon tanpa daftar -->
                    <template v-else-if="group.icon">
                      <img :src="group.icon" alt="Featured Icon" class="w-16 h-16 mx-auto" />
                    </template>
                  </div>
                </div>

                <!-- Template default untuk menu lainnya -->
                <div v-else class="grid grid-cols-6 gap-8">
                  <a v-for="subitem in item.submenu" :key="'name' in subitem ? subitem.name : 'title' in subitem ? subitem.title : ''" href="#" class="text-center group/item">
                    <!-- Type guard untuk memastikan ini adalah IconSubmenuItem -->
                    <template v-if="'name' in subitem">
                      <div class="rounded-lg mt-12 mb-12 flex items-center justify-center overflow-hidden">
                        <img :src="subitem.icon" :alt="subitem.name" class="w-20 h-20 object-contain transition-transform duration-300 group-hover/item:scale-110" />
                      </div>
                      <span class="text-sm text-gray-900 group-hover/item:text-bellroy-brown transition-colors">
                        {{ subitem.name }}
                      </span>
                    </template>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Menu -->
        <div class="flex items-center space-x-6">
          <a href="#" class="text-sm text-gray-600 hover:text-orange-700 hidden 2xl:block">Need help?</a>
          <a href="#" class="text-sm text-gray-600 hover:text-orange-700 hidden 2xl:block">Find In-Store</a>
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

    <!-- Mobile Sidebar (visible only when toggled and on less than 2xl) -->
    <div class="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity 2xl:hidden" :class="isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'" @click="isSidebarOpen = false"></div>

    <div class="fixed top-0 left-0 bottom-0 z-50 w-80 bg-white shadow-xl transform transition-transform overflow-y-auto 2xl:hidden" :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'">
      <!-- Sidebar Header -->
      <div class="flex justify-between p-4 border-b border-gray-200">
        <button @click="toggleSidebar" class="text-gray-700 hover:text-orange-500">
          <span class="material-icons">close</span>
        </button>
        <a href="/" class="">
          <img src="../../public/image/bellroy.png" alt="Bellroy" class="h-12 w-20" />
        </a>
      </div>

      <!-- Sidebar Menu Items -->
      <div class="py-4">
        <div v-for="(item, index) in menuItems" :key="item.name" class="border-b border-gray-100">
          <div @click="toggleSubmenu(index)" class="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50">
            <span class="text-gray-700">{{ item.name }}</span>
            <span class="material-icons text-gray-500" v-if="item.submenu">
              {{ openSubmenuIndex === index ? "expand_less" : "expand_more" }}
            </span>
          </div>

          <!-- Sidebar Submenu -->
          <div v-if="item.submenu && openSubmenuIndex === index" class="bg-gray-50 py-2">
            <div v-if="item.name === 'Featured'">
              <div v-for="(group, groupIndex) in item.submenu" :key="groupIndex" class="ml-4 py-2">
                <template v-if="'title' in group">
                  <h3 class="text-sm font-semibold text-gray-800 mb-2">
                    {{ group.title }}
                  </h3>
                  <ul class="space-y-2 pl-2 ">
                    <li v-for="(subItem, subIndex) in group.items" :key="subIndex" class="border-t border-gray-200 max-w-[300px]">
                      <a :href="subItem.href" class="flex items-center space-x-3 text-sm text-gray-700 hover:text-orange-500 py-2 px-2 transition-colors">
                        <img v-if="subItem.icon" :src="subItem.icon" :alt="subItem.name || ''" class="w-24 h-24 rounded-2xl" />
                        <span v-if="subItem.name">{{ subItem.name }}</span>
                      </a>
                    </li>
                  </ul>
                </template>
              </div>
            </div>

            <div v-else>
              <a v-for="(subitem, subIndex) in item.submenu" :key="subIndex" :href="'href' in subitem ? subitem.href : '#'" class="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover:text-orange-500">
                <img v-if="'icon' in subitem && subitem.icon" :src="subitem.icon" :alt="'name' in subitem ? subitem.name : ''" class="w-6 h-6 object-contain" />
                <span v-if="'name' in subitem">{{ subitem.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Sidebar additional links -->
        <div class="px-4 py-4 border-t border-gray-200 mt-4">
          <a href="#" class="block py-2 text-sm text-gray-600 hover:text-orange-500">Need help?</a>
          <a href="#" class="block py-2 text-sm text-gray-600 hover:text-orange-500">Find In-Store</a>
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
.body {
  background-color: white;
}
</style>
