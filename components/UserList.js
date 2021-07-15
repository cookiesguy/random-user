import React from 'react';

import {
   FlatList,
   View,
   Text,
   StyleSheet,
   Image,
   Pressable,
} from 'react-native';

const Item = ({ navigation, user }) => {
   const gotoDetail = () => {
      navigation.navigate('Detail', user);
   };
   return (
      <View style={styles.user}>
         <Text style={styles.guideline}>Scroll to get another user</Text>
         <Text style={styles.userName}>{user.name.first}</Text>
         <Image
            style={styles.image}
            source={{ uri: user.picture.large }}
         ></Image>
         <Pressable onPress={gotoDetail} style={styles.button}>
            <Text style={styles.buttonText}>See detail</Text>
         </Pressable>
      </View>
   );
};

const UserList = ({ refresh, finish, navigation }) => {
   const [users, setUser] = React.useState([]);

   const renderItem = ({ item }) => (
      <Item navigation={navigation} user={item} />
   );

   const fetchUser = React.useCallback(async () => {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      setUser(data.results);
      finish();
   }, []);

   React.useEffect(() => {
      fetchUser();
   }, [fetchUser]);

   React.useEffect(() => {
      if (refresh) {
         fetchUser();
      }
   }, [refresh, fetchUser]);

   return (
      <View>
         <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={user => user.id}
         ></FlatList>
      </View>
   );
};

const styles = StyleSheet.create({
   user: {
      display: 'flex',
      padding: 20,
   },
   image: {
      width: 200,
      height: 200,
      borderRadius: 10,
   },
   user: {
      marginTop: 100,
      display: 'flex',
      justifyContent: 'space-between',
      height: 350,
      alignItems: 'center',
   },
   userName: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   button: {
      borderRadius: 10,
      backgroundColor: '#034efc',
      padding: 20,
      width: 200,
      display: 'flex',
      alignItems: 'center',
   },
   buttonText: {
      color: '#ffff',
   },
   guideline: {
      fontSize: 18,
      fontStyle: 'italic',
   },
});

export default UserList;
