let mainproducts = [
  {
    id: 1,
    name: "product 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 2,
    name: "car 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: true,
  },
  {
    id: 10,
    name: "ball 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 11,
    name: "apple 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 12,
    name: "nothing 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 13,
    name: "product 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 14,
    name: "product 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 15,
    name: "nothing 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 16,
    name: "product 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
  {
    id: 17,
    name: "product 1",
    price: 100,
    coupon: true,
    stock: true,
    iselected: false,
  },
];
export const initialState = {
  products: mainproducts,
  resetproducts: mainproducts,
  selectallproducts: false,
};

function reducer(state, action) {
  // console.log(action)
  switch (action.type) {
    case "ADD_PRODUCT":
      //logic for adding item in product

      return {
        ...state,
        products: [...state.products, action.product],
      };
      break;
    case "SELECTED_PRODUCT":
      let allproducts = [...state.products];
      allproducts.map((el) => {
        if (el.id === action.id) {
            
            console.log(el.iselected , el.id)
            el.iselected = !el.iselected
            console.log(el.iselected , el.id)
        }
      });

      allproducts.map((el)=>{
          if(el.iselected === true){
            //   console.log(el.id)
          }
      })
      
      return {
        ...state,
        products: allproducts,
      };
      break;

    case "SELECT_ALL_PRODUCTS":
      let select_all_products = [...state.products];
      let selectetallstatus = state.selectallproducts;
      // console.log(selectetallstatus)
      select_all_products.map((el) => (el.iselected = !selectetallstatus));
      console.log(select_all_products);
      return {
        ...state,
        products: select_all_products,
        selectallproducts: !selectetallstatus,
      };
      break;
    case "REMOVE_FROM_PRODUCTS":
      let newproduct = state.products.filter((el) => el.iselected === false);
      console.log(newproduct);
      return { ...state, products: newproduct };
      break;
    case "RESET_TABLE":
      let resettable = [...state.resetproducts];

      return {
        ...state,
        products: resettable,
      };
      break;
    case "UN_SELECT_PRODUCT":
      //logic for removing item from product
      let unselectproduct = [...state.selectedProducts];

      const index = state.selectedProducts.findIndex((id) => id === action.id);

      if (index >= 0) {
        unselectproduct.splice(index, 1);
      }
      // console.log(unselectproduct)

      return { ...state, selectedProducts: unselectproduct };
      break;
    case "FILTER_RESULT":
      let currentProducts = [...state.resetproducts];
      let tempproducts = [...state.products];

      if (
        action.value === "" ||
        action.value === undefined ||
        action.value === null
      ) {
        return {
          ...state,
          products: currentProducts,
        };
      } else {
        let filterProducts = currentProducts.filter((el) =>
          el.name.includes(action.value)
        );
        return {
          ...state,
          products: filterProducts,
        };
      }

      break;
    default:
      return state;
  }
}

export const getproductTotal = (product) =>
  product?.reduce((amount, item) => item.price + amount, 0);

export default reducer;
