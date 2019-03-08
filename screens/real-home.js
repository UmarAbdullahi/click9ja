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
    backgroundColor: '#9DD6EB'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  txt: { fontSize: 24, color: "#333" },
  err: { color: "red", fontSize: 30, fontWeight: "bold" },
  body: {padding: 10, flex: 1}
}

class HomeScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     data: null,
  //     carousels: null,
  //     categories: null,
  //     loaded: true,
  //     loadedCat: true,
  //     error: null
  //   };
  // }
  // baseURL = "https://click9ja.com/wp-json/wp/v2";
  // getData = ev => {
  //   this.setState({
  //     loaded: false,
  //     error: null
  //   });
  //   let url = this.baseURL + "/posts?_embed&per_page=5";
  //   let req = new Request(url, {

  //     method: "GET"
  //   });
  //   fetch(req)
  //     .then(response => response.json())
  //     .then(this.showData)
  //     .catch(this.badStuff);
  // };

  // getCategories = ev => {
  //   this.setState({
  //     loadedCat: false
  //   });
  //   let cat = this.baseURL + "/categories?_embed&per_page=20";
  //   let catReq = new Request(cat, {
  //     method: "GET"
  //   });
  //   fetch(catReq)
  //     .then(response => response.json())
  //     .then(this.showCategories);
  // }
    
  // showData = data => {
  //   this.setState({
  //     loaded: true,
  //     data
  //   });
  //   //console.log(data);
  // };

  // showCategories = categories => {
  //   this.setState({
  //     loadedCat: true,
  //     categories
  //   })
  // }

  // badStuff = err => {
  //   this.setState({
  //     loaded: true,
  //     error: err.message
  //   });
  // };
  componentDidMount() {
    //this.getData();
    //this.getCategories();
    //geolocation -> fetch
    this.setState({
      items: [{"id":16483,"date":"2019-01-02T08:19:18","date_gmt":"2019-01-02T08:19:18","guid":{"rendered":"https:\/\/click9ja.com\/?p=16483"},"modified":"2019-01-02T08:19:27","modified_gmt":"2019-01-02T08:19:27","slug":"boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm","status":"publish","type":"post","link":"https:\/\/click9ja.com\/2019\/01\/02\/boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm\/","title":{"rendered":"Boko Haram Attacks In Borno Getting Worse \u2013 Gov Shettima Raises Alarm"},"content":{"rendered":"<div class=\"smart_content_wrapper\"><!--CusAdsVi1-->\n<h3>Boko Haram Attacks In Borno Getting Worse \u2013 Gov Shettima Raises Alarm<\/h3>\n\n\n\n<p class=\"has-background has-luminous-vivid-orange-background-color\">Borno state governor,\u00a0Kashim Shettima, has\u00a0raised an alarm that the security situation in the state is getting worse.<\/p>\n\n\n\n\n\n<p>Speaking at an&nbsp;extraordinary security meeting at Government House, Maiduguri on Tuesday January 1st, Governor Shettima says as much as he wants to sound optimistic, the reality on ground is that Borno state is facing serious security challenges.&nbsp;<\/p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>\u201cYour royal highnesses and our elders, I will like to start by saying that the aim of convening this important meeting is not to pass blames or to pass any kind of verdict on our security agencies. Crunch talks in Maiduguri today over Baga.<\/p><p>I think the most inhuman way to go is to gather and condemn those who are putting their lives on the line and giving their lives in efforts to find peace. We are principally here as a family, as a people all affected by the situation in Borno State, to discuss suggestions that will hopefully contribute to combined ongoing efforts towards addressing the problem.<\/p><p>For seven years, we held our regular security council meetings to&nbsp;consult with some of the participants here. However, I never for once convened an extraordinary meeting of this nature because, frankly speaking, I was avoiding a sort of dramatisation or being sensational about our challenges in Borno State. Without being insensitive to the realities of our situation, I feel deeply pained whenever Borno is being discussed on the basis of helpless weakness. I prefer to assume a position of strength; a position of normalcy and a character of being incurably optimistic. My greatest wish was and still is, not to bequeath Boko Haram challenges and IDP camps to my successor. We wanted to, and still want to get Borno fully back to normal days. Sometimes, I unconsciously find myself boasting that Borno is safer than Lagos. I simply feel very bad to sound pessimistic about Borno. I so much believe in optimism.<\/p><p>Of course, I know that in governance, responding to some situations demand a combination of being both optimistic and realistic.&nbsp; The reality is that while so much was achieved by our gallant military men and women, we are today faced with serious challenges in Borno State.<\/p><p>But then, these challenges should strengthen our abiding faith and resolve to continually do whatever we can, in support of our military, the police, the DSS, our Civilian JTF, all para-military agencies and political authorities at the federal level, to end the Boko Haram insurgency\u201d<\/p><\/blockquote>\n\n\n\n<p>&nbsp;His statement comes few weeks after Boko Haram members allegedly attacked Baga.&nbsp;<br><\/p>\n\n<div style=\"font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;\"><\/div><\/div>","protected":false},"excerpt":{"rendered":"<p>Boko Haram Attacks In Borno Getting Worse \u2013 Gov Shettima Raises Alarm Borno state governor,\u00a0Kashim Shettima, has\u00a0raised an alarm that the security situation in the state is getting worse. Speaking&#8230; <\/p>\n","protected":false},"author":1,"featured_media":16484,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":{"spay_email":"","jetpack_publicize_message":""},"categories":[729],"tags":[],"jetpack_featured_media_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","jetpack_publicize_connections":[],"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16483"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16483"}],"version-history":[{"count":1,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16483\/revisions"}],"predecessor-version":[{"id":16485,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16483\/revisions\/16485"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16484"}],"wp:attachment":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media?parent=16483"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories?post=16483"},{"taxonomy":"post_tag","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/tags?post=16483"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]},"_embedded":{"author":[{"id":1,"name":"lawizee","url":"","description":"","link":"https:\/\/click9ja.com\/author\/lawizee\/","slug":"lawizee","avatar_urls":{"24":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=24&d=wavatar&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=48&d=wavatar&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=96&d=wavatar&r=g"},"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users"}]}}],"wp:featuredmedia":[{"id":16484,"date":"2019-01-02T08:18:51","slug":"boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm","type":"attachment","link":"https:\/\/click9ja.com\/2019\/01\/02\/boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm\/boko-haram-attacks-in-borno-getting-worse-gov-shettima-raises-alarm\/","title":{"rendered":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm"},"author":1,"caption":{"rendered":""},"alt_text":"","media_type":"image","mime_type":"image\/jpeg","media_details":{"width":300,"height":168,"file":"2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","sizes":{"thumbnail":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg"},"medium":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg"},"post-thumbnail":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-250x168.jpg","width":250,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-250x168.jpg"},"widget_post_thumb":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-80x80.jpg","width":80,"height":80,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-80x80.jpg"},"alm-thumbnail":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-150x150.jpg"},"aesop-character":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-200x168.jpg","width":200,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-200x168.jpg"},"aesop-collection":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm-300x168.jpg"},"full":{"file":"Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg"}},"image_meta":{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0","keywords":[]}},"source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/Boko-Haram-Attacks-In-Borno-Getting-Worse-Gov-Shettima-Raises-Alarm.jpg","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16484"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/attachment"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16484"}]}}],"wp:term":[[{"id":729,"link":"https:\/\/click9ja.com\/Previous%20Post%20\/news\/","name":"NEWS","slug":"news","taxonomy":"category","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories\/729"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/taxonomies\/category"}],"wp:post_type":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts?categories=729"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}],[]]}},{"id":16480,"date":"2019-01-02T07:57:55","date_gmt":"2019-01-02T07:57:55","guid":{"rendered":"https:\/\/click9ja.com\/?p=16480"},"modified":"2019-01-02T07:58:06","modified_gmt":"2019-01-02T07:58:06","slug":"no-serious-vice-president-hawks-n10000-pdp-blast-osinbajo","status":"publish","type":"post","link":"https:\/\/click9ja.com\/2019\/01\/02\/no-serious-vice-president-hawks-n10000-pdp-blast-osinbajo\/","title":{"rendered":"No Serious Vice President Hawks N10,000, PDP Blast Osinbajo"},"content":{"rendered":"<div class=\"smart_content_wrapper\"><!--CusAdsVi1-->\n<h3>No Serious Vice President Hawks N10,000, PDP Blast Osinbajo<\/h3>\n\n\n\n<p class=\"has-background has-luminous-vivid-orange-background-color\"><strong>The Peoples Democratic Party (PDP) Presidential Campaign Organisation has said the current practice by Vice President Yemi Osinbajo to go to markets across the country \u2018hawking\u2019 N10,000 in the name of TraderMoni is a sign of underemployment, saying this could not have happened in a serious country.<\/strong><\/p>\n\n\n\n\n\n<p>It also described President Muhammadu Buhari\u2019s 2019 New Year speech as pathetically empty and an indication that he has finally given up, following his irredeemable rejection by Nigerians.<\/p>\n\n\n\n<p>Speaking yesterday on Arise News, a sister broadcast arm of THISDAY Newspaper, a spokesperson of PDP\u2019s presidential campaign organisation, Mr. Akin Osuntokun, said sharing of N10,000 would not help the All Progressives Congress (APC)-led government in the general elections.<\/p>\n\n\n\n<p>He said, \u201cNigerians are not that gullible. Sharing N10,000 in few weeks to the elections will not help this government, unless you are implying that Nigerians are gullible. A country and electorate that vote on that basis has a problem; you campaign on what you have done.<\/p>\n\n\n\n<p>\u201cThat is an indication of a vice president who is underemployed. The vice president of a serious country of 180 million people going around markets and motor parks hawking N10,000; is that governance? That is a joke.<\/p>\n\n\n\n<p>\u201cHave you ever heard it in any serious country where the vice president goes from door-to-door to campaign? The vice president of Nigeria \u2013 their job is 24 hours, the complexity of Nigeria governance alone. If that is the priority of a vice president \u2013 knocking from door-to-door, then, that is an explanation of why the government has failed,\u201d he added<\/p>\n\n<div style=\"font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;\"><\/div><\/div>","protected":false},"excerpt":{"rendered":"<p>No Serious Vice President Hawks N10,000, PDP Blast Osinbajo The Peoples Democratic Party (PDP) Presidential Campaign Organisation has said the current practice by Vice President Yemi Osinbajo to go to&#8230; <\/p>\n","protected":false},"author":1,"featured_media":16481,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":{"spay_email":"","jetpack_publicize_message":""},"categories":[731],"tags":[],"jetpack_featured_media_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2.jpg","jetpack_publicize_connections":[],"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16480"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16480"}],"version-history":[{"count":1,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16480\/revisions"}],"predecessor-version":[{"id":16482,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16480\/revisions\/16482"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16481"}],"wp:attachment":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media?parent=16480"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories?post=16480"},{"taxonomy":"post_tag","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/tags?post=16480"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]},"_embedded":{"author":[{"id":1,"name":"lawizee","url":"","description":"","link":"https:\/\/click9ja.com\/author\/lawizee\/","slug":"lawizee","avatar_urls":{"24":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=24&d=wavatar&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=48&d=wavatar&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=96&d=wavatar&r=g"},"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users"}]}}],"wp:featuredmedia":[{"id":16481,"date":"2019-01-02T07:55:38","slug":"osinbajo-2","type":"attachment","link":"https:\/\/click9ja.com\/2019\/01\/02\/no-serious-vice-president-hawks-n10000-pdp-blast-osinbajo\/osinbajo-2\/","title":{"rendered":"osinbajo-2"},"author":1,"caption":{"rendered":""},"alt_text":"","media_type":"image","mime_type":"image\/jpeg","media_details":{"width":700,"height":392,"file":"2019\/01\/osinbajo-2.jpg","sizes":{"thumbnail":{"file":"osinbajo-2-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-150x150.jpg"},"medium":{"file":"osinbajo-2-300x168.jpg","width":300,"height":168,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-300x168.jpg"},"post-thumbnail":{"file":"osinbajo-2-250x250.jpg","width":250,"height":250,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-250x250.jpg"},"grid_thumb":{"file":"osinbajo-2-355x199.jpg","width":355,"height":199,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-355x199.jpg"},"widget_post_thumb":{"file":"osinbajo-2-80x80.jpg","width":80,"height":80,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-80x80.jpg"},"alm-thumbnail":{"file":"osinbajo-2-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-150x150.jpg"},"aesop-tiny-cover":{"file":"osinbajo-2-400x224.jpg","width":400,"height":224,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-400x224.jpg"},"aesop-character":{"file":"osinbajo-2-200x200.jpg","width":200,"height":200,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-200x200.jpg"},"aesop-collection":{"file":"osinbajo-2-300x300.jpg","width":300,"height":300,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-300x300.jpg"},"aesop-grid-image":{"file":"osinbajo-2-400x224.jpg","width":400,"height":224,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2-400x224.jpg"},"full":{"file":"osinbajo-2.jpg","width":700,"height":392,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2.jpg"}},"image_meta":{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0","keywords":[]}},"source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/osinbajo-2.jpg","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16481"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/attachment"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16481"}]}}],"wp:term":[[{"id":731,"link":"https:\/\/click9ja.com\/Previous%20Post%20\/politics\/","name":"POLITICS","slug":"politics","taxonomy":"category","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories\/731"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/taxonomies\/category"}],"wp:post_type":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts?categories=731"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}],[]]}},{"id":16477,"date":"2019-01-02T07:39:28","date_gmt":"2019-01-02T07:39:28","guid":{"rendered":"https:\/\/click9ja.com\/?p=16477"},"modified":"2019-01-02T07:39:37","modified_gmt":"2019-01-02T07:39:37","slug":"apc-accuses-pdp-atiku-of-sponsoring-smear-campaign-against-buhari","status":"publish","type":"post","link":"https:\/\/click9ja.com\/2019\/01\/02\/apc-accuses-pdp-atiku-of-sponsoring-smear-campaign-against-buhari\/","title":{"rendered":"APC Accuses PDP, Atiku Of Sponsoring Smear Campaign Against Buhari"},"content":{"rendered":"<div class=\"smart_content_wrapper\"><!--CusAdsVi1-->\n<h3>APC Accuses PDP, Atiku Of Sponsoring Smear Campaign Against Buhari<\/h3>\n\n\n\n<p class=\"has-background has-luminous-vivid-orange-background-color\"><strong>The All Progressives Congress (APC) has accused the opposition Peoples Democratic Party (PDP), and its presidential candidate, Atiku Abubakar, of sponsoring smear campaign against President Muhammadu Buhari.<\/strong><\/p>\n\n\n\n\n\n<p>Addressing a press conference in Abuja yesterday, APC National Publicity Secretary, Lanre Issa-Onilu, alleged that the plot was hatched in collaboration with some foreigners in Dubai.<\/p>\n\n\n\n<p>He maintained that the plot, aimed at dishing out fake news and spurious allegations against Buhari, his family members and other government officials, have failed to achieve the desired result.<\/p>\n\n\n\n<p>He said: \u201cTheir Dubai-made strategy has collapsed like a pack of cards. The plan was to recreate the 2014\/2015 scenario when APC pilloried them for their crimes, which woken the electorate to the reality of the disaster we were headed under the PDP government.<\/p>\n\n\n\n<p>\u201cPDP, led by their presidential candidate, Abubakar Atiku, paid huge sums of money to some foreign con men in Dubai who posed as strategists.<\/p>\n\n\n\n<p>\u201cThey began to spurn daily fake news and make spurious and unsubstantiated allegations against our president, his family members, the vice president, the APC national chairman, notable government officials, and public institutions to deceive Nigerians,\u201d he said.<\/p>\n\n\n\n<p>He said their strategists did not tell them that such would not work when the allegations cannot be proven.<\/p>\n\n<div style=\"font-size: 0px; height: 0px; line-height: 0px; margin: 0; padding: 0; clear: both;\"><\/div><\/div>","protected":false},"excerpt":{"rendered":"<p>APC Accuses PDP, Atiku Of Sponsoring Smear Campaign Against Buhari The All Progressives Congress (APC) has accused the opposition Peoples Democratic Party (PDP), and its presidential candidate, Atiku Abubakar, of&#8230; <\/p>\n","protected":false},"author":1,"featured_media":16478,"comment_status":"open","ping_status":"open","sticky":false,"template":"","format":"standard","meta":{"spay_email":"","jetpack_publicize_message":""},"categories":[731],"tags":[],"jetpack_featured_media_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc.jpg","jetpack_publicize_connections":[],"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16477"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16477"}],"version-history":[{"count":1,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16477\/revisions"}],"predecessor-version":[{"id":16479,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts\/16477\/revisions\/16479"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16478"}],"wp:attachment":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media?parent=16477"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories?post=16477"},{"taxonomy":"post_tag","embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/tags?post=16477"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]},"_embedded":{"author":[{"id":1,"name":"lawizee","url":"","description":"","link":"https:\/\/click9ja.com\/author\/lawizee\/","slug":"lawizee","avatar_urls":{"24":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=24&d=wavatar&r=g","48":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=48&d=wavatar&r=g","96":"https:\/\/secure.gravatar.com\/avatar\/76695ea62f59a5fbeafedccbf09deaf3?s=96&d=wavatar&r=g"},"_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users"}]}}],"wp:featuredmedia":[{"id":16478,"date":"2019-01-02T07:38:55","slug":"pdp-apc","type":"attachment","link":"https:\/\/click9ja.com\/2019\/01\/02\/apc-accuses-pdp-atiku-of-sponsoring-smear-campaign-against-buhari\/pdp-apc\/","title":{"rendered":"pdp-apc"},"author":1,"caption":{"rendered":""},"alt_text":"","media_type":"image","mime_type":"image\/jpeg","media_details":{"width":650,"height":350,"file":"2019\/01\/pdp-apc.jpg","sizes":{"thumbnail":{"file":"pdp-apc-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-150x150.jpg"},"medium":{"file":"pdp-apc-300x162.jpg","width":300,"height":162,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-300x162.jpg"},"post-thumbnail":{"file":"pdp-apc-250x250.jpg","width":250,"height":250,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-250x250.jpg"},"grid_thumb":{"file":"pdp-apc-355x199.jpg","width":355,"height":199,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-355x199.jpg"},"widget_post_thumb":{"file":"pdp-apc-80x80.jpg","width":80,"height":80,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-80x80.jpg"},"alm-thumbnail":{"file":"pdp-apc-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-150x150.jpg"},"aesop-tiny-cover":{"file":"pdp-apc-400x215.jpg","width":400,"height":215,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-400x215.jpg"},"aesop-character":{"file":"pdp-apc-200x200.jpg","width":200,"height":200,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-200x200.jpg"},"aesop-collection":{"file":"pdp-apc-300x300.jpg","width":300,"height":300,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-300x300.jpg"},"aesop-grid-image":{"file":"pdp-apc-400x215.jpg","width":400,"height":215,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc-400x215.jpg"},"full":{"file":"pdp-apc.jpg","width":650,"height":350,"mime_type":"image\/jpeg","source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc.jpg"}},"image_meta":{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0","keywords":[]}},"source_url":"https:\/\/click9ja.com\/wp-content\/uploads\/2019\/01\/pdp-apc.jpg","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media\/16478"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/media"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/types\/attachment"}],"author":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/comments?post=16478"}]}}],"wp:term":[[{"id":731,"link":"https:\/\/click9ja.com\/Previous%20Post%20\/politics\/","name":"POLITICS","slug":"politics","taxonomy":"category","_links":{"self":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories\/731"}],"collection":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/categories"}],"about":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/taxonomies\/category"}],"wp:post_type":[{"href":"https:\/\/click9ja.com\/wp-json\/wp\/v2\/posts?categories=731"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}],[]]}}]
    })
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.body}>

      <SearchBar
        lightTheme
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Search' />

          <View style={{ height: height / 4 }} >
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
          </View>

          <ScrollView horizontal={true} style={{ paddingTop: 5 }} >
            {this.state.categories &&
              this.state.categories.length > 0 &&
              this.state.categories.map(category => (
                <View style={{ paddingRight: 20 }} key={category.id} >
                  <Text> {category.name} </Text>
                </View>
              ))}
          </ScrollView>     

        {!this.state.loaded && ( <ActivityIndicator size="large" color="red" /> )}
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
    
        ))
        }
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
          ))}


{!this.state.loaded && ( <ActivityIndicator size="large" color="red" /> )}
        {this.state.error && <Text style={styles.err}>{this.state.error}</Text>}
        {this.state.data &&
          this.state.data.length > 0 &&
          this.state.data.map(item => (
            <View>
          <TouchableHighlight >
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 25 }}
            borderBottomWidth={0.8}
            borderBottomColor={ 'gold' }  >
        <View> 
          <Image  source={ require( '../assets/Hotelcalifornia.jpg' ) }
                  style={{width: width / 3, height:  height/ 5, borderRadius: 10 }} />
        </View>
        <View style={{height:170 }} > 
          <Text style={{ width: width / 2 , height: height/ 5  }}
                fontSize={ 30 } >
            {item.title.rendered}
          </Text>
        </View>
      </View>
      </TouchableHighlight>
            </View>
          ))}

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
