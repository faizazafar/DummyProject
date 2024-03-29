import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from "react-native-image-picker"
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const Profile = () => {
   bs = React.useRef();
   fall = new Animated.Value(1);

   renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const [ path , setPath ]= useState('')

useEffect(()=>{
  console.log(path)

}, [path])
  // console.log(file.fileData)
  const handleChoosePhoto = () => {
   

    console.log('hello');

    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false
      },
      (response) => {
        console.log(JSON.stringify(response));

        console.log(response.assets.map(a=>a.uri));
        let source = response.assets.map(a=>a.uri)
        setPath(source)
        // setFile({
        //   filePath: response,
        //   fileData: response.data,
        //   fileUri: response.uri
        // });
        // console.log(fileUri)

      },
    )
  };


  const [showText, setShowText] = useState({
    textone: false,
    texttwo: false,
    textthree: false,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.title}>
          <Text style={styles.text}>Register account</Text>
        </View>

        <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />

        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileimage}>
           
            <Image
              resizeMode="center"
              style={styles.image}
              //  source={{ uri: filePath.path}} 
              source={require('../assets/pro.png')}
              // source={{ uri: 'data:image/jpeg;base64,'+path}}
              // source={{
              //   uri: 'data:image/jpeg;base64,' + filePath.data,
              // }}
              >
              </Image>
          </View>
          <View style={styles.cam}>
            <TouchableOpacity onPress={()=> this.bs.current.snapTo(0)}>
              <Ant name={'camera'} size={22} color="#246FFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput
            style={{flex: 0.8, paddingLeft: 10}}
            placeholder="Company Name "
            placeholderTextColor={'black'}></TextInput>
        </View>
        <View style={styles.form}>
          <TextInput
            style={{flex: 0.8, paddingLeft: 10}}
            placeholder="Email "
            placeholderTextColor={'black'}></TextInput>
        </View>

        <View style={styles.form}>
          <View style={{flex: 0.7}}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder="Mobile Number "
              placeholderTextColor={'black'}
              secureTextEntry={showText.textthree}></TextInput>
          </View>
          <Feather
            style={{flex: 0.1, width: '100%'}}
            size={20}
            color="#62757f"
            name={showText.textthree ? 'eye-off' : 'eye'}
            onPress={() =>
              setShowText({...showText, textthree: !showText.textthree})
            }
          />
        </View>

        <View style={styles.form}>
          <View style={{flex: 0.7}}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder="Password"
              placeholderTextColor={'black'}
              secureTextEntry={showText.textone}></TextInput>
          </View>

          <Feather
            style={{flex: 0.1, width: '100%'}}
            size={20}
            color="#62757f"
            name={showText.textone ? 'eye-off' : 'eye'}
            onPress={() =>
              setShowText({...showText, textone: !showText.textone})
            }
          />
        </View>

        <View style={styles.form}>
          <View style={{flex: 0.7}}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              secureTextEntry={showText.texttwo}></TextInput>
          </View>

          <Feather
            style={{flex: 0.1, width: '100%'}}
            size={20}
            color="#62757f"
            name={showText.texttwo ? 'eye-off' : 'eye'}
            onPress={() =>
              setShowText({...showText, texttwo: !showText.texttwo})
            }
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#246FFF',
              padding: 20,
              width: 320,
              borderRadius: 4,
            }}>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  title: {
    marginTop: 30,
  },
  cam: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  profileimage: {
    width: 90,
    height: 90,
    overflow: 'hidden',
    borderRadius: 100,
    marginVertical: 20,
  },
  form: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#246FFF',
    marginVertical: 10,
    borderRadius: 5,
  },
  scroll: {
    width: '100%',
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
});
