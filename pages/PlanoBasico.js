import * as React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Section from './components/Section';
import * as RNIap from 'react-native-iap';

const PlanoBasicoScreen = ({ navigation }) => {
    
    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.view}>
                <Section title="Plano básico">
                    Assinatura do plano básico.
                </Section>
                <Button
                    title="Assinar"
                    onPress={() =>
                        navigation.navigate('basico')
                    }
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