import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { HeartIcon , ChatBubbleOvalLeftIcon, PaperAirplaneIcon, BookmarkIcon, EnvelopeIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const width = Dimensions.get('window').width; 
const height = Dimensions.get('window').height; 

const tweets = [
  {
    id: 1,
    user: "NatureLover",
    title: "A Perfect Day for a Hike",
    content: "Watched an incredible movie last night. Pushing my limits in today's workout was rewarding. Exploring vegan cuisine has been a delightful journey. Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. The variety and flavors have exceeded my expectations, making each meal an exciting adventure. It's a refreshing and satisfying lifestyle change. Fitness is not just about the body, it's a mental challenge too. Each day brings me closer to my goals. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. 🎥🍿 .Today's hike was amazing. The weather was ideal, the trails inviting, and nature's beauty was in full display. I felt rejuvenated with every step taken in the serene wilderness. 🌲☀️",
    avatar: 'https://via.placeholder.com/50/0000FF/808080?text=User1',
    time: '2h'
  },
  {
    id: 2,
    user: "TechGuru",
    title: "Tech Innovations I'm Eager For",
    content: "This year is thrilling for tech enthusiasts like me. The upcoming gadgets and tools promise to push boundaries and enhance our digital experiences significantly. I'm especially eager to review them. 📱💻 Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. 🎥🍿",
    avatar: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=User2',
    time: '3h'
  },
  {
    id: 3,
    user: "Foodie",
    title: "Vegan Cuisine: A Delicious Surprise",
    content: "Exploring vegan cuisine has been a delightful journey. Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. The variety and flavors have exceeded my expectations, making each meal an exciting adventure. It's a refreshing and satisfying lifestyle change. 🥗🍲",
    avatar: 'https://via.placeholder.com/50/FFFF00/000000?text=User3',
    time: '4h'
  },
  {
    id: 4,
    user: "MusicFan",
    title: "New Tunes that Resonate",
    content: "Exploring vegan cuisine has been a delightful journey. Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. The variety and flavors have exceeded my expectations, making each meal an exciting adventure. It's a refreshing and satisfying lifestyle change. The latest album from my favorite artist is a masterpiece. It's a blend of innovative rhythms and soulful lyrics that resonate deeply with me. Music truly is a universal language. 🎶🎧",
    avatar: 'https://via.placeholder.com/50/008000/FFFFFF?text=User4',
    time: '5h'
  },
  {
    id: 5,
    user: "Bookworm",
    title: "Lost in Literature",
    content: "Exploring vegan cuisine has been a delightful journey. Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. The variety and flavors have exceeded my expectations, making each meal an exciting adventure. It's a refreshing and satisfying lifestyle change. Just finished an enthralling novel. Its narrative depth and character development were outstanding. I'm eagerly awaiting the sequel to dive back into that captivating world. 📚❤️",
    avatar: 'https://via.placeholder.com/50/00FFFF/000000?text=User5',
    time: '6h'
  },
  {
    id: 6,
    user: "TravelBug",
    title: "Wanderlust Adventures",
    content: "Traveling to new places is always exhilarating. Exploring vegan cuisine has been a delightful journey. Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. The variety and flavors have exceeded my expectations, making each meal an exciting adventure. It's a refreshing and satisfying lifestyle change. Each destination offers unique experiences and memories. I'm currently planning my next journey, wondering where the wind will take me. ✈️🌍",
    avatar: 'https://via.placeholder.com/50/FF00FF/FFFFFF?text=User6',
    time: '1d'
  },
  {
    id: 7,
    user: "FitnessFreak",
    title: "My Fitness Journey",
    content: "Pushing my limits in today's workout was rewarding. Exploring vegan cuisine has been a delightful journey. Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. The variety and flavors have exceeded my expectations, making each meal an exciting adventure. It's a refreshing and satisfying lifestyle change. Fitness is not just about the body, it's a mental challenge too. Each day brings me closer to my goals. 💪🏋️‍♂️",
    avatar: 'https://via.placeholder.com/50/0000FF/808080?text=User7',
    time: '1d'
  },
  {
    id: 8,
    user: "MovieBuff",
    title: "Cinematic Gems",
    content: "Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. 🎥🍿 Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. 🎥🍿",
    avatar: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=User8',
    time: '2d'
  },
  {
    id: 9,
    user: "Gamer",
    title: "Virtual World Escapades",
    content: "Spent hours in a thrilling game world. Pushing my limits in today's workout was rewarding. Exploring vegan cuisine has been a delightful journey. Watched an incredible movie last night. Its storytelling and cinematography were exceptional. Movies are not just entertainment; they are art that reflects life. The variety and flavors have exceeded my expectations, making each meal an exciting adventure. It's a refreshing and satisfying lifestyle change. Fitness is not just about the body, it's a mental challenge too. Each day brings me closer to my goals. The graphics and gameplay are immersive. Gaming is not just a pastime; it's an experience that transports you to different realms. 🎮🕹️",
    avatar: 'https://via.placeholder.com/50/FFFF00/000000?text=User9',
    time: '2d'
  },
  
];




const Feed = () => {
const navigation = useNavigation();

const [likedTweets, setLikedTweets] = useState({});
const [bookmarkedTweets, setBookmarkedTweets] = useState({});

const toggleLike = (tweetId) => {
  setLikedTweets(prevLikedTweets => ({
    ...prevLikedTweets,
    [tweetId]: !prevLikedTweets[tweetId],
  }));
};

const toggleBookmark = (tweetId) => {
  setBookmarkedTweets(prevLikedTweets => ({
    ...prevLikedTweets,
    [tweetId]: !prevLikedTweets[tweetId],
  }));
}

return(
  <View style={{width : width , height : height * 0.96}}>
  <SafeAreaView style={styles.safeArea}>
    <View style={{ backgroundColor: '#FFF', height: 50, justifyContent: 'space-between', alignItems: "flex-start" , paddingLeft: 13 , flexDirection : "row" }}>
      <Text style={{ color: '#0F0F0F', fontSize: 30, fontWeight: "bold" }}>Traveet</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight : 10 }}>
        <HeartIcon size={35} color={"black"} style={{marginBottom : 0 , marginLeft : 8}} />
        <EnvelopeIcon size={35} color={"black"} style={{marginBottom : 0 , marginLeft : 18}} />
        </View>
    </View>
    <ScrollView style={styles.container}>
      {tweets.map(tweet => (
        <>
        <TouchableOpacity key={tweet.id} style={styles.tweetContainer} onPress={() => navigation.navigate("Profile")}>
          <Image source={{ uri: tweet.avatar }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.userName}>{tweet.user}</Text>
          </View>
        </TouchableOpacity>
        <View >
        <Image  source={{ uri: `https://picsum.photos/900/?random=${Math.random()}` }}  style={{ width: width , height: height * 0.45 }} />
        </View>
        <View style={{ padding: 10 }}>
          
          
          
          <View style={{ flexDirection: 'row', alignItems: 'center'  , flex : 1 , justifyContent : "space-between"}}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 , paddingBottom : 10 }}>{tweet.title}</Text>
          <Text style={{ color: 'gray', fontSize: 15 }}>{tweet.time}</Text>
          </View>
          
          <Text>{tweet.content}</Text>
        <View style={{flexDirection: "row" , flex : 1 , justifyContent : "space-between" , alignItems : "center" , paddingTop : 5}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' , }}>
           {
              likedTweets[tweet.id] ? <HeartIcon size={30} color={"red"} onPress={() => toggleLike(tweet.id)} fill={"red"}  /> : <HeartIcon size={30} color={"black"} onPress={() => toggleLike(tweet.id)}   />

           }
            
            <ChatBubbleOvalLeftIcon size={30} color={"black"} style={{marginBottom : 4 , marginLeft : 14}} /> 
            <PaperAirplaneIcon size={30} color={"black"} style={{marginBottom : 0 , marginLeft : 14}} />  
          </View>
          {
              bookmarkedTweets[tweet.id] ? <BookmarkIcon size={30} color={"red"} onPress={() => toggleBookmark(tweet.id)} fill={"red"}  /> : <BookmarkIcon size={30} color={"black"} onPress={() => toggleBookmark(tweet.id)}   />
          }
          
          </View>
          <View style={{flexDirection: "col" , flex : 1 , justifyContent : "flex-start"  , paddingTop : 5}}>
            <Text style={{  fontSize: 14 , paddingBottom : 3 }}>4422 likes</Text>
            <Text style={{  fontSize: 14, paddingBottom : 10 }}>See 143 comments ...</Text>
          </View>
          
        </View>
        </>
      ))}
    </ScrollView>
  </SafeAreaView>
  </View>
);}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
    
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
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  
});

export default Feed;
