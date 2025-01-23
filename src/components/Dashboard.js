import React, { useState } from 'react';
import { Calendar, HotelIcon, FlightIcon, ActivityIcon } from './components/Icons';

const Dashboard = ({ tripData }) => {
  const [selectedTab, setSelectedTab] = useState('itinerary');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Plan your trip to {tripData.destination}</h1>
        <div className="tab-navigation">
          <button
            className={`tab-btn ${selectedTab === 'itinerary' ? 'active' : ''}`}
            onClick={() => handleTabChange('itinerary')}
          >
            <Calendar className="tab-icon" />
            Itinerary
          </button>
          <button
            className={`tab-btn ${selectedTab === 'hotels' ? 'active' : ''}`}
            onClick={() => handleTabChange('hotels')}
          >
            <HotelIcon className="tab-icon" />
            Hotels
          </button>
          <button
            className={`tab-btn ${selectedTab === 'flights' ? 'active' : ''}`}
            onClick={() => handleTabChange('flights')}
          >
            <FlightIcon className="tab-icon" />
            Flights
          </button>
          <button
            className={`tab-btn ${selectedTab === 'activities' ? 'active' : ''}`}
            onClick={() => handleTabChange('activities')}
          >
            <ActivityIcon className="tab-icon" />
            Activities
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        {selectedTab === 'itinerary' && (
          <div className="itinerary-section">
            {/* Itinerary planning and management functionality */}
          </div>
        )}
        {selectedTab === 'hotels' && (
          <div className="hotels-section">
            {/* Hotel booking and management functionality */}
          </div>
        )}
        {selectedTab === 'flights' && (
          <div className="flights-section">
            {/* Flight booking and management functionality */}
          </div>
        )}
        {selectedTab === 'activities' && (
          <div className="activities-section">
            {/* Activity planning and booking functionality */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;