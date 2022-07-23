/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		SERVICE_ID: "service_4e48vdn",
		TEMPLATE_ID: "template_2blyoti",
		PUBLIC_KEY: "p-N4YX4VvkVQ4lxz4",
	},
};

module.exports = nextConfig;
