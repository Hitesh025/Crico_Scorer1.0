import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, Button as Btn, Alert,Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useIsFocused } from '@react-navigation/native';
import { Modal, Portal, Provider, TextInput, Button } from 'react-native-paper';
import { themeColorPrimary, appBarheadingColor, themeColorSecondary } from '../Common/Color';
import { Images } from '../Common/Images';
import { useDispatch, useSelector } from 'react-redux';
let battingArr = new Array();
let bowingArr = new Array();

const team1_player_data = [
  { label: 'Rohit Sharma', value: 'Rohit Sharma' },
  { label: 'KL Rahul', value: 'KL Rahul' },
  { label: 'Virat kohli', value: 'Virat kohli' },
  { label: 'Surya Kumar', value: 'Surya Kumar' },
  { label: 'Hardik Pandya', value: 'Hardik Pandya' },
  { label: 'Dinesh Kartik', value: 'Dinesh Kartik' },
  { label: 'Axar Patel', value: 'Axar Patel' },
  { label: 'Harshal patel', value: 'Harshal patel' },
  { label: 'Bhuneshwar', value: 'Bhuneshwar' },
  { label: 'Chahal', value: 'Chahal' },
  { label: 'Arshdeep', value: 'Arshdeep' },
];

const PlayerSelection = ({ navigation, route }) => {

  const isFocused = useIsFocused();

  // const { mat_id, inn_id } = route.params;
  // const context = useContext(Context);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [bat_team_id, setBat_Team_id] = useState();
  const [bowl_team_id, setBowl_Team_id] = useState();
  const [strikBatId, setStrikBatId] = useState(0);
  const [nonStrikBatId, setNonStrikBatId] = useState(0);
  const [bowlerId, setBowlerId] = useState(0);
  const [batTeamPlayer, setBatTeamPlayer] = useState([]);
  const [bowlTeamPlayer, setBowlTeamPlayer] = useState([]);


  const renderLabelStriker = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: themeColorPrimary }]}>
          Striker Batsman
        </Text>
      );
    }
    return null;
  };
  const renderLabelNonStriker = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: themeColorPrimary }]}>
          Non Striker Batsman
        </Text>
      );
    }
    return null;
  };
  const renderLabelBowler = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: themeColorPrimary }]}>
          Opener Bowler
        </Text>
      );
    }
    return null;
  };

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={themeColorPrimary}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 20,
          }}>
          <Text style={styles.headerText}>Cricket</Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              marginLeft: 5,
              color: appBarheadingColor,
            }}>
            Scorer
          </Text>
        </View>
      </View>

      <View style={{ flex: 15 }}>
        <View
          style={{
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            borderRadius: 20,
            backgroundColor: 'white',
            elevation: 5,
          }}>
          <Image
            style={{ height: '100%', width: '50%' }}
            source={Images.cricketscorer}
          />
        </View>


        <View style={{ marginTop: 10, padding: 16 }}>
          {renderLabelStriker()}
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: themeColorPrimary },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={team1_player_data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Striker Batsman' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setStrikBatId(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={{ marginTop: 10, padding: 16 }}>
          {renderLabelNonStriker()}
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: themeColorPrimary },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={team1_player_data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Non Striker Batsman' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setNonStrikBatId(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={{ marginTop: 10, padding: 16 }}>
          {renderLabelBowler()}
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: themeColorPrimary },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={team1_player_data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Opener Bowler' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setBowlerId(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button
            mode="contained"
            style={{ marginTop: 30, backgroundColor: 'green' }}
            onPress={()=>{navigation.navigate('ScoreCard')}}>
            SATRT MATCH
          </Button>
          <Button
            mode="contained"
            style={{ marginTop: 30, backgroundColor: 'green' }}
            onPress={() => {}}>
            HISTORY
          </Button>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    color: appBarheadingColor,
    fontFamily: 'YanoneKaffeesatz-VariableFont_wght',
    fontSize: 30,
    fontWeight: '900',
  },
  header: {
    flex: 1,
    backgroundColor: themeColorPrimary,
    justifyContent: 'center',
  },
  dropdown: {
    height: 50,
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
});

export default PlayerSelection