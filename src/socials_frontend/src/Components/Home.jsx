// Home.js

import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Button } from 'semantic-ui-react';
import { socials_backend } from 'declarations/socials_backend';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch the event count from the backend
        const eventCount = await socials_backend.getEventCount();
        // Initialize an empty array to store events
        const fetchedEvents = [];
        // Loop to generate event IDs for each event
        for (let i = 1; i <= eventCount; i++) {
          fetchedEvents.push({ eventId: i });
        }
        // Set the events state with fetched events
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleJoinEvent = async (eventId) => {
    try {
      const userName = prompt('Please enter your name:');
      if (userName) {
        // Call the joinEvent function from the backend
        await socials_backend.joinEvent(eventId, userName);
        alert(`${userName} joined event with ID ${eventId}`);
        // Optionally, you can update the UI to reflect the user joining the event
      } else {
        alert('Please enter your name to join the event.');
      }
    } catch (error) {
      console.error('Error joining event:', error);
    }
  };

  return (
    <div>
      {events.map((event, index) => (
        <div key={index} style={{ marginTop: '10px' }}>
          <Card
            title={`Event ${event.eventId}`}
            bordered={false}
            style={{
              width: 1000,
              background: '#d5f4e6',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button secondary onClick={() => handleJoinEvent(event.eventId)}>Join Event</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Home;
