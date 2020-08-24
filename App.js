import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form'; //para una importacion default
//import {FormV2} from './src/components/Form'; //para una importacion de un componente que no es default
//import Form, {FormV2, ejemplo1} from './src/components/Form'; //para una importacion del componente default y todos los demas
import colors from './src/utils/colors';

export default function App() {
  //SafeAreaView coloca los componentes dentro del perimetro de la pantalla
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form />
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290, //px
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1, //Pone por debajo de todos los elementos dentro del safeArea (solo funciona si tiene posicion relativa o absoluta)
  },
});
