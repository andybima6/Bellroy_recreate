<script setup lang="ts">
import { ref, computed } from "vue";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard.vue";

const props = defineProps<{
  title: string;
  products: Product[];
}>();

const itemsPerPage = 3;
const currentPage = ref(0);

const totalPages = computed(() => Math.ceil(props.products.length / itemsPerPage));

const displayedProducts = computed(() => {
  const start = currentPage.value * itemsPerPage;
  return props.products.slice(start, start + itemsPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 0) currentPage.value--;
};

const collections = [
  { id: 1, image: "/image/melbourne.jpg", text: "See what's new in the Outlet", position: "top-left" },
  { id: 2, image: "/image/melbourne.jpg", text: "Protect your pockets!", position: "top-right" },
  { id: 3, image: "/image/melbourne.jpg", text: "Because they're better together", position: "bottom-left" },
  { id: 4, image: "/image/melbourne.jpg", text: "To lighter", position: "bottom-right" },
  { id: 5, image: "/image/melbourne.jpg", text: "Travel with confidence", position: "top-left" },
  { id: 6, image: "/image/melbourne.jpg", text: "Pack smartly", position: "bottom-right" },
];
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-medium text-center mb-8">{{ title }}</h2>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>

      <!-- Pagination Buttons -->
      <div v-if="props.products.length > itemsPerPage" class="flex justify-center mt-10 space-x-4">
        <button @click="prevPage" class="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50" :disabled="currentPage === 0">← Prev</button>
        <span class="text-sm text-gray-600">{{ currentPage + 1 }} / {{ totalPages }}</span>
        <button @click="nextPage" class="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50" :disabled="currentPage === totalPages - 1">Next →</button>
      </div>
      <!-- Featured Products Grid -->
      <div class="mt-24 mb-16">
        <h3 class="text-xl font-medium text-center mb-8">Featured Collections</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div v-for="collection in collections" :key="collection.id" class="relative overflow-hidden rounded-lg group">
            <img :src="collection.image" alt="Collection Image" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div
              class="absolute p-3 text-white text-sm"
              :class="{
                'top-0 left-0': collection.position === 'top-left',
                'top-0 right-0': collection.position === 'top-right',
                'bottom-0 left-0': collection.position === 'bottom-left',
                'bottom-0 right-0': collection.position === 'bottom-right',
              }"
            >
              <p>{{ collection.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- YouTube Video -->
      <div class="flex justify-center items-center mt-24">
        <iframe
          width="840"
          height="485"
          src="https://www.youtube.com/embed/dNP0QvFpu4s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center items-center">
        <a href="#" class="bg-orange-600 w-42 mt-12 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition-colors"> SHOP TRAVEL </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default { name: "ProductSection" };
</script>
