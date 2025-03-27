import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { icons } from '@/constants/iconst';

interface Props {
  placeholder: string;
  onPress: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <View className="bg-[#0F0D23] rounded-full w-full py-4 flex-row gap-3">
      <Image source={icons.search}></Image>
      <TextInput
        className="text-white"
        onPress={onPress}
        value=""
        placeholder={placeholder}
        placeholderTextColor="#a8b5db"
      ></TextInput>
      {/* <Text className="ml-10">Search by movie title</Text>  */}
    </View>
  );
};

export default SearchBar;
