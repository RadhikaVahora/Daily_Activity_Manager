import React from 'react';
import {View,Text,Button,StyleSheet,FlatList,SafeAreaView, TouchableOpacity} from 'react-native';

const Categories = [
   {id:'12',name:'STARTERS'},
   {id:'13',name:'MAIN COURSE'},
   {id:'14',name:'DESERTS'},
   {id:'15',name:'DRINKS'}
];

const ListCategories = ({item,navigation}) => {
    console.log(item);
  
    return(
        <TouchableOpacity 
        style={styles.category}
        onPress={()=>{
            navigation.navigate({routeName: 'Item'}); 
           
         }}>
        <Text style={{fontSize:20}}>{item}</Text>
        </TouchableOpacity>
    );

};

const Home = props => {
    return(
    <SafeAreaView style={styles.screen}>
        <Text style={styles.header1}>Menu List</Text>
        <Text style={{justifyContent: 'flex-start'}}>Choose Category to make an Order</Text>
       
        <FlatList 
        data={Categories}
        renderItem={({item}) => 
          <ListCategories item = {item.name} navigation={props.navigation}/>
        } 
        keyExtractor={item => item.id}
        />
        <Button title='Details' onPress={() => {props.navigation.navigate({routeName: 'Item'});
        }}/>
    </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'flex-start',
        marginTop:80,
        marginLeft:20
    },
    header1:{
        fontSize:20,
        color:'blue',
        marginBottom:15,
    },
    category: {
        backgroundColor: '#D5D4D4',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});

export default Home;
