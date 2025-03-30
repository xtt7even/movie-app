import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/iconst';
import { images } from '@/constants/images';
import { URLS } from '@/enums/URLS';
import { fetchPopularMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const index = () => {
  const router = useRouter();

  const {
    data: moviesData,
    error: moviesError,
    isLoading: moviesIsLoading,
  } = useFetch(() => fetchPopularMovies(), true);

  console.log(moviesData, moviesError, moviesIsLoading);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView className="flex-1 top-0 px-5">
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5"></Image>
        <View>
          <SearchBar
            onPress={() => {
              router.push(URLS.SEARCH);
            }}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
