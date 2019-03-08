import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation';
import HTML from 'react-native-render-html';
import { SearchBar, List, ListItem } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import { CardViewWithImage } from 'react-native-simple-card-view'

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  catImages: {
    height: 50,
    width: 50,
    borderRadius: 70,
    justifyContent: 'center'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}
const { height, width } = Dimensions.get('window')

 class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      musics: null,
      videos: null,
      categories: null,
      loaded: true,
      loadedCat: true,
      loadedMusic: true,
      loadeVideo: true,
      error: null,
      loading: false,
      data2: [],
      page: 1
    };
  }


  getData2 = async () => {
    const url2 = 'https://URL/wp-json/wp/v2/posts?_embed&per_page=20&page='+this.state.page;
    fetch(url2).then( (response) => response.json())
    .then((responseJson) => {
      this.setState({
        loading: true,
        data2: this.state.data2.concat(responseJson)
      })
    })
  }
  
  baseURL = "https://URL/wp-json/wp/v2";
  getData = ev => {
    //const { page } = this.state;
    this.setState({
      loaded: false,
      error: null
    });
    let url = this.baseURL + `/posts?_embed&per_page=6` ;
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
    let cat = this.baseURL + "/categories?_embed&per_page=10&orderby=count&order=desc";
    let catReq = new Request(cat, {
      method: "GET"
    });
    fetch(catReq)
      .then(response => response.json())
      .then(this.showCategories);
  };
  getMusics = ev => {
    this.setState({
      loadedMusic: false
    });
    let music = this.baseURL + "/posts?_embed&per_page=10&categories=720";
    let musicReq = new Request(music, {
      method: "GET"
    });
    fetch(musicReq)
      .then(response => response.json())
      .then(this.showMusics);
  };
  getVideos = ev => {
    this.setState({
      loadedVideo: false
    });
    let video = this.baseURL + "/posts?_embed&per_page=10&categories=719";
    let videoReq = new Request(video, {
      method: "GET"
    });
    fetch(videoReq)
      .then(response => response.json())
      .then(this.showVideos);
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

  showMusics = musics => {
    this.setState({
      loadedMusic: true,
      musics
    });
  };

  showVideos = videos => {
    this.setState({
      loadedVideo: true,
      videos
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
    this.getMusics();
    this.getVideos();
    this.getData2();
  };

  handleLoadMore = () => {
    console.warn('load more')
    this.setState(
      { loading: true, 
        page: this.state.page + 1 },
      this.getData2
    )
  }

  render() {

    return (
      <ScrollView>

      
        <View>
          <SearchBar
        lightTheme
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Search' />
        </View>

          <View style={{ height: height / 4 }} >
            <Swiper showsButtons>
            { this.state.error && ( <Text style={styles.err}>Fucking Error</Text> )}
        {this.state.data && this.state.data.length > 0 && this.state.data.map((car, key) => {
          return (
            <View key={key} style={styles.slide1}>
              
              <Text style={styles.text}> {car.title.rendered} </Text>

            </View>
          )
        })}
      </Swiper>
          </View>

        <ScrollView horizontal={true} style={{ paddingTop: 5 }} >
          {this.state.categories && this.state.categories.length > 0 && this.state.categories.map(category => (
            <View style={{ paddingRight: 20 }} key={category.id} >
              <Image style={styles.catImages} source={require("../assets/images/robot-prod.png")} />
              <Text> {category.name} </Text>
            </View>
          ))}
        </ScrollView> 

        <Text>
          Trending Topics
        </Text>
        { this.state.error && ( <Text style={styles.err}>{this.state.error}</Text> )}
        {this.state.data && this.state.data.length > 0 && (
          this.state.data.map(post => (
            <View key={post.id}
                  style={{}}>
            
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { article: post.content.rendered, title: post.title.rendered} )} >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10, paddingBottom: 10 }}
                  borderBottomWidth={0.8}
                  borderBottomColor={'gold'}>
                <View style={{backgroundColor:'#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly',shadowColor:'#000', shadowOffset:{ width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius:2, elevation:4, padding:12}} >

                  <View style={{ height: height/7, backgroundColor: "#fff" }}>

                  {post.jetpack_featured_media_url == 0 &&
                      <Image source={require('../assets/Hotelcalifornia.jpg')}
                      style={{ width: 150, height: 150, borderRadius: 10 }} />
                  }
                  {post.jetpack_featured_media_url == undefined &&
                      <Image source={require('../assets/Hotelcalifornia.jpg')}
                      style={{ width: 150, height: 150, borderRadius: 10 }} />
                  }
                  {
                      <Image
                      source={{ uri: post.jetpack_featured_media_url }}
                      style={{ width: width / 3, height: height/8, borderRadius: 10 }}
                      key={post.id} />
                  }

                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding:5, height: height/7, width: width/2, backgroundColor: "#fff" }} >
                  <View>
                    <Text style={{ fontSize:15 }}>
                      {post.title.rendered.length < 80? post.title.rendered: `${post.title.slice(0, 80)} ...` }
                    </Text>
                  </View>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                    <Text style={{ fontSize:10 }} >
                      Time: 2 days ago
                    </Text  >
                    <Text style={{ fontSize:10 }} >by: Lawizee</Text>
                    </View>
                    
                  </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )))}

        <Text>Top 10 Trending Songs</Text>
        <ScrollView horizontal={true} style={{ paddingTop: 5}} >
        {this.state.musics && this.state.musics.map(song => (
          
          <View key={song.id} style={{ flex: 1, padding:5, marginBottom: 5, borderRightColor: "gold", borderRightWidth: 0.7, shadowColor:'#000', shadowOffset:{ width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius:2, elevation:4 }} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { article: song.content.rendered, title: song.title.rendered} )} >
          <Image style={{ width: width / 4, height: height / 5 }} 
                  source={{ uri:song.jetpack_featured_media_url }}
          >
          </Image>
          <Text style={{fontSize:11, width: width/4}}>{song.title.rendered}</Text>
        </TouchableOpacity>
        </View>
        ) )}
          
        </ScrollView>


        <Text>Top 10 Trending Videos</Text>
        <ScrollView horizontal={true} style={{ paddingTop: 5}} >
        {this.state.videos && this.state.videos.map(vid => (
          
          <View key={vid.id} style={{ flex: 1, padding:5, borderRightColor: "gold", borderRightWidth: 0.7, shadowColor:'#000', shadowOffset:{ width: 0, height: 2 },shadowOpacity: 0.8, shadowRadius:2, elevation:4 }} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { article: post.content.rendered, title: post.title.rendered} )} >
          <Image style={{ width: width / 4, height: height / 5 }} 
                  source={{ uri:vid.jetpack_featured_media_url }}
          >
          </Image>
          <Text style={{fontSize:11, width: width/4}}>{vid.title.rendered}</Text>
          </TouchableOpacity>
        </View>
        ) )}
          
        </ScrollView>

          <FlatList
            data={this.state.data2}
            keyExtractor={ (item, index) => index.toString() }
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={1}
            renderItem={({ item }) => (
              <ListItem
              onPress={() => this.props.navigation.navigate('Details', { article: item.content.rendered, title: item.title.rendered} )}
                title= { item.title.rendered} 
              />
            )}  
        />
      
        {/* { this.state.error && ( <Text style={styles.err}>{this.state.error}</Text> )}
        {this.state.data && this.state.data.length > 0 && (
          this.state.data.map(post => (
            <View key={post.id} >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { article: post.content.rendered, title: post.title.rendered} )} >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10, paddingBottom: 10 }}
                  borderBottomWidth={0.8}
                  borderBottomColor={'gold'}  >
                  <View style={{ flex: 1, padding:15, justifyContent: 'flex-start', height: height/12, backgroundColor: "#fff" }} >
                    <Text style={{ }}
                      fontSize={30} >
                      {post.title.rendered}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )))} */}
        

{/* // { this.state.error && ( <Text style={styles.err}>{this.state.error}</Text> )}
// {this.state.data && this.state.data.length > 0 && (
//   this.state.data.map(post => (
//     <View style={{flexDirection:'row'}} >
// <View style={{ flex:1, width: width/2.5 }}
//       key={post.id}>

//         <CardViewWithImage
//           width={width/2.3}
//           //content={ post.content.rendered }
//           source={{ uri: post.jetpack_featured_media_url }}
//           title={post.title.rendered}
//           imageWidth={200}
//           imageHeight={200}
//           onPress={() => this.props.navigation.navigate('Details', { article: post.content.rendered, title: post.title.rendered} )}
//           roundedImage={false}
//           //roundedImageValue={50}
//           imageMargin={{ top: 10 }}
//         />


// </View>
//     </View>

//   )))} */}

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
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





// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

// export default class LinksScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Links',
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
        
//         <ExpoLinksView />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });


