import {useContext} from 'react';
import {Context as HomeContext} from './HomeContext';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {initialIntent} = useContext(HomeContext);
  const navigation = useNavigation();
  return (
    initialIntent(navigation)
  );
};

export default HomeScreen;
