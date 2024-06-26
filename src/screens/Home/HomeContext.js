import createDataContext from '../../reduxbase/createDataContext';

const homeReducer = state => {
  return state;
};

const initialIntent = () => {
  return navigation => {
    fetch(
      'https://lexaclpr5wj5kqazmaajeej37y0bmzwm.lambda-url.ap-south-1.on.aws/',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(json => {
        if (json.numOfPages >= 1) {
          navigation.replace('InputFormPage', {
            payLoad: json,
            pageIndex: 0,
          });
        }
      });
  };
};
export const {Context, Provider} = createDataContext(
  homeReducer,
  {initialIntent: initialIntent},
  [],
);
