import React from 'react';
import {
   StyleSheet,
   SafeAreaView,
   RefreshControl,
   ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import UserList from './components/UserList';
import UserInfo from './components/UserInfo';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
   const [refreshing, setRefreshing] = React.useState(false);

   const onRefresh = React.useCallback(() => {
      setRefreshing(true);
   }, []);

   const finish = () => {
      setRefreshing(false);
   };

   return (
      <SafeAreaView style={styles.container}>
         <Header></Header>
         <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
         >
            <UserList
               navigation={navigation}
               finish={finish}
               refresh={refreshing}
            ></UserList>
         </ScrollView>
      </SafeAreaView>
   );
};

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={UserInfo} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   scrollView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default App;
