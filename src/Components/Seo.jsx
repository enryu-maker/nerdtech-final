import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, keywords, image, url }) {
    const siteName = "NerdTech Softwares LLC";
    const defaultDescription = "NerdTech is a premier digital agency specializing in design, development, and branding ecosystems.";
    const defaultImage = "https://www.nerdtech.in/nerdtech.png"; // Fallback to logo or featured image

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | ${siteName}` : siteName}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || siteName} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url || "https://www.nerdtech.in/"} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteName} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Canonical Link */}
            <link rel="canonical" href={url || "https://www.nerdtech.in/"} />

            {/* Schema.org markup (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "NerdTech Softwares LLC",
                    "image": defaultImage,
                    "@id": "https://www.nerdtech.in",
                    "url": "https://www.nerdtech.in",
                    "telephone": "+91 9405649047",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Nashik",
                        "addressRegion": "Maharashtra",
                        "addressCountry": "IN"
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "09:00",
                        "closes": "20:00"
                    },
                    "sameAs": [
                        "https://www.facebook.com/nerdtech",
                        "https://www.linkedin.com/company/nerdtech",
                        "https://www.instagram.com/nerdtech"
                    ]
                })}
            </script>
        </Helmet>
    );
}
