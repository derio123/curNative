import React, { Component } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';


import styles from './style';
import Header from './Header';
import {
  Center, Container, Heading,
  NativeBaseProvider, Button, Icon, Box, HStack, IconButton, HamburgerIcon, Menu, SectionList, FlatList, Avatar, VStack, Spacer
} from 'native-base';
import { Entypo } from '@expo/vector-icons';

type Props = {};
const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "Aafreen Khan",
  timeStamp: "12:47 PM",
  recentText: "Good Day!",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
  id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  fullName: "Sujitha Mathur",
  timeStamp: "11:11 PM",
  recentText: "Cheer up, there!",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}, {
  id: "58694a0f-3da1-471f-bd96-145571e29d72",
  fullName: "Anci Barroco",
  timeStamp: "6:22 PM",
  recentText: "Good Day!",
  avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
}, {
  id: "68694a0f-3da1-431f-bd56-142371e29d72",
  fullName: "Aniket Kumar",
  timeStamp: "8:56 PM",
  recentText: "All the best",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
}, {
  id: "28694a0f-3da1-471f-bd96-142456e29d72",
  fullName: "Kiara",
  timeStamp: "12:47 PM",
  recentText: "I will call today.",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
}];

export default class App extends Component<Props, any>{

  constructor(props: any) {
    super(props);

    this.state = { name: 'derio', age: 26, count: 0 };
  }

  render() {
    return (
      <SafeAreaView >
        <StatusBar bg="#3720B3" barStyle="light-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <NativeBaseProvider>
              <Box safeAreaTop bg="violet.600" />
              <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
                <HStack alignItems="center">
                  <Menu color="black" w="190" trigger={triggerProps => {
                    return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <HamburgerIcon />
                    </Pressable>;
                  }}></Menu>
                  <Text color="white" fontSize="20" fontWeight="bold">
                    Home
                  </Text>
                </HStack>

              </HStack>
              <Center>
                <Container>
                  <Box>
                    <Heading fontSize="xl" p="4" pb="3">
                      Inbox
                    </Heading>
                    <FlatList data={data} renderItem={({
                      item
                    }) => <Box borderBottomWidth="1" _dark={{
                      borderColor: "muted.50"
                    }} borderColor="muted.800" pl={["0", "5"]} pr={["0", "5"]} py="2">
                        <HStack space={[2, 3]} justifyContent="space-between">
                          <Avatar size="48px" source={{
                            uri: item.avatarUrl
                          }} />
                          <VStack>
                            <Text _dark={{
                              color: "warmGray.50"
                            }} color="coolGray.800" bold>
                              {item.fullName}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                              color: "warmGray.200"
                            }}>
                              {item.recentText}
                            </Text>
                          </VStack>
                          <Spacer />
                          <Text fontSize="xs" _dark={{
                            color: "warmGray.50"
                          }} color="coolGray.800" alignSelf="flex-start">
                            {item.timeStamp}
                          </Text>
                        </HStack>
                      </Box>} keyExtractor={item => item.id} />
                  </Box>
                </Container>
              </Center>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </SafeAreaView >
    );
  }

}
