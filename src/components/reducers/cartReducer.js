import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";
import Item5 from "../images/item5.jpg";
import Item6 from "../images/item6.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SEARCH,
  LOADER,
} from "../actions/action-types/cart-actions";
const initState = {
  items: [

    {
      id: 1,
      title: "cake",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: "cake",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "cake",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "cake",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "cake",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 7,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 8,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 9,
      title: "Item 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 10,
      title: "Item 4",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 11,
      title: "Item 5",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 12,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 13,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 14,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 15,
      title: "Item 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 16,
      title: "Item 4",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 17,
      title: "Item 5",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 18,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 19,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 20,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 21,
      title: "Item 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 22,
      title: "Item 4",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 23,
      title: "Item 5",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 24,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 25,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 26,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 27,
      title: "Item 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 28,
      title: "Item 4",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 29,
      title: "Item 5",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 30,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 31,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 32,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 33,
      title: "Item 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 34,
      title: "Item 4",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 35,
      title: "Item 5",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 36,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 37,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 38,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 39,
      title: "Item 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 40,
      title: "Item 4",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 41,
      title: "Item 5",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 42,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 43,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 44,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },
    {
      id: 45,
      title: "Item 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3,
    },
    {
      id: 46,
      title: "Item 4",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4,
    },
    {
      id: 47,
      title: "Item 5",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5,
    },
    {
      id: 48,
      title: "Item 6",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6,
    },
    {
      id: 49,
      title: "Item 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1,
    },
    {
      id: 50,
      title: "Item 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2,
    },

  ],
  addedItems: [],
  searchItems: [],
  total: 0,
  total_qty: 0,
  currentPage: 1,
  itemPerPage: 6,
  loading: false

};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT

  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
        total_qty: state.total_qty + 1,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        total_qty: state.total_qty + 1,
      };
    }
  }

  if (action.type === LOADER) {
    let totaldata = state.items;
    let itemDisplay = state.itemPerPage;
    let pages = totaldata / itemDisplay;

    return {

      pages: pages,
      loading: state.loading

    }
  }
  if (action.type === SEARCH) {
    console.log("payload", action.payload, state.items);
    // lowercase
    // x.title lowercase  if x.title 
    return {
      ...state,
      value: action.payload,
      searchItems: action.payload ? state.items.filter((x) => {
        const title = x.title.toLowerCase()
        const searchvalue = action.payload.toLowerCase()
        return title.includes(searchvalue) || title === searchvalue
      }) : []

    };
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      total_qty: state.total_qty - itemToRemove.quantity,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
      total_qty: state.total_qty + 1,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        total_qty: state.total_qty - 1,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
        total_qty: state.total_qty - 1,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
