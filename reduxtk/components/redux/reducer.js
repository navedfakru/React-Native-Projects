import { Add_To_Cart, Remove_From_Cart } from "./constant";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case Add_To_Cart:
      return [
        ...state,
        action.data
      ]
    case Remove_From_Cart:
      const result = state.filter((item) => { 
        return item.id != action.data
      });
      return [...result]
    default: 
      return state
  }
}