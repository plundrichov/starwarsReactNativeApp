import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { IEpisode } from './types/IEpisodes';
import { StackParamList } from './types/StackParamList';
import { ScreenContainer } from 'react-native-screens';

type MoviesProps = StackScreenProps<StackParamList, 'Movies'>;
const Movies: React.FC<MoviesProps> = ({ navigation }) => {
  const urlMovies =
    'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json';

  // movies storage
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  // loads movies data
  useEffect(() => {
    getData();
  }, []);

  // gets movies data
  async function getData() {
    try {
      const response = await fetch(urlMovies);
      const data = await response.json();
      setEpisodes(data.movies);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <ScreenContainer style={styles.container}>
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
    marginTop: 'auto',
  },
});

export default Movies;
