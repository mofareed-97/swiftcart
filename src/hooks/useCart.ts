import { ProductType } from "@/types/sanityTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ProductQty extends ProductType {
  qty: number;
}
export interface CartState {
  cart: ProductQty[];
  totalItems: number;
  totalPrice: number;
}

export interface CartActions {
  addToCart: (item: ProductQty) => void;
  removeFromCart: (item: ProductQty) => void;
}

const INITIAL_STATE: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const useCart = create(
  persist<CartState & CartActions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart(product) {
        const cart = get().cart;
        const cartItem = cart.find((item) => item._id === product._id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item._id === product._id
              ? { ...item, qty: (item.qty as number) + product.qty }
              : item
          );

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + product.qty,
            totalPrice: state.totalPrice + product.price * product.qty,
          }));
        } else {
          const updateCart = [...cart, product];

          set((state) => ({
            cart: updateCart,
            totalItems: state.totalItems + product.qty,
            totalPrice: state.totalPrice + product.price * product.qty,
          }));
        }
      },
      removeFromCart(product) {
        const cart = get().cart;

        const selectedProduct = cart.find((item) => item._id === product._id);

        const updateCart = cart.filter((item) => item._id !== product._id);
        set((state) => ({
          cart: updateCart,
          totalItems: state.totalItems - selectedProduct!.qty,
          totalPrice: state.totalPrice - selectedProduct!.qty * product.price,
        }));
      },
    }),
    {
      name: "cart-storage", // unic name
      // getStorage: () => sessionStorage, (optional) by default the 'localStorage' is used
    }
  )
);

// const useCart = create<State & CartActions>((set, get) => ({
//   cart: INITIAL_STATE.cart,
//   totalItems: INITIAL_STATE.totalItems,
//   totalPrice: INITIAL_STATE.totalPrice,
//   addToCart(product) {
//     const cart = get().cart;
//     const cartItem = cart.find((item) => item._id === product._id);

//     if (cartItem) {
//       const updatedCart = cart.map((item) =>
//         item._id === product._id
//           ? { ...item, qty: (item.qty as number) + 1 }
//           : item
//       );

//       set((state) => ({
//         cart: updatedCart,
//         totalItems: state.totalItems + 1,
//         totalPrice: state.totalPrice + product.price,
//       }));
//     } else {
//       const updateCart = [...cart, { ...product, qty: 1 }];

//       set((state) => ({
//         cart: updateCart,
//         totalItems: state.totalItems + 1,
//         totalPrice: state.totalPrice + product.price,
//       }));
//     }
//   },
//   removeFromCart(item) {},
// }));

export default useCart;
