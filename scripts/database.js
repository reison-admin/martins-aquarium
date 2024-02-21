/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            diet: "Crustaceans",
            size: 3,
            image: "bart.jpg",
            species: "Bartus fishicus",
            harvestedFrom: "Polynesia"

        },
        {
            id: 2,
            name: "Polly",
            diet: "Algae",
            size: 5,
            image: "polly.jpg",
            species: "Pollius ohmygawdicus",
            harvestedFrom: "France"

        },
        {
            id: 3,
            name: "Caroline",
            diet: "Fish",
            size: 12,
            image: "caroline.jpg",
            species: "Sharkus norvegicus",
            harvestedFrom: "Pacific Rim"

        },
        {
            id: 4,
            name: "Alfred",
            diet: "Salad",
            size: 10,
            image: "alfred.jpg",
            species: "Niceus fisheus",
            harvestedFrom: "United Kingdom"

        },
        {
            id: 5,
            name: "Ace",
            diet: "Omnivore",
            size: 22,
            image: "ace.jpg",
            species: "Tyrannofishus floppus",
            harvestedFrom: "Reddit"

        }
    ]
}

// - image
// - species
// - length
// - martin's name
// - location harvested
// - diet

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}