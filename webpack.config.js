import CircularDependencyPlugin from "circular-dependency-plugin";


const webpackConfig = {
	target: ["web", "es2017"],
	output: {
		filename: "[name].js",
		module: true,
	},
	experiments: {
		outputModule: true,
	},
	plugins: [
		new CircularDependencyPlugin(),

	],
};

export default webpackConfig;
