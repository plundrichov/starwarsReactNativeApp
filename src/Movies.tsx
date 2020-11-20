import React, { useEffect, useState, ReactNode } from 'react';
import { Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

interface Children {
  children: ReactNode;
}

const ScreenContainer = ({ children }: Children) => (
  <View style={styles.container}>{children}</View>
);

const Movies = ({ navigation }: StackScreenProps<{ MovieDetail: any }>) => {
  const urlMovies =
    'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json';

  // movies storage
  const [loading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState<any[]>([]);

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
      console.warn(error);
    }
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
