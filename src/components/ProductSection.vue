<script setup lang="ts">
import type { Product } from '../data/products';
import ProductCard from './ProductCard.vue';

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
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </section>
</template>