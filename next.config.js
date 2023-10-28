/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.API_URL
	},
	images: {
		domains: [`${process.env.API_URL_IMAGES}`]
	}
};

module.exports = nextConfig;
