import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Apicalls = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setPosts(json);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleRemove = (id,title) => {
    Alert.alert('Do you want to delete', title, [
      {
        text: 'OK',
        onPress: () => {
          console.log(`item ${id}`);
          setPosts(posts.filter(posts => posts.id !== id));
          Alert.alert('Item is deleted');
        },
        style: 'cancel',
      },
    ]);

    // console.log(`item ${id}`);

    // Alert.alert("yayaaa")
  };
  return (
    <View style={styles.container}>
      <Text>Posts Items Dispayed in FlatList</Text>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="#0c9" />
          <Text>Fetching Data</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={posts}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleRemove(item.id, item.title)}
              style={styles.subContainer}>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Apicalls;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },

  subContainer: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#607d8b',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
