
import {Helmet} from "react-helmet-async";

export const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name={"description"} content={description} />
            <meta name={"keywords"} content={keywords} />
        </Helmet>
    )
}
Meta.defaultProps = {
    title: "Welcome to Brentwood Essentials",
    description: "We sell sustainable products",
    keywords: "Home Essentials, buy furniture"
};

export default Meta;