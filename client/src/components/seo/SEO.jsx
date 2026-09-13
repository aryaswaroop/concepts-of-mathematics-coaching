import { useEffect } from "react";

/**
 * SEO Component
 *
 * Updates:
 * - Document title
 * - Meta description
 * - Robots
 * - Canonical URL
 */

const SEO = ({
    title,
    description,
    canonical = window.location.href,
}) => {
    useEffect(() => {
        document.title = title;

        const updateMeta = (name, content) => {
            let meta = document.querySelector(`meta[name="${name}"]`);

            if (!meta) {
                meta = document.createElement("meta");
                meta.name = name;
                document.head.appendChild(meta);
            }

            meta.content = content;
        };

        updateMeta("description", description);
        updateMeta("robots", "index, follow");

        let canonicalLink = document.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.rel = "canonical";
            document.head.appendChild(canonicalLink);
        }

        canonicalLink.href = canonical;
    }, [title, description, canonical]);

    return null;
};

export default SEO;