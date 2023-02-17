import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

export default {
	plugins: [
		autoprefixer(),
		cssnano({
			preset: 'default',
		}),
		postcssPresetEnv({
			stage: 2,
			autoprefixer: { grid: true },
			features: {
				'custom-selectors': { preserve: true },
				'nesting-rules': true,
			},
		}),
	],
};
