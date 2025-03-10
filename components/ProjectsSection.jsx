'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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

    // Helper function to capitalize first letter of each word
    const formatText = (text) => {
        if (!text) return '';
        return text.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
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
                                        <div className="project-location">
                                            <svg className="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>{project.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h4 className="project-info-title">{project.name}</h4>
                                    <div className="project-info-meta">
                                        <div className="project-status">
                                            <span className={`status-badge ${project.status.toLowerCase().includes('ongoing') ? 'ongoing' : project.status.toLowerCase().includes('completed') ? 'completed' : 'other'}`}>
                                                {formatText(project.status)}
                                            </span>
                                        </div>
                                        <div className="project-completion">
                                            <div className="completion-bar">
                                                <div className="completion-progress" style={{ width: `${project.percentageOfCompletion}%` }}></div>
                                            </div>
                                            <span className="completion-text">{project.percentageOfCompletion}% Complete</span>
                                        </div>
                                    </div>
                                    <p className="project-info-description">{project.description}</p>
                                </div>
                                <div className="project-details">
                                    <div className="project-detail-item">
                                        <div className="detail-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M4 21V8L12 3L20 8V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 17L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="detail-label">Area:</span>
                                            <span className="detail-value">{project.area}</span>
                                        </div>
                                    </div>
                                    <div className="project-detail-item">
                                        <div className="detail-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M3 21H21M3 18H21M3 18V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V18M6 18V15M10 18V15M14 18V15M18 18V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="detail-label">Floors:</span>
                                            <span className="detail-value">{project.numberOfFloor}</span>
                                        </div>
                                    </div>
                                    <div className="project-detail-item">
                                        <div className="detail-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                                <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 7H16.5C17.8807 7 19 5.88071 19 4.5C19 3.11929 17.8807 2 16.5 2C15.1193 2 14 3.11929 14 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 7H7.5C6.11929 7 5 5.88071 5 4.5C5 3.11929 6.11929 2 7.5 2C8.88071 2 10 3.11929 10 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="detail-label">Package:</span>
                                            <span className="detail-value">{project.package}</span>
                                        </div>
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