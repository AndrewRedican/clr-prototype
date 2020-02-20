import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from "../src/components/Header";
import path from './appRoutes'
import "./App.css";
import "@clr/ui/clr-ui.min.css";

function App() {
  return (
    <>
      <BrowserRouter><Header />
        <Suspense fallback={<h3>Loading...</h3>}>
          <Route exact path={path.BASE_PATH} component={lazy(() => import('./views/GettingStarted'))} />
          <Route path={path.DASHBOARD} component={lazy(() => import('./views/Dashboard'))} />
          <Route path={path.NEW_LAYOUT} component={lazy(() => import('./views/NewLayout'))} />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
