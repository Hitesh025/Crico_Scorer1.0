import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet,  Button as Btn, Alert, Image,Appearance,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useIsFocused } from '@react-navigation/native';
import {  Portal, Provider, TextInput, Button, DataTable } from 'react-native-paper';
import { themeColorPrimary, appBarheadingColor, themeColorSecondary } from '../Common/Color';
import { Images } from '../Common/Images';
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux';
let battingArr = new Array();
let bowingArr = new Array();
let arr = new Array();

const ScoreCard = ({ navigation, route }) => {
  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  const [tossWinner, setTossWinner] = useState();
  const [opted, setOpted] = useState();
  const [overs, setOvers] = useState();

  const [value, setValue] = useState(null);

  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const [balls, setBalls] = useState(0);
  const [totalFour, setTotalFour] = useState(0);
  const [totalSix, setTotalSix] = useState(0);

  //STATE VARIABLE FOR INSERT API============>>>>>>>>>>>>>>>
  const [runType, setRunType] = useState(0);
  const [runRate, setRunRate] = useState(0);
  const [ballStatus, setBallStatus] = useState(0);
  const [wktType, setWktType] = useState(0);
  const [catchBy, setCatchBy] = useState(0);
  const [totalExtraRun, setTotalExtraRun] = useState(0);
  const [ballRun, setBallRun] = useState(0);
  //state variables for NonStriker Batsman.....======>>>>>>>>>>>
  const [nonStrikerBats, setNonStrikerBats] = useState();
  const [nonRun, setNonRun] = useState(0);
  const [nonBalls, setNonBalls] = useState(0);
  const [nonFours, setNonFours] = useState(0);
  const [nonSixes, setNonSixes] = useState(0);
  const [nonS_playerId, setNonS_playerId] = useState();

  const [x, setX] = useState(0);

  //state variables for Striker Batsman.....======>>>>>>>>>>>
  const [strikerBats, setStrikerBats] = useState();
  const [strikeRun, setStrikeRun] = useState(0);
  const [strikeBalls, setStrikeBalls] = useState(0);
  const [strikeFours, setStrikeFours] = useState(0);
  const [strikeSixes, setStrikeSixes] = useState(0);
  const [s_playerId, setS_playerId] = useState();

  //for ballers...===>>>>>>>>>
  const [openingBowler, setOpeningBowler] = useState();
  const [bOver, setBOver] = useState(0);
  const [bRun, setBRun] = useState(0);
  const [b_playerId, setB_playerId] = useState();
  const [wktTaken, setWktTaken] = useState(0);

  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [bowlerModalVisible, setBowlerModalVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });
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

  const Wicket = () => {
    setModalVisible(!modalVisible);
    // GetBattingTeamPlayer();
    if (wicket <= 9) {
      setWicket(wicket + 1);
      {
        Over(0);
      }
    } else {
      navigation.navigate('PlayerSelection');
      setOver(0);
      setRun(0);
      setWicket(0);
      setBalls(0);
    }
  };

  const Over = e => {
    setBallRun(e);
    if (x == 0) {
      setStrikeRun(strikeRun + e);
      setStrikeBalls(strikeBalls + 1);
    } else {
      setNonRun(nonRun + e);
      setNonBalls(nonBalls + 1);
    }
    setRun(run + e);
    setBalls(balls + 1);
    setBRun(bRun + e);
    arr.push(e);

    if (e == 4) {
      setTotalFour(totalFour + 1);
      if (x == 0) {
        setStrikeFours(strikeFours + 1);
      } else {
        setNonFours(nonFours + 1);
      }
    }
    if (e == 6) {
      setTotalSix(totalSix + 1);
      if (x == 0) {
        setStrikeSixes(strikeSixes + 1);
      } else {
        setNonSixes(nonSixes + 1);
      }
    }

    if (balls == 5) {
      // GetBowlingTeamPlayer();
      setBowlerModalVisible(!bowlerModalVisible);
      setOver(over + 1);
      setBOver(bOver + 1);
      setBalls(0);

    }
  };


  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text>Out Type______</Text>
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
                  data={battingArr}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select new Batsman' : '...'}
                  searchPlaceholder="Search..."
                  value={strikerBats}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    if (x == 0) {
                      setStrikerBats(item.label);
                      setStrikeRun(0);
                      setStrikeBalls(0);
                      setStrikeFours(0);
                      setStrikeSixes(0);
                    }
                    else {
                      setNonStrikerBats(item.label)
                      setNonRun(0);
                      setNonBalls(0);
                      setNonFours(0);
                      setNonSixes(0);
                    }
                    setIsFocus(false);
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                <Button
                  mode="contained"
                  style={{ margin: 5, backgroundColor: 'green', flex: 1 }}
                  onPress={() => setModalVisible(!modalVisible)}>
                  SET BATSMAN
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={bowlerModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!bowlerModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
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
                  data={bowingArr}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select new Bowler' : '...'}
                  searchPlaceholder="Search..."
                  value={openingBowler}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setOpeningBowler(item.label);
                    setBRun(0);
                    setBOver(0);
                    setIsFocus(false);
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                <Button
                  mode="contained"
                  style={{ margin: 5, backgroundColor: 'green', flex: 1 }}
                  onPress={() => setBowlerModalVisible(!bowlerModalVisible)}>
                  SET BOWLER
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.teams}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
          {team1} v/s {team2}
        </Text>
      </View>
      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text
          style={[theme == 'dark' ? '#000' : themeColorPrimary, styles.inning]}>
          1st Inning
        </Text>
      </View>

      <View style={styles.runtext}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styles.textcolor}>
              {run}-{wicket}{' '}
            </Text>
          </View>
          <View>
            <Text
              style={{ color: themeColorPrimary, marginTop: 15, fontSize: 20 }}>
              ({over}.{balls} /{overs}){' '}
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center', marginRight: 20 }}>
          <Text
            style={[theme == 'dark' ? 'black' : themeColorPrimary, styles.crr]}>
            CRR
          </Text>
          <Text
            style={[theme == 'dark' ? 'black' : themeColorPrimary, styles.crr]}>
            0.00
          </Text>
        </View>
      </View>


      <View style={styles.containerTable}>
        <DataTable>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Batter</DataTable.Title>
            <DataTable.Title>R</DataTable.Title>
            <DataTable.Title>B</DataTable.Title>
            <DataTable.Title>4s</DataTable.Title>
            <DataTable.Title>6s</DataTable.Title>
            <DataTable.Title>SR</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row
            style={{ backgroundColor: x == 0 ? '#62BB63' : 'white' }}>
            <DataTable.Cell>{strikerBats}</DataTable.Cell>
            <DataTable.Cell>{strikeRun}</DataTable.Cell>
            <DataTable.Cell>{strikeBalls}</DataTable.Cell>
            <DataTable.Cell>{strikeFours}</DataTable.Cell>
            <DataTable.Cell>{strikeSixes}</DataTable.Cell>
            <DataTable.Cell>{(strikeRun / strikeBalls) * 100}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row
            style={{ backgroundColor: x == 1 ? '#62BB63' : 'white' }}>
            <DataTable.Cell>{nonStrikerBats}</DataTable.Cell>
            <DataTable.Cell>{nonRun}</DataTable.Cell>
            <DataTable.Cell>{nonBalls}</DataTable.Cell>
            <DataTable.Cell>{nonFours}</DataTable.Cell>
            <DataTable.Cell>{nonSixes}</DataTable.Cell>
            <DataTable.Cell>{(nonRun / nonBalls) * 100}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Header>
            <DataTable.Title>Bowler</DataTable.Title>
            <DataTable.Title>O</DataTable.Title>
            <DataTable.Title>R</DataTable.Title>
            <DataTable.Title>W</DataTable.Title>
            <DataTable.Title>M</DataTable.Title>
            <DataTable.Title>ER</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>{openingBowler}</DataTable.Cell>
            <DataTable.Cell>
              {bOver}.{balls}
            </DataTable.Cell>
            <DataTable.Cell>{bRun}</DataTable.Cell>
            <DataTable.Cell>{wktTaken}</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
            <DataTable.Cell>0</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <View style={styles.thisOverField}>
        <Text style={{ marginLeft: 15, color: '#000' }}></Text>
        {arr.map((data, index) => {
          return (
            <Text key={index} style={{ marginLeft: 15, color: '#000' }}>
              {data}
            </Text>
          );
        })}
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.screen1}>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              Over(0);
            }}>
            <Text style={{ color: 'black' }}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              Over(1);
            }}>
            <Text style={{ color: 'black' }}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              Over(2);
            }}>
            <Text style={{ color: 'black' }}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              Over(3);
            }}>
            <Text style={{ color: 'black' }}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              Over(4);
            }}>
            <Text style={{ color: 'black' }}>4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.screen2}>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              Over(5);
            }}>
            <Text style={{ color: 'black' }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              Over(6);
            }}>
            <Text style={{ color: 'black' }}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container} onPress={Wicket}>
            <Text style={{ color: 'black' }}>Wkt</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              x == 0 ? setX(1) : setX(0);
            }}>
            <Text style={{ color: 'black' }}>Swp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container}>
            <Text style={{ color: 'black' }}>und</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.screen2}>
          <TouchableOpacity
            style={styles.container}
            onPress={() => setRun(run + 1)}>
            <Text style={{ color: 'black' }}>wide</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.container}
            onPress={() => setRun(run + 1)}>
            <Text style={{ color: 'black' }}>nb</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginLeft: 10,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: themeColorPrimary, fontWeight: '700' }}>
          Toss won By {tossWinner} and chose to {opted}
        </Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    margin: 5,
    borderWidth: 3,
    borderRightColor: themeColorPrimary,
    borderBottomColor: themeColorPrimary,
    borderTopColor: themeColorPrimary,
  },
  screen1: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  screen2: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  runtext: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
    elevation: 7,
  },
  textcolor: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
    marginLeft: 5,
  },
  mainContainer: {
    elevation: 7,
    margin: 10,

    borderRadius: 10,
    backgroundColor: 'white',
  },
  containerTable: {
    backgroundColor: 'white',
    elevation: 7,
    borderRadius: 10,
    margin: 10,
  },

  teams: {
    marginLeft: 0,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColorPrimary,
    height: 50,
  },
  thisOverField: {
    height: '7%',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    elevation: 7,
    flexDirection: 'row',
  },
  inning: {
    fontWeight: 'bold',
  },
  crr: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    color: 'darkblue',
    fontWeight: 'bold',
    backgroundColor: '#b3ffff',
    width: 100,
    borderRadius: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  dropdown: {
    height: 50,
    width: 200,
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

export default ScoreCard