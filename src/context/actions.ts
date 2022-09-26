export const searchText =  async (dispatch: any, payload : any) : Promise<any> =>  {
    try {
      dispatch({
        type: "SEARCH_TEXT",
        payload: payload,
      });

      return;
    } catch (error) {
      console.log(error);
    }
};

export const saveText =  async (dispatch: any, payload : any) : Promise<any> =>  {
    try {
      dispatch({
        type: "SAVE_TEXT",
        payload: payload,
      });

      return;
    } catch (error) {
      console.log(error);
    }
};