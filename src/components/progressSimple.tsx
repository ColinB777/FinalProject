import smallPlant from "../images/small-plant.png";
import mediumPlant from "../images/medium-plant.png";
import largePlant from "../images/large-plant.png";
import wateringCan from "../images/watering-can.gif";
import './Simplebar.css';


type SimpleConstraints = {
    answer: string;
    currentQuestion: number;
};


export function PlantProgressBar({answer, currentQuestion}: SimpleConstraints)
{
    const currentPlant = currentQuestion === 7 ? largePlant :
    currentQuestion >= 4 ? mediumPlant : smallPlant
    
    return (
        <div>
        <img  className="can-icon" src={wateringCan} alt="can-Icon" />
        <img className="Plant-icon" src={currentPlant} alt="plant-Icon" />
        <div className="border">
            <div className="bar" style={{width: currentQuestion * 15 + '%'}}> {currentQuestion}</div>
        </div>

        </div>
    );
}