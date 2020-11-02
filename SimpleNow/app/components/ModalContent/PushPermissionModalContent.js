import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import sentryCaptureMessage from '../../helpers/errorHelpers/sentryCaptureMessage';
import setLocalImage from '../../helpers/setLocalImage';
import { centerAlign, logoTitleFont, titleFont } from '../../styles/fonts';

import styles from './styles';

type Props = {
  onPress: () => any,
};

const PushPermissionModalContent: React.FC<Props> = (props) => {
  const [requestedPermission, setRequestedPermission] = useState(false);

  const askPushPermissions = async () => {
    try {
      global.Notifications.checkPermission((permissions) => {
        if (permissions.notificationCenter) {
          props.onPress();
        } else {
          if (!requestedPermission) {
            global.Notifications.requestPermissions();
            setRequestedPermission(true);
          } else {
            Alert.alert(
              'Notifications Are Required To Use Simple Now',
              "Please navigate to your Phone's settings and enable notifications before continuing.",
              [
                {
                  text: 'Back',
                  onPress: () => {
                    props.onPress();
                  },
                },
                {
                  text: 'OK',
                },
              ]
            );
          }
        }
      });
    } catch (error) {
      sentryCaptureMessage('error in pushPermissionModalContent');
    }
  };

  return (
    <View style={styles.content}>
      <Text style={[logoTitleFont, centerAlign, styles.title]}>
        Notifications
      </Text>
      <Image
        source={setLocalImage('notificationPermission')}
        style={styles.permissionImage}
      />
      <Text style={[titleFont, centerAlign]}>
        Simple Now needs your permission to send you mindfulness exercise
        notifications. Tap "OK" to continue.
      </Text>
      <TouchableOpacity onPress={askPushPermissions}>
        <View style={styles.okButton}>
          <Text style={[titleFont, centerAlign]}>OK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PushPermissionModalContent;
