import React from 'react';
import { View, Text } from 'react-native';

const UserInfo = ({ route }) => {
   const user = route.params;
   return (
      <View>
         <Text>Hi mom</Text>
         <Text>{user.email}</Text>
      </View>
   );
};

export default UserInfo;
