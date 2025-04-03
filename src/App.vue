<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ProductSection from './components/ProductSection.vue';
import { products } from './data/products';
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <HeroSection />
    
    <ProductSection 
      title="Traveling soon? These travel products will help." 
      :products="products"
    />

    <!-- Features Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <img src="https://bellroy.com/assets/icons/melbourne-6a6a8b03b95e0f6540aa9b8a1bc2eeec.jpg" alt="Melbourne" class="w-24 h-24 mx-auto rounded-full mb-4">
            <h3 class="font-medium mb-2">Designed in Melbourne</h3>
            <p class="text-sm text-gray-600">We are a design-obsessed brand based in Australia, but our products are carried right across the globe.</p>
            <a href="#" class="text-orange-600 text-sm mt-4 inline-block hover:text-orange-700">READ ABOUT US →</a>
          </div>
          <div>
            <img src="https://bellroy.com/assets/icons/slim-6a6a8b03b95e0f6540aa9b8a1bc2eeec.jpg" alt="Slim" class="w-24 h-24 mx-auto rounded-full mb-4">
            <h3 class="font-medium mb-2">Engineered slim</h3>
            <p class="text-sm text-gray-600">We re-engineered the everyday wallet back in 2010, removing all excess and slimming millions of pockets in the process.</p>
            <a href="#" class="text-orange-600 text-sm mt-4 inline-block hover:text-orange-700">SLIM YOUR WALLET →</a>
          </div>
          <div>
            <img src="https://bellroy.com/assets/icons/bcorp-6a6a8b03b95e0f6540aa9b8a1bc2eeec.jpg" alt="B Corp" class="w-24 h-24 mx-auto rounded-full mb-4">
            <h3 class="font-medium mb-2">Certified B Corp</h3>
            <p class="text-sm text-gray-600">We're recognized for using business as a force for good. Which includes our development of recycled materials.</p>
            <a href="#" class="text-orange-600 text-sm mt-4 inline-block hover:text-orange-700">LEARN ABOUT OUR MATERIALS →</a>
          </div>
          <div>
            <img src="https://bellroy.com/assets/icons/warranty-6a6a8b03b95e0f6540aa9b8a1bc2eeec.jpg" alt="Warranty" class="w-24 h-24 mx-auto rounded-full mb-4">
            <h3 class="font-medium mb-2">Making products that last</h3>
            <p class="text-sm text-gray-600">We're committed to making products that can be used and loved for as long as possible.</p>
            <a href="#" class="text-orange-600 text-sm mt-4 inline-block hover:text-orange-700">ON THE JOURNAL →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl mb-4">Get exclusive access to new products, deals & surprise treats.</h2>
        <div class="max-w-md mx-auto">
          <form class="flex">
            <input 
              type="email" 
              placeholder="Enter your email to register" 
              class="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-bellroy-brown"
            >
            <button 
              type="submit" 
              class="bg-bellroy-brown text-white px-6 py-2 rounded-r hover:bg-opacity-90 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-medium mb-4">HELP</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">Customer Care</a></li>
              <li><a href="#" class="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" class="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium mb-4">SHOP PRODUCTS</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">Wallets</a></li>
              <li><a href="#" class="hover:text-white">Bags</a></li>
              <li><a href="#" class="hover:text-white">Tech</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium mb-4">ABOUT</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">Our Story</a></li>
              <li><a href="#" class="hover:text-white">Materials</a></li>
              <li><a href="#" class="hover:text-white">Journal</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium mb-4">FOLLOW US</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="material-icons">facebook</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="material-icons">instagram</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="material-icons">youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>