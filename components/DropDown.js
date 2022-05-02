import React, {useState} from 'react';
import { Button, View, Image, Pressable, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Español', value: 'ESP',
    containerStyle: {
      width: 140,
      left: 10,
      borderBottomColor: '#CFCFCF',
      borderBottomWidth: 1,
      padding: 10
    }},
    {label: 'Català', value: 'CAT',
    containerStyle: {
      padding: 10
    }},
  ]);

  DropDownPicker.setMode("BADGE");

  return (
    <View style={styles.container}>
      <Triangle/>
      <DropDownPicker
        open={true}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder=""
        showArrowIcon={false}
        dropdownIconColor= '#E03E52'
        onSelectItem={(item) => {
          console.log(item);
          setOpen={closed};
        }}
        arrowIconStyle={{
          left: 140,
          width: 20,
          height: 10,
          color: '#E03E52'
        }}
        textStyle={{
          fontSize: 20,
          textAlign: 'center',
          color: '#E03E52'
        }}
        showTickIcon={false}
        disableBorderRadius={true}
        dropDownContainerStyle={{
          borderColor: '#E03E52',
          borderWidth: 2,
          backgroundColor: '#ffffff'
        }}
        maxWidth={20}
      />
    </View>
  );

}

const Triangle = () => {
  return <View style={styles.triangle} />;
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 165,
    backgroundColor: '#ffffff',
    zIndex: 100
  },
  triangle: {
    left: 139,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 9,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#E03E52',
  },
});