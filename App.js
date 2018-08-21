import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button ,ImagePicker} from 'antd-mobile-rn';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ data: {name:''}}
  }
  componentDidMount(){
    return fetch('https://www.easy-mock.com/mock/5b7b86175b5f85113557a3b9/reactapp/userinfo')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data:responseJson.data
        })
        console.log(responseJson)

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>王吉{this.state.data.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
