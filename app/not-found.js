'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            window.location.pathname
        );
    }, []);

    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>404</h1>
                <p>Oops! Page not found</p>
                <Link href="/" className="home-link">
                    Return to Home
                </Link>
            </div>
        </div>
    );
} 