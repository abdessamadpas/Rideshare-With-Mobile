import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

import { getStorage, ref ,uploadBytes ,getDownloadURL } from "firebase/storage";
import { doc, setDoc, Timestamp,addDoc , collection } from "firebase/firestore"; 



import {dbFirestore} from '../firebase-config'

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
  TextInput
} from '../styles/AddPost';

import { AuthContext } from '../navigation/AuthProvider';


const storage = getStorage();


const AddPostScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const [uriImageFirestore,setUriImageFirestore] = useState(null)
  const [hasPermission, setHasPermission] = useState(null)
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [postName, setPostName] = useState(null);
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const [price, setPrice] = useState(null)

useEffect(() => {
  (async()=>{
    const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasPermission(galleryStatus.status === 'granted');
  })();
},[]);


  const takePhotoFromCamera = async () => {

    let  result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowaEditing: true,
      aspect :[4,3],
      quality:1,
    });
   // console.log(result);
    if (!result.cancelled) {
       console.log(result.uri);
      setImage(result.uri)
      
    }
  
  };
  if (hasPermission === false) {
    return <Text> u dont have any permission </Text>
  }




  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Post: ', postName);



      addDoc(collection(dbFirestore, "test"), {
      //userId: user.uid,
      postName: postName,
      postImg: imageUrl,
      postTime: Timestamp.fromDate(new Date()),
      
    })

    .then(() => {
      console.log('Post Added!');
      Alert.alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
      setPostName(null);
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
  }

  const uploadImage = async () => {
    console.log("check weeeeeeee");
    if( image == null ) {
      return null;
    }
    
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    
    // Add timestamp to File Name
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    //console.log(filename);

    setUploading(true);
    setTransferred(0);

    const storageRef = ref(storage, `photos/${filename}`);  
    const img = await fetch (image);
    console.log('img',img);
    const bytes = await img.blob();
    console.log('blobed');
   // console.log(storageRef);
   // const task = storageRef.put(uploadUri);

    const task = await uploadBytes(storageRef, bytes).then((taskSnapshot) => {
      console.log('snapshot');
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    
    console.log("pllllllllllllllllllllllllll");
    console.log(task);
    // Set transferred state
    // task.on('state_changed', (taskSnapshot) => {
    //   console.log(
    //     `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
    //   );

    //   setTransferred(
    //     Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
    //       100,
    //   );
    // });

    try {
      console.log('try bro ');
      
      const urlfetch = await getDownloadURL(storageRef) .then((x)=>{
        setUriImageFirestore(x)
        return x
      });
      console.log("url azbi ", urlfetch);
      setUploading(false);
      setImage(null);

       Alert.alert(
         'Image uploaded!',
         'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
       );
      return urlfetch;

    } catch (e) {
      console.log(e);
      console.log('errorrrrrrrrr');
      return null;
    }

  };

  return (
    <View style={styles.container}>
      <InputWrapper>
        {image != null ? <AddImage source={{uri: image}} /> : null}
        <TextInput
        style={styles.input}
        onChangeText={(content) => setPostName(content)}
        value={postName}
        placeholder="postName  "
      />
        <TextInput
        style={styles.input}
        onChangeText={(content) => setFrom(content)}
        value={from}
        placeholder="from  "
      />
      <TextInput
        style={styles.input}
        onChangeText={(content) => setTo(content)}
        value={to}
        placeholder="to "
      />
        <InputField
          placeholder="how much cost dude "
          multiline
          numberOfLines={1}
          value={price}
          onChangeText={(content) => setPrice(content)}
        />

        {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}
      </InputWrapper>
      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
