import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	images: { remotePatterns:[
			{protocol:'https', hostname:'covers.openlibrary.org'},
			{protocol:'https', hostname:'r21avs2zyoukpi8x.public.blob.vercel-storage.com'},
		]}
};

export default nextConfig;
