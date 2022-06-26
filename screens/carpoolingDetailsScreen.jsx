import React, {useEffect, useState} from 'react'


import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    ScrollView,
    Dimensions
} from "react-native";
import {MapScreen} from ''
const { width, height } = Dimensions.get("window");


import { icons, COLORS, SIZES, FONTS } from '../constants'

const CarpoolingDetailsScreen = ({navigation, route}) => {

    const [carpoolingInfo, SetCarpoolingInfo]=useState(null)
    const [currentPosition, setCurrentPosition]=useState(null)

    useEffect( () => {
      
        let { item, currentLocation } =  route.params;
        SetCarpoolingInfo(item)
        setCurrentPosition(currentLocation)
        
    },[route.params])
  

    const scrollX = new Animated.Value(0);
    
    //const [orderBokking, setOrderBokking] = React.useState([]);

   

   


    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

               
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{carpoolingInfo?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderRideInfo() {
        return (
          <View style={{ marginVertical:10,}}>
          
         
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false })}
            >
                {
                  carpoolingInfo?.wewe.map((item, index) => (
                        <View 
                            key={`menu-${index}`}
                            style={{ alignItems: 'center',  }}
                        >
                            <View style={{ height: SIZES.height * 0.35 }}>
                                {/* user Image */}
                                <Image
                                    source={item.photo}
                                    resizeMode="contain"
                                    style={{
                                      marginTop:10,
                                        width: SIZES.width,
                                        height: "100%",
                                       
                                    }}
                                />

                               
                             
                            </View>

                            {/* Name & Description */}
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{item.name} - {item.userRating.toFixed(1)}</Text>
                                <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
                            </View>

                            {/* Calories */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10
                                }}
                            >
                            <Text style={{
                              ...FONTS.body3, color: COLORS.darygray
                          }}> 2.5 Rank</Text>
                                <Image
                                    source={icons.like}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginLeft : 10
                                    }}
                                />

                                
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
            </View>
              )}


            function newScroll() {
                return (
                <View style={ {height:120 }}> 
                <Text style={{paddingVertical:10 }}> Rideshares ( 2 )</Text>

                  <ScrollView
                    horizontal ={true}
                  
                >
                    {
                      carpoolingInfo?.rideShares.map((item, index) => (
                          <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() =>{
                   navigation.navigate("wewe", {
                    item,
                    
                })}}
            >
                      
                            <View 
                                key={`menu-${index}`}
                                style={{ alignItems: 'center',height: "100%", marginBottom:-80, width: 60 }}
                            >
                                <View style={{ height: "100%",    }}>
                                    {/* user Image */}
                                    <Image
                                        source={item.photo}
                                        resizeMode="contain"
                                        style={{
                                          
                                            width: SIZES.width,
                                          height: "100%",
                                          
                                        }}
                                    />

                                    {/* Quantity */}
                                
                                </View>

                                {/* Name & Description */}
                                

                             
                            </View>
                           
                            </TouchableOpacity>
                        
                        ))
                    }
                </ScrollView>
        </View>
        
        )}
   

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View style={{ height: 30 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: SIZES.padding
                    }}
                >
                    {carpoolingInfo?.rideShares.map((item, index) => {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                            extrapolate: "clamp"
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }

    function renderBooking() {
        return (
            <View style={{width: width, marginBottom:100 }}>
                {
                    renderDots()
                }
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>The price is  </Text>
                      
                        <Text style={{ ...FONTS.h3 }}>$ 10.00</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Location</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.master_card}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Casablanca</Text>
                        </View>
                    </View>

                    {/* Order Button */}
                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                            onPress={() => navigation.navigate("MapScreen", {
                                carpoolingInfo: carpoolingInfo,
                                currentLocation: currentPosition
                            })}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                        style={{
                            position: 'absolute',
                            bottom: -34,
                            left: 0,
                            right: 0,
                            height: 34,
                            backgroundColor: COLORS.white
                        }}
                    >
                    </View> 
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: .8}}>
            {renderHeader()}
            {renderRideInfo()}
            {newScroll()}
            </View>
           <View style={{flex: .32 }}>
           {renderBooking()}
           </View>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
     
      marginTop:30,
        flex: 1,
        backgroundColor: COLORS.lightGray2,
        padding:10,
    }
})




export default CarpoolingDetailsScreen