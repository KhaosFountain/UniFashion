import * as Notifications from 'expo-notifications';
import {  Alert, Platform } from 'react-native';


Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldPlaySound: false,
        shouldSetBadge: false,
        shouldShowAlert: true,
      };
    },
  });

 export async function scheduleNotificationHandler(item) {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Item Purchased",
        body: `${item} has been bought, Thank you for shopping at UniFashion`,
        data: { userName: 'Richard' },
      },
      trigger: {
        seconds: 1,
      },
    });
}

   export function sendPushNotificationHandler() {
        fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            to: 'ExponentPushToken[sZK1SIyYgm9xYxD]',
            title: 'Test - sent from a device!',
            body: 'This is a push notification test!'
          })
        });
    }

export  function Sub1(){
    (notification) => {
        console.log('NOTIFICATION RECEIVED');
        console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
}

export function Sub2(){
    (response) => {
        console.log('NOTIFICATION RESPONSE RECEIVED');
        console.log(response);
        const userName = response.notification.request.content.data.userName;
        console.log(userName);
      }
}
  
  export default function Notif(){
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission required',
          'Push notifications need the appropriate permissions.'
        );
        return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }
    configurePushNotifications();
  }

