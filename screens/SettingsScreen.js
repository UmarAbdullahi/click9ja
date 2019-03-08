
// import React, { Component } from 'react'
// import {
//   Text,
//   View,
//   Image,
//   Dimensions,
//   TouchableHighlight,
//   ScrollView,
//   ActivityIndicator
// } from 'react-native'
// import Swiper from 'react-native-swiper'
// const { height, width } = Dimensions.get('window')

// const styles = {
//   container: {
//     flex: 1,
//     padding:10
//   },

//   wrapper: {
//   },

//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent'
//   },

//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },

//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },

//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },

//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   },

//   image: {
//     width,
//     flex: 1
//   }
// }

// export default class extends Component {
//   static navigationOptions = {
//     title: ' swipe swipe ',
//   };

//   constructor() {
//     super();
//     this.state = {
//       data: null,
//       loaded: true,
//       index: 0,
//       error: null
//     };
//   }
//   handleOnMomentumScrollEnd(e, state){
//     this.setState({
//       index: state.index
//     });
//   }
//   baseURL = "https://click9ja.com/wp-json/wp/v2";
//   getData = ev => {
//     this.setState({
//       loaded: false,
//       error: null
//     });
//     let url = this.baseURL + "/posts?_embed&per_page=3";
//     let req = new Request(url, {

//       method: "GET"
//     });
//     fetch(req)
//       .then(response => response.json())
//       .then(this.showData)
//       .catch(this.badStuff);
//   };
//   showData = data => {
//     this.setState({
//       loaded: true,
//       data
//     });
//     console.log(data);
//   };
//   badStuff = err => {
//     this.setState({
//       loaded: true,
//       error: err.message
//     });
//   };
//   componentDidMount() {
//     this.getData();
//     //geolocation -> fetch
//   }

//   render () {
//     return (
//       <ScrollView>
      
//       <View style={styles.container}>
        

//         <Swiper style={styles.wrapper} height={240}
//           onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
//           dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//           activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//           paginationStyle={{
//             bottom: -23, left: null, right: 10
//           }} loop>

//         {/* { post.featured_media > 0 && post._embedded['wp:featuredmedia'].filter( element => element.id == post.featured_media).map((subitem, index) => (
//         <Image    
//             source= {{uri: subitem.media_details.sizes.medium.source_url }}
//             style={{width: 100, height:  150, borderRadius: 10 }} 
//             key = {post.id}/>
    
//         ))} */}



//           <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={ require( '../assets/Hotelcalifornia.jpg' ) } />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={ require( '../assets/Hotelcalifornia.jpg' ) } />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={ require( '../assets/Hotelcalifornia.jpg' ) } />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={ require('../assets/Hotelcalifornia.jpg')} />
//           </View>
//         </Swiper>
        
//         </View>

//         <ScrollView horizontal={true} style={{ paddingTop:40 }} >
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         <View style={{ paddingRight: 50 }} >
//           <Image 
          
//             style={{height:50, width: 50, paddingRight: 50}}
//             source={ require('../assets/images/22.png') } />
//         </View>
//         </ScrollView>

//         <View>
//         <TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View> 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: width / 2, height:  height/ 5, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: width / 2.2 , height: height/ 5  }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight>
//       <TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View> 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: width / 2, height:  height/ 5, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: width / 2.2 , height: height/ 5  }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight><TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View> 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: width / 2, height:  height/ 5, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: width / 2.2 , height: height/ 5  }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight><TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View> 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: width / 2, height:  height/ 5, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: width / 2.2 , height: height/ 5  }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight><TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View> 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: width / 2, height:  height/ 5, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: width / 2.2 , height: height/ 5  }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight><TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View> 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: width / 2, height:  height/ 5, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: width / 2.2 , height: height/ 5  }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight>
//       <TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View style={{width: 150, height: 170}} > 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: 150, height: 150, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: 180, height: 170 }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n' } NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight>
//       <TouchableHighlight >
//       <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
//             borderBottomWidth={0.8}
//             borderBottomColor={ 'gold' }  >
//         <View style={{width: 150, height: 170}} > 
//           <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
//                   style={{width: 150, height: 150, borderRadius: 10 }} />
//         </View>
//         <View style={{height:170 }} > 
//           <Text style={{ width: 180, height: 170 }}
//                 fontSize={ 40 } >
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love.. {'\n' } NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'}
//             NEW JAM: Duncan Mighty, Wiz Kid - Fake Love {'\n'} NEW JAM: Duncan Mighty, Wiz Kid - Fake Love 
//           </Text>
//         </View>
//       </View>
//       </TouchableHighlight>
//         </View>
      
//       </ScrollView>
//     )
//   }
// }

import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    );
  }
}

export default FlatListDemo;