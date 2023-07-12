import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import { Grid } from '@mui/material';
import Profile from './Components/Profile/Profile';
import Schedule from './Components/Schedule/Schedule';
import Documents from './Components/Documents/Documents';

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container sx={{ flexGrow: 1 }}>
          <Header />
          <Grid xs={0} md={2.3} xl={1.7}>
            <Sidebar />
          </Grid>
          <Grid xs={12} md={9.7} xl={10.3}>
            <Routes>

              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/documents" element={<Documents />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;