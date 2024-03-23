import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Context as HomeContext} from './HomeContext';
import {useNavigation, useRoute} from '@react-navigation/native';

const HomeScreen = () => {
  const {initialIntent, navigateToDevice} = useContext(HomeContext);
  const navigation = useNavigation();
  return (
    // <View style={styles.container}>
    //   <Button onPress={() => initialIntent(navigation)} title="OTL only" />
    //   <View style={styles.emptyView} />
    //   <Button
    //     title="Device only"
    //     onPress={() => navigateToDevice(navigation)}
    //   />
    // </View>
    initialIntent(navigation)
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyView: {
    height: 16,
  },
});

export default HomeScreen;
