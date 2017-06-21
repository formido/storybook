const initialState = {
  showSearchBox: false,
  showLeftPanel: true,
  showDownPanel: false,
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCHBOX': {
      return {
        ...state,
        showSearchBox: action.value || !state.showSearchBox,
      };
    }
    default:
      return state;
  }
};

export default storiesReducer;