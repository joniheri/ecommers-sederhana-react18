import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const initialState = {
  dataUser: {
    fullname: "Jon Heri",
    gender: "Laki-laki",
  },
  dataCarts: [],
  isLogin: false,
};

const reducer = (state, action) => {
  if (action.type === "PROCESS_LOGIN") {
    return {
      ...state,
      isLogin: true,
    };
  } else if (action.type === "PROCESS_LOGOUT") {
    return {
      ...state,
      isLogin: false,
    };
  } else if (action.type === "ADD_PRODUCT_TO_CART") {
    const checkProductAlreadyExist = state.dataCarts.filter(
      (item) => item.id === action.data.id
    );
    if (checkProductAlreadyExist.length > 0) {
      return {
        ...state,
        dataCarts: state.dataCarts.map((item) =>
          item.id === action.data.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        ),
      };
    }
    return {
      ...state,
      dataCarts: [
        ...state.dataCarts,
        {
          ...action.data,
          qty: 1,
        },
      ],
    };
  } else if (action.type === "KURANGKAN_PRODUCT_FROM_CART") {
    const checkDataAlreadyExist = state.dataCarts.find(
      (item) => item.id === action.data.id
    );
    if (checkDataAlreadyExist.qty > 1) {
      return {
        ...state,
        dataCarts: state.dataCarts.map((item) =>
          item.id === action.data.id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        ),
      };
    }
    return {
      ...state,
      dataCarts: state.dataCarts.filter((item) => item.id !== action.data.id),
    };
  } else if (action.type === "REMOVE_PRODUCT_FROM_CART") {
    return {
      ...state,
      dataCarts: state.dataCarts.filter((item) => item.id !== action.data.id),
    };
  } else {
    return {
      state,
    };
  }
};
