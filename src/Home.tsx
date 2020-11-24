import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View, Button } from 'react-native';
import { StackParamList } from './types/StackParamList';

type MoviesProps = StackScreenProps<StackParamList, 'Movies'>;
const Home: React.FC<MoviesProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Button
        title="Star Wars Epizodes"
        onPress={() => navigation.push('Movies')}
      />
    </View>
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

export default Home;
