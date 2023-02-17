import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Images } from '../Common/Images';
import { themeColorPrimary } from '../Common/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../../App';
import { useDispatch, useSelector,Provider } from 'react-redux';
import { setUserInfo } from '../Redux/action/userAction';

const Login = ({navigation}) => {
    // const [userName, setUserName] = useState();
    const context = useContext(Context)
    const dispatch = useDispatch();
    
    const userInfo = useSelector(state => {
        return state.userInfoReducer.userInfo
      })


    return (
        <View style={{ justifyContent: 'center', marginTop: 40 }}>

            <View
                style={{
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor: 'white',
                    elevation: 5,
                    marginHorizontal: 10
                }}>
                <Image
                    style={{ height: '100%', width: '50%' }}
                    source={Images.cricketscorer}
                />
            </View>
            <View style={{ justifyContent: 'center', marginVertical: 20 }}>
                <TextInput
                    style={{ marginHorizontal: 15 }}
                    label="User Name"
                    mode="outlined"
                    placeholder="Enter User Name"
                    // value={context.team2_player11}
                    // onChangeText={text => context.setTeam2_player11(text)}
                    value={context.user_name}
                    onChangeText={text => {context.setUserName(text)}}
                    theme={{
                        colors: { primary: themeColorPrimary, underlineColor: 'transparent' },
                    }}
                />

                <View style={{ flexDirection: 'row', marginHorizontal: 10,marginVertical:15,justifyContent:'space-between'}}>
                    <Button
                        mode="contained"
                        style={{ margin: 5, backgroundColor: 'green', flex: 1 }}
                        onPress={()=>{}}>
                        LOGIN
                    </Button>
                    <Button
                        mode="contained"
                        style={{ margin: 5, backgroundColor: 'green', flex: 1 }}
                        onPress={()=>{
                            dispatch(setUserInfo(context.user_name))
                            navigation.navigate('TeamDetails');
                            }}>
                        SIGNUP
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default Login