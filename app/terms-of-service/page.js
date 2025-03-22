'use client';
import React from 'react';
import Link from 'next/link';
import styles from './terms-of-service.module.css';

export default function TermsOfService() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Terms of Service</h1>
                <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

                <div className={styles.introduction}>
                    <p>
                        Welcome to SSS Construction Company. By accessing our website, you agree to be bound
                        by these Terms of Service, all applicable laws and regulations, and agree that
                        you are responsible for compliance with any applicable local laws.
                    </p>
                    <p>
                        If you do not agree with any of these terms, you are prohibited from using or
                        accessing this site. The materials contained in this website are protected by
                        applicable copyright and trademark law.
                    </p>
                </div>

                <div className={styles.sections}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials on SSS Construction Company's
                            website for personal, non-commercial transitory viewing only. This is the grant of a license,
                            not a transfer of title. Under this license you may not modify or copy the materials, use them for 
                            commercial purposes, attempt to reverse engineer any software, remove copyright notices, or 
                            transfer the materials to another person or server.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Disclaimer</h2>
                        <p>
                            The materials on SSS Construction Company's website are provided on an 'as is' basis. SSS Construction Company
                            makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                            without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                            non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Limitations</h2>
                        <p>
                            In no event shall SSS Construction Company or its suppliers be liable for any damages (including, without
                            limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                            or inability to use the materials on SSS Construction Company's website.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Revisions and Errata</h2>
                        <p>
                            The materials appearing on SSS Construction Company's website could include technical, typographical, or photographic
                            errors. SSS Construction Company does not warrant that any of the materials on its website are accurate, complete or
                            current. SSS Construction Company may make changes to the materials contained on its website at any time without notice.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Links to Third Party Sites</h2>
                        <p>
                            SSS Construction Company has not reviewed all of the sites linked to its website and is not responsible for the
                            contents of any linked site. The inclusion of any link does not imply endorsement by SSS Construction Company
                            of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Terms Modifications</h2>
                        <p>
                            SSS Construction Company may revise these terms of service for its website at any time without notice. By using this website
                            you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of India
                            and you irrevocably submit to the exclusive jurisdiction of the courts in Karnataka State.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Contact Information</h2>
                        <div className={styles.contactInfo}>
                            <p>SSS Construction Company</p>
                            <p>H S Garden, Chikkaballapur, Karnataka 562101</p>
                            <p>Email: contact@sssconstructioncompany.com</p>
                            <p>Phone: (+91) 9482150598</p>
                        </div>
                    </section>
                </div>

                <div className={styles.footer}>
                    <Link href="/" className={styles.backLink}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
} 