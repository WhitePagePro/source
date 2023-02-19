import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import Landing from './pages/landing/Landing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Landing />
		</Provider>
	</React.StrictMode>
);
