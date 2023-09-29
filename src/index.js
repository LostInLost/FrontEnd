import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './LifeCycleComponent';
import LoginPage from './LoginPage';
import DontDoAnything from './EventsHandlers/DontDoAny';
import ClickMe from './EventsHandlers/ClickMe';
import Toolbar from './EventsHandlers/AlertButton';
import Play from './EventsHandlers/PassEvents';
import Propagation from './EventsHandlers/Propagation';
import StopPropagation from './EventsHandlers/StopPropagation';
import Signup from './EventsHandlers/Preventing';
import DefaultPreventing from './EventsHandlers/DefaultPreventing';
import LightSwitch from './Challenges/FixHandlers';
import ColorSwitch from './Challenges/LightSwitch';



const root = ReactDOM.createRoot(document.getElementById('root'));

//Tidak memunculkan hasil apa apa
function HelloComponent() {
  return HelloComponent
}

class StateFullComponent extends React.Component {
  render() {
    return <p>StateFullComponent</p>
  }
}

root.render(
  <React.StrictMode>
    <DontDoAnything />
    <ClickMe />
    <Toolbar />
    <Play />
    <Propagation />
    <StopPropagation />
    <Signup />
    <DefaultPreventing />
    <LightSwitch />
    <ColorSwitch />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
