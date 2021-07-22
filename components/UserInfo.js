import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserInfo = ({ route }) => {
   const user = route.params;
   console.log(user);
   return (
      <View style={styles.container}>
         <Image
            style={styles.image}
            source={{ uri: user.picture.large }}
         ></Image>
         <Text style={styles.textContainer}>
            {user.name.title} {user.name.first} {user.name.last}
         </Text>
         <Text style={styles.textContainer}>
            <Text style={styles.title}> Email: </Text>
            {user.email}
         </Text>
         <Text style={styles.textContainer}>
            <Text style={styles.title}> Address: </Text>
            {user.location.street.number} {user.location.street.name},
            {user.location.state}, {user.location.city} ,{user.location.country}
         </Text>
         <Text style={styles.textContainer}>
            <Text style={styles.title}> Phone: </Text>
            {user.phone}
         </Text>
      </View>
   );
};

const styles = StyleSheet.create({
   title: {
      fontWeight: 'bold',
   },
   textContainer: {
      marginBottom: 10,
   },
   container: {
      padding: 30,
      alignItems: 'flex-start',
      display: 'flex',
      justifyContent: 'flex-start',
   },
   image: {
      width: 150,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
   },
});

export default UserInfo;
