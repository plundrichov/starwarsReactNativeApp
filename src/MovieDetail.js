import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const MovieDetail = ({ route }) => {
  // tady si znova vytahni data pres fetch, a zafiltruj si to podle cisla epizody
  // v realnem svete by byl stejne jeden endpoint na seznam filmu a pak druhej na detail

  return (
    <ScreenContainer>
      <View style={styles.item}>
        <View style={styles.cardBody}>
          {route.params.poster && (
            <Image
              style={styles.posterImg}
              source={{
                uri: `${URL}${route.params.poster}`,
              }}
            />
          )}
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardTitle}>
            {route.params.title && (
              <Text style={styles.episodeTitle}>{route.params.title}</Text>
            )}
          </View>
          {route.params.episode_number && (
            <Text style={styles.episodeNumber}>
              {route.params.episode_number}
            </Text>
          )}
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
    borderRadius: '0.25rem',
    boxShadow: '2px 4px 18px 0px rgba(255, 255, 255, 0.38)',
  },
  cardBody: {
    width: '208px',
    height: '300px',
  },
  posterImg: {
    height: '100%',
    borderRadius: '0.25rem',
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
    borderRadius: '50%',
  },
});

export default MovieDetail;
