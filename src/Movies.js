import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-elements';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const Movies = ({ navigation }) => {
  const urlMovies =
    'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json';

  // movies storage
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  // loads movies data
  useEffect(() => {
    getData();
  }, []);

  // gets movies data
  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(urlMovies);

      const data = await response.json();
      setEpisodes(data.movies);

      setLoading(false);
    } catch (error) {
      console.error(episodes);
    }
  }

  return (
    <ScreenContainer>
      {episodes.map(episode => (
      <Button
        // title={loading ? <ActivityIndicator /> : episodes[0].title}
        // onPress={loading ? <ActivityIndicator /> : () => navigation.push('MovieDetail', {
        //   title: episodes[0].title,
        //   episode_number: episodes[0].episode_number,
        //   poster: episodes[0].poster
        // })}
        // onPress={() => navigation.push('MovieDetail', {
        //     title: loading ? <ActivityIndicator /> : episodes[0].title,
        //     episode_number:  loading ? <ActivityIndicator /> : episodes[0].page_number,
        //     poster:  loading ? <ActivityIndicator /> : episodes[0].poster
        //   })}
        type="clear"
        title={episode.title}
        onPress={() =>
          navigation.push('MovieDetail', {
            episode_number: episode.episode_number,
          })
        }
      />))}

      {/* <Button
          type="clear"
          title='Star Wars: Episode II - Attack of the Clones'
          onPress={ () => navigation.push('MovieDetail', {
            title: episodes[1].title,
            episode_number: episodes[1].episode_number,
            poster: episodes[1].poster
          })}
        />
        <Button
          type="clear"
          title='Star Wars: Episode III - Revenge of the Sith'
          onPress={() => navigation.push('MovieDetail', {name: 'React Native School'})}
        />
        <Button
          type="clear"
          title='Star Wars: Episode IV - A New Hope'
          onPress={() => navigation.push('MovieDetail', {name: 'React Native School'})}
        />
        <Button
          type="clear"
          title='Star Wars: Episode V - The Empire Strikes Back'
          onPress={() => navigation.push('MovieDetail', {name: 'React Native School'})}
        />
        <Button
          type="clear"
          title='Star Wars: Episode VI - Return of the Jedi'
          onPress={() => navigation.push('MovieDetail', {name: 'React Native School'})}
        /> */}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
});

export default Movies;
