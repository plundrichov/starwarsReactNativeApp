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
    } catch (error) {}
  }

  return (
    <ScreenContainer>
      {episodes.map(episode => (
        <Button
          type="clear"
          title={episode.title}
          onPress={() =>
            navigation.push('MovieDetail', {
              episode_number: episode.episode_number,
            })
          }
        />
      ))}
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
