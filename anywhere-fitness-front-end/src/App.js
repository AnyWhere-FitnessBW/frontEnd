import React from 'react';
import './App.css';



import ClientLogin from './components/ClientLogin';
import ClientRegistration from './components/ClientRegistration';


import InstructorLogin from './components/InstructorLogin';
import InstructorRegistration from './components/InstructorRegistration';


function App(props) {

  return (
    <div className="App">
      <ClientLogin />
      <ClientRegistration />
      <InstructorLogin />
      <InstructorRegistration />
    </div> 
  );
}


export default App;