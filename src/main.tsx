import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './pages/main/App';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
