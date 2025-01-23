import React, { useState } from 'react';
import { 
  ChevronRight, MapPin, Calendar, Users, Plane, 
  Hotel, Coffee, Plus, X 
} from 'lucide-react';
import './index.css';


// Replace with your actual background image import
import backgroundImage from './assets/th (4).jpg'; 
import foodImage from './assets/local-food-tour-2.jpg';
import historicalImage from './assets/AyutthayaHistoricalParkTour–FullDay.jpg';
import heroVideo from './assets/20240918-webflow-homepage-hero-section-video-desktop.mp4';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-red-800 font-bold-italian text-4xl">
        Travel Itinerary App
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Log in
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

const HomePage = ({ onStartPlanning }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative h-screen flex items-center justify-center">
  <div className="absolute inset-0 overflow-hidden">
    <video 
      id="hero-section-video-web" 
      poster={backgroundImage} 
      className="w-full h-full object-cover"
      autoPlay 
      loop 
      playsInline 
      muted
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  
  <div className="relative z-10 w-full max-w-xl">
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-16 transform transition-all hover:scale-105">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-red-800 mb-6 tracking-tight">Plan Your Journey</h1>
        <p className="text-gray-600 text-xl">Create personalized travel experiences</p>
      </div>
            <button
              onClick={onStartPlanning}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all transform active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Start Planning</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OnboardingScreen = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    groupType: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.destination) newErrors.destination = 'Destination is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.groupType) newErrors.groupType = 'Group type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onComplete(formData);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <Navbar />
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:scale-105">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-4 tracking-tight">Plan a New Trip</h1>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {['destination', 'duration', 'groupType'].map(field => (
              <div key={field} className="relative">
                {field === 'destination' && <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
                {field === 'duration' && <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
                {field === 'groupType' && <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
                
                {field === 'groupType' ? (
                  <select
                    name={field}
                    className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
                      errors[field] 
                        ? 'border-red-500 ring-2 ring-red-200' 
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                    }`}
                    value={formData[field]}
                    onChange={(e) => {
                      setFormData(prev => ({...prev, [field]: e.target.value}));
                      setErrors(prev => ({...prev, [field]: ''}));
                    }}
                  >
                    <option value="">Select group type</option>
                    {['Solo', 'Couple', 'Family', 'Friends'].map(type => (
                      <option key={type.toLowerCase()} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field === 'duration' ? 'number' : 'text'}
                    name={field}
                    placeholder={`Enter ${field}`}
                    className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
                      errors[field] 
                        ? 'border-red-500 ring-2 ring-red-200' 
                        : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                    }`}
                    value={formData[field]}
                    onChange={(e) => {
                      setFormData(prev => ({...prev, [field]: e.target.value}));
                      setErrors(prev => ({...prev, [field]: ''}));
                    }}
                    min={field === 'duration' ? 1 : undefined}
                    max={field === 'duration' ? 90 : undefined}
                  />
                )}
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all transform active:scale-95 flex items-center justify-center space-x-2"
          >
            <span>Start Planning</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

const ActivityCard = ({ activity, onDelete }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
    <img 
      src={activity.image } 
      alt={activity.title} 
      className="w-full h-48 object-cover" 
    />
    <div className="p-4">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{activity.title}</h3>
        {onDelete && (
          <button 
            onClick={() => onDelete(activity.id)}
            className="text-gray-400 hover:text-red-500 transition-colors absolute top-2 right-2"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      <p className="text-gray-600 mt-2">{activity.description}</p>
      <div className="mt-3 flex items-center text-sm text-gray-500">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{activity.date || 'Date not set'}</span>
      </div>
    </div>
  </div>
);

const AddActivityModal = ({ isOpen, onClose, onAdd }) => {
  const [newActivity, setNewActivity] = useState({
    title: '',
    description: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...newActivity,
      id: Date.now(),
      image: backgroundImage
    });
    onClose();
    setNewActivity({
      title: '',
      description: '',
      date: '',
      time: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Activity</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activity Title
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-lg"
              value={newActivity.title}
              onChange={(e) => setNewActivity({...newActivity, title: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              required
              className="w-full p-2 border rounded-lg"
              value={newActivity.description}
              onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded-lg"
              value={newActivity.date}
              onChange={(e) => setNewActivity({...newActivity, date: e.target.value})}
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Add Activity
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Dashboard = ({ tripData }) => {
  const [activeTab, setActiveTab] = useState('summary');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: 'Local Food Tour',
      description: 'Experience the local cuisine with expert guides',
      image: foodImage,
      date: '2025-01-24'
    },
    {
      id: 2,
      title: 'Historical Walking Tour',
      description: 'Discover the rich history of the city',
      image: historicalImage,
      date: '2025-01-25'
    }
  ]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, {
      ...newActivity,
      image: backgroundImage
    }]);
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <header className="bg-white bg-opacity-90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Trip to {tripData?.destination}</h1>
              <p className="text-gray-600">{tripData?.duration} days · {tripData?.groupType}</p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveTab('summary')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'summary' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Summary
              </button>
              <button 
                onClick={() => setActiveTab('activities')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'activities' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Activities
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'summary' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Plane className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold">Transportation</h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Flight to {tripData?.destination}</p>
                <p className="text-gray-600">Local Transport Pass</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Hotel className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold">Accommodation</h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Hotels for {tripData?.duration} nights</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold">Activities</h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">Suggested activities: {tripData?.duration * 2}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Planned Activities</h2>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Add Activity</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  onDelete={handleDeleteActivity}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <AddActivityModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddActivity}
      />
    </div>
  );
};

const App = () => {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [tripData, setTripData] = useState(null);

  const handleStartPlanning = () => {
    setShowHomePage(false);
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = (data) => {
    setTripData(data);
    setShowOnboarding(false);
  };

  return (
    <div>
      {showHomePage && (
        <HomePage onStartPlanning={handleStartPlanning} />
      )}
      {showOnboarding && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}
      {tripData && (
        <Dashboard tripData={tripData} />
      )}
    </div>
  );
};

export default App;