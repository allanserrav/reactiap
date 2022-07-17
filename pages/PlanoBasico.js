import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Section from './components/Section';
import ButtonSubscription from './components/ButtonSubscription';
import * as Iap from 'react-native-iap'

const PlanoBasicoScreen = ({ navigation }) => {

    const [connected, setConnected] = useState(false);

    useEffect(() => {
        console.log('initConnection => ', connected);
        async function fetchData() {
            try {
                if(!connected && await Iap.initConnection()) {
                    setConnected(true);
                }
            }
            catch(err) {
                console.log('error in init => ', err);
            }
        }
        fetchData();
        
        return async () => {
          await Iap.endConnection();
          console.log('end connection done');
        };
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

  export default PlanoBasicoScreen;