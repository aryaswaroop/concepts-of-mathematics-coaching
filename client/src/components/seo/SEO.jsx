import { Helmet } from "react-helmet-async";

const SEO = ({
    title = "Concepts of Mathematics | Class 11 & 12 Mathematics Coaching",
    description = "Concepts of Mathematics provides focused Mathematics coaching for Class 11 and Class 12 students with regular tests, personal guidance and board-oriented preparation.",
    keywords = "Concepts of Mathematics, Mathematics coaching, Class 11 Mathematics, Class 12 Mathematics, Maths coaching",
}) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                name="robots"
                content="index, follow"
            />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:type"
                content="website"
            />
        </Helmet>
    );
};

export default SEO;