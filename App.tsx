import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import OneSignal from 'react-native-onesignal';
import {COLORS} from './src/utils/theme';
import {USBPrinter} from 'react-native-thermal-receipt-printer';
import Toast from 'react-native-simple-toast';
import SunmiV2Printer from 'react-native-sunmi-v2-printer';
const App = () => {
  const [printers, setPrinters] = useState([
    {device_name: 'abs', vendor_id: 3233, product_id: 34242},
  ]);
  const [currentPrinter, setCurrentPrinter] = useState();
  const [indexOfPrinter, setIndexOfPrinter] = useState(0);
  useEffect(() => {
    // USBPrinter.init().then(() => {
    //   USBPrinter.getDeviceList()
    //     .then(printersList => {
    //       setPrinters(printersList);
    //       console.log('printersList', printersList);
    //     })
    //     .catch(error => {
    //       Toast.show('Device List' + error, Toast.LONG);
    //       console.log('error', error);
    //     });
    // });
    if (SunmiV2Printer.hasPrinter) {
      Toast.show('no printers:  ', Toast.LONG);
    } else {
      Toast.show('printer available:  ', Toast.LONG);
    }
  }, []);

  const connectPrinter = printer => {
    // // Toast.show('print connect :' + printer.divice_id, Toast.LONG);
    // USBPrinter.connectPrinter(printer.vendor_id, printer.product_id)
    //   .then(connection => {
    //     Toast.show('connected:  ' + connection.device_id, Toast.LONG);
    //     setCurrentPrinter(printer);
    //   })
    //   .catch(error => {
    //     Toast.show('connection error: ' + error, Toast.LONG);
    //   });
  };

  const printTextTest = () => {
    // if (currentPrinter) {
    //   Toast.show('print text: ' + currentPrinter?.device_id, Toast.LONG);
    //   currentPrinter && USBPrinter.printText('<C>sample Testing</C>');
    // } else {
    //   Toast.show('printer not connected ', Toast.LONG);
    // }
  };

  const printBillTest = () => {
    // if (currentPrinter) {
    //   Toast.show('print bill: ' + currentPrinter?.device_id, Toast.LONG);
    //   currentPrinter && USBPrinter.printBill('<C>sample bill</C>');
    // } else {
    //   Toast.show('printer not connected ', Toast.LONG);
    // }
  };

  const changeDevice = () => {
    if (printers && printers.length > 1) {
      if (printers.length < indexOfPrinter + 1) {
        let temp = indexOfPrinter;
        temp = temp + 1;
        setCurrentPrinter(printers[temp]);
        setIndexOfPrinter(temp);
        Toast.show('print bill: ' + currentPrinter?.device_id, Toast.LONG);
      } else {
        setIndexOfPrinter(0);
        setCurrentPrinter(printers[0]);
      }
    } else {
      Toast.show('printer not connected ', Toast.LONG);
    }
  };

  const printInBillFormat = () => {
    // if (currentPrinter) {
    //   Toast.show(
    //     'print bill in bill format: ' + currentPrinter?.device_id,
    //     Toast.LONG,
    //   );
    //   currentPrinter && USBPrinter.printBill(state.text);
    // } else {
    //   Toast.show('printer not connected ', Toast.LONG);
    // }
  };
  return (
    <SafeAreaView style={{paddingHorizontal: 40, paddingTop: 50}}>
      <Button
        title="connect Printer"
        color="#841584"
        onPress={() => connectPrinter(printers[0])}
      />
      <View style={{height: 40}} />
      <Button
        title="test Printer Text"
        color="#841584"
        onPress={() => printTextTest()}
      />
      <View style={{height: 40}} />

      <Button title="Print" color="#841584" onPress={() => printBillTest()} />
      <View style={{height: 40}} />

      <Button
        title="Print bill in Bill format"
        color="#841584"
        onPress={() => printInBillFormat()}
      />
      <View style={{height: 40}} />
      {printers && printers.length > 1 && (
        <Button
          title="connect to Next Device"
          color="#841584"
          onPress={() => changeDevice()}
        />
      )}
      <View style={{height: 40}} />
    </SafeAreaView>
  );
};

export default App;
