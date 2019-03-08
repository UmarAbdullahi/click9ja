import React from "react";
import {  StyleSheet, 
          Text, 
          View, 
          Button, 
          ScrollView, 
          ActivityIndicator, 
          Dimensions, 
          Image, 
          TouchableOpacity,
          TouchableHighlight, 
          ImageBackground } from "react-native";
import { createStackNavigator } from 'react-navigation';
import HTML from 'react-native-render-html';
import { SearchBar, Divider } from 'react-native-elements'
import Swiper from 'react-native-swiper'

const { height, width } = Dimensions.get('window')

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  text: {
    color: '#800000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  catImages: {
    height: 50,
    width: 50,
    borderRadius: 70
  },
  txt: { fontSize: 24, color: "	#fff" },
  err: { color: "red", fontSize: 30, fontWeight: "bold" },
  body: {padding: 10, flex: 1}
}

class HomeScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     items: []
  //   }
  // }

  constructor() {
    super();
    this.state = {
      data: null,
      //carousels: null,
      categories: null,
      loaded: true,
      loadedCat: true,
      error: null
    };
  }
  baseURL = "https://click9ja.com/wp-json/wp/v2";
  getData = ev => {
    this.setState({
      loaded: false,
      error: null
    });
    let url = this.baseURL + "/posts?_embed&per_page=5";
    let req = new Request(url, {

      method: "GET"
    });
    fetch(req)
      .then(response => response.json())
      .then(this.showData)
      .catch(this.badStuff);
  };

  getCategories = ev => {
    this.setState({
      loadedCat: false
    });
    let cat = this.baseURL + "/categories?_embed&per_page=20";
    let catReq = new Request(cat, {
      method: "GET"
    });
    fetch(catReq)
      .then(response => response.json())
      .then(this.showCategories);
  };
    
  showData = data => {
    this.setState({
      loaded: true,
      data
    });
    //console.log(data);
  };

  showCategories = categories => {
    this.setState({
      loadedCat: true,
      categories
    });
  };

  badStuff = err => {
    this.setState({
      loaded: true,
      error: err.message
    });
  };
  componentDidMount() {
    this.getData();
    this.getCategories();
    //geolocation -> fetch
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.body}>

      <SearchBar
        lightTheme
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Search' />
  
  <View style={{ height: height / 4.5 }} >
    <Swiper showsButtons autoplay>
    {/* {this.state.data.map((item, key) => {
      return( */}
       {/* <View >
         <Text>item.title.rendered</Text>
       </View>  */}
      {/* )}

      )} */}
      
      <View style={styles.slide1}>
          <Image style={{ width: width, height: null, flex: 1, resizeMode: 'cover' }} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>swiper text</Text>
      </View>


      <View style={styles.slide1}>
          <Image style={{ width: width, height: null, flex: 1, resizeMode: 'cover' }} source={ require("../assets/Hotelcalifornia.jpg") }
              >
          </Image>
          <Text style={styles.text}>swiper text 2</Text>
      </View>
      <View style={styles.slide1}>
          <Image style={{ width: width, height: null, flex: 1, resizeMode: 'cover' }} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>swiper text 3</Text>
      </View>

    </Swiper>
  </View>

  <ScrollView horizontal={true} style={{ paddingTop: 5 }} >
      {this.state.categories && this.state.categories.length > 0 && this.state.categories.map(category => (
        <View style={{ paddingRight: 20 }}  >
        <Image style={styles.catImages} source={ require("../assets/images/robot-prod.png") } />
        <Text> {category.name} </Text>
      </View>
      ))}      
  </ScrollView> 


      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
        borderBottomWidth={0.8}
        borderBottomColor={'gold'}>
        <View >

            <Image
              source = { require("../assets/images/22.png") }
              style={{ width: width/3, height: height/7, flex: 1}}
            />

        </View>
        <View style={{ height: 170 }} >
          <Text style={{ width: width / 2, height: height / 5 }}
            fontSize={30} >
            post.title.rendered
          </Text>
        </View>
      </View>



    <Text>Top 10 Trending Songs</Text>
    <ScrollView horizontal={true} style={{ paddingTop: 5, borderBottomColor:"#900000", borderBottomWidth:7 }} >
      
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Song 1</Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Song 1</Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Song 1</Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Song 1</Text>
      </View>

    </ScrollView>

    <Text style={{ paddingTop:20 }} >Top 10 Trending Videos</Text>
    <ScrollView horizontal={true} style={{ paddingTop: 5 }} >
      
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Video 1</Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Video 1</Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Video 1</Text>
      </View>
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Video 1</Text>
      </View>

    </ScrollView>

          {/* <View style={{ height: height / 4 }} >
            <Swiper showsButtons autoplay>
              {this.state.items && this.state.data.map((car, key) => {
                return (
                  <View key={key} style={styles.slide1}>
                    {car.featured_media > 0 && car._embedded['wp:featuredmedia'].filter(element => element.id == car.featured_media).map((subitem, index) => (
                      <ImageBackground source={{ uri: subitem.media_details.sizes.medium.source_url }}
                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 10, borderWidth: 1, borderColor: '#dddddd' }}  >
                        <Text style={styles.text}>{car.title.rendered}</Text>
                      </ImageBackground>
                    ))}

                  </View>
                )
              })}
            </Swiper>
          </View> */}

  {/* <ScrollView horizontal={true} style={{ paddingTop: 5 }} >
    {this.state.categories &&
      this.state.categories.length > 0 &&
      this.state.categories.map(category => (
        <View style={{ paddingRight: 20 }} key={category.id} >
          <Text> {category.name} </Text>
        </View>
      ))}
  </ScrollView>      */}

  {/* {!this.state.loaded && ( <ActivityIndicator size="large" color="red" /> )}
  {this.state.error && <Text style={styles.err}>{this.state.error}</Text>}
  {this.state.data &&
    this.state.data.length > 0 &&
    this.state.data.map(post => (
      
<View>
<View key={post.id}>

    <TouchableOpacity>         
      <View
        style={{ width: -2, height: 400, marginTop: 20, flex: 1 }}>

        {
          post.featured_media === 0 && 
          <Image 
            source = {{ require: '../assets/images/icon.png' }}
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 10, borderWidth: 1, borderColor: '#dddddd' }} 

          />
        }
       
        { post.featured_media > 0 && post._embedded['wp:featuredmedia'].filter( element => element.id == post.featured_media).map((subitem, index) => (
        <Image    
            source= {{uri: subitem.media_details.sizes.medium.source_url }}
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 10, borderWidth: 1, borderColor: '#dddddd' }} 
            key = {post.id} />
    
        ))}
      </View>

    </TouchableOpacity>
            <Text 
              key={post.id} 
              style={styles.txt}
              onPress={() => {
            this.props.navigation.navigate('Details');
          }}  >
              {" "}
              {post.title.rendered}{" "}
            </Text>
          <View>
            <Button
              id={post.id} 
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details', { article: post.content.rendered, title: post.title.rendered} )}
            />
            </View>
            <Divider style={{ backgroundColor: 'blue', height: 6}} />      
          </View>
          </View>
          ))} */}




    </View>  
    </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title');
    const article = navigation.getParam('article');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text> {title} </Text>
        <ScrollView>
          <HTML html= {article} imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
        
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'SWEET',
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   txt: { fontSize: 24, color: "#333" },
//   err: { color: "red", fontSize: 30, fontWeight: "bold" },
//   body: {padding: 10, flex: 1}
// });
