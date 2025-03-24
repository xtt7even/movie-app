import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/iconst';

const index = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView className="flex-1 top-0 px-5">
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5"></Image>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
