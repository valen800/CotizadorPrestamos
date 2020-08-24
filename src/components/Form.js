import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
  const {setCapital, setInterest, setMonths} = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={(value) => setCapital(value.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]} //usar varios estilos envolver en un array todos los estilos
          onChange={(value) => setInterest(value.nativeEvent.text)}
        />
      </View>
      <View>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setMonths(value)}
          useNativeAndroidPickerStyle={false} //permite usar todos los estilos para android
          placeholder={{
            label: 'Selecciona los plazos...',
            value: null,
          }}
          items={[
            {label: '3 meses', value: 3},
            {label: '6 meses', value: 6},
            {label: '12 meses', value: 12},
            {label: '24 meses', value: 24},
          ]}
        />
      </View>
    </View>
  );
}

// export function FormV2() {
//   return (
//     <View>
//       <TextInput placeholder="Cantidad a pedir" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute', //para poder colocar dodne queramos los elementos
    bottom: 0, //Si esta fuera del contenedor padres, es decir, tiene en los estilos -90 por ejemplo no funcionaran los componentes
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row', //para poner inputs al lado del otro
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginLeft: -5,
    marginRight: 5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -6,
    marginRight: -6,
  },
});
