import { defineStore } from "pinia";
import { ref } from 'vue';
import { computed } from 'vue';

export const productStore = defineStore('product', () => {

    const load_product = computed(() => productList.value.length > 0 )
    
    const productList = ref([
    { 
    id: 1, name: 'Hot Latte', price:189 ,
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80",
    type: "Arabica Coffee",
    detail:'Caffè latte, often shortened to just latte in English, is a coffee drink of Italian origin made with espresso and steamed milk. Variants include the chocolate-flavored mocha or replacing the coffee with another beverage base such as masala chai (spiced Indian tea), mate, matcha, turmeric or rooibos; alternatives to milk, such as soy milk or almond milk, are also used.'
    },{ 
    id: 2, name: 'Ice Caramel Maciato',price:199,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    type: "Robusta Coffee",
    detail:'Latte macchiato is a coffee beverage. The name is Italian for "stained milk" or "marked milk", referring to the way the drink is prepared by pouring a shot of espresso into steamed milk. It is a play on espresso macchiato, an older drink consisting of espresso marked with a dollop or two of milk or cream.'
    },{ 
    id: 3, name: 'Hot Dark Americano',price:159,
    img: "https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZSUyMGN1cHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    type: "Arabica Coffee",
    detail:'Caffè Americano (also known as Americano or American; Spanish: café americano, lit. ("American coffee") is a type of coffee drink prepared by diluting an espresso with hot water (typically 1:5), giving it a different flavor from traditionally brewed coffee.[citation needed] Its strength varies with the number of shots of espresso and amount of water added. The name is also spelled with varying capitalization and use of diacritics: e.g., café americano.'
    },{ 
    id: 4, name: 'Hot Cappuccino',price:169,
    img: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvZmZlZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    type: "Robusta Coffee",
    detail:'A cappuccino ( Italian plural: cappuccini from German Kapuziner) is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam). Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon ("in the United States") or chocolate powder ("in Europe"). It is typically smaller in volume than a caffè latte, with a thicker layer of microfoam'
    },{ 
    id: 5, name: 'Ice Americano',price:149,
    img: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY29mZmVlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    type: "Arabica Coffee",
    detail:'Caffè Americano (also known as Americano or American; Spanish: café americano, lit. ("American coffee") is a type of coffee drink prepared by diluting an espresso with hot water (typically 1:5), giving it a different flavor from traditionally brewed coffee.[citation needed] Its strength varies with the number of shots of espresso and amount of water added. The name is also spelled with varying capitalization and use of diacritics: e.g., café americano.'
    },{ 
    id: 6, name: 'Arabica Drip Coffee',price:189,
    img: "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNlJTIwY29mZmVlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    type: "Arabica Coffee",
    detail:'Drip coffee is made by pouring hot water onto ground coffee beans, allowing it to brew. There are several methods for doing this, including using a filter. Terms used for the resulting coffee often reflect the method used, such as drip-brewed coffee, filtered coffee, or immersion-brewed coffee in general. Manually brewed drip coffee is typically referred to as pour-over coffee.[1][2] Water seeps through the ground coffee, absorbing its constituent chemical compounds, and then passes through a filter. The used coffee grounds are retained in the filter, while the brewed coffee is collected in a vessel such as a carafe or pot.'
    },{ 
    id: 7, name: 'Ice Matcha Latte',price:259,
    img: "https://plus.unsplash.com/premium_photo-1661756522906-5df7ee690868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGljZSUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    type: "Green Tea From Japan",
    detail:'Matcha is finely ground powder of specially grown and processed green tea leaves originating in China traditionally consumed in East Asia. It is mostly produced in Japan today. The green tea plants used for matcha are shade-grown for three to four weeks before harvest; the stems and veins are removed during processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine.'
    },{ 
    id: 8, name: 'Hot Matcha Latte',price:239,
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyZWVuJTIwdGVhfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    type: "Green Tea From Japan Only",
    detail:'Matcha is finely ground powder of specially grown and processed green tea leaves originating in China traditionally consumed in East Asia. It is mostly produced in Japan today. The green tea plants used for matcha are shade-grown for three to four weeks before harvest; the stems and veins are removed during processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine.'
    },{ 
    id: 9, name: 'Hot Hojicha Tea Set',price:299,
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    type: "Hojicha Tea From Japan Only",
    detail:'Hōjicha (ほうじ茶, 焙じ茶, lit. "roasted tea") is a Japanese green tea. It is distinctive from other Japanese green teas because it is roasted in a porcelain pot over charcoal. It is roasted at 150 °C (302 °F) to prevent oxidation and produce a light golden colour, as opposed to other Japanese teas which are steamed. In general, the base of a hōjicha consists of leaves from the second harvest or after.'
    },{ 
    id: 10, name: 'Hot Oolong Tea',price:99,
    img: "https://images.unsplash.com/photo-1498604636225-6b87a314baa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxnZW5tYWljaGElMjB0ZWF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    type: "Oolong Tea",
    detail:'Oolong Tea simplified Chinese: 乌龙茶; traditional Chinese: 烏龍茶 (wūlóngchá, "dark dragon" tea) is a traditional semi-oxidized Chinese tea (Camellia sinensis) produced through a process including withering the plant under strong sun and oxidation before curling and twisting.'
    },
    ]);

    return {productList, load_product }

});