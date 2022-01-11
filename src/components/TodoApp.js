import React,{useState  } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Button,
} from 'react-native';
import Feather from 'react-native-vector-icons/AntDesign';


const TodoApp = () => {
  const [textInput, setTextInput] = useState();
  const [isedit, setedit] = useState(false);
  const [todos, setTodos] = useState([]);

  const [isEditItem, setEditItem] = useState(null);

  const Additem = () => {
    if (!textInput) {
      alert('please enter some tasks');
    } else if (textInput && isedit) {
      console.log('i am in new edit');

      let temparray = todos.map(element => {
        //   return element
        if (element.id == isEditItem) {
          return {...element, task: textInput};
        }
        return element;
      });

      setTodos(temparray);

      setedit(false);
      setTextInput('');
      setEditItem(null);
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        task: textInput,
      };
      console.log(textInput);
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const onEdit = (id, title) => {
    let newEditItem = todos.find(element => {
      return element.id == id;
    });
    console.log(newEditItem);
    console.log(id, title);
    console.log('editing');
    setTextInput(newEditItem.task);
    setEditItem(id);
    setedit(true);
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
    setedit(false);
    setTextInput('');
    setEditItem(null);
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
                  onPress={() => onEdit(item.id, item.task)}>
                  <Text>{item.task} </Text>
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
