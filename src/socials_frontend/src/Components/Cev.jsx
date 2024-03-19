import React, { useState } from 'react';
import './Style/styles.css';
import { Button } from 'semantic-ui-react';
import { socials_backend } from 'declarations/socials_backend';

const Cev = () => {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    genre: '',
    details: '',
    location: '',
    date: '',
    time: ''
  });
  const [events, setEvents] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await socials_backend.create(); // Call createEvent function
      console.log('Event created ');
      const count = await socials_backend.getEventCount();
      setEvents(count);
      console.log(events);
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <form style={{ maxWidth: 600 }} onSubmit={handleSubmit}>
      <div style={{ display: 'block' }}>
        <div>
          <label>
            Event:
            <input type="text" name="name" value={eventDetails.name} onChange={handleInputChange} required />
          </label>
        </div>

        <div>
          <label>
            Genre:
            <select name="genre" value={eventDetails.genre} onChange={handleInputChange}>
              <option value="">Select Genre</option>
              <option value="games">Games</option>
              <option value="hackathons">Hackathons</option>
              <option value="academics">Academics</option>
              <option value="others">Others</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Details:
            <textarea name="details" value={eventDetails.details} onChange={handleInputChange} required></textarea>
          </label>
        </div>

        <div>
          <label>
            Location:
            <input type="text" name="location" value={eventDetails.location} onChange={handleInputChange} required />
          </label>
        </div>

        <div>
          <label>
            Date:
            <input type="date" name="date" value={eventDetails.date} onChange={handleInputChange} required />
          </label>
        </div>

        <div>
          <label>
            Time:
            <input type="time" name="time" value={eventDetails.time} onChange={handleInputChange} required />
          </label>
        </div>
        
        <div>
          <Button secondary type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default Cev;
