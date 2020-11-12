import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native-elements';
import { StyleSheet, FlatList, Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';


export default function App() {

// movies storage
const [episodes, setEpisodes] = useState([]);

// loads movies data
useEffect( () => {
  getData();
}, []);

// gets movies data
async function getData() {
  try {
    const response = await fetch
    ('https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json');

    const data = await response.json();
    setEpisodes(data.movies)

  } catch (error) {
    console.error(error)
  }
}

// test object episode I.
const obj_0 = {
    "title" : "Star Wars: Episode I - The Phantom Menace",
    "episode_number" : "1",
    "poster" : "star_wars_episode_1_poster.png"
  }

// react navigation
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const episodeSpan = '. Episode'

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.episode_number ? route.params.episode_number.concat(episodeSpan) : 'Error 404 - not found'
      })}
      />
  </HomeStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    {/* <Tabs.Screen name="Search" component={SearchStackScreen} /> */}
  </Tabs.Navigator>
);

// end of react navigation

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const URL = 'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/'

const Home = ({ navigation }) => {
  return (
    <ScreenContainer>
      {/* // There was meant to be used  - title: episodes[0].title - etc..*/}
      <Button
        type="clear"
        title={obj_0.title}
        onPress={() => navigation.push('Details', {
          title: obj_0.title,
          episode_number: obj_0.episode_number,
          poster: obj_0.poster
        })}
      />

      <Button
        type="clear"
        title='Star Wars: Episode II - Attack of the Clones'
        onPress={() => navigation.push('Details', {name: 'React Native School'})}
      />
      <Button
        type="clear"
        title='Star Wars: Episode III - Revenge of the Sith'
        onPress={() => navigation.push('Details', {name: 'React Native School'})}
      />
      <Button
        type="clear"
        title='Star Wars: Episode IV - A New Hope'
        onPress={() => navigation.push('Details', {name: 'React Native School'})}
      />
      <Button
        type="clear"
        title='Star Wars: Episode V - The Empire Strikes Back'
        onPress={() => navigation.push('Details', {name: 'React Native School'})}
      />
      <Button
        type="clear"
        title='Star Wars: Episode VI - Return of the Jedi'
        onPress={() => navigation.push('Details', {name: 'React Native School'})}
      />
  </ScreenContainer>
  );
};

const Details = ({ route }) => {
  return (
    <ScreenContainer>
      <View style={styles.item}>
      <View style={styles.cardBody}>
      {route.params.poster &&
        <Image
          style={styles.posterImg}
          source={{
            uri: `${URL}${route.params.poster}`
          }}
        />}
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.cardTitle}>
        {route.params.title &&
         <Text style={styles.episodeTitle}>{route.params.title}</Text>}
        </View>
        {route.params.episode_number &&
         <Text style={styles.episodeNumber}>{route.params.episode_number}</Text>}
      </View>
    </View>
    </ScreenContainer>
  )
};

return (
  <NavigationContainer>
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    {/* <Tabs.Screen name="Search" component={SearchStackScreen} /> */}
  </Tabs.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0c0c'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
    separator: {
    marginVertical: 8,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '210px',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#e7e7e7',
    border: '1px solid black',
    borderRadius: '0.25rem',
    boxShadow: '2px 4px 18px 0px rgba(255, 255, 255, 0.38)'
  },
  cardBody: {
    width: '208px',
    height: '300px',
  },
  posterImg: {
    height: '100%',
    borderRadius: '0.25rem'
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 12
  },
  cardTitle: {
    width: '155px',
  },
  episodeTitle: {
    fontSize: 14,
    lineHeight: '1.5',
  },
  episodeNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: '30px',
    width: '30px',
    fontSize: 16,
    border: '1px solid black',
    borderRadius: '50%'
  },
});