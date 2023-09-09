/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://alcocritics.vercel.app/:path*',
			},
		];
	},
};

module.exports = nextConfig;
