import { useState } from 'react';

// TimelineDot component - smaller outlined dot
const TimelineDot = ({ isActive }) => {
  return (
    <div className={`w-3 h-3 rounded-full absolute z-10 transform -translate-x-1/2 border-2 border-gray-400 bg-white ${isActive ? 'border-gray-800' : ''}`}></div>
  );
};

// BulletPoint component for the right side content
const BulletPoint = ({ text }) => {
  return (
    <li className="flex items-start mb-1">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 mr-2"></span>
      <span>{text}</span>
    </li>
  );
};

// TimelineItem component - dates on left of line, bullet points on right
const TimelineItem = ({ item, isActive, onClick }) => {
  const { id, date, bulletPoints } = item;
  
  return (
    <div className="relative" onClick={() => onClick(id)}>
      <div className="flex mb-8">
        {/* Left side - Date */}
        <div className="w-24 text-right pr-3">
          <span className="font-medium text-gray-700 inline-block mt-1 text-sm">
            {date}
          </span>
        </div>
        
        {/* Center - Timeline dot and line */}
        <div className="relative">
          <div className="absolute left-0 top-2">
            <TimelineDot isActive={isActive} />
          </div>
        </div>
        
        {/* Right side - Bullet points */}
        <div className="pl-8 flex-1">
          <ul className="list-none">
            {bulletPoints.map((point, index) => (
              <BulletPoint key={index} text={point} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main VerticalTimeline component
const VerticalTimeline = ({ config }) => {
  const [activeItem, setActiveItem] = useState(null);
  const { items } = config;
  
  return (
    <div className="max-w-4xl p-4">
      <h2 className="text-2xl font-bold mb-8">Project Timeline</h2>
      
      <div className="relative">
        {/* Vertical line - positioned to the right of the dates */}
        <div className="absolute left-24 w-0.5 h-full bg-gray-300"></div>
        
        {/* Timeline items */}
        <div>
          {items.map((item) => (
            <TimelineItem 
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onClick={setActiveItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main export component
export default function TimelinePage() {
  // Define timeline configuration directly in the component
  const timelineConfig = {
    items: [
      {
        id: 1,
        date: "Jan 5, 2023",
        bulletPoints: [
          "Initial project planning meeting",
          "Defined key objectives and KPIs",
          "Assembled core team of 5 members"
        ]
      },
      {
        id: 2,
        date: "Mar 12, 2023",
        bulletPoints: [
          "Completed user research phase",
          "Conducted 12 user interviews",
          "Created 3 different design prototypes"
        ]
      },
      {
        id: 3,
        date: "Jun 18, 2023",
        bulletPoints: [
          "Core feature implementation",
          "API integration with backend services",
          "Expanded team to 8 developers",
          "Conducted first internal demo"
        ]
      },
      {
        id: 4,
        date: "Sep 22, 2023",
        bulletPoints: [
          "Released beta to 500 select users",
          "Collected and analyzed feedback",
          "Identified 3 critical issues to address"
        ]
      },
      {
        id: 5,
        date: "Dec 10, 2023",
        bulletPoints: [
          "Official public launch",
          "Implemented marketing campaign",
          "Reached 10,000 signups in first week",
          "Positive press coverage in 5 major tech blogs"
        ]
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <VerticalTimeline config={timelineConfig} />
      </div>
    </div>
  );
}