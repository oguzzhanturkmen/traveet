import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useRef } from 'react';
import { ScrollView } from 'react-native';

import { Dimensions } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';

const { width , height } = Dimensions.get('window');

const AddPost = () => {
  const [postText, setPostText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [tagText, setTagText] = useState('');
  const [image, setImage] = useState(null);
  const textInputRef = useRef(null);

  const focusOnTextInput = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const selectImage = async () => {
    // Requesting permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        Alert.alert('Permission to access camera roll is required!');
        return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled) {
        return;
    }

    if (pickerResult.assets && pickerResult.assets.length > 0) {
        const selectedImage = pickerResult.assets[0];
        setImage({ uri: selectedImage.uri });
    }
};

  const submitPost = () => {
    console.log('Submitting Post:');
    
  };

  return (
    <>
    <SafeAreaView style={{  paddingBottom : 0 , height : height * 0.12 , backgroundColor : "white" }}>
        <View style={{ flex : 1 , flexDirection : "row", justifyContent : "flex-start", alignItems : "center" }}>
            <View style={{ flex : 1 , flexDirection : "row", justifyContent : "flex-start", alignItems : "center" }}>
                <XMarkIcon  style={{marginLeft : 10 , marginTop : 6}} width={30} height={30} color={"black"}/>
                <Text style={{ color: '#000', fontSize: 20  , fontWeight : "bold" , marginLeft : 15 }}>New Post</Text>
            </View>
            <TouchableOpacity style={{ width : width * 0.25, height : height * 0.035 ,  borderColor : "black" , borderStyle : "solid" , borderWidth: 1 , alignItems : "center", justifyContent : "center" , borderRadius : 50 , marginRight : 10 ,}} onPress={submitPost} >  
                <Text >Post</Text>
            </TouchableOpacity>
        </View>
         </SafeAreaView>
        
    <ScrollView >
        <View style={styles.container}>
        
      <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
        {image ? (
          <Image source={image} style={styles.image} />
        ) : (
            <>
          <Text style={styles.plusIcon}>+</Text>
          <Text style={{fontSize : 20}}>Add Photo</Text>
            </>
        )}
      </TouchableOpacity>
      
      <TextInput
        style={styles.tagInput}
        multiline
        placeholder="Tags : #Istanbul #Turkey #Travel"
        maxLength={40}
        ref={textInputRef}
        onChangeText={setTagText}
        value={tagText}
        />
        <TextInput
        style={styles.titleInput}
        multiline
        placeholder="Title of your post"
        maxLength={40}
        ref={textInputRef}
        />
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="What's on your mind?"
        maxLength={450}
        onChangeText={setPostText}
        value={postText}
        
      />
      <View style={{ flex : 1 , flexDirection : "row", justifyContent : "flex-end" , alignItems : "center" , paddingBottom : height * 0.02}} >
      
        </View>
       </View>
    </ScrollView>
    
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    height : height * 0.95,
    backgroundColor: 'white',
  },
  imagePicker: {
    width : width ,
    height: height * 0.4,
    borderRadius: 50,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  plusIcon: {
    fontSize: 40,
    color: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    
  },
  textInput: {
    
    
    width: '100%',
    minHeight: 100,
    padding: 5,
    paddingTop: 10,
    marginBottom: 20,
  },
  titleInput: {
    fontSize : 20,
    fontWeight : "bold",
    width: '100%',
    minHeight: 20,
    padding: 5,
    borderBottomWidth : 1,
    borderBottomColor : "gray",
 
  },
  tagInput: {
    fontSize : 15,
    fontWeight : "300",
    width: '100%',
    minHeight: 20,
    padding: 5,
    marginBottom : 10,

  },
 
});

export default AddPost;
