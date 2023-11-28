import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import { Dimensions } from 'react-native';

const { width , height } = Dimensions.get('window');

const AddPost = () => {
  const [postText, setPostText] = useState('');
  const [image, setImage] = useState(null);

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
    <SafeAreaView style={{  paddingBottom : 0}}>
    <View style={styles.container}>
        
      <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
        {image ? (
          <Image source={image} style={styles.image} />
        ) : (
          <Text style={styles.plusIcon}>+</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="What's on your mind?"
        maxLength={250}
        onChangeText={setPostText}
        value={postText}
      />
      <Button title="Post" onPress={submitPost} />
       
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  imagePicker: {
    width: width ,
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
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    minHeight: 100,
    padding: 10,
    marginBottom: 20,
  },
});

export default AddPost;
