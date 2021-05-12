import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './login/signin';
import SignUp from './login/signup';
import LockProfile from './login/lockprofile';
import ForgetPass from './login/forgetpass';


const RootStack = createStackNavigator({
    SignInScreen: SignIn,
    SignUpScreen: SignUp,
    LockProfileScreen: LockProfile,
    ForgetPassScreen: ForgetPass,
});

export default createAppContainer(RootStack);