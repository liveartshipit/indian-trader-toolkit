import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import AppShell from '@/components/layout/AppShell';
import Dashboard from '@/pages/Dashboard';
import CategoryDetail from '@/pages/CategoryDetail';
import Favorites from '@/pages/Favorites';
import Settings from '@/pages/Settings';

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/:categoryId" element={<CategoryDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppShell>
      <Toaster />
    </Router>
  );
}

export default App;
