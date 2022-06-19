import * as React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Section from './components/Section';

const HomeScreen = ({ navigation }) => {
    
    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.view}>
                <Section title="Planos de pagamento">
                    Selecione o seu plano.
                </Section>
                <Button
                    title="Plano básico"
                    onPress={() =>
                        navigation.navigate('basico')
                    }
                />
                <Button
                    title="Plano familia"
                    onPress={() =>
                        navigation.navigate('familia')
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

  export default HomeScreen;