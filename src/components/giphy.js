import React from 'react';
import {StyleSheet, View, Image } from 'react-native';


const API_KEY = "Tyiskjc69fbO2GtmKoB2xUd0AqHxAl4k";
const LIMIT = 10;



const Giphy = ({search, rand}) => {
  const [uri, setUri] = React.useState("");
  React.useEffect(() => {
    getUri();
  }, [rand]);

  const getUri = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&q=${search}`)
    .then(response => response.json())
    .then(json => {
      setUri(json.data[rand].images.downsized_medium.url);
    });
  }
  console.log("render");
  return (
    <View>
      <Image style={styles.image} source={{uri: uri}}/>
    </View>
  )
}


const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 250,
      alignSelf: "center",
      margin: 2
    }
  
  
  });

export default Giphy;