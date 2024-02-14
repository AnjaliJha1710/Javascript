import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Mudra Loan For Women</Text>
    <Text style={styles.heading}>Annapurna Scheme</Text>
    <Text style={styles.heading}>Stree Shakti Yojana</Text>
    <Text style={styles.heading}>Dena Shakti Yojana</Text>
    <Text style={styles.heading}>Bhartiya Mahila Bank Business Loan</Text>
    <Text style={styles.heading}>Mahila Udhyam Nidhi</Text>
    <Text style={styles.heading}>Orient Mahila Vikas Yojana</Text>
    <Text style={styles.heading}>Cent Kalyani Scheme</Text>
    <Text style={styles.heading}>Udyogini Scheme</Text>
    <Text style={styles.heading}>Stand-Up India</Text>
  </View>
    // <WebView source={{ uri: 'https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=678802104188&hvpos=&hvnetw=g&hvrand=3538787408444314412&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040185&hvtargid=kwd-10573980&hydadcr=14453_2371562/' }} style={{ flex: 1 }} />)
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    width: 300,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: 'black',
    color: 'white',
    padding: 8,
    textAlign: 'center',
    borderRadius: 8,
  },
});