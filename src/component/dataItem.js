import React, { Component } from 'react';
import {ListItem,Left,Thumbnail,Body,Text,Button,Right } from 'native-base';

export default class DataItem extends Component {

    constructor(props){
        super(props);
        this.data=this.props.data;
    }

    render (){
        return(<ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: this.data.urlToImage != 
              null ? this.data.urlToImage : 'https://images.news18.com/ibnlive/uploads/2020/09/1599367935_india.jpg' }} />
            </Left>
            <Body>
              <Text style={{color:'blue'}} >{this.data.title}</Text>
              <Text note numberOfLines={2}> {this.data.descriptiom}</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
            </ListItem>
            );
    }
}

