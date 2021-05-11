/**
 * Home Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';

import {displayAlert, removeCurrentUser} from '../../helper';
import Button from '../../components/button';
import Styles from './styles';
import forumsList from './forums';

const Home = ({navigation}) => {
  const handleSignOut = async () => {
    const signOutResult = await removeCurrentUser();
    if (signOutResult && signOutResult.status === 'Success') {
      navigation.dispatch(StackActions.replace('Login'));
    } else {
      displayAlert('Message', 'Unable to sign out try again');
    }
  };

  const showPosts = type => {
    navigation.navigate('PostList', {type});
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.title}>Forums App</Text>
      </View>
      <Text style={Styles.sectionTitle}>Tap on a forum to see the posts</Text>
      <View style={Styles.listContainer}>
        {forumsList.map(item => (
          <TouchableOpacity
            onPress={() => showPosts(item.name)}
            style={Styles.listItem}
            key={item.id}>
            <Text style={Styles.listLabel}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        label="Sign Out"
        handlePress={handleSignOut}
        backgroundColor="#758DE7"
      />
    </SafeAreaView>
  );
};

export default Home;
