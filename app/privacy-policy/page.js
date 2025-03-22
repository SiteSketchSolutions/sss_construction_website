'use client';
import React from 'react';
import Link from 'next/link';
import styles from './privacy-policy.module.css';

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <div className={styles.introduction}>
                    <p>
                        At SSS Construction Company, we respect your privacy and are committed to protecting your
                        personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard
                        your information when you visit our website and use our services.
                    </p>
                    <p>
                        Please read this Privacy Policy carefully. If you do not agree with the terms of this
                        Privacy Policy, please do not access the site.
                    </p>
                </div>

                <div className={styles.sections}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Information We Collect</h2>
                        <p>
                            We may collect personal information that you voluntarily provide to us when you register on our website,
                            subscribe to our newsletter, request information or assistance, purchase products or services, or participate in surveys or contests.
                            The personal information we collect may include your name, email address, postal address, phone number, and payment information.
                        </p>
                        <p>
                            When you visit our website, our servers may automatically log standard data provided by your web browser, including your
                            device's IP address, browser type and version, the pages you visit, the time and date of your visit, time spent on each page, and other details.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>How We Use Your Information</h2>
                        <p>We may use your information to provide our services, improve our website, understand how users interact with our site,
                            develop new products and services, communicate with you, process transactions, prevent fraud, and comply with legal obligations.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Sharing Your Information</h2>
                        <p>
                            We may share your information with service providers, business partners, affiliates, and in response to legal requirements.
                            We will not sell, rent, or trade your personal information to third parties without your consent,
                            except as disclosed in this Privacy Policy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track activity on our website and store
                            certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            However, if you do not accept cookies, you may not be able to use some portions of our website.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Data Security</h2>
                        <p>
                            We have implemented appropriate security measures to protect your personal information.
                            However, please remember that no method of transmission over the internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Your Privacy Rights</h2>
                        <p>
                            Depending on your location, you may have rights regarding your personal information, including the right to access,
                            correct, delete, restrict processing, and data portability. To exercise these rights, please contact us using the information below.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionHeader}>Changes To Our Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you by posting the new policy
                            and updating the "Last Updated" date. You should review this policy periodically.
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