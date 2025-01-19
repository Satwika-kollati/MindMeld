// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoon,
//   faRunning,
//   faClock,
//   faLightbulb,
// } from "@fortawesome/free-solid-svg-icons";

// const Recommendations = ({ scores }) => {
//   const recommendationDescriptions = {
//     'Sleep Schedule': 'Maintain a consistent sleep schedule of 7-9 hours per night to improve memory consolidation and cognitive performance.',
//     'Regular Exercise': 'Incorporate 30 minutes of moderate exercise daily to enhance brain function and improve cognitive performance.',
//     'Regular Breaks': 'Take a 5-minute break every hour to maintain focus and prevent cognitive fatigue during work or study sessions.',
//     'Meditation': 'Practice 10-15 minutes of daily meditation to enhance attention span and mental clarity.',
//     'Social Activities': 'Engage in social activities regularly to stimulate cognitive function and emotional well-being.',
//     'Morning Routine': 'Establish a consistent morning routine to optimize cognitive performance throughout the day.',
//     'Brain Training': 'Dedicate 20 minutes daily to brain training exercises that target specific cognitive skills.',
//     'Caffeine Management': 'Optimize caffeine intake timing and amount to support sustained attention and alertness.',
//     'Mindfulness Practice': 'Include mindfulness exercises in your daily routine to improve focus and reduce mental fatigue.',
//     'Cardiovascular Health': 'Focus on activities that promote cardiovascular health to support optimal brain function.',
//   };

//   // Sample scores object (should be passed as a prop)
//   // Example: scores = { memory: 85, attention: 70, reaction: 60, problemSolving: 50 };
//   const categories = Object.keys(scores);

//   // Logic to select recommendations based on scores
//   const getRecommendations = () => {
//     const recommendations = [];

//     categories.forEach((category) => {
//       const score = scores[category];
//       if (score >= 80) {
//         // High score: no improvement needed
//         recommendations.push({
//           title: `${category} Maintenance`,
//           description: `Your ${category} score is excellent! Maintain your current habits to sustain this level.`,
//         });
//       } else if (score >= 60) {
//         // Medium score: minor improvement recommendations
//         recommendations.push({
//           title: recommendationDescriptions['Regular Breaks'],
//           description: `Your ${category} score is decent but can improve. Consider taking short, regular breaks to boost your performance.`,
//         });
//       } else {
//         // Low score: targeted recommendation
//         if (category === 'memory') {
//           recommendations.push({
//             title: 'Sleep Schedule',
//             description: recommendationDescriptions['Sleep Schedule'],
//           });
//         } else if (category === 'attention') {
//           recommendations.push({
//             title: 'Meditation',
//             description: recommendationDescriptions['Meditation'],
//           });
//         } else if (category === 'reaction') {
//           recommendations.push({
//             title: 'Regular Exercise',
//             description: recommendationDescriptions['Regular Exercise'],
//           });
//         } else if (category === 'problemSolving') {
//           recommendations.push({
//             title: 'Brain Training',
//             description: recommendationDescriptions['Brain Training'],
//           });
//         }
//       }
//     });

//     return recommendations;
//   };

//   const recommendations = getRecommendations();

  
//   return (
//     <div className="w-full bg-gray-50 py-10">
//       <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
//         Lifestyle Recommendations
//       </h2>
//       {/* Grid layout for alignment with "Recommended Games" */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
//         {recommendations.map((rec, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-4 flex items-start"
//           >
//             {/* Icon section */}
//             <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-500 text-xl">
//               {rec.title === "Sleep Schedule" && <FontAwesomeIcon icon={faMoon} />}
//               {rec.title === "Regular Exercise" && <FontAwesomeIcon icon={faRunning} />}
//               {rec.title === "Regular Breaks" && <FontAwesomeIcon icon={faClock} />}
//               {rec.title === "Brain Training" && <FontAwesomeIcon icon={faLightbulb} />}
//             </div>
//             {/* Recommendation text */}
//             <div className="ml-4">
//               <h3 className="text-lg font-medium text-gray-800">{rec.title}</h3>
//               <p className="text-sm text-gray-600">{rec.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
  


// export default Recommendations;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faRunning,
  faClock,
  faLightbulb,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";

const Recommendations = ({ scores }) => {
  const recommendationDescriptions = {
    'Sleep Schedule': 'Maintain a consistent sleep schedule of 7-9 hours per night to improve memory consolidation and cognitive performance.',
    'Regular Exercise': 'Incorporate 30 minutes of moderate exercise daily to enhance brain function and improve cognitive performance.',
    'Regular Breaks': 'Take a 5-minute break every hour to maintain focus and prevent cognitive fatigue during work or study sessions.',
    'Meditation': 'Practice 10-15 minutes of daily meditation to enhance attention span and mental clarity.',
    'Social Activities': 'Engage in social activities regularly to stimulate cognitive function and emotional well-being.',
    'Morning Routine': 'Establish a consistent morning routine to optimize cognitive performance throughout the day.',
    'Brain Training': 'Dedicate 20 minutes daily to brain training exercises that target specific cognitive skills.',
    'Caffeine Management': 'Optimize caffeine intake timing and amount to support sustained attention and alertness.',
    'Mindfulness Practice': 'Include mindfulness exercises in your daily routine to improve focus and reduce mental fatigue.',
    'Cardiovascular Health': 'Focus on activities that promote cardiovascular health to support optimal brain function.',
  };

  const categories = Object.keys(scores);

  const getRecommendations = () => {
    const recommendations = [];

    categories.forEach((category) => {
      const score = scores[category];
      if (score >= 80) {
        recommendations.push({
          title: `${category} Maintenance`,
          description: `Your ${category} score is excellent! Maintain your current habits to sustain this level.`,
        });
      } else if (score >= 60) {
        recommendations.push({
          title: recommendationDescriptions['Regular Breaks'],
          description: `Your ${category} score is decent but can improve. Consider taking short, regular breaks to boost your performance.`,
        });
      } else {
        if (category === 'memory') {
          recommendations.push({
            title: 'Sleep Schedule',
            description: recommendationDescriptions['Sleep Schedule'],
          });
        } else if (category === 'attention') {
          recommendations.push({
            title: 'Meditation',
            description: recommendationDescriptions['Meditation'],
          });
        } else if (category === 'reaction') {
          recommendations.push({
            title: 'Regular Exercise',
            description: recommendationDescriptions['Regular Exercise'],
          });
        } else if (category === 'problemSolving') {
          recommendations.push({
            title: 'Brain Training',
            description: recommendationDescriptions['Brain Training'],
          });
        }
      }
    });

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="w-full bg-gray-50 py-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        Lifestyle Recommendations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex items-start"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-500 text-xl">
              {rec.title === "Sleep Schedule" && <FontAwesomeIcon icon={faLightbulb} />}
              {rec.title === "Regular Exercise" && <FontAwesomeIcon icon={faRunning} />}
              {/* {rec.title === "Regular Breaks" && <FontAwesomeIcon icon={faClock} />} */}
              {rec.title === "Brain Training" && <FontAwesomeIcon icon={faLightbulb} />}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-800">{rec.title}</h3>
              <p className="text-sm text-gray-600">{rec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
