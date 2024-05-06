"use client"
import React, {useState} from 'react';

// Sample historical events data
const historicalEvents = [
  { year: 1776, event: 'Declaration of Independence signed' },
  { year: 1789, event: 'George Washington becomes the first President of the United States' },
  // Add more historical events here
];

export default function Home(props: any) {
  // State to keep track of the selected year
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
      <div>
        <h1>Advanced History Page</h1>
        <div className="timeline">
          {historicalEvents.map(event => (
              <div key={event.year} className={`event ${selectedYear === event.year ? 'selected' : ''}`} onClick={() => setSelectedYear(event.year)}>
                <span className="year">{event.year}</span>
                <span className="event-description">{event.event}</span>
              </div>
          ))}
        </div>
        <div className="event-details">
          {selectedYear && (
              <div>
                <h2>{selectedYear}</h2>
                <p>{historicalEvents.find(event => event.year === selectedYear)?.event}</p>
              </div>
          )}
        </div>
      </div>
  );
}
