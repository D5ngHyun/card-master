import React from 'react'
import Login from './components/login/login'
import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} FileInput={FileInput} />} />
        </Routes>
      </BrowserRouter>
      {/* <Login authService={authService} /> */}
    </div>
  )
}

export default App
