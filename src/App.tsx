import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import { Grid } from '@mui/material';
import Profile from './Components/Profile/Profile';
import Schedule from './Components/Schedule/Schedule';
import Documents from './Components/Documents/Documents';
import Auth from './Components/Auth/Auth';

function App() {
  const a = JSON.parse(localStorage.getItem('isLoggedin')!);

  return (
    <div className="App">
      <Router>
        <Grid container sx={{ flexGrow: 1 }}>
          {a && <Header />}
          {a && <Grid item xs={0} md={a ? 2.3 : 0} xl={a ? 1.7 : 0}>
            <Sidebar />
          </Grid>}
          <Grid item xs={12} md={a ? 9.7 : 12} xl={a ? 10.3 : 12}>
            <Routes>
              <Route path="/" element={a ? <Dashboard /> : <Auth />} />
              <Route path="/profile" element={a && <Profile />} />
              <Route path="/schedule" element={a && <Schedule />} />
              <Route path="/documents" element={a && <Documents />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;