/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {PropsWithChildren} from 'react';

type ItemData = {
  id: string;
  title: string;
};

const data: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

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

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

type FlatListBasicsProps = PropsWithChildren<{
  selectedId: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
}>;

function Item({item, onPress, backgroundColor, textColor}: ItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
}

type seperator = {
  highlight: () => void;
  unhighlight: () => void;
  updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
};

function FlatListBasics(props: FlatListBasicsProps) {
  const renderItem = (item: ItemData) => {
    const backgroundColor =
      item.id === props.selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === props.selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => props.setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderItem(item)}
      extraData={props.selectedId}
      keyExtractor={item => item.id}
      ListFooterComponent={<>{props.children}</>}
    />
  );
}

function Seperator() {
  return <View style={styles.seperator} />;
}

function App(): JSX.Element {
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState('');
  return (
    <SafeAreaView style={styles.view}>
      <FlatListBasics selectedId={selectedId} setSelectedId={setSelectedId}>
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
          <Cat name="Pussy" />
          <Cat name="Lovely" />
          <Cat name="Lovely" />
          <Cat name="Lovely" />
          <Cat name="Lovely" />
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
          <ActivityIndicator size="large" color="red" animating={true} />
          <Seperator />
          <View>
            <Text style={styles.title}>
              This layout strategy lets the title define the width of the
              button.
            </Text>
            <Button
              title="PRESS ME"
              onPress={() => {
                Alert.alert('This is alert Title', 'This is alert messages');
              }}
            />
          </View>
          <Image
            //if user have visual impairments,the string will display so user can use without worries
            accessibilityLabel="logoImage"
            alt="LogoImge"
            style={{width: 50, height: 50, marginTop: 10}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            //this will add loading indicator until the image is downloaded
            loadingIndicatorSource={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            blurRadius={1}
            fadeDuration={400}
            onLayout={
              event => {
                event;
              }
              // Alert.alert(event.type, event.timeStamp.toString())
              //this method will call when image is mounted to layout
            }
          />
        </ScrollView>
        <View>
          <Text style={styles.title}>Using BackgroundImage Component</Text>
          <ImageBackground
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={styles.bgImage}>
            <Text style={styles.imageText}>Hello i am text</Text>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.title}>Using KeyBoardAvoiding Component</Text>
          <KeyboardAvoidingView
            keyboardVerticalOffset={1000}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <Text style={styles.text}>UserName</Text>
                <TextInput style={styles.input} placeholder="Enter your name" />
                <View>
                  <Button title="Submit" />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </FlatListBasics>
    </SafeAreaView>
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
  title: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 14,
    color: '#000000',
  },

  seperator: {
    borderWidth: 0.4,
    width: '100%',
    borderBottomColor: '#737373',
    marginVertical: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  bgImage: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    fontSize: 18,
    color: 'black',
    borderRadius: 4,
  },
  inner: {
    flex: 1,
    gap: 40,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
});

export default App;
