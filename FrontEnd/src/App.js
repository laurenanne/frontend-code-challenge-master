import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Nav/NavBar";
import AppRoutes from "./Nav/Routes";
import YodlrApi from "./YodlrApi";

function App() {
  // calls the api to signup and post user data to backend
  async function signup(data) {
    try {
      let user = await YodlrApi.addUser(data);
      return { success: true };
    } catch (err) {
      return { success: false, err };
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRoutes signup={signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
