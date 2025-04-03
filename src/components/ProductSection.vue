<script setup lang="ts">
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard.vue";

defineProps<{
  title: string;
  products: Product[];
}>();
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-medium text-center mb-8">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
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
      <div class="flex justify-center items-center">
        <a href="#" class=" bg-orange-600 w-42 mt-12 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-700 transition-colors"> SHOP TRAVEL </a>
      </div>
    </div>
  </section>
</template>
