import React from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <Content />
    </header>
  </div>
);
