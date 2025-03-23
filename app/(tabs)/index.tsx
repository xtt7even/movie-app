import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text>index</Text>
      <Link className="text-4xl" href="/onboarding">
        Link to unboarding
      </Link>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
