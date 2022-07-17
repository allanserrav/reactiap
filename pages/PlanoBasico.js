import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Section from './components/Section';
import ButtonSubscription from './components/ButtonSubscription';

const PlanoBasicoScreen = ({ navigation }) => {
    
    //const sku = 'br.com.goldies.app.basico';

    const [connected, setConnected] = useState(false);
    
    const handlePrepareSubscription = async () => {
        console.log('payment->list->handlePrepareSubscription');
        return true;
    };
    
    const handleOnConnected = async (subs) => {
        console.log('payment->list->handleOnConnected', subs);
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
                    onConnected={handleOnConnected}
                    onPrepareSubscription={handlePrepareSubscription}
                    onSubscribed={handleOnSubscribed}
                    connected
                    title="Plano básico"
                    sku="basico"
                />
                <br />
                <ButtonSubscription
                    onConnected={handleOnConnected}
                    onPrepareSubscription={handlePrepareSubscription}
                    onSubscribed={handleOnSubscribed}
                    connected
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

  export default PlanoBasicoScreen;