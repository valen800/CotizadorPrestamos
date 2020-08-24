import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form'; //para una importacion default
//import {FormV2} from './src/components/Form'; //para una importacion de un componente que no es default
//import Form, {FormV2, ejemplo1} from './src/components/Form'; //para una importacion del componente default y todos los demas
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capital, interest, months]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMessage('Añade el interes del prestamos');
    } else if (!months) {
      setErrorMessage('Seleccióna los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  //SafeAreaView coloca los componentes dentro del perimetro de la pantalla
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <ResultCalculation
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer calculate={calculate} />
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
