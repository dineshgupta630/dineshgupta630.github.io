import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
  // ⚠️ No basePath or assetPrefix needed!
};

const withMDX = createMDX({ extension: /\.mdx?$/ });

export default withMDX(nextConfig);
