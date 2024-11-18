import smallPlant from "../images/small-plant.png";
import mediumPlant from "../images/medium-plant.png";
import largePlant from "../images/large-plant.png";
import wateringCan from "../images/watering-can.gif";
import React from "react";


type SimpleConstraints = {
    answer: string;
    currentQuestion: number;
};


export function plantProgressBar({answer, currentQuestion}: SimpleConstraints): React.JSX.Element
{
    const currentPlant = currentQuestion < 4 ? smallPlant : 
    currentQuestion >= 4 ? mediumPlant : 
    currentQuestion === 7 ? largePlant : mediumPlant;
    
    //const defaultAns = "";
    
    return (
        <div>
        <img src={wateringCan} alt="can-Icon" />
        <img src={currentPlant} alt="plant-Icon" />
        </div>
    );
    
}