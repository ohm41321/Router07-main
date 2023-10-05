<script setup>
//import { ref } from "vue";
import { computed } from "vue";
import { productStore } from '../stores/product.js'

const product = productStore()
const list = computed(() => product.productList)

</script>
<template>
  <div class="d-flex" v-if="!product.load_product">
    <h2>Loading...</h2>
  </div>
    <!-- Coffee Products -->

    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style="display: grid; grid-template-columns: 1fr 1fr 1fr;"
      v-for="(coffee, index) in list" :key="index">
      <div class="my-3 p-3">
        <h2 class="display-5" style="margin-top: 70px;">{{ coffee.name }}</h2>
        <p class="lead">{{coffee.type}} </p>
      </div>
      
      <div
        class="bg shadow-sm mx-auto"
        style="width: 103%; height: 320px; margin-top: -10px; border-radius: 100px; background-color: #472e00;"
      >
        <img :src="coffee.img"  width="500" height="300" style="margin-top: 11px; border-radius: 100px; object-fit: cover;" />
      </div>
      <div class="d-flex gap-2 justify-content-center py-5" style="margin-left: 35px;">
      <RouterLink :to="{name:'coffee', params: {id: coffee.id }}" class="button" type="button">
          {{ coffee.name }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 1 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
    </RouterLink> 
    
      </div>
    </div>
</template>
  


<style>
.button {
  margin-top: 80px;
  margin-bottom: 50%;
 --color: #472800;
 padding: 0.8em 1em;
 background-color: transparent;
 border-radius: .3em;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 transition: .5s;
 font-weight: 750;
 font-size: 18px;
 border: 1px solid;
 font-family: inherit;
 text-transform: uppercase;
 color: var(--color);
 z-index: 1;
 text-decoration: unset;
}

.button::before, .button::after {
 content: '';
 display: block;
 width: 50px;
 height: 40px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--color);
 transition: 1s ease;
}

.button::before {
 top: -1em;
 left: -1em;
}

.button::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

.button:hover::before, .button:hover::after {
 height: 410px;
 width: 410px;
}

.button:hover {
 color: rgb(255, 255, 255);
}

.button:active {
 filter: brightness(.8);
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
  background-color: #003c58;
  border-radius: 21px;

}

.product-device-2 {
  left: 0;
  background-color: #003c58;
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