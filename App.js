import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import Navigation from './app/Navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './app/Redux/store';
const App = () => {

  const dataInitialState = {
    user_name: '',
    teamName1: '',
    teamName2: '',
    tossWinner: '',
    opted: '',
    overs: '',
    strikerBats: '',
    nonStrikerBats: '',
    openingBowler: '',
    team1_player1: '',
    team1_player2: '',
    team1_player3: '',
    team1_player4: '',
    team1_player5: '',
    team1_player6: '',
    team1_player7: '',
    team1_player8: '',
    team1_player9: '',
    team1_player10: '',
    team1_player11: '',
    team2_player1: '',
    team2_player2: '',
    team2_player3: '',
    team2_player4: '',
    team2_player5: '',
    team2_player6: '',
    team2_player7: '',
    team2_player8: '',
    team2_player9: '',
    team2_player10: '',
    team2_player11: '',
    team1_id: '',
    team2_id: '',
  };

  const [basicInfo, setBasicInfo] = useState(dataInitialState);

  function setUserName(user_name) {
    const newState = { ...basicInfo, user_name };
    setBasicInfo(newState);
  }
  function setTeam1_id(team1_id) {
    const newState = { ...basicInfo, team1_id };
    setBasicInfo(newState);
  }
  function setTeam2_id(team2_id) {
    const newState = { ...basicInfo, team2_id };
    setBasicInfo(newState);
  }
  function setTeamName1(teamName1) {
    const newState = { ...basicInfo, teamName1 };
    setBasicInfo(newState);
  }
  function setTeamName2(teamName2) {
    const newState = { ...basicInfo, teamName2 };
    setBasicInfo(newState);
  }

  function setTossWinner(tossWinner) {
    const newState = { ...basicInfo, tossWinner };
    setBasicInfo(newState);
  }

  function setOpted(opted) {
    const newState = { ...basicInfo, opted };
    setBasicInfo(newState);
  }

  function setOvers(overs) {
    const newState = { ...basicInfo, overs };
    setBasicInfo(newState);
  }

  function setStrikerBats(strikerBats) {
    const newState = { ...basicInfo, strikerBats };
    setBasicInfo(newState);
  }

  function setNonStrikerBats(nonStrikerBats) {
    const newState = { ...basicInfo, nonStrikerBats };
    setBasicInfo(newState);
  }

  function setOpeningBowler(openingBowler) {
    const newState = { ...basicInfo, openingBowler };
    setBasicInfo(newState);
  }
  function setTeam1_player1(team1_player1) {
    const newState = { ...basicInfo, team1_player1 };
    setBasicInfo(newState);
  }
  function setTeam1_player2(team1_player2) {
    const newState = { ...basicInfo, team1_player2 };
    setBasicInfo(newState);
  }
  function setTeam1_player3(team1_player3) {
    const newState = { ...basicInfo, team1_player3 };
    setBasicInfo(newState);
  }
  function setTeam1_player4(team1_player4) {
    const newState = { ...basicInfo, team1_player4 };
    setBasicInfo(newState);
  }
  function setTeam1_player5(team1_player5) {
    const newState = { ...basicInfo, team1_player5 };
    setBasicInfo(newState);
  }
  function setTeam1_player6(team1_player6) {
    const newState = { ...basicInfo, team1_player6 };
    setBasicInfo(newState);
  }
  function setTeam1_player7(team1_player7) {
    const newState = { ...basicInfo, team1_player7 };
    setBasicInfo(newState);
  }
  function setTeam1_player8(team1_player8) {
    const newState = { ...basicInfo, team1_player8 };
    setBasicInfo(newState);
  }
  function setTeam1_player9(team1_player9) {
    const newState = { ...basicInfo, team1_player9 };
    setBasicInfo(newState);
  }
  function setTeam1_player10(team1_player10) {
    const newState = { ...basicInfo, team1_player10 };
    setBasicInfo(newState);
  }
  function setTeam1_player11(team1_player11) {
    const newState = { ...basicInfo, team1_player11 };
    setBasicInfo(newState);
  }
  function setTeam2_player1(team2_player1) {
    const newState = { ...basicInfo, team2_player1 };
    setBasicInfo(newState);
  }
  function setTeam2_player2(team2_player2) {
    const newState = { ...basicInfo, team2_player2 };
    setBasicInfo(newState);
  }
  function setTeam2_player3(team2_player3) {
    const newState = { ...basicInfo, team2_player3 };
    setBasicInfo(newState);
  }
  function setTeam2_player4(team2_player4) {
    const newState = { ...basicInfo, team2_player4 };
    setBasicInfo(newState);
  }
  function setTeam2_player5(team2_player5) {
    const newState = { ...basicInfo, team2_player5 };
    setBasicInfo(newState);
  }
  function setTeam2_player6(team2_player6) {
    const newState = { ...basicInfo, team2_player6 };
    setBasicInfo(newState);
  }
  function setTeam2_player7(team2_player7) {
    const newState = { ...basicInfo, team2_player7 };
    setBasicInfo(newState);
  }
  function setTeam2_player8(team2_player8) {
    const newState = { ...basicInfo, team2_player8 };
    setBasicInfo(newState);
  }
  function setTeam2_player9(team2_player9) {
    const newState = { ...basicInfo, team2_player9 };
    setBasicInfo(newState);
  }
  function setTeam2_player10(team2_player10) {
    const newState = { ...basicInfo, team2_player10 };
    setBasicInfo(newState);
  }
  function setTeam2_player11(team2_player11) {
    const newState = { ...basicInfo, team2_player11 };
    setBasicInfo(newState);
  }
  function setApiLink(API_LINK) {
    const newState = { ...basicInfo, API_LINK };
    setBasicInfo(newState);
  }

  const context1Setter = {
    setUserName,
    setTeamName1,
    setTeamName2,
    setOpted,
    setTossWinner,
    setOvers,
    setStrikerBats,
    setNonStrikerBats,
    setOpeningBowler,
    setTeam1_player1,
    setTeam1_player2,
    setTeam1_player3,
    setTeam1_player4,
    setTeam1_player5,
    setTeam1_player6,
    setTeam1_player7,
    setTeam1_player8,
    setTeam1_player9,
    setTeam1_player10,
    setTeam1_player11,
    setTeam2_player1,
    setTeam2_player2,
    setTeam2_player3,
    setTeam2_player4,
    setTeam2_player5,
    setTeam2_player6,
    setTeam2_player7,
    setTeam2_player8,
    setTeam2_player9,
    setTeam2_player10,
    setTeam2_player11,
    setTeam1_id,
    setTeam2_id,
  };


  return (
    <Provider store={store}>
      <Context.Provider value={{ ...basicInfo, ...context1Setter }} >
        <>
          <Navigation />
        </>

      </Context.Provider>
    </Provider>

  );
};


export const Context = React.createContext(null);
export default App;
