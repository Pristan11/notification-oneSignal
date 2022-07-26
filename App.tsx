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
import ThermalPrinterModule from 'react-native-thermal-printer';
import {COLORS} from './src/utils/theme';
import {USBPrinter} from 'react-native-thermal-receipt-printer';
import Toast from 'react-native-simple-toast';

ThermalPrinterModule.defaultConfig = {
  ...ThermalPrinterModule.defaultConfig,
  ip: '192.168.100.246',
  port: 9100,
  timeout: 30000,
};

const App = () => {
  const [printers, setPrinters] = useState([
    {device_name: 'abs', vendor_id: 3233, product_id: 34242},
  ]);
  const [currentPrinter, setCurrentPrinter] = useState();
  const [indexOfPrinter, setIndexOfPrinter] = useState(0);
  useEffect(() => {
    USBPrinter.init().then(() => {
      USBPrinter.getDeviceList()
        .then(printersList => {
          setPrinters(printersList);
          console.log('printersList', printersList);
        })
        .catch(error => {
          Toast.show('Device List' + error, Toast.LONG);
          console.log('error', error);
        });
    });
  }, []);

  const connectPrinter = printer => {
    // Toast.show('print connect :' + printer.divice_id, Toast.LONG);
    USBPrinter.connectPrinter(printer.vendor_id, printer.product_id)
      .then(connection => {
        Toast.show('connected:  ' + connection.device_id, Toast.LONG);
        setCurrentPrinter(printer);
      })
      .catch(error => {
        Toast.show('connection error: ' + error, Toast.LONG);
      });
  };

  const printTextTest = () => {
    if (currentPrinter) {
      Toast.show('print text: ' + currentPrinter?.device_id, Toast.LONG);
      currentPrinter && USBPrinter.printText('Test');
    } else {
      Toast.show('printer not connected ', Toast.LONG);
    }
  };

  const printBillTest = () => {
    if (currentPrinter) {
      Toast.show('print bill: ' + currentPrinter?.device_id, Toast.LONG);
      currentPrinter && USBPrinter.printBill('<c>sample</c>');
    } else {
      Toast.show('printer not connected ', Toast.LONG);
    }
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
  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('91105012-75b5-402d-a4ca-003a9104133a');

    // @ts-ignore
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });

    // OneSignal.setEmail('tesingone799@gmail.com');
    OneSignal.removeExternalUserId(res => {
      console.log(res);
      OneSignal.setExternalUserId('tesingone798@gmail.com');
    });
    OneSignal.getDeviceState().then(res => console.log('response', res));
    // OneSignal?.getExternalUserId().then(function(externalUserId){
    //   console.log("externalUserId: ", externalUserId);
    // })
    // @ts-ignore
    // OneSignal.push(function() {
    //   OneSignal.setExternalUserId('+94762053485');
    // });
  }, []);
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const [state, setState] = useState({
    text:
      '[C]<img>https://via.placeholder.com/300.jpg</img>\n' +
      '[L]\n' +
      "[C]<u><font size='big'>ORDER N°045</font></u>\n" +
      '[L]\n' +
      '[C]================================\n' +
      '[L]\n' +
      '[L]<b>BEAUTIFUL SHIRT</b>[R]9.99e\n' +
      '[L]  + Size : S\n' +
      '[L]\n' +
      '[L]<b>AWESOME HAT</b>[R]24.99e\n' +
      '[L]  + Size : 57/58\n' +
      '[L]\n' +
      '[C]--------------------------------\n' +
      '[R]TOTAL PRICE :[R]34.98e\n' +
      '[R]TAX :[R]4.23e\n' +
      '[L]\n' +
      '[C]================================\n' +
      '[L]\n' +
      "[L]<font size='tall'>Customer :</font>\n" +
      '[L]Raymond DUPONT\n' +
      '[L]5 rue des girafes\n' +
      '[L]31547 PERPETES\n' +
      '[L]Tel : +33801201456\n' +
      '[L]\n' +
      "[C]<barcode type='ean13' height='10'>831254784551</barcode>\n" +
      "[C]<qrcode size='20'>http://www.developpeur-web.dantsu.com/</qrcode>",
  });

  const [defaultText, setDefaultText] = useState({
    text:
      '[C]<img>https://via.placeholder.com/300.jpg</img>\n' +
      '[L]\n' +
      "[C]<u><font size='big'>ORDER N°045</font></u>\n" +
      '[L]\n' +
      '[C]================================\n' +
      '[L]\n' +
      '[L]<b>BEAUTIFUL SHIRT</b>[R]9.99e\n' +
      '[L]  + Size : S\n' +
      '[L]\n' +
      '[L]<b>AWESOME HAT</b>[R]24.99e\n' +
      '[L]  + Size : 57/58\n' +
      '[L]\n' +
      '[C]--------------------------------\n' +
      '[R]TOTAL PRICE :[R]34.98e\n' +
      '[R]TAX :[R]4.23e\n' +
      '[L]\n' +
      '[C]================================\n' +
      '[L]\n' +
      "[L]<font size='tall'>Customer :</font>\n" +
      '[L]Raymond DUPONT\n' +
      '[L]5 rue des girafes\n' +
      '[L]31547 PERPETES\n' +
      '[L]Tel : +33801201456\n' +
      '[L]\n' +
      "[C]<barcode type='ean13' height='10'>831254784551</barcode>\n" +
      "[C]<qrcode size='20'>http://www.developpeur-web.dantsu.com/</qrcode>",
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const onPress = async () => {
    setError('');
    setCount(count + 1);
    try {
      console.log('We will invoke the native module here!');
      // await ThermalPrinterModule.printTcp({ payload: state.text });

      //
      // bluetooth
      await ThermalPrinterModule.printBluetooth({payload: state.text});

      console.log('done printing');
      setError('');
    } catch (err) {
      //error handling
      console.log(err.message);
      setError(err.message);
    }
  };

  const hanldeNotification = () => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic NzViMTg1YzItNzM2Ni00ZDg1LTk5ZGEtMWU5MmM4ZjY0MzVi',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_id: '91105012-75b5-402d-a4ca-003a9104133a',
        channel_for_external_user_ids: 'push',
        included_segments: ['Subscribed Users'],
        contents: {en: 'Switto or Any Language Message', es: 'Spanish Message'},
        name: 'INTERNAL_CAMPAIGN_NAME',
        big_picture:
          'https://i.gadgets360cdn.com/large/iphone_13_mini_rear_ndtv_1634220984395.jpg',
        large_icon:
          'https://media.sketchfab.com/models/8b13cb3155da41108b1a13e3bc35442d/thumbnails/1d84c50b08a140b4b34130202daeb720/blob.jpeg',
      }),
    };

    fetch('https://onesignal.com/api/v1/notifications', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };
  return (
    <SafeAreaView style={{paddingHorizontal: 40, paddingTop: 50}}>
      {/*<Text style={{color: COLORS.white,  fontSize: 16, marginTop: 30, marginBottom: 10}}>Printing text blow , if you want edit</Text>*/}

      {/*<TextInput*/}
      {/*  value={state.text}*/}
      {/*  onChangeText={(text) => setState((prev) => ({ ...prev, text }))}*/}
      {/*  placeHolder={'type text , to print'}*/}
      {/*  style={{borderWidth: 1, borderColor: COLORS.white, marginBottom: 10}}*/}
      {/*/>*/}
      <Button
        title="connect Printer"
        color="#841584"
        onPress={() => connectPrinter(printers[0])}
        style={{
          height: 30,
          paddingVertical: 20,
          marginTop: 5,
          marginBottom: 30,
        }}
      />
      <View style={{height: 40}} />
      <Button
        title="test Printer Text"
        color="#841584"
        onPress={() => printTextTest()}
        style={{
          height: 30,
          paddingVertical: 20,
          marginTop: 35,
          marginBottom: 30,
        }}
      />
      <View style={{height: 40}} />

      <Button
        title="Print"
        color="#841584"
        onPress={() => printBillTest()}
        style={{
          height: 30,
          paddingVertical: 20,
          marginTop: 25,
          marginBottom: 30,
        }}
      />
      <View style={{height: 40}} />
      {printers && printers.length > 1 && (
        <Button
          title="connect to Next Device"
          color="#841584"
          onPress={() => changeDevice()}
          style={{
            height: 30,
            paddingVertical: 20,
            marginTop: 25,
            marginBottom: 30,
          }}
        />
      )}
      <View style={{height: 40}} />

      {/*<Button*/}
      {/*  title="send notification"*/}
      {/*  color="#841584"*/}
      {/*  onPress={hanldeNotification}*/}
      {/*  style={{height: 30, paddingVertical: 20, marginTop: 35}}*/}
      {/*/>*/}
      {/*<View style={{marginTop: 200}}>*/}
      {/*  <Button*/}
      {/*    title="Print"*/}
      {/*    color="#841584"*/}
      {/*    onPress={onPress}*/}
      {/*    style={{height: 30, paddingVertical: 20}}*/}
      {/*  />*/}
      {/*  <Text style={{color: COLORS.white,  fontSize: 16, marginTop: 30}}>Press count  {count}</Text>*/}
      {/*  {error!= '' &&  <Text style={{color: COLORS.white,  fontSize: 16, marginTop: 30}}>Error message => {error}</Text>}*/}
      {/*</View>*/}
    </SafeAreaView>
  );
};

export default App;
