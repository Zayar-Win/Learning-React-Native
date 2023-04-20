/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
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

function App(): JSX.Element {
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
      <TextInput
        defaultValue="This is default value"
        style={{height: 40, width: '100%', borderColor: 'gray', borderWidth: 1}}
      />
      <Cat name="Kitty" />
      <Cat name="Pussy" />
      <Cat name="Lovely" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default App;
