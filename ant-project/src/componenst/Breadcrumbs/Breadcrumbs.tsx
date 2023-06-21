import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    let location = useLocation();

    console.log(location, 'location.pathname')

    return (
        <Breadcrumb
            style={{padding:"20px"}}
            items={[
                {
                    href: "/",
                    title: "Home",
                },
                {
                    title: `${location.pathname.slice(1).replace("/", " ")}`,
                },
            ]}
        />
    );
};

export default Breadcrumbs;
