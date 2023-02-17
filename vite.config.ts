import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

interface viteConfigInput {
	mode: string;
	command: string;
}

// https://vitejs.dev/config/
export default (args: viteConfigInput) => {
	const generateScopedName =
		args.mode === 'production' ? '[local]_[hash:base64:2]' : '[hash:base64:2]';

	return defineConfig({
		plugins: [react()],
		css: {
			postcss: require('./postcss.config.js'),
			modules: {
				generateScopedName,
			},
		},
	});
};
