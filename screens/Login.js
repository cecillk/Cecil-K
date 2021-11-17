import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Login = ({navigation} ) => {
  return (
    <View
      style={{
        backgroundColor: "grey",
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
  <Image
    style= {{
      borderRdius: 20,
      marginBottom: 60,
      width: 350,
      height: 350,
      
    }}
  source= {{ 
    uri: "https://images.pexels.com/photos/8454917/pexels-photo-8454917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
 }}
 />
 <Text style={{ fontsize: 30, color: "#cc9c0"}}> </Text>
 <Text style={{ fontSize: 40, fontWeight: "bold"}}>C'S SNEAKER HUB </Text>
 <View style={{}}>
   < TextInput
   style={{
     padding: 15,
     borderRadius: 10,
     borderWidth: 0.7,
     paddingHorizontal: 60,
   }}
   placeholder="Username"
   />
   </View>
   <View style={{ marginTop: 10,}}>
     <TextInput
     secureTextEntry={true}
     onChangeText={(
       e
     )=> {
       console.log(e)
     }}
     style={{
       padding: 15,
       borderRadius: 10,
       borderWidth: 0.7,
       paddingHorizontal: 60,
     }}
     placeholder="Password"
     />
     </View>
     <TouchableOpacity
      onPress={() => {
       navigation.navigate("Home");
     }}
     style={{
       padding: 15,
       padddingHorizontal: 80,
       marginTop: 10,
       alignItems: "center",
       borderRadius: 10,
       flexDirection: "row",
       backgroundColor: "black",
     }}
     >
       <AntDesign name="apple1" size={24} color="white" />
       <Text style={{ paddingLeft: 10, color: "white" }}>LOGIN</Text>
       </TouchableOpacity>
       </View>
    


    
  )
}
export default Login