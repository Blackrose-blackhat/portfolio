import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Musharaf Parwej Portfolio',
    short_name: 'Musharaf',
    description: 'Full-stack engineer building production-grade tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/avatar.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/avatar.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
