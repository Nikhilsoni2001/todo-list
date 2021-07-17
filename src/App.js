import React from "react";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";
import { ProjectProvider, SelectedProjectProvider } from "./context";

export const App = () => (
  <SelectedProjectProvider>
    <ProjectProvider>
      <div className="App">
        <header className="App-header">
          <Header />
          <Content />
        </header>
      </div>
    </ProjectProvider>
  </SelectedProjectProvider>
);
