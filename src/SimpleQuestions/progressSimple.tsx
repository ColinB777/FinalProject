import smallPlant from "../images/small-plant.png";
import mediumPlant from "../images/medium-plant.png";
import largePlant from "../images/large-plant.png";


type SimpleConstraints = {
    answer: string
    currentProgress: string
    currentQuestion: number
};


export function plantProgressBar({answer, currentProgress, currentQuestion}: SimpleConstraints)
{
    const currentPlant = smallPlant;
    const defaultAns = "";
    currentQuestion = 0;
}