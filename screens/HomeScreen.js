// import React, { Component } from 'react'
// import {
//   Text,
//   View,
//   ImageBackground,
//   Dimensions,
//   Image,
//   ScrollView,
//   Button,
//   FlatList
// } from 'react-native'
// import Swiper from 'react-native-swiper'

// const styles = {
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
//   }
// }
// const { height, width } = Dimensions.get('window')

// export default class extends Component {
//   constructor() { 
//     super(); 
//     this.state = { 
//         data: null, 
//         loaded: true, 
//         error: null 
//     } 
// } 
// baseURL = 'https://click9ja.com/wp-json/wp/v2'; 
// getData = (ev) => { 
//     this.setState({ 
//       loaded: false, 
//       error: null 
//     });

//     let url = this.baseURL + '/posts?_embed&per_page=3'; 
//     // let h = new Headers(); h.append('Authorization', 'Bearer sjdkfhakdkakhkajsdhks'); 
//     // h.append('X-Client', 'Steve and Friends'); 
//     let req = new Request(url, { 
//       method: 'GET' 
//     });

//     fetch(req).then(response => response.json())
//     .then(this.showData)
//     .catch(this.badStuff) 
// } 
// showData = (data) => { 
//     this.setState({ 
//       loaded: true, 
//       data 
//     }); 
//     console.log(data); 
// }
// badStuff = (err) => { 
//     this.setState({ 
//       loaded: true, 
//       error: err.message 
//     }); 
// } 
// componentDidMount() {
//     this.getData(); 
//     //geolocation -> fetch 
// }
//   render () {
//     return (
//       <ScrollView>
        {/* <View style={{ height: height / 4 }} >
          <Swiper showsButtons autoplay>
            {this.state.data && this.state.data.length > 0 && this.state.data.map((item, key) => {
              return (
                <View key={key} style={styles.slide1}>
                { !this.state.loaded && ( <Text>LOADING</Text> )} 
            { this.state.error && ( <Text style={styles.err}>{this.state.error}</Text> )}
                  {item.featured_media > 0 && item._embedded['wp:featuredmedia'].filter(element => element.id == item.featured_media).map((subitem, index) => (
                    <ImageBackground
                      source={{ uri: subitem.media_details.sizes.medium.source_url }}
                      style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 10, borderWidth: 1, borderColor: '#dddddd' }}>
                      <Text style={styles.text}>{item.title.rendered}</Text>
                    </ImageBackground>
                  ))}

                </View>
              )
            })}
          </Swiper>
        </View> */}



        {/* {!this.state.loaded && (<Text>LOADING</Text>)}
        <Text style={styles.txt}>Gimme some data!</Text>
        
        {this.state.error && (<Text style={styles.err}>{this.state.error}</Text>)}
        {this.state.data && this.state.data.map((post, key) =>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
          borderBottomWidth={0.8}
          borderBottomColor={'gold'}
          key= {post.id}>
            <View >
              {post.featured_media > 0 && post._embedded['wp:featuredmedia'].filter(element => element.id == post.featured_media).map((subitem, index) => (
                <Image source={{ uri: subitem.media_details.sizes.medium.source_url }}
                  style={{ width: width / 3, height: height / 7, flex: 1 }}
                  key={post.id} />
              ))}
            </View>
            <View style={{ height: 170 }} >
              <Text style={{ width: width / 2, height: height / 5 }}
                fontSize={30} >
                {post.title.rendered}
              </Text>
            </View>
          </View>
        )} */}

{/* <Text>Top 10 Trending Songs</Text>
    <ScrollView horizontal={true} style={{ paddingTop: 5, borderBottomColor:"#900000", borderBottomWidth:7 }} >
      
      <View style={{paddingRight: 20, paddingLeft: 20, borderRightColor:"#333", borderRightWidth:5}} >
          <Image style={{ width: width/4, height: height/5, flex: 1}} source={ require("../assets/images/22.png") }
              >
          </Image>
          <Text style={styles.text}>Song 1</Text>
      </View>

    </ScrollView>
      
        
      </ScrollView>
    )
  }
} */}


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

// componentDidMount(){
//   this.setState({
//     data: [{"id":16483,"date":"2019-01-02T08:19:18","date_gmt":"2019-01-02T08:19:18","guid":{"rendered":"https:\/\/click9ja.com\/?p=16483"},"modified":"2019-01-02T08:19:27","modified_gmt":"2019-01-02T08:19:27","slug":"boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm","status":"publish","type":"post","link":"https:\/\/click9ja.com\/2019\/01\/02\/boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm\/","title":{"rendered":"Boko Haram Attacks In Borno Getting Worse \u2013 Gov Shettima Raises Alarm"},"content":{"rendered":"<div class=\"smart_content_wrapper\"><!--CusAdsVi1-->\n<h3>Boko Haram Attacks In Borno Getting Worse \u2013 Gov Shettima Raises Alarm<\/h3>\n\n\n\n<p class=\"has-background has-luminous-vivid-orange-background-color\">Borno state governor,\u00a0Kashim Shettima, has\u00a0raised an alarm that the security situation in the state is getting worse.<\/p>\n\n\n\n\n\n<p>Speaking at an&nbsp;extraordinary security meeting at Government House, Maiduguri on Tuesday January 1st, Governor Shettima says as much as he wants to sound optimistic, the reality on ground is that Borno state is facing serious security challenges.&nbsp;<\/p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>\u201cYour royal highnesses and our elders, I will like to start by saying that the aim of convening this important meeting is not to pass blames or to pass any kind of verdict on our security agencies. Crunch talks in Maiduguri today over Baga.<\/p><p>I think the most inhuman way to go is to gather and condemn those who are putting their lives on the line and giving their lives in efforts to find peace. We are principally here as a family, as a people all affected by the situation in Borno State, to discuss suggestions that will hopefully contribute to combined ongoing efforts towards addressing the problem.<\/p><p>For seven years, we held our regular security council meetings to&nbsp;consult with some of the participants here. However, I never for once convened an extraordinary meeting of this nature because, frankly speaking, I was avoiding a sort of dramatisation or being sensational about our challenges in Borno State. Without being insensitive to the realities of our situation, I feel deeply pained whenever Borno is being discussed on the basis of helpless weakness. I prefer to assume a position of strength; a position of normalcy and a character of being incurably optimistic. My greatest wish was and still is, not to bequeath Boko Haram challenges and IDP camps to my successor. We wanted to, and still want to get Borno fully back to normal days. Sometimes, I unconsciously find myself boasting that Borno is safer than Lagos. I simply feel very bad to sound pessimistic about Borno. I so much believe in optimism.<\/p><p>Of course, I know that in governance, responding to some situations demand a combination of being both optimistic and realistic.&nbsp; The reality is that while so much was achieved by our gallant military men and women, we are today faced with serious challenges in Borno State.<\/p><p>But then, these challenges should strengthen our abiding faith and resolve to continually do whatever we can, in support of our military, the police, the DSS, our Civilian JTF, all para-military agencies and political authorities at the federal level, to end the Boko Haram insurgency\u201d<\/p><\/blockquote>\n\n\n\n<p>&nbsp;His statement comes few weeks after Boko Haram members allegedly attacked Baga.&nbsp;<br><\/p>\n\n<div style=\"font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;\"><\/div><\/div>","protected":false},"excerpt":{"rendered":"<p>Boko Haram Attacks In Borno Getting Worse \u2013 Gov Shettima Raises Alarm Borno state governor,\u00a0Kashim Shettima, has\u00a0raised an alarm that the security situation in the state is getting worse. Speaking&#8230; <\/p>\n","protected":false},"author":1,"featured_media":16484,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":{"spay_email":"","jetpack_publicize_message":""},"categories":[729],"tags":[],"jetpack_featured_media_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","jetpack_publicize_connections":[],"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16483"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16483"}],"version-history":[{"count":1,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16483\/revisions"}],"predecessor-version":[{"id":16485,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16483\/revisions\/16485"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16484"}],"wp:attachment":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media?parent=16483"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories?post=16483"},{"taxonomy":"post_tag","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/tags?post=16483"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]},"_embedded":{"author":[{"id":1,"name":"lawizee","url":"","description":"","link":"https:\/\/click9ja.com\/author\/lawizee\/","slug":"lawizee","avatar_urls":{"24":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=24&d=wavatar&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=48&d=wavatar&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=96&d=wavatar&r=g"},"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users"}]}}],"wp:featuredmedia":[{"id":16484,"date":"2019-01-02T08:18:51","slug":"boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm","type":"attachment","link":"https:\/\/click9ja.com\/2019\/01\/02\/boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm\/boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm\/","title":{"rendered":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm"},"author":1,"caption":{"rendered":""},"alt_text":"","media_type":"image","mime_type":"image\/jpeg","media_details":{"width":300,"height":168,"file":"2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","sizes":{"thumbnail":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg"},"medium":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg"},"post-thumbnail":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-250x168.jpg","width":250,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-250x168.jpg"},"widget_post_thumb":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-80x80.jpg","width":80,"height":80,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-80x80.jpg"},"alm-thumbnail":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg"},"aesop-character":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-200x168.jpg","width":200,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-200x168.jpg"},"aesop-collection":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg"},"full":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg"}},"image_meta":{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0","keywords":[]}},"source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16484"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/attachment"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16484"}]}}],"wp:term":[[{"id":729,"link":"https:\/\/click9ja.com\/Previous%20Post%20\/news\/","name":"NEWS","slug":"news","taxonomy":"category","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories\/729"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/taxonomies\/category"}],"wp:post_type":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts?categories=729"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}],[]]}},{"id":16480,"date":"2019-01-02T07:57:55","date_gmt":"2019-01-02T07:57:55","guid":{"rendered":"https:\/\/click9ja.com\/?p=16480"},"modified":"2019-01-02T07:58:06","modified_gmt":"2019-01-02T07:58:06","slug":"no-serious-vice-president-hawks-n10000-pdp-blast-osinbajo","status":"publish","type":"post","link":"https:\/\/click9ja.com\/2019\/01\/02\/no-serious-vice-president-hawks-n10000-pdp-blast-osinbajo\/","title":{"rendered":"No Serious Vice President Hawks N10,000, PDP Blast Osinbajo"},"content":{"rendered":"<div class=\"smart_content_wrapper\"><!--CusAdsVi1-->\n<h3>No Serious Vice President Hawks N10,000, PDP Blast Osinbajo<\/h3>\n\n\n\n<p class=\"has-background has-luminous-vivid-orange-background-color\"><strong>The Peoples Democratic Party (PDP) Presidential Campaign Organisation has said the current practice by Vice President Yemi Osinbajo to go to markets across the country \u2018hawking\u2019 N10,000 in the name of TraderMoni is a sign of underemployment, saying this could not have happened in a serious country.<\/strong><\/p>\n\n\n\n\n\n<p>It also described President Muhammadu Buhari\u2019s 2019 New Year speech as pathetically empty and an indication that he has finally given up, following his irredeemable rejection by Nigerians.<\/p>\n\n\n\n<p>Speaking yesterday on Arise News, a sister broadcast arm of THISDAY Newspaper, a spokesperson of PDP\u2019s presidential campaign organisation, Mr. Akin Osuntokun, said sharing of N10,000 would not help the All Progressives Congress (APC)-led government in the general elections.<\/p>\n\n\n\n<p>He said, \u201cNigerians are not that gullible. Sharing N10,000 in few weeks to the elections will not help this government, unless you are implying that Nigerians are gullible. A country and electorate that vote on that basis has a problem; you campaign on what you have done.<\/p>\n\n\n\n<p>\u201cThat is an indication of a vice president who is underemployed. The vice president of a serious country of 180 million people going around markets and motor parks hawking N10,000; is that governance? That is a joke.<\/p>\n\n\n\n<p>\u201cHave you ever heard it in any serious country where the vice president goes from door-to-door to campaign? The vice president of Nigeria \u2013 their job is 24 hours, the complexity of Nigeria governance alone. If that is the priority of a vice president \u2013 knocking from door-to-door, then, that is an explanation of why the government has failed,\u201d he added<\/p>\n\n<div style=\"font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;\"><\/div><\/div>","protected":false},"excerpt":{"rendered":"<p>No Serious Vice President Hawks N10,000, PDP Blast Osinbajo The Peoples Democratic Party (PDP) Presidential Campaign Organisation has said the current practice by Vice President Yemi Osinbajo to go to&#8230; <\/p>\n","protected":false},"author":1,"featured_media":16481,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":{"spay_email":"","jetpack_publicize_message":""},"categories":[731],"tags":[],"jetpack_featured_media_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2.jpg","jetpack_publicize_connections":[],"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16480"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16480"}],"version-history":[{"count":1,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16480\/revisions"}],"predecessor-version":[{"id":16482,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16480\/revisions\/16482"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16481"}],"wp:attachment":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media?parent=16480"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories?post=16480"},{"taxonomy":"post_tag","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/tags?post=16480"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]},"_embedded":{"author":[{"id":1,"name":"lawizee","url":"","description":"","link":"https:\/\/click9ja.com\/author\/lawizee\/","slug":"lawizee","avatar_urls":{"24":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=24&d=wavatar&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=48&d=wavatar&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=96&d=wavatar&r=g"},"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users"}]}}],"wp:featuredmedia":[{"id":16481,"date":"2019-01-02T07:55:38","slug":"osinbajo-2","type":"attachment","link":"https:\/\/click9ja.com\/2019\/01\/02\/no-serious-vice-president-hawks-n10000-pdp-blast-osinbajo\/osinbajo-2\/","title":{"rendered":"osinbajo-2"},"author":1,"caption":{"rendered":""},"alt_text":"","media_type":"image","mime_type":"image\/jpeg","media_details":{"width":700,"height":392,"file":"2019\/01\/osinbajo-2.jpg","sizes":{"thumbnail":{"file":"osinbajo-2-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-150x150.jpg"},"medium":{"file":"osinbajo-2-300x168.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-300x168.jpg"},"post-thumbnail":{"file":"osinbajo-2-250x250.jpg","width":250,"height":250,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-250x250.jpg"},"grid_thumb":{"file":"osinbajo-2-355x199.jpg","width":355,"height":199,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-355x199.jpg"},"widget_post_thumb":{"file":"osinbajo-2-80x80.jpg","width":80,"height":80,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-80x80.jpg"},"alm-thumbnail":{"file":"osinbajo-2-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-150x150.jpg"},"aesop-tiny-cover":{"file":"osinbajo-2-400x224.jpg","width":400,"height":224,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-400x224.jpg"},"aesop-character":{"file":"osinbajo-2-200x200.jpg","width":200,"height":200,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-200x200.jpg"},"aesop-collection":{"file":"osinbajo-2-300x300.jpg","width":300,"height":300,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-300x300.jpg"},"aesop-grid-image":{"file":"osinbajo-2-400x224.jpg","width":400,"height":224,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-400x224.jpg"},"full":{"file":"osinbajo-2.jpg","width":700,"height":392,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2.jpg"}},"image_meta":{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0","keywords":[]}},"source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2.jpg","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16481"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/attachment"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16481"}]}}],"wp:term":[[{"id":731,"link":"https:\/\/click9ja.com\/Previous%20Post%20\/politics\/","name":"POLITICS","slug":"politics","taxonomy":"category","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories\/731"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/taxonomies\/category"}],"wp:post_type":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts?categories=731"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}],[]]}},{"id":16477,"date":"2019-01-02T07:39:28","date_gmt":"2019-01-02T07:39:28","guid":{"rendered":"https:\/\/click9ja.com\/?p=16477"},"modified":"2019-01-02T07:39:37","modified_gmt":"2019-01-02T07:39:37","slug":"apc-accuses-pdp-atiku-of-sponsoring-smear-campaign-against-buhari","status":"publish","type":"post","link":"https:\/\/click9ja.com\/2019\/01\/02\/apc-accuses-pdp-atiku-of-sponsoring-smear-campaign-against-buhari\/","title":{"rendered":"APC Accuses PDP, Atiku Of Sponsoring Smear Campaign Against Buhari"},"content":{"rendered":"<div class=\"smart_content_wrapper\"><!--CusAdsVi1-->\n<h3>APC Accuses PDP, Atiku Of Sponsoring Smear Campaign Against Buhari<\/h3>\n\n\n\n<p class=\"has-background has-luminous-vivid-orange-background-color\"><strong>The All Progressives Congress (APC) has accused the opposition Peoples Democratic Party (PDP), and its presidential candidate, Atiku Abubakar, of sponsoring smear campaign against President Muhammadu Buhari.<\/strong><\/p>\n\n\n\n\n\n<p>Addressing a press conference in Abuja yesterday, APC National Publicity Secretary, Lanre Issa-Onilu, alleged that the plot was hatched in collaboration with some foreigners in Dubai.<\/p>\n\n\n\n<p>He maintained that the plot, aimed at dishing out fake news and spurious allegations against Buhari, his family members and other government officials, have failed to achieve the desired result.<\/p>\n\n\n\n<p>He said: \u201cTheir Dubai-made strategy has collapsed like a pack of cards. The plan was to recreate the 2014\/2015 scenario when APC pilloried them for their crimes, which woken the electorate to the reality of the disaster we were headed under the PDP government.<\/p>\n\n\n\n<p>\u201cPDP, led by their presidential candidate, Abubakar Atiku, paid huge sums of money to some foreign con men in Dubai who posed as strategists.<\/p>\n\n\n\n<p>\u201cThey began to spurn daily fake news and make spurious and unsubstantiated allegations against our president, his family members, the vice president, the APC national chairman, notable government officials, and public institutions to deceive Nigerians,\u201d he said.<\/p>\n\n\n\n<p>He said their strategists did not tell them that such would not work when the allegations cannot be proven.<\/p>\n\n<div style=\"font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;\"><\/div><\/div>","protected":false},"excerpt":{"rendered":"<p>APC Accuses PDP, Atiku Of Sponsoring Smear Campaign Against Buhari The All Progressives Congress (APC) has accused the opposition Peoples Democratic Party (PDP), and its presidential candidate, Atiku Abubakar, of&#8230; <\/p>\n","protected":false},"author":1,"featured_media":16478,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":{"spay_email":"","jetpack_publicize_message":""},"categories":[731],"tags":[],"jetpack_featured_media_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc.jpg","jetpack_publicize_connections":[],"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16477"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16477"}],"version-history":[{"count":1,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16477\/revisions"}],"predecessor-version":[{"id":16479,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16477\/revisions\/16479"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16478"}],"wp:attachment":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media?parent=16477"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories?post=16477"},{"taxonomy":"post_tag","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/tags?post=16477"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]},"_embedded":{"author":[{"id":1,"name":"lawizee","url":"","description":"","link":"https:\/\/click9ja.com\/author\/lawizee\/","slug":"lawizee","avatar_urls":{"24":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=24&d=wavatar&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=48&d=wavatar&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=96&d=wavatar&r=g"},"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users"}]}}],"wp:featuredmedia":[{"id":16478,"date":"2019-01-02T07:38:55","slug":"pdp-apc","type":"attachment","link":"https:\/\/click9ja.com\/2019\/01\/02\/apc-accuses-pdp-atiku-of-sponsoring-smear-campaign-against-buhari\/pdp-apc\/","title":{"rendered":"pdp-apc"},"author":1,"caption":{"rendered":""},"alt_text":"","media_type":"image","mime_type":"image\/jpeg","media_details":{"width":650,"height":350,"file":"2019\/01\/pdp-apc.jpg","sizes":{"thumbnail":{"file":"pdp-apc-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-150x150.jpg"},"medium":{"file":"pdp-apc-300x162.jpg","width":300,"height":162,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-300x162.jpg"},"post-thumbnail":{"file":"pdp-apc-250x250.jpg","width":250,"height":250,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-250x250.jpg"},"grid_thumb":{"file":"pdp-apc-355x199.jpg","width":355,"height":199,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-355x199.jpg"},"widget_post_thumb":{"file":"pdp-apc-80x80.jpg","width":80,"height":80,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-80x80.jpg"},"alm-thumbnail":{"file":"pdp-apc-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-150x150.jpg"},"aesop-tiny-cover":{"file":"pdp-apc-400x215.jpg","width":400,"height":215,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-400x215.jpg"},"aesop-character":{"file":"pdp-apc-200x200.jpg","width":200,"height":200,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-200x200.jpg"},"aesop-collection":{"file":"pdp-apc-300x300.jpg","width":300,"height":300,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-300x300.jpg"},"aesop-grid-image":{"file":"pdp-apc-400x215.jpg","width":400,"height":215,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-400x215.jpg"},"full":{"file":"pdp-apc.jpg","width":650,"height":350,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc.jpg"}},"image_meta":{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0","keywords":[]}},"source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc.jpg","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16478"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/attachment"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16478"}]}}],"wp:term":[[{"id":731,"link":"https:\/\/click9ja.com\/Previous%20Post%20\/politics\/","name":"POLITICS","slug":"politics","taxonomy":"category","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories\/731"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/taxonomies\/category"}],"wp:post_type":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts?categories=731"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}],[]]}}]
//   })
// }

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

  // makeRemoteRequest = () => {
  //   const { page, seed } = this.state;
  //   const url2 =`https://click9ja.com/wp-json/wp/v2/posts?_embed&per_page=10&page=${page}`;
  //   this.setState({ loading: true });

  //   fetch(url2)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         data2: page === 1 ? res.results : [...this.state.data2, ...res.results],
  //         error: res.error || null,
  //         loading: false,
  //         refreshing: false
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
  // };

  getData2 = async () => {
    const url2 = 'https://click9ja.com/wp-json/wp/v2/posts?_embed&per_page=20&page='+this.state.page;
    fetch(url2).then( (response) => response.json())
    .then((responseJson) => {
      this.setState({
        loading: true,
        data2: this.state.data2.concat(responseJson)
      })
    })
  }
  
  baseURL = "https://click9ja.com/wp-json/wp/v2";
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
    let music = this.baseURL + "/posts?_embed&per_page=2&categories=720";
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
    let video = this.baseURL + "/posts?_embed&per_page=2&categories=719";
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

  // showData2 = data2 => {
  //   this.setState({
  //     loaded2: true,
  //     data2
  //   });
  //   console.log(data2);
  // };

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

  // handleLoadMore = () => {
  //   this.setState(
  //     {
  //       page: this.state.page + 1
  //     },
  //     () => {
  //       this.makeRemoteRequest();
  //       //console.log(data2);
        
  //     }
  //   );
  // };

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


