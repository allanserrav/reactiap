import * as React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Section from './components/Section';


const PlanoFamiliaScreen = ({ navigation }) => {
    
    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.view}>
                <Section title="Plano familia">
                    Assinatura do plano familia.
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

  export default PlanoFamiliaScreen;