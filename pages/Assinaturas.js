import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Section from './components/Section';
import ButtonSubscription from './components/ButtonSubscription';
import * as Iap from 'react-native-iap'
import { useIAP, withIAPContext } from 'react-native-iap';

const AssinaturasScreen = ({ navigation }) => {

    //const [connected, setConnected] = useState(false);

    const {
        connected
      } = useIAP();

    useEffect(() => {
        console.log('initConnection => ', connected);
        
      });
    
    const handlePrepareSubscription = async () => {
        console.log('payment->list->handlePrepareSubscription');
        return true;
    };

    const handleGetSubscriptions = (sku, subs) => {
        console.log('payment->list->handleGetSubscriptions', sku, subs);
    };
    
    const handleOnSubscribed = async (response) => {
        console.log('payment->list->handleOnSubscribed', response);
    };

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.view}>
                <Section title="Plano básico">
                    Assinatura do plano básico.
                </Section>
                <ButtonSubscription
                    onGetSubscriptions={handleGetSubscriptions}
                    onPrepareSubscription={handlePrepareSubscription}
                    onSubscribed={handleOnSubscribed}
                    connected={connected}
                    title="Plano básico"
                    sku="basico"
                />
                
                <ButtonSubscription
                    onGetSubscriptions={handleGetSubscriptions}
                    onPrepareSubscription={handlePrepareSubscription}
                    onSubscribed={handleOnSubscribed}
                    connected={connected}
                    title="Plano familia"
                    sku="familia"
                />
            </View>
        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    view: {
        marginTop: "50%",
    },
    highlight: {
        fontWeight: '700',
    },
  });

  export default withIAPContext(AssinaturasScreen);