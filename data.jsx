import React ,{useState} from 'react' 

import { icons, images, SIZES, COLORS, FONTS } from './constants'


export const initialCurrentLocation = {
    streetName: "Rabat",
    gps: {
        latitude: 35.7633932,
        longitude:-5.9045096
    }
}

export const categoryData = [
    {
        id: 1,
        name: "bicycle",
        icon: icons.bicycle,
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
    }, {
        id: 4,
        name: "bike",
        icon: icons.motorcycle,
    },

  

]


export const affordable = 1
export const fairPrice  = 2
export const expensive  = 3



export const carpoolingData = [
    {
        id: 1,
        name: "zakaria",
        user: {
            avatar: images.avatar_2,
            name: "imane"
        },

        rating: 4.8,
        categories: [2, 1],
        priceRating: expensive,
        photos: images.car2,
        duration: "15 - 20 min",
        locationFrom: {
            latitude: 33.9693414,
            longitude:-6.9273026,
        },
        locationTo: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        rideShares: [
            {
                userId: 1,
                name: "ziko",
               photo: images.avatar_3,
                description: "hello im ziko",
                calories: 250,
                userRating: 2.5,
            },
            {
                userId: 2,
                name: "abdou",
                photo: images.avatar_2,
                description: "hello im abdou ",
                calories: 200,
                userRating: 2.5,
            },{
                userId: 3,
                name: "abdou",
                photo: images.avatar_1,
                description: "hello im abdou ",
                calories: 200,
                userRating: 2.5,
            },{
                userId: 4,
                name: "abdou",
                photo: images.avatar_4,
                description: "hello im abdou ",
                calories: 200,
                userRating: 2.5,
            },
        
        ],
        wewe: [
            {
                userId: 1,
                name: "imane",
                photo: images.car,
                description: "hello im imane ",
                calories: 200,
                userRating: 2.5,
            },    {
                userId: 2,
                name: "abdou",
                photo: images.car2,
                description: "hello im abdou ",
                calories: 200,
                userRating: 2.5,
            },
           
        ]
    },{  
        id: 2,
        name: "user1",
        rating: 4.8,
        categories: [2],
        images:[
            
        ]
        ,
        priceRating: affordable,
        
        user: {
            avatar: images.avatar_1,
            name: "imane"
        },
        photos: [
            
           
        ],
       
        duration: "30 - 45 min",
        locationFrom: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        locationTo: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
      
        rideShares: [
            {
                userId: 1,
                name: "imane",
                photo: images.avatar_1,
                description: "hello im imane ",
                calories: 200,
                userRating: 2.5,
            },    {
                userId: 2,
                name: "abdou",
                photo: images.avatar_2,
                description: "hello im abdou ",
                calories: 200,
                userRating: 2.5,
            },
           
        ],
        wewe: [
            {
                userId: 1,
                name: "imane",
                photo: images.car,
                description: "hello im imane ",
                calories: 200,
                userRating: 2.5,
            },    {
                userId: 2,
                name: "abdou",
                photo: images.car2,
                description: "hello im abdou ",
                calories: 200,
                userRating: 2.5,
            },
           
        ]
    },
    
    {
        id: 3,
        name: "zakaria  ",
        
        user: {
            avatar: images.avatar_3,
            name: "imane"
        },
        rating: 4.8,
        categories: [2, 1],
        priceRating: expensive,
        photos: images.car3,
        duration: "15 - 20 min",
        locationFrom: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        locationTo: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        rideShares: [
            {
                userId: 3,
                name: "ziko",
                photo: images.avatar_5,
                description: "hello im ziko",
                calories: 250,
                userRating: 2.5,
            },
        
        ],
        wewe: [
            {
                userId: 1,
                name: "imane",
                photo: images.car,
                description: "hello im imane ",
                calories: 200,
                userRating: 2.5,
            },    {
                userId: 2,
                name: "abdou",
                photo: images.car2,
                description: "hello im abdou ",
                calories: 200,
                userRating: 2.5,
            },
           
        ]
    },



]


export default {
    initialCurrentLocation, 
    categoryData,
    affordable, 
    expensive, 
    carpoolingData,
    

}