import React, { useContext } from 'react';
import { AppBarHeader } from '../src/components/shared/AppBarHeader'
import { LoginMain } from '../src/components/Login/LoginMain'
import './assets/css/styles.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { SnackbarContext } from './contexts/SnackbarContext';
import { DashboardCasosUso } from './components/CasosUso/DashboardCasosUso';

function App() {
  const { MyBackdrop, MySnackbar } = useContext(SnackbarContext)
  return (
    <div>
      {MyBackdrop()}
      {MySnackbar()}
      <AppBarHeader />
      <Routes>
        <Route>
          <Route path='/' element={<LoginMain />}/>
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/DashboardCasosUso' element={<DashboardCasosUso />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
