import {setUserDataThunk} from './authReducer'

// ===============================================================================
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: !state.initialized,
      };
    default: return state;
  }
};
export default appReducer;

export const initializeApp = () => (dispatch) => {
  dispatch(setUserDataThunk()).then(()=>{
    dispatch(initializedSuccess())
  })
}