import moon from "../../assets/destination/image-moon.webp"
import mars from "../../assets/destination/image-mars.webp"
import europa from "../../assets/destination/image-europa.webp"
import titan from "../../assets/destination/image-titan.webp"

const destinationData = [
    {
        id:0,
        name:"Moon",
        parag:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 km",
        time:"3 days",
        imgSrc:moon
    },
    {
        id:1,
        name:"Mars",
        parag:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:"225 MIL. km",
        time:"9 months",
        imgSrc:mars
    },
    {
        id:2,
        name:"Europa",
        parag:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance:"628 MIL. km",
        time:"3 years",
        imgSrc:europa
    },
    {
        id:3,
        name:"Titan",
        parag:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 BIL. km",
        time:"7 years",
        imgSrc:titan
    },
]

export default destinationData