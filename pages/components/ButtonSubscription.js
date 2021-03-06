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
    console.log('ButtonSubscription->useEffect ', connected);

    if(connected) {
      Iap.getSubscriptions(itemSku)
            .then(async subs => {
                RestProps.onGetSubscriptions && await RestProps.onGetSubscriptions(sku, subs);
            });
    }
    
  }, [connected]);

  const handleOnPress = async () => {
    console.log('handleOnPress ', connected);
    if(connected && (!RestProps.onPrepareSubscription || await RestProps.onPrepareSubscription())){
      try {
        console.log('handleOnPress->request', sku);
        var purchase = await Iap.requestSubscription(sku);
        //console.log('handleOnPress->requestSubscription->purchase', purchase);
        const receipt = purchase.transactionReceipt;
        if (receipt) {
          RestProps.onSubscribed && await RestProps.onSubscribed(purchase);
          const ack = await Iap.finishTransaction(purchase);
          console.log('handleOnPress->finishTransaction', ack);
        }
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