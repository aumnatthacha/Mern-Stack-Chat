/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { UserContextProvider } from './context/UseContext'
import Routes from "./Routes"
import './App.css'
import axios from 'axios'

function App() {
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
    <Routes/>
    </UserContextProvider>
  );
}

export default App
