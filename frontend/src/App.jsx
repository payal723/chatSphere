import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Authentication from './pages/Auth';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/Home';
import History from './pages/History';

function App() {
  return (
    <div className="App">

      <Router>

        <AuthProvider>


          <Routes>

            <Route path='/' element={<LandingPage />} />

            <Route path='/Auth' element={<Authentication />} />

            <Route path='/Home's element={<HomeComponent />} />
            <Route path='/History' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>

      </Router>
    </div>
  );
}

export default App;