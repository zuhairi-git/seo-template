import { AppRoutes } from './AppRoutes';
import { Header } from './Header';
import './index.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}
