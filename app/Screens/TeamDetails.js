import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, Button as Btn, Alert, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useIsFocused } from '@react-navigation/native';
import { Modal, Portal, Provider, TextInput, Button } from 'react-native-paper';
import { themeColorPrimary, appBarheadingColor, themeColorSecondary } from '../Common/Color';
import { Context } from '../../App';
import { useDispatch, useSelector } from 'react-redux';

const TeamDetails = ({ navigation, route }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [tossWinner, setTossWinner] = useState();
  const [overs, setOvers] = useState();
  const [opted, setOpted] = useState();
  // const { uId, uName, team_ } = route.params;
  const [team_Name1, setTeam_Name1] = useState();
  const [team_Name2, setTeam_Name2] = useState();
  const [team_Id1, setTeam_Id1] = useState(0);
  const [team_Id2, setTeam_Id2] = useState(0);

  const dispatch = useDispatch();
  const context = useContext(Context)

  const userInfo = useSelector(state => {
    return state.userInfoReducer.userInfo
  })


  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const opted_data = [
    { label: 'Bat', value: '1' },
    { label: 'Ball', value: '2' },
  ];

  const toss_data = [
    { label: 'team1', value: 'pakistan' },
    { label: 'team2', value: 'india' },
  ];

  const renderLabelForToss = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: themeColorPrimary }]}>
          Toss Winner
        </Text>
      );
    }
    return null;
  };

  const renderLabelForOpted = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: themeColorPrimary }]}>
          Opted to?
        </Text>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={themeColorPrimary} barStyle="light-content" />
      <View style={styles.header}>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
          <Text style={styles.headerText}>Crico</Text>
          <Text style={{ fontSize: 15, marginTop: 10, marginLeft: 5, color: appBarheadingColor, }}>Scorer</Text>
        </View>
      </View>

      <View style={{ flex: 15 }}>
        {

          <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20, }}>
              <Text style={{ color: themeColorPrimary, fontSize: 20, fontWeight: 'bold' }}>
                {context.user_name}
              </Text>
            </View>

            <View>

              <View style={{ flexDirection: 'row', marginHorizontal: 10 }} >

                <Dropdown
                  style={[styles.dropdown2, isFocus && { borderColor: themeColorPrimary }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select Team1' : '...'}
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }} />
                <Button mode="contained" style={{ margin: 5, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate('PlayerDetails', { team: "first team" }) }}>
                  Create Team1
                </Button>
              </View>

              <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>

                <Dropdown
                  style={[styles.dropdown2, isFocus && { borderColor: themeColorPrimary }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select Team2' : '...'}
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }} />
                <Button mode="contained" style={{ margin: 5, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate('PlayerDetails', { team: "second team" }) }}>
                  Create Team2
                </Button>
              </View>

              <View style={{ marginTop: 10, padding: 16 }}>
                {renderLabelForToss()}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: themeColorPrimary }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={toss_data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select Toss Winner Team' : '...'}
                  value={tossWinner}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setTossWinner(item.value);
                    setIsFocus(false);
                  }} />
              </View>
              <View style={{ padding: 16 }}>
                <TextInput
                  label="Over"
                  mode='outlined'
                  placeholder='Enter Over'
                  keyboardType='numeric'
                  value={overs}
                  onChangeText={text => setOvers(text)}
                  theme={{ colors: { primary: themeColorPrimary, underlineColor: 'transparent', } }}

                />
              </View>

              <View style={{ marginTop: 10, padding: 16 }}>
                {renderLabelForOpted()}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: themeColorPrimary }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={opted_data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select Your Choice Ball or Bat' : '...'}
                  value={opted}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setOpted(item.value);
                    setIsFocus(false);
                  }} />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Button mode="contained" style={{ marginTop: 30, backgroundColor: 'green', }} onPress={() => { navigation.navigate('PlayerSelection') }}>
                  SATRT MATCH
                </Button>
                <Button mode="contained" style={{ marginTop: 30, backgroundColor: 'green', }} onPress={() => { }}>
                  HISTORY
                </Button>
              </View>
            </View>
          </>

        }

        {/* <Btn title='Get Dummy' onPress={()=>navigation.navigate('GetDummy',{
                        passUserId: userId
                    })} /> */}
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
  dropdown: {
    height: 50,
    borderColor: themeColorPrimary,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  dropdown2: {
    height: 50,
    flex: 1,
    margin: 5,
    borderColor: themeColorPrimary,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,

  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})

export default TeamDetails