import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
