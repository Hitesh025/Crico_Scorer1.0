import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Modal, Portal, Button, Provider, TextInput } from 'react-native-paper';
import { themeColorPrimary, appBarheadingColor, themeColorSecondary, buttonColorText } from '../Common/Color';
import { Context } from '../../App';
import { useDispatch, useSelectors } from 'react-redux';
import { setUserInfo } from '../Redux/action/userAction';
import { setPlayerInfo } from '../Redux/action/playersAction';


const PlayerDetails = ({ navigation, route }) => {
  const { team, userid_, userName } = route.params;
  // const [teamName, setTeamName] = useState();
  // const [player1, setPlayer1] = useState();
  // const [player2, setPlayer2] = useState();
  // const [player3, setPlayer3] = useState();
  // const [player4, setPlayer4] = useState();
  // const [player5, setPlayer5] = useState();
  // const [player6, setPlayer6] = useState();
  // const [player7, setPlayer7] = useState();
  // const [player8, setPlayer8] = useState();
  // const [player9, setPlayer9] = useState();
  // const [player10, setPlayer10] = useState();
  // const [player11, setPlayer11] = useState();

  const dispatch = useDispatch();
  const context = useContext(Context)

  const userInfo = useSelector(state => {
    return state.userInfoReducer.userInfo
  })

  const playerInfo = useSelector(state=>{
    return state.playerInfoReducer.playerInfo
  })


  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor={themeColorPrimary} barStyle="light-content" />
      <View style={styles.header}>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
          <Text style={styles.headerText}>Crico</Text>
          <Text style={{ fontSize: 15, marginTop: 10, marginLeft: 5, color: appBarheadingColor, }}>Scorer</Text>
        </View>
      </View>
      <View style={{ flex: 15, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, color: themeColorPrimary, fontWeight: 'bold' }}>Enter the Details of {team} </Text>
        <ScrollView showsVerticalScrollIndicator={false}>

          {team === 'first team' ?
            <TextInput
              label=" Enter Team Name1"
              mode='outlined'
              value={context.teamName1}
              onChangeText={(text) => { context.setTeamName1(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label=" Enter Team Name2"
              mode='outlined'
              value={context.teamName2}
              onChangeText={(text) => { context.setTeamName2(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />
          }
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player1"
              mode='outlined'
              value={context.team1_player1}
              onChangeText={text => { context.setTeam1_player1(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player1"
              mode='outlined'
              value={context.team2_player1}
              onChangeText={text => { context.setTeam2_player1(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player2"
              mode='outlined'
              value={context.team1_player2}
              onChangeText={text => { context.setTeam1_player2(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player2"
              mode='outlined'
              value={context.team2_player2}
              onChangeText={text => { context.setTeam2_player2(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player3"
              mode='outlined'
              value={context.team1_player3}
              onChangeText={text => { context.setTeam1_player3(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player3"
              mode='outlined'
              value={context.team2_player3}
              onChangeText={text => { context.setTeam2_player3(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player4"
              mode='outlined'
              value={context.team1_player4}
              onChangeText={text => { context.setTeam1_player4(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player4"
              mode='outlined'
              value={context.team2_player4}
              onChangeText={text => { context.setTeam2_player4(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player5"
              mode='outlined'
              value={context.team1_player5}
              onChangeText={text => { context.setTeam1_player5(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player5"
              mode='outlined'
              value={context.team2_player5}
              onChangeText={text => { context.setTeam2_player5(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player6"
              mode='outlined'
              value={context.team1_player6}
              onChangeText={text => { context.setTeam1_player6(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player6"
              mode='outlined'
              value={context.team2_player6}
              onChangeText={text => { context.setTeam2_player6(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player7"
              mode='outlined'
              value={context.team1_player7}
              onChangeText={text => { context.setTeam1_player7(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player7"
              mode='outlined'
              value={context.team2_player7}
              onChangeText={text => { context.setTeam2_player7(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player8"
              mode='outlined'
              value={context.team1_player8}
              onChangeText={text => { context.setTeam1_player8(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player8"
              mode='outlined'
              value={context.team2_player8}
              onChangeText={text => { context.setTeam2_player8(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player9"
              mode='outlined'
              value={context.team1_player9}
              onChangeText={text => { context.setTeam1_player9(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player9"
              mode='outlined'
              value={context.team2_player9}
              onChangeText={text => { context.setTeam2_player9(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player10"
              mode='outlined'
              value={context.team1_player10}
              onChangeText={text => { context.setTeam1_player10(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player10"
              mode='outlined'
              value={context.team2_player10}
              onChangeText={text => { context.setTeam2_player10(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          {team === 'first team' ?
            <TextInput
              label="Enter Team 1 Player11"
              mode='outlined'
              value={context.team1_player11}
              onChangeText={text => { context.setTeam1_player11(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            /> :
            <TextInput
              label="Enter Team2 Player11"
              mode='outlined'
              value={context.team2_player11}
              onChangeText={text => { context.setTeam2_player11(text) }}
              theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}
              style={{ backgroundColor: '#fff', }}
            />}
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => { }}
              style={styles.button1}>
              <Text style={{ fontWeight: '700', color: 'white' }}>SUBMIT</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}
              style={styles.button2}>
              <Text style={{ fontWeight: '700', color: 'white' }}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    color: appBarheadingColor,
    fontFamily: 'YanoneKaffeesatz-VariableFont_wght',
    fontSize: 30,
    fontWeight: '900'
  },
  header: {
    flex: 1,
    backgroundColor: themeColorPrimary,
    justifyContent: 'center'
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20
  },
  button1: {
    margin: 15,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 5,
    paddingHorizontal: 40,
    borderRadius: 10,
    color: buttonColorText,
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center'
  },
  button2: {
    margin: 15,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 5,
    paddingHorizontal: 40,
    borderRadius: 10,
    color: buttonColorText,
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center'
  },

})

export default PlayerDetails