import { useState } from 'react';
import { socials_backend } from 'declarations/socials_backend';
import Navbar from './Components/Navbar';




function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    socials_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      
      <div><Navbar /></div>
    </main>
  );
}

export default App;
