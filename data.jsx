import { icons, images, SIZES, COLORS, FONTS } from './constants'


export const initialCurrentLocation = {
    streetName: "Tanger",
    gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922
    }
}

export const categoryData = [
    {
        id: 1,
        name: "bike",
        //icon: icons.rice_bowl,
    },
    {
        id: 2,
        name: "car",
        icon: icons.car,
    },
    {
        id: 3,
        name: "Trottinette",
        icon: icons.ElectricScooter,
    },

  

]


export const affordable = 1
export const fairPrice = 2
export const expensive = 3
  

export const carpoolingData = [
    {  
        id: 1,
        name: "By Programmer AbdessamadPas",
        rating: 4.8,
        categories: [2],
        priceRating: affordable,
        //photo: images.{image of carpooling },
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
      
        rideShares: [
            {
                userId: 1,
                name: "imane",
              //  photo: images.{imageprofile},
                description: "hello im imane ",
                calories: 200,
                price: 10
            },    {
                userId: 2,
                name: "abdou",
               // photo: images.{imageprofile},
                description: "hello im abdou ",
                calories: 200,
                price: 10
            },
           
        ]
    },
    {
        id: 2,
        name: "By Programmer AbdessamadPas",
        rating: 4.8,
        categories: [2, 1],
        priceRating: expensive,
         //photo: images.{image of carpooling },
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        rideShares: [
            {
                userId: 3,
                name: "ziko",
               // photo: images.{imageprofile},
                description: "hello im ziko",
                calories: 250,
                price: 15
            },
        
        ]
    },




]


export default {
    initialCurrentLocation, 
    categoryData,
    affordable, 
    expensive, 
    carpoolingData

}