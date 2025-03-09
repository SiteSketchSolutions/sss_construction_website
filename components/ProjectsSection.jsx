'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Project data with categories
const projects = [
    {
        id: 1,
        title: 'Modern Office Complex',
        category: 'Commercial',
        description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
        image: '/assets/project-1.jpeg',
        link: '/projects/modern-office'
    },
    {
        id: 2,
        title: 'Luxury Residential Tower',
        category: 'Residential',
        description: 'High-end residential apartments featuring premium amenities and stunning views.',
        image: '/assets/project-2.jpeg',
        link: '/projects/luxury-residential'
    },
    {
        id: 3,
        title: 'Community Hospital',
        category: 'Healthcare',
        description: 'A modern healthcare facility designed to provide optimal patient care and staff efficiency.',
        image: '/assets/project-3.jpeg',
        link: '/projects/community-hospital'
    },
    {
        id: 4,
        title: 'Shopping Mall',
        category: 'Commercial',
        description: 'A contemporary shopping destination with innovative retail spaces and entertainment options.',
        image: '/assets/project-4.jpeg',
        link: '/projects/shopping-mall'
    },
    {
        id: 5,
        title: 'Eco-Friendly Apartments',
        category: 'Residential',
        description: 'Sustainable living spaces that minimize environmental impact while maximizing comfort.',
        image: '/assets/project-5.jpeg',
        link: '/projects/eco-apartments'
    },
    {
        id: 6,
        title: 'University Campus',
        category: 'Educational',
        description: 'A comprehensive educational campus with modern learning facilities and student amenities.',
        image: '/assets/project-6.jpeg',
        link: '/projects/university-campus'
    }
];

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState('All');

    // Get unique categories for filter buttons
    const categories = ['All', ...new Set(projects.map(project => project.category))];

    // Filter projects based on active category
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-label">OUR PROJECTS</h2>
                    <h3 className="section-title">Featured Construction Projects</h3>
                    <div className="divider center-divider"></div>
                    <p className="section-description">
                        Browse our portfolio of completed projects showcasing our expertise in various construction domains.
                    </p>
                </div>

                <div className="project-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="rounded-image"
                                />
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                    <h4 className="project-title">{project.title}</h4>
                                </div>
                            </div>
                            <div className="project-content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <Link href={project.link} className="project-link">
                                    View Details <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 