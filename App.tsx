/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type CatProps = {
  name: string;
};

function Cat(props: CatProps) {
  const [hungry, setHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}.I am so {hungry ? 'hungry' : 'full'}
      </Text>
      <Button
        title="PURE ME SOME MILK"
        onPress={() => {
          setHungry(false);
        }}
        disabled={!hungry}
      />
    </View>
  );
}

function FlatListBasics() {
  return (
    <FlatList
      data={[
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
  );
}

function App(): JSX.Element {
  const [text, setText] = useState('');
  return (
    <ScrollView contentContainerStyle={styles.view}>
      <Text style={styles.text}>Try Editing me 👀</Text>
      <View>
        <Text>This is some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>

      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Kitty" />
      <Cat name="Pussy" />
      <Cat name="Lovely" />
      <TextInput
        placeholder="Type something"
        onChangeText={newText => setText(newText)}
        style={{
          height: 40,
          width: '100%',
          borderColor: 'gray',
          borderWidth: 1,
        }}
      />
      <Text>
        {text
          .split(' ')
          .map(word => word && '👋')
          .join(' ')}
      </Text>
      <ActivityIndicator size="large" color="red" animating={false} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
