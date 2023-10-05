<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { productStore } from '../stores/product.js'

import { cartStore } from '../stores/cart'
const cart_store = cartStore()

const route = useRoute();
const id = parseInt(route.params.id);

const product = productStore()
const list = computed(() => product.productList)

const coffee = computed(() => {
  return list.value.find(product => product.id === id);
});


</script>
<template>
 <!-- Coffee Products -->
 <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div class="my-3 p-3">
    <RouterLink to="/" class="btn-back">Back</RouterLink>
    <h2 class="display-5">{{ coffee.name }}</h2>
      <p class="lead">{{ coffee.type }}</p>
    </div>
    <div class="bg shadow-sm mx-auto" style="width: 43.3%; height: 320px; margin-top: -10px; border-radius: 100px; background-color: #303030;">
      <img :src="coffee.img"  width="500" height="300" style="margin-top: 11px; border-radius: 100px; object-fit: cover;" />
    </div> <br> 
    <h3>{{ coffee.price }} Bath/cups</h3>
 <br> <h6 style="text-align: left;">{{ coffee.detail }}</h6><br> <br>
<button class="CartBtn" @click="cart_store.add_cart(coffee.id, coffee.name, coffee.price)">
  <span class="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p class="text">Add to Cart</p>
</button>
 <br>

 </div> 
  </template>
  


<style>
/* cart-button */
.CartBtn {
  margin: auto auto;
  width: 150px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background-color: rgb(255, 208, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: .5s;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
  position: relative;
}

.IconContainer {
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .5s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  color: rgb(17, 17, 17);
  z-index: 1;
  transition-duration: .5s;
  font-size: 1.04em;
  font-weight: 600;
}

.CartBtn:hover .IconContainer {
  transform: translateX(58px);
  border-radius: 40px;
  transition-duration: .5s;
}

.CartBtn:hover .text {
  transform: translate(10px,0px);
  transition-duration: .5s;
}

.CartBtn:active {
  transform: scale(0.95);
  transition-duration: .5s;
}

/* back-button */

.btn-back {
 margin-right: 90%;
 display: inline-block;
 padding: 0.5rem 1.8rem;
 font-size: 16px;
 font-weight: 700;
 color: rgb(72, 72, 72);
 border: 3px solid rgb(252, 70, 100);
 cursor: pointer;
 position: relative;
 background-color: transparent;
 text-decoration: none;
 overflow: hidden;
 z-index: 1;
 font-family: inherit;
 border-radius: 20px;
}

.btn-back::before {
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background-color: rgb(252, 70, 100);
 transform: translateX(-100%);
 transition: all .5s;
 z-index: -1;
}

.btn-back:hover::before {
 transform: translateX(0);
}
.container {
  max-width: 960px;
}

.icon-link > .bi {
  width: .75em;
  height: .75em;
}


.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #643400;
  transition: color .15s ease-in-out;
}
.site-header a:hover {
  color: #643400;
  text-decoration: none;
}


.product-device {
  position: absolute;
  right: 0;
  bottom: -5%;
  width: 300px;
  height: 740px;
  background-color: #2b2b2b;
  border-radius: 21px;

}

.product-device-2 {
  left: 0;
  background-color: #2b2b2b;
}


.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}

</style>