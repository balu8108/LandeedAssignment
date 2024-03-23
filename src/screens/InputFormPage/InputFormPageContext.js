import createDataContext from '../../reduxbase/createDataContext';
const InputFormPageReducer = (state, action) => {
  switch (action.type) {
    case 'set_auth_result':
      return {
        ...state,
        authResult: action.payload,
      };
    case 'set_phone_number':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case 'set_session_id':
      return {
        ...state,
        sessionId: action.payload,
      };
    default:
      return state;
  }
};

const setAuthResult = dispatch => {
  return authResult => {
    dispatch({type: 'set_auth_result', payload: authResult});
  };
};

const setPhoneNumber = dispatch => {
  return phoneNumber => {
    dispatch({type: 'set_phone_number', payload: phoneNumber});
  };
};

const submitOTL = dispatch => {
  return (phoneNumber, sessionId) => {
    // dispatch({type: 'set_session_id', payload: sessionId});
    // console.log(phoneNumber);
    // console.log(sessionId);
    // authenticate(
    //   '4fa1224e-d377-4b3b-ad86-3008714fb898',
    //   sessionId,
    //   phoneNumber,
    //   'production',
    //   4000,
    // ).then(val => dispatch({type: 'set_auth_result', payload: val}));
  };
};

export const {Context, Provider} = createDataContext(
  InputFormPageReducer,
  {submitOTL, setAuthResult, setPhoneNumber},
  {phoneNumber: '91', sessionId: '', authResult: ''},
);
