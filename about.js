import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const About = ({ navigation, route }) => {
  const { user } = route.params; 

  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.name}>{user.details.realName}</Text>
      <Text style={styles.detailsText}>Position: {user.details.position}</Text>
      <Text style={styles.detailsText}>Birthday: {user.details.birthday}</Text>
      <Text style={styles.detailsText}>Height: {user.details.height}</Text>
      <Text style={styles.detailsText}>Weight: {user.details.weight}</Text>
      <Text style={styles.detailsText}>Blood Type: {user.details.bloodType}</Text>
      <Text style={styles.detailsText}>Telpon: {user.details.telpon}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default About;
