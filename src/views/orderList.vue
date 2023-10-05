<script setup>
import { computed } from 'vue'
import { cartStore } from '../stores/cart'

const cart_store = cartStore()
const listOrder = computed(() => cart_store.cart_show_order)

</script>
<template>
    <div>
    <RouterLink to="/" class="btn-back" style="margin-top: 20px;">Back</RouterLink>
    <h1 style="margin-top: 40px;">Order-List</h1>
    <table class="table">
      <thead>
          <tr>
              <th>Product</th>
              <th>Price/Cups</th>
              <th></th>
              <th>Price</th>
          </tr>
      </thead>
      <tbody v-for="(order, index) in listOrder" :key="index">
          <tr>
              <td>
                  <img :src="order.product.img" class="img-thumbnail" width="150" > &nbsp;
                  {{ order.product.name }}
              </td>
              <td class="txt">{{ order.product.price }} Bath.</td>
              <td>
                  <span class="mx-2">{{ order.counter }} Cups</span>  
              </td>
              <td>{{ order.total_price }} Baht.</td>
          </tr>
      </tbody>
  </table> <br>
  <h4>Thank you & Have a Nice Day </h4>
  <h1>Total Price {{ cart_store.total }} Baht.</h1>
</div>
<div style="margin-bottom: 300px;"></div>
</template>
<style>

</style>