import { createSlice } from "@reduxjs/toolkit";

let italianPizza = [];
let americanPizza = [];
let other = [];

const initialState = {
  italianPizza: [
    italianPizza = {
      id: 0,
      img: "margarita.svg",
      name: 'Піца "Маргарита"',
      description:
        "Помідори, моцарела, оливкова олія і базилік, іноді додатково посипається пармезаном.",
      price: 90,
      counters: 0,
    },
    italianPizza = {
      id: 1,
      img: "neapolitan.svg",
      name: "Піца “По-неаполітанськи”",
      description:
        "Помідори, мацарела, пармезан, анчоуси, оликова олія, орегано і базилік.",
      price: 110,
      counters: 0,
    },
    italianPizza = {
      id: 2,
      img: "marinara.svg",
      name: "Піца “Маринара”",
      description:
        "Помідори, часник, оливкова олія, орегано, додатково анчоуси, каперси і чорні оливки.",
      price: 100,
      counters: 0,
    },
    italianPizza = {
      id: 3,
      img: "four.svg",
      name: "Піца “Чотири сири”",
      description: "Чотири сири різних сортів.",
      price: 80,
      counters: 0,
    },
    italianPizza = {
      id: 4,
      img: "diabola.svg",
      name: "Піца “Діабола”",
      description: "Салямі, гострий калабрійський перець.",
      price: 120,
      counters: 0,
    },
    italianPizza = {
      id: 5,
      img: "calzone.svg",
      name: "Піца “Кальцоне”",
      description: "Рікота, шинка, гриби, моцарела, пармезан, орегано.",
      price: 90,
      counters: 0,
    },
  ],
  americanPizza: [
    americanPizza = {
      id: 6,
      img: "york.svg",
      name: '“Нью-йоркська” піца',
      description:
        "Схожа не неаполітанську, моцарела, сир романо, базилік, пекучий перець, орегано. Тонке хрустке тісто.",
      price: 100,
      counters: 0,
    },
    americanPizza = {
      id: 7,
      img: "gavai.svg",
      name: 'Піца “Гавайська”',
      description:
        "Шинка/канадський бекон, ананаси, моцарела.",
      price: 110,
      counters: 0,
    },
    americanPizza = {
      id: 8,
      img: "canadian.svg",
      name: 'Піца “Канадська”',
      description:
        "Соус Маринара, чеддер, моцарела, пепероні, бекон, гриби, цибуля, часник, орігано",
      price: 100,
      counters: 0,
    },
    americanPizza = {
      id: 9,
      img: "chickago.svg",
      name: '“Чикагська” піца',
      description:
        "Моцарела, начика а вибір, томатний соус з пряними травами, пармезан. Товсте тісто з високими бортиками.",
      price: 80,
      counters: 0,
    },
    americanPizza = {
      id: 10,
      img: "brook.svg",
      name: '“Бруклінська” піца',
      description:
        "Нерівна з хрусткими краями. Начинка може бути як традиційною, так і оригінальною.",
      price: 120,
      counters: 0,
    },
  ],
  other: [
    other = {
      id: 11,
      img: "pepsi.svg",
      name: '“Pepsi-Cola”',
      description:
        "Солодкий газоваий напій компанії PepsiCo",
      price: 15,
      counters: 0,
    },
    other = {
      id: 12,
      img: "ccola.svg",
      name: 'Coca-Cola',
      description:
        "Газований безалкогольний прохолоджувальний напій.",
      price: 15,
      counters: 0,
    },
    other = {
      id: 13,
      img: "french.svg",
      name: 'Картопля Фрі',
      description:
        "Шматочки картоплі, обсмажені у великій кількості розпеченої олії ",
      price: 29,
      counters: 0,
    },
    other = {
      id: 14,
      img: "ketchup.svg",
      name: 'Кетчуп',
      description:
        "Соус, до складу якого входять томати, оцет, сіль, перець та інші спеції.",
      price: 7,
      counters: 0,
    },
    other = {
      id: 15,
      img: "mayon.svg",
      name: 'Майонез',
      description:
        "Холодний яєчно-олійний соус.",
      price: 7,
      counters: 0,
    },
  ],
  number: 1,
  cart: {
    count: 0,
    price: 0,
  },
  cartPizza : []
};


export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setFilterCategory: (state, action) => {
      state.number = action.payload
    },
    addPizzaCart: (state, action) => {
      state.cart.count++
      state.cart.price += action.payload.price 
      const italianPizzaCount = state.italianPizza.find(pizza => pizza.id === action.payload.id)
      const americanPizzaCount = state.americanPizza.find(pizza => pizza.id === action.payload.id)
      const otherCount = state.other.find(pizza => pizza.id === action.payload.id)
      if(italianPizzaCount) {
        italianPizzaCount.counters = action.payload.counters
        italianPizzaCount.counters++
      } 
      if(americanPizzaCount) {
        americanPizzaCount.counters = action.payload.counters
        americanPizzaCount.counters++
      }
      if(otherCount) {
        otherCount.counters = action.payload.counters
        otherCount.counters++
      }
      if (action.payload.counters > 0) {
        const newCount = state.cartPizza.find(pizza => pizza.name === action.payload.name)
        newCount.counters = action.payload.counters
        newCount.counters++
      } else {
        state.cartPizza.push(action.payload)
        const newCount = state.cartPizza.find(pizza => pizza.name === action.payload.name)
        newCount.counters++
      }
    }, 
    removePizza: (state, action) => {
      state.cart.count--
      state.cart.price -= action.payload.price 
      const italianPizzaCount = state.italianPizza.find(pizza => pizza.id === action.payload.id)
      const americanPizzaCount = state.americanPizza.find(pizza => pizza.id === action.payload.id)
      const otherCount = state.other.find(pizza => pizza.id === action.payload.id)
      if(italianPizzaCount) {
        italianPizzaCount.counters = action.payload.counters
        italianPizzaCount.counters -= 1
      }
      if(americanPizzaCount) {
        americanPizzaCount.counters = action.payload.counters
        americanPizzaCount.counters -= 1
      }
      if(otherCount) {
        otherCount.counters = action.payload.counters
        otherCount.counters -= 1
      }
      const newCount = state.cartPizza.find(pizza => pizza.id === action.payload.id)
      newCount.counters -= 1
      if(newCount.counters === 0) {
        let index = state.cartPizza.indexOf(newCount)
        state.cartPizza.splice(index, 1) 
      }
    },
    removeFullPizza: (state, action) => {
      state.cart.count -= action.payload.counters 
      state.cart.price -= action.payload.price * action.payload.counters 
      const italianPizzaCount = state.italianPizza.find(pizza => pizza.id === action.payload.id)
      const americanPizzaCount = state.americanPizza.find(pizza => pizza.id === action.payload.id)
      const otherCount = state.other.find(pizza => pizza.id === action.payload.id)
      if(italianPizzaCount) {
        italianPizzaCount.counters -= action.payload.counters
      }
      if(americanPizzaCount) {
        americanPizzaCount.counters -= action.payload.counters
      }
      if(otherCount) {
        otherCount.counters -= action.payload.counters
      }
      const newCount = state.cartPizza.find(pizza => pizza.id === action.payload.id)
      let index = state.cartPizza.indexOf(newCount)
      state.cartPizza.splice(index, 1) 
    },
    removeAllPizza: (state) => {
      state.cart.count = 0
      state.cart.price = 0
      state.italianPizza.forEach(pizza => pizza.counters = 0)
      state.americanPizza.forEach(pizza => pizza.counters = 0)
      state.other.forEach(pizza => pizza.counters = 0)
      state.cartPizza = []
    }
  },
});

export const { setFilterCategory, addPizzaCart, removePizza, removeFullPizza, removeAllPizza } = pizzaSlice.actions
export default pizzaSlice.reducer;
