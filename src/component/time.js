import React, { Component } from 'react'
import { Text, View } from 'native-base';
import moment from 'moment';

 class Time extends Component {

    constructor(props){
        super(props);
        this.date=props.time;
    }

    render() {
        const time=moment(this.date || moment.now() ).fromNow();
        return (
            <View>
              <Text note style={{marginHorizontal:8}} > {time} </Text>
            </View>
        )
    }
}

export default Time;