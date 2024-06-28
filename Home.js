import React from 'react';
import { Text, View, StyleSheet, Button, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  const usersData = [
    {
      id: 1,
      name: "Jin BTS",
      avatar: require("../assets/jin.png"),
      details: {
        realName: "Kim Seok Jin",
        position: "Sub Vocalist, Visual",
        birthday: "4 December 1992",
        height: "179.5 cm",
        weight: "61 kg",
        bloodType: "O",
        telpon: "0608181023",
      }
    },
    {
      id: 2,
      name: "Suga BTS",
      avatar: require("../assets/yongi.png"),
      details: {
        realName: "Min Yongi",
        position: "Lead Rapper",
        birthday: "9 March 1993",
        height: "174 cm",
        weight: "63 kg",
        bloodType: "O",
        telpon: "0765535531",
      }
    },
    {
      id: 3,
      name: "Jhope BTS",
      avatar: require("../assets/jhope.png"),
      details: {
        realName: "Jung Hoseok",
        position: "Main Dancer, Rapper, Vocalist",
        birthday: "18 February 1994",
        height: "177 cm",
        weight: "65 kg",
        bloodType: "A",
        telpon: "060707025",
      }
    },
    {
      id: 4,
      name: "Rapmon BTS",
      avatar: require("../assets/rapmon.png"),
      details: {
        realName: "Kim Namjoon",
        position: "Leader, Main Rapper",
        birthday: "12 September 1994",
        height: "181 cm",
        weight: "76 kg",
        bloodType: "A",
        telpon: "0604564544",
      }
    },
    {
      id: 5,
      name: "Jimin BTS",
      avatar: require("../assets/jimin.png"),
      details: {
        realName: "Park Jimin",
        position: "Main Dancer, Lead Vocalist",
        birthday: "13 October 1995",
        height: "174 cm",
        weight: "58.6 kg",
        bloodType: "A",
        telpon: "0603454555",
      }
    },
    {
      id: 6,
      name: "V BTS",
      avatar: require("../assets/v.png"),
      details: {
        realName: "Kim Taehyung",
        position: "Sub Vocalist, Visual",
        birthday: "30 December 1995",
        height: "179 cm",
        weight: "64 kg",
        bloodType: "AB",
        telpon: "0609887667",
      }
    },
    {
      id: 7,
      name: "Jungkook BTS",
      avatar: require("../assets/jeka.png"),
      details: {
        realName: "Jeon Jungkook",
        position: "Main Vocalist, Dancer, Rapper, Center, Maknae",
        birthday: "1 September 1997",
        height: "179 cm",
        weight: "71 kg",
        bloodType: "A",
        telpon: "0602121403",
      }
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile Member BTS</Text>
      {usersData.map((user) => (
        <View key={user.id} style={styles.profileContainer}>
          <Image source={user.avatar} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('About', { user })} 
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '90%', 
    alignSelf: 'center',
  },
  avatar: {
    width: 60,
    height: 60, 
    borderRadius: 50, 
    marginRight: 10, 
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
