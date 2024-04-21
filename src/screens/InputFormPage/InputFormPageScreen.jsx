import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Context as InputFormPageContext} from './InputFormPageContext';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Dropdown } from 'react-native-element-dropdown';

const InputFormPageScreen = () => {
  const {state,updateFormData, goToNextPage, submitData} =
    useContext(InputFormPageContext);
  const {payLoad, pageIndex} = useRoute().params;
  console.log(payLoad)
  console.log(pageIndex)
  const questions = payLoad.pages[pageIndex].questions;
  const numPages = payLoad.numOfPages
  const navigation = useNavigation();

  const isDropdownElement = question => {
    return question.dropdownOptions !== undefined;
  };

  const formElement = questions => {
    const block = [];
    questions.forEach(question => {
      block.push(<Text key={question.title}>{question.title}</Text>);
      if (!isDropdownElement(question)) {
        block.push(
          <TextInput
            key = {question.title+question.inputType}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={(question.inputType === 'Number') ? 'numeric' : 'default'}
            onChangeText={(newValue) => {
              const formData = {}
              formData[question.title] = (question.inputType === 'Number')? Number(newValue) : newValue
              updateFormData(formData)
            }
          }
            placeholder="Enter user id"
          />,
        );
      } else {
        const data = []
        question.dropdownOptions.forEach( option => {
            const optionData = {}
            optionData["label"]=option
            optionData["value"]=option
            data.push(optionData)
          }
        )
        block.push(
          <Dropdown
            key = {question.title+question.inputType}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select option"
            searchPlaceholder="Search..."
            onChange={item => {
              const formData = {}
              formData[question.title] = item.value
              updateFormData(formData);
            }}
          />
        )
      }
    });

    if(pageIndex<numPages-1){
      block.push(<Button onPress={()=>
        goToNextPage(pageIndex,payLoad,navigation)
      } title="Next"/>)
    } else {
      block.push(<Button onPress={()=>
        submitData(state.formData)
      } title="Submit"/>)
    }

    return block;
  };
  return (
    <View style={styles.container}>
      {formElement(questions)}
    </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dropdown: {
    margin: 16,
    width: '50%',
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default InputFormPageScreen;
