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
  }
};
