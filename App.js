
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, AppRegistry, SafeAreaView, FlatList  } from 'react-native';
import images from './image.json';
import ImageCard from './ImageCard'



 export default function App() {
   return (
       <ScrollView>
        <FlatList style={styles.container}
          data={images}
          numColumns={2}
          renderItem={({item}) =>
            <ImageCard imgURL={item["urls"]["full"]} authorName={item["user"]["name"]} />
          }
          keyExtractor={item => item["id"] }/>
       </ScrollView>
   );
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     display : "flex",
     flexDirection: "column",
     backgroundColor: '#F3F3F3'
   },
 });
