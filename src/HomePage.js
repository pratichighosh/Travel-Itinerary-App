import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const HomePage = () => {
  const [markers, setMarkers] = useState([
    {
      id: 1,
      name: 'Island Serenity Suites',
      description: 'Guests enjoy fresh poke bowls with bold flavors and a touch of island heat. Taste the aloha!',
      location: [21.3069, -157.8583],
    },
    {
      id: 2,
      name: 'Lava Poke',
      description: '20 min · 2m',
      location: [21.3071, -157.8585],
    },
    // Add more markers as needed
  ]);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>One app for all your travel planning needs</h1>
        <p>
          Create detailed itineraries, explore user-shared guides, and manage your
          bookings seamlessly — all in one place.
        </p>
        <button className="start-planning-btn">Start planning</button>
        <a href="/get-the-app" className="get-the-app-link">
          Get the app →
        </a>
      </header>

      <MapContainer center={[21.3069, -157.8583]} zoom={14} className="home-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.location}>
            <Popup>
              <h3>{marker.name}</h3>
              <p>{marker.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HomePage;