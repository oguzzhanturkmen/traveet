import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { HeartIcon , ChatBubbleOvalLeftIcon, PaperAirplaneIcon} from 'react-native-heroicons/outline'

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const tweets = [
  {
    id: 1,
    user: "NatureLover",
    content: "Just had an amazing hike today. The weather was perfect! 🌲☀️",
    avatar: 'https://via.placeholder.com/50/0000FF/808080?text=User1',
    time: '2h'
  },
  {
    id: 2,
    user: "TechGuru",
    content: "Excited about the new tech releases this year. Can't wait to get my hands on them! 📱💻",
    avatar: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=User2',
    time: '3h'
  },
  {
    id: 3,
    user: "Foodie",
    content: "Who knew vegan food could be this delicious? Totally loving this new lifestyle. 🥗🍲",
    avatar: 'https://via.placeholder.com/50/FFFF00/000000?text=User3',
    time: '4h'
  },
  {
    id: 4,
    user: "MusicFan",
    content: "Listening to the new album from my favorite artist and it's pure gold! 🎶🎧",
    avatar: 'https://via.placeholder.com/50/008000/FFFFFF?text=User4',
    time: '5h'
  },
  {
    id: 5,
    user: "Bookworm",
    content: "Just finished reading an incredible novel. Can't wait for the sequel! 📚❤️",
    avatar: 'https://via.placeholder.com/50/00FFFF/000000?text=User5',
    time: '6h'
  },
  {
    id: 6,
    user: "TravelBug",
    content: "Exploring new destinations is always an adventure. Where to next? ✈️🌍",
    avatar: 'https://via.placeholder.com/50/FF00FF/FFFFFF?text=User6',
    time: '1d'
  },
  // ... more mock tweets
];


const Feed = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={{ backgroundColor: '#FFF', height: 50, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#000', fontSize: 30, fontWeight: "bold" }}>Traveet</Text>
    </View>
    <ScrollView style={styles.container}>
      {tweets.map(tweet => (
        <>
        <View key={tweet.id} style={styles.tweetContainer}>
          <Image source={{ uri: tweet.avatar }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.userName}>{tweet.user}</Text>
          </View>
        </View>
        <View >
        <Image  source={{ uri: 'https://katieone.com/wp-content/uploads/2020/08/38281424_301647183748110_6718974789786009600_n-4.jpg' }}  style={{ width: width , height: height * 0.4 }} />
        </View>
        <View style={{ padding: 10 }}>
          
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <HeartIcon size={40} color={"black"}  /> 
            <ChatBubbleOvalLeftIcon size={40} color={"black"} style={{marginBottom : 4 , marginLeft : 8}} /> 
            <PaperAirplaneIcon size={40} color={"black"} style={{marginBottom : 0 , marginLeft : 8}} />
                
          </View>

          <Text>{tweet.content}</Text>
          <Text style={{ color: 'gray' }}>{tweet.time}</Text>
        </View>
        </>
      ))}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#000', // or any other background color
  },container: {
    flex: 1,
    backgroundColor: '#fff',
    height: height,
    width: width,
  },
  tweetContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  // ... other styles
});

export default Feed;
