import createDataContext from '../../reduxbase/createDataContext';
const InputFormPageReducer = (state, action) => {
  switch (action.type) {
    case 'update_form_data': {
      const title = Object.keys(action.payload)[0]
      const isTitleAlreadyPresent = state.formData.some(ob => ob.hasOwnProperty(title))
      if(!isTitleAlreadyPresent) {
        state.formData.push(action.payload)
      } else {
        state.formData.some(ob => {
          if (ob.hasOwnProperty(title)) {
            ob[title] = action.payload[title]
          }
        })
      }
      console.log(state)
      return state
    }
    default:
      return state;
  }
};
const updateFormData = dispatch => {
  return jsonData => {
    dispatch({type: 'update_form_data', payload: jsonData});
  };
};

const goToNextPage = dispatch => {
  return (currentPageIndex,payload,navigation) => {
    navigation.push('InputFormPage', {
      payLoad: payload,
      pageIndex: currentPageIndex+1,
    })
  };
};

export const {Context, Provider} = createDataContext(
  InputFormPageReducer,
  {updateFormData,goToNextPage},
  {formData: []},
);
