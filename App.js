import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

const API_KEY = "Tyiskjc69fbO2GtmKoB2xUd0AqHxAl4k";
const LIMIT = 10;
//Limit is exclusive
const getRandomNumber = limit => {
  return Math.floor(Math.random() * limit);
}

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ""
    };
  }

  componentDidMount() {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&q=${this.props.search}`;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        imgSrc: json.data[getRandomNumber(json.data.length)].images.downsized_medium.url
      });
    });
  }
  render() {
    return (
      <View>
        <Image style={styles.image} source={{uri: this.state.imgSrc}}/>
      </View>
    )
  }
}

const App = () => {
  return (
    <View>
      <Giphy search="happy" />
      <Giphy search="coding" />
      <Giphy search="fun" />
      <Giphy search="puppy" /> 
      <Text>Powered By GIPHY</Text>
      <Button 
        title="refresh"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250
  }


});




export default App;


