import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Star Wars Epizodes"
        onPress={() => navigation.push('Movies')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
});

export default Home;
