import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const images = [
  {image: require('../assets/flower.jpeg')},
  {image: require('../assets/flower.jpeg')},
  {image: require('../assets/flower.jpeg')},
];

const UseofImages = () => {
  const [show, setShow] = useState('true');
  // const [text, setText] = useState('Hide Image Component');

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{paddingVertical: 15}}
            style={{flex: 1}}>
            {images.map(item => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 12,
                    borderRadius: 20,
                    marginTop: 10,
                    backgroundColor: 'white',
                    // elevation: 13,
                  }}>
                  <Image
                    style={{
                      height: height / 2.5,
                      width: width / 1.75,
                      resizeMode: 'cover',
                      borderRadius: 20,
                    }}
                    source={item.image}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {show ? (
            <View>
              {
                  images.map((item)=>{

                    return(

                    <Image style={styles.squareratio} source={item.image}
                    ></Image>
                    )
                  })
              }
            </View>
          ) : null}

          <Button onPress={() => setShow(!show)} title="Hide/Show" />

          <Text>Hello</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default UseofImages;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // aspectRatio:1
  },
  squareratio: {
    width: 200,
    height: 200,
    // borderRadius:100/2
  },
});
