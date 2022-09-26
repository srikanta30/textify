import React, {useReducer, createContext} from "react";
import { initialState, TextReducer } from "./reducer";
 
const TextStateContext = createContext(initialState);
const TextDispatchContext = createContext({});

export function useTextState() {
    const context = React.useContext(TextStateContext);
    if (context === undefined) {
      throw new Error("useTextState must be used within a TextProvider");
    }
    return context;
  }
   
export function useTextDispatch() {
    const context = React.useContext(TextDispatchContext);
    if (context === undefined) {
      throw new Error("useTextDispatch must be used within a TextProvider");
    }
    return context;
  }

export const TextProvider = ({ children } : any) : any => {
    const [state, dispatch] = useReducer(TextReducer, initialState);
   
    return (
      <TextStateContext.Provider value={state}>
        <TextDispatchContext.Provider value={dispatch}>
          {children}
        </TextDispatchContext.Provider>
      </TextStateContext.Provider>
    );
  };