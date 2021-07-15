import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
   return (
      <View style={styles.header}>
         <Text style={styles.title}>Random user</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      display: 'flex',
      alignItems: 'center',
      padding: 20,

      backgroundColor: '#034efc',
   },
   title: {
      fontSize: 25,
      color: '#ffff',
   },
});

export default Header;
