import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/iconst';

const TabItem = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312"></Image>
        <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="justify-center items-center mt-4 rounded-full size-full">
      <Image tintColor="#A8B5DB" source={icon}></Image>
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabItem focused={focused} icon={icons.home} title="Home"></TabItem>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabItem focused={focused} icon={icons.save} title="Saved"></TabItem>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabItem focused={focused} icon={icons.search} title="Search"></TabItem>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <TabItem focused={focused} icon={icons.person} title="Search"></TabItem>
              </>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;
