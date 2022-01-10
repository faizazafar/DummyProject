import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import Feather from 'react-native-vector-icons/AntDesign';
import Usestate from './Usestate';

let today = new Date();
let date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
let dateTime = date + ' ' + time;

const TodoApp = () => {
  const [textInput, setTextInput] = useState();
//   const [isedit, setedit] = useState(false);
  const [todos, setTodos] = useState([
    {id: 1, task: "eggs"},
    {id: 2, task: 'Second'},
  ]);



  const Additem = () => {
    const newTodo = {
        id: dateTime,
        task: textInput,
      };    
    console.log(textInput);
    setTodos([...todos, newTodo]);
    setTextInput('');
  };

  const onEdit = (id, title) => {
    console.log(id, title);
    console.log('editing');
    setTextInput(title);
    setedit(true);
  };
  const EditItem = () => {
    console.log('new edit ');
    console.log(id)
    // setTodos(todos.filter(todos => todos.id !== id));
    // setTextInput('');

    // setTodos([...todos, newTodo]);
  };

  const onDelete = (id, task) => {
    Alert.alert('Do you want to delete', task, [
      {
        text: 'OK',
        onPress: () => {
          console.log(`item ${id}`);
          setTodos(todos.filter(todos => todos.id !== id));
          Alert.alert('Item is deleted');
        },
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To Do App </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={text => setTextInput(text)}
          placeholder="Add an item!"
        />
        <View style={styles.button}>
          <Button title={'ADD'} onPress={Additem} />
        </View>

        {
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}
                style={styles.subContainer}>
                <TouchableOpacity
                  style={{flex: 0.9}}
                  >
                  <Text>{item.id}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex: 0.1}}>
                  <Feather
                    size={20}
                    color="red"
                    name={'delete'}
                    onPress={() => onDelete(item.id, item.task)}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        }
      </View>
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },

  subContainer: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: 'row',
  },
  header: {
    color: 'black',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },

  button: {
    marginRight: 10,
  },
});
