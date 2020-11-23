import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { IEpisode } from './interfaces/IEpisodes';

const ScreenContainer: React.FC<{}> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

interface IRouteProps {
  route: any;
  title: string;
  episode_number: string;
}

const MovieDetail = ({ route }: IRouteProps) => {
  const urlMovies =
    'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json';
  const urlMovieImage =
    'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/';

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
      const movie = data.movies.find(
        (episode: { episode_number: string }) =>
          episode.episode_number === route.params.episode_number,
      );

      setEpisodes(movie);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <ScreenContainer>
      <View style={styles.item}>
        <View style={styles.cardBody}>
          <Image
            style={styles.posterImg}
            source={{
              uri: `${urlMovieImage}${episodes.poster}`,
            }}
          />
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardTitle}>
            <Text>{episodes.title}</Text>
          </View>
          <Text style={styles.episodeNumber}>{episodes.episode_number}</Text>
        </View>
      </View>
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
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '210px',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#e7e7e7',
    border: '1px solid black',
    borderRadius: 10,
    boxShadow: '2px 4px 18px 0px rgba(255, 255, 255, 0.38)',
  },
  cardBody: {
    width: '208px',
    height: '300px',
  },
  posterImg: {
    height: '100%',
    borderRadius: 10,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 12,
  },
  cardTitle: {
    width: '155px',
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
    borderRadius: 50,
  },
});

export default MovieDetail;
