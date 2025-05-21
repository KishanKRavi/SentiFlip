// components/SentimentGauge.js
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import '../stylesheets/sentimentSpeedometer.css';

const SentimentGauge = ({ score }) => {
  return (
    <div className="gauge-wrapper">
        <h3 className="gauge-title">Overall Sentiment Score</h3>
        <ReactSpeedometer
          value={score}
          minValue={0}
          maxValue={100}
          className="speedo"
          segments={5}
          currentValueText={`Score: ${score}` }
          segmentColors={[
            "#ff4e4e",    // Very Negative
            "#ffa534",    // Negative
            "#ffe600",    // Neutral
            "#00d97e",    // Positive
            "#007f5f",    // Very Positive
          ]}
          customSegmentLabels={[
            {
              text: "Very Bad",
              position: "OUTSIDE",
              color: "#ff4e4e",
            },
            {
              text: "Bad",
              position: "OUTSIDE",
              color: "#ffa534",
            },
            {
              text: "Neutral",
              position: "OUTSIDE",
              color: "#ffe600",
            },
            {
              text: "Good",
              position: "OUTSIDE",
              color: "#007f5f",
            },
            {
              text: "Excellent",
              position: "OUTSIDE",
              color: "#007f5f",
            },
          ]}
          ringWidth={45}
          needleColor="#fff"
          needleTransition="easeBounce"
          needleTransitionDuration={5000}
          height={200}
          
        />
    
    </div>
  );
};

export default SentimentGauge;
