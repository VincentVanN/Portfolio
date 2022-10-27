import { createRoot } from 'react-dom/client';
import App from 'src/components/App/App';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
