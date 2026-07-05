/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All images are local files in /public — no remote loaders needed,
    // except retreat cover images which live in Supabase storage.
    remotePatterns: [{ protocol: 'https', hostname: '**.supabase.co' }],
  },
}
export default nextConfig
