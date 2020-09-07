import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item } from 'native-base';
import  {Alert,View,ActivityIndicator} from 'react-native'; 
import  DataItem  from '../../component/dataItem'; 

import {getArticles} from '../../service/news';   

import Modal from '../../component/modal';
export default class ListThumbnailExample extends Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      date:null,
      setModalVisible:false,
      modalArticleData:{}
    }
  }  

  handleItemDataOnPress =(articleData)=> {
    this.setState({
     setModalVisible:true,
     modalArticleData:articleData

    })


  }

  handleModalClose = ()=> {
   
   this.setState({
   setModalVisible:false,

   modalArticleData:{}
    
   })

  }

  componentDidMount(){
    getArticles().then(data=>{
      this.setState({
        isLoading:false,
        data: data
      });
    },error =>{
      Alert.alert('error','something went wrong!');

    }
    )
  }

  render()  {
    
    console.log(this.state.data);
    let view=this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{marginTop:20}}>Please wait</Text>
        </View>
    ) :(

      <List 
      dataArray ={this.state.data}
      renderRow={(item)=>{
        return (
          <DataItem onPress={this.handleItemDataOnPress} data={item} />
        )
         
        
      }}   
      />
    )
    return (
      <Container>
            
        <Content>
         {view}
           
        
        </Content>
        <Modal 
        showModal={this.setState.setModalVisible}
        articleData={this.state.modalArticleData}
        onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}