import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes로 변경
import AdminApp from './pages/admins/AdminApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admins/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
}

export default App;
