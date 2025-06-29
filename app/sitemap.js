export default function sitemap() {
    const baseUrl = 'https://www.sssconstructioncompany.com';

    // Add all your routes here
    const routes = [
        '',
        '/blog',
        '/contact'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
} 