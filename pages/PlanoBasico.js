import * as React from 'react';
import { useEffect } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Section from './components/Section';
import * as RNIap from 'react-native-iap';

const PlanoBasicoScreen = ({ navigation }) => {
    
    const sku = 'br.com.goldies.app.basico';
    const productIds = Platform.select({
        ios: [
          sku
        ],
        android: [
          sku
        ]
      });

    useEffect(() => {
        initConnection();

        return () => {
            RNIap.endConnection();
            console.log('end connection done');
        };
    });

    const initConnection = () => {
        RNIap.initConnection()
            .then(result => {
                console.log('connection is => ', result);
                if (result) {
                    getPurchases();
                    getSubscriptions();
                }
            })
            .catch(err => {
                console.log('error in init => ', err);
            });
    }

    const getPurchases = () => {
        RNIap.getAvailablePurchases()
            .then(purchases => {
                console.log('Purchases', purchases);
            })
            .catch(err => {
                console.log('error in getPurchases => ', err);
            });
    }

    const getSubscriptions = () => {
        console.log('Product IDs', productIds);
        RNIap.getSubscriptions(productIds)
            .then(subs => {
                console.log('Subscriptions', subs);
            })
            .catch(err => {
                console.log('error in getSubscriptions => ', err);
            });
    }

    const handleOnAssinar = async () => {
        try {
            console.log('Realizando o subscription', sku);
            var result = await RNIap.requestSubscription(sku);
            console.log('Resposta o subscription', result);
        } catch (err) {
            console.warn(err.code, err.message);
        }
    };

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.view}>
                <Section title="Plano básico">
                    Assinatura do plano básico.
                </Section>
                <Button
                    title="Assinar"
                    onPress={handleOnAssinar}
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