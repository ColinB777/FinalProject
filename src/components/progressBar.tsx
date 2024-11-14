import './progressBar.css';
import smallPlant from "../images/small-plant.png";
import mediumPlant from "../images/medium-plant.png";
import largePlant from "../images/large-plant.png";

type ProgressBarProps = {
  answeredCount: number;
  totalQuestions: number;
};

export function CircularProgressBar({ answeredCount, totalQuestions }: ProgressBarProps) {
  // Calculate the percentage of answered questions
  const progress = (answeredCount / totalQuestions) * 100;

  // Determine plant stage based on progress percentage
  const plantImage = progress < 33 ? smallPlant : progress < 66 ? mediumPlant : largePlant;

  return (
    <div className="progress-circle-container">
      <svg className="progress-circle" width="150" height="150" viewBox="0 0 36 36">
        <path
          className="bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="progress"
          strokeDasharray={`${progress}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <img src={plantImage} className="plant-icon" alt="growing plant" />
      <div className="progress-text">{Math.round(progress)}%</div>
    </div>
  );
}
