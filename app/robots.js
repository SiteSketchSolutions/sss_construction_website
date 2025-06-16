export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: 'https://www.sssconstructioncompany.com/sitemap.xml',
    };
} 