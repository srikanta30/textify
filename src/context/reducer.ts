export const initialState = {
  text: "",
  html: "",
  search: "",
  count: 0,
};

export const TextReducer = (initialState: any, action: any): any => {
  switch (action.type) {
    case "SAVE_TEXT":
      return {
        search: "",
        count: 0,
        html: `<span>${action.payload}</span>`,
        text: action.payload,
      };
    case "SEARCH_TEXT": {
      if (initialState.text !== "" && action.payload !== ""){
        let reg = new RegExp(action.payload, "gi");
        return {
            ...initialState,
            search: action.payload,
            count: initialState.text.match(reg) ? initialState.text.match(reg).length : 0,
            html: initialState.text.replace(
              reg,
              (match: any) => `<mark>${match}</mark>`
            ),
          };
      }
      else{
        return {
          ...initialState,
          search: action.payload,
          count: 0,
          html: `<span>${initialState.text}</span>`
        };
      }
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
