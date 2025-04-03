<script setup lang="ts">
import type { Product } from '../data/products';

defineProps<{ product: Product }>();
</script>

<template>
  <div class="group cursor-pointer">
    <div class="relative overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
      >
      <div class="absolute top-2 right-2">
        <span v-if="product.tag" class="bg-orange-600 text-white px-3 py-1 text-sm rounded">
          {{ product.tag }}
        </span>
      </div>
    </div>
    <div class="mt-4">
      <h3 class="text-lg font-medium">{{ product.name }}</h3>
      <div class="flex items-center mt-2">
        <p class="text-gray-900">${{ product.price }}</p>
        <p v-if="product.comparePrice" class="ml-2 text-gray-500 line-through">
          ${{ product.comparePrice }}
        </p>
      </div>
      <p class="text-sm text-gray-600 mt-1">{{ product.description }}</p>
      <div class="flex mt-3 space-x-2">
        <div 
          v-for="color in product.colors" 
          :key="color"
          class="w-4 h-4 rounded-full"
          :style="{ backgroundColor: color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: "ProductCard" };
</script>
