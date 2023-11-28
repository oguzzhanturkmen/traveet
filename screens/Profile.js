import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Touchable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const { width , height } = Dimensions.get('window');


const ProfileScreen = () => {
    const navigation = useNavigation();

  // Mock user data
  const userData = {
    username: 'john_doe',
    fullName: 'John Doe',
    followers: 250,
    following: 20,
    postsX: 30,
    profilePicture: 'https://via.placeholder.com/100',
    bio: '📷 Photographer | 🌎 Traveler | 📚 Book Lover',
    posts: Array.from({ length: 30 }, (_, i) => `https://picsum.photos/200/300?random=${i + 1}`),
  };

  
  const renderPostItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.postItem} />
  );

  return (
    <View style={{ backgroundColor: '#FFF', height: height, width : width ,  paddingHorizontal : 1 }}>
    <SafeAreaView style={{height : height * 0.13 , paddingBottom : 0}}>
        <View style={{ flex : 1 , flexDirection : "row", justifyContent : "flex-start", gap : width * 0.05 , alignItems : "center" , paddingBottom : 0}}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon  style={{marginLeft : 10}} width={30} height={30} />
            </TouchableOpacity>
            <Text style={{ color: '#000', fontSize: 20 }}>{userData.fullName}</Text>
        </View>
         </SafeAreaView>
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: userData.profilePicture }} style={styles.profilePicture} />
        
        <View style={{ flex: 1, flexDirection : "row",  width : width * 0.4  , justifyContent : "space-around"}}>
        <View style={{ flex: 1, flexDirection : "column", alignItems : "center" }}>
            <Text style={{ color: 'gray' }}>{userData.postsX}</Text>
            <Text style={{ color: 'gray' }}>Posts</Text>
            </View>
        <View style={{ flex: 1, flexDirection : "column", alignItems : "center" }}>
            <Text style={{ color: 'gray' }}>{userData.followers}</Text>
            <Text style={{ color: 'gray' }}>Followers</Text>
            </View>
            <View style={{ flex: 1, flexDirection : "column", alignItems : "center" }}>
            <Text style={{ color: 'gray' }}>{userData.following}</Text>
            <Text style={{ color: 'gray' }}>Following</Text>
            </View>
      </View>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{userData.username}</Text>
          <Text style={styles.fullName}>{userData.fullName}</Text>
        </View>
      <Text style={styles.bio}>{userData.bio}</Text>
      <FlatList
        data={userData.posts}
        renderItem={renderPostItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        style={styles.postsContainer}
      />
    </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 0,
    justifyContent: "flex-start",
    paddingBottom: 15,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  userInfo: {
    paddingHorizontal: 15,
    
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  fullName: {
    color: 'grey',
  },
  bio: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  postsContainer: {
    flex: 1,
    
    
  },
  postItem: {
    width: '33%',
    height: 120,
    marginVertical: 1,
    aspectRatio: 1,
    marginHorizontal: 0.8,
  },
});

export default ProfileScreen;
