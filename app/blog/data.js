export const blogPosts = [
    {
        id: 1,
        slug: "future-of-sustainable-construction",
        title: "The Future of Sustainable Construction",
        excerpt: "Exploring eco-friendly materials and practices that are revolutionizing the construction industry...",
        content: `
      <p>The construction industry is undergoing a significant transformation as sustainability becomes a top priority. This article explores the latest trends and innovations in sustainable construction practices.</p>
      
      <h2>Eco-Friendly Materials</h2>
      <p>Modern construction is embracing materials that have minimal environmental impact. From recycled steel to bamboo and hempcrete, these materials are not only sustainable but also offer superior performance characteristics.</p>
      
      <h2>Energy Efficiency</h2>
      <p>New construction methods focus on creating buildings that consume less energy. This includes better insulation, smart HVAC systems, and renewable energy integration.</p>
      
      <h2>Waste Reduction</h2>
      <p>Construction waste management has become a crucial aspect of sustainable building. Companies are implementing better waste sorting and recycling practices on construction sites.</p>
    `,
        category: "Sustainability",
        date: "May 15, 2023",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070",
        author: "Michael Johnson",
        authorPosition: "Chief Architect",
        readTime: "5 min read",
        tags: ["sustainability", "green building", "eco-friendly"]
    },
    {
        id: 2,
        slug: "technologies-transforming-construction",
        title: "5 Technologies Transforming Construction Management",
        excerpt: "From BIM to drone surveying, discover the latest technologies making construction projects more efficient...",
        content: `
      <p>The construction industry is experiencing a technological revolution. Here are five key technologies that are changing how we build.</p>
      
      <h2>Building Information Modeling (BIM)</h2>
      <p>BIM has revolutionized project planning and execution, allowing for better collaboration and reduced errors.</p>
      
      <h2>Drone Technology</h2>
      <p>Drones are being used for site surveying, progress monitoring, and safety inspections, saving time and reducing risks.</p>
      
      <h2>Augmented Reality</h2>
      <p>AR is helping architects and builders visualize projects in real-world contexts before construction begins.</p>
    `,
        category: "Technology",
        date: "June 22, 2023",
        image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=2069",
        author: "Sarah Williams",
        authorPosition: "Project Manager",
        readTime: "4 min read",
        tags: ["technology", "innovation", "construction tech"]
    }
];

export function getBlogPost(slug) {
    return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts() {
    return blogPosts;
}

// This function can be replaced with an API call later
export async function getBlogPostAsync(slug) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return getBlogPost(slug);
}

export async function getAllBlogPostsAsync() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return getAllBlogPosts();
} 