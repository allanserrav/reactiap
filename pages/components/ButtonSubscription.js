import React, { useEffect } from 'react'
import { Button } from 'react-native';
import * as Iap from 'react-native-iap'

export default function ButtonSubscription({
  sku,
  connected,
  ...RestProps
}) {
  if (RestProps.disabled) {
    delete RestProps.onPress
  }

  const itemSku = Platform.select({
    ios: [sku],
    android: [sku],
  });

  useEffect(() => {
    initConnection();
    console.log('initConnection => ', connected);

    return () => {
      //Iap.endConnection();
      console.log('end connection done');
    };
  }, [connected]);

  const initConnection = async () => {
    try {
      //const result = await Iap.initConnection();
      const result = true;
      console.log('connection is => ', result);
      if(result && RestProps.onConnected) {
        //const subs = await Iap.getSubscriptions(itemSku);
        const subs = [];
        await RestProps.onConnected(subs);
      }
       
    } catch (err) {
      console.log('error in init => ', err);
    }
  }

  const handleOnPress = async () => {
    console.log('handleOnPress');
    if(!RestProps.onPrepareSubscription || await RestProps.onPrepareSubscription()){
      try {
        console.log('handleOnPress->request', sku);
        //var response = await Iap.requestSubscription(sku);
        var response = {};
        console.log('handleOnPress->requestSubscription->response', response);
        RestProps.onSubscribed && await RestProps.onSubscribed(response);
      } catch (err) {
        console.warn(err.code, err.message);
      }
    }
  }

  return (
    <Button
      onPress={handleOnPress}
      {...RestProps}
    />
  )
}