import React, { useEffect } from "react"
import { StyleSheet, Text, View, Button, Image } from "react-native"
import { fetchAllProfiles } from "../redux/home"
import { useDispatch, useSelector } from "react-redux"




export default function Home({ navigation }) {
      const dispatch = useDispatch()
  const allProfiles = useSelector((state) => state.allProfiles)
  //  const auth = useSelector((state) => state.auth)
  // console.log(' allPROFILES', allProfiles)
  
  // useEffect(() => {
  //   dispatch(fetchAllProfiles(auth.id))
  // }, [])

    useEffect(() => {
      dispatch(fetchAllProfiles())
    }, [])
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  //  console.log(getRandomInt(allProfiles.profiles.length))
  let rando = allProfiles.profiles[getRandomInt(allProfiles.profiles.length)] ||{imageUrl: ''}
  // console.log(getRandomInt(allProfiles.profiles.length))
  console.log("YEO", rando.imageUrl)
  
  return (
    // <View style={styles.container}>
    //   <Text>WELCOME HOME CARLY!</Text>
    // </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen </Text>
      {/* <Image
        source={{
          uri: "https://64.media.tumblr.com/84365fe19039b5fd917d6d449ca86290/tumblr_op4lb5DPRe1qg6rkio1_1280.jpg",
        }} style={{ width: 100, height: 100 }}
      /> */}
      <Image
        source={{
          uri: rando.imageUrl,
        }}
        style={{ width: 500, height: 600 }}
      />
      <Button
        title="SingleUser"
        onPress={() => navigation.navigate("SingleUser")}
      />
      <Button
        title="Like!"
        // onPress={() => navigation.navigate("SingleUser")}
      />
      <Button
        title="No!"
        // onPress={() => navigation.navigate("SingleUser")}
      />
      {/* <Button
        title="fetchAllUser"
        onPress={() => dispatch(fetchAllProfiles())}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
