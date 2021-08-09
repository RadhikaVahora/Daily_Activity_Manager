import React from 'react';
import {View,Text,FlatList,StyleSheet,SafeAreaView} from 'react-native';

const Items = [
    {id:'22',name:'Brean Butter'},
    {id:'33',name:'Jam Sandwich'},
    {id:'24',name:'Boiled Eggs'},
    {id:'55',name:'Poha'},
    {id:'16',name:'Upma'},
    {id:'17',name:'Samosa'},
    {id:'18',name:'French Toast'},
    {id:'19',name:'Omlet'}, 
    {id:'20',name:'Nutella Toast'},
    {id:'21',name:'Corn Flakes'},
    {id:'42',name:'Half Fry'},
    {id:'23',name:'Scrumbled Eggs'}
 ];

 const ItemData = ({ name }) => {    
 return ( 
    <View style={Itemstyles.category}>
         <Text style={{fontSize:10}}>{name}</Text>
    </View>
    );
 };

const ItemView = () => {
    return(
    <SafeAreaView style={Itemstyles.screen}>
        <Text style={{justifyContent:'center',alignItems:'center'}}>Select Item</Text>
        <FlatList 
        data={Items}
        renderItem={({item}) => <ItemData name={item.name} />}
        keyExtractor = {item => item.id }
        />
    </SafeAreaView>);
};

const Itemstyles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        marginTop:80,
        marginLeft:10
    },
    category: {
        backgroundColor: '#D5D4D4',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems:'center'
      },
});

export default ItemView;
