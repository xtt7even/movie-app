import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const index = () => {
  return (
    <SafeAreaView>
      <Text>index</Text>
      <Link href="/onboarding">Link to unboarding</Link>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
