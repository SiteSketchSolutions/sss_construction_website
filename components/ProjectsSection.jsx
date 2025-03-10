'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://api-staging.sssborewells.com/v1/project/list');

                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data = await response.json();

                if (data.status && data.data) {
                    setProjects(data.data);
                    setFilteredProjects(data.data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => {
                const status = project.status.toLowerCase().trim();

                if (activeFilter === 'Ongoing') {
                    return status.includes('ongoing') || status.includes('on going') || status.includes('on-going') || status.includes('in progress') || status.includes('in-progress');
                } else if (activeFilter === 'Completed') {
                    return status.includes('completed') || status.includes('Completed') || status.includes('done') || status.includes('finished');
                }

                return false;
            });

            setFilteredProjects(filtered);
        }
    }, [activeFilter, projects]);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-label">OUR PROJECTS</h2>
                    <h3 className="section-title">Featured Construction Projects</h3>
                    <div className="divider center-divider"></div>
                    <p className="section-description">
                        Explore our portfolio of exceptional construction projects that showcase our expertise, craftsmanship, and commitment to excellence.
                    </p>
                </div>

                <div className="projects-filter">
                    <button
                        className={`filter-button ${activeFilter === 'All' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('All')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-button ${activeFilter === 'Ongoing' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('Ongoing')}
                    >
                        Ongoing
                    </button>
                    <button
                        className={`filter-button ${activeFilter === 'Completed' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('Completed')}
                    >
                        Completed
                    </button>
                </div>

                {isLoading ? (
                    <div className="loading-container">
                        <p>Loading projects...</p>
                    </div>
                ) : error ? (
                    <div className="error-container">
                        <p>Error loading projects: {error}</p>
                    </div>
                ) : (
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <div className="project-card" key={project.id}>
                                <div className="project-image-container">
                                    <Image
                                        src={project.image || '/assets/placeholder-project.jpg'}
                                        alt={project.name}
                                        width={400}
                                        height={300}
                                        className="project-image"
                                        onError={(e) => {
                                            e.target.src = '/assets/placeholder-project.jpg';
                                        }}
                                    />
                                    <div className="project-overlay">
                                        <h4 className="project-title">{project.name}</h4>
                                        <p className="project-location">{project.location}</p>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <div className="project-detail-item">
                                        <span className="detail-label">Area:</span>
                                        <span className="detail-value">{project.area}</span>
                                    </div>
                                    <div className="project-detail-item">
                                        <span className="detail-label">Floors:</span>
                                        <span className="detail-value">{project.numberOfFloor}</span>
                                    </div>
                                    <div className="project-detail-item">
                                        <span className="detail-label">Package:</span>
                                        <span className="detail-value">{project.package}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!isLoading && !error && filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <p>No projects found for the selected filter.</p>
                    </div>
                )}
            </div>
        </section>
    );
} 