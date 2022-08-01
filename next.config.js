/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [ path.join(__dirname, 'styles') ]
	},

	webpack(config) {
		// we wrote this code because svgr library detect .svg files
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [ '@svgr/webpack' ]
		});

		return config;
	}
};

module.exports = nextConfig;
