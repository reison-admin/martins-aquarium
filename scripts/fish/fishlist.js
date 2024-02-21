// Import the function that returns a copy of the fish array
import {getFish} from '../database.js'
// Invoke the function that you imported from the database module
const fishes = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of fishes) {
        if (fish.size % 3 === 0) {
            holyFishArray.push(fish);
        }
    } 

    return holyFishArray;
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFishArray = []
    for (const fish of fishes) {
        if (fish.size % 5 === 0) {
            soldierFishArray.push(fish);
        }
        
    }
    return soldierFishArray;
}

export const nonHolyFish = () => {
    const regularFishArray = [];
    // Any fish not a multiple of 3 or 5
    for (const fish of fishes) {
        if (fish.size % 3 !== 0 && fish.size % 5 !== 0) {
            regularFishArray.push(fish);
        }
    }
    return regularFishArray;
}

export const fishList = () => {

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish-list">'

    // Create HTNL representations of each fish here
    
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.harvestedFrom}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}