import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    let location = useLocation();

    return (
        <Breadcrumb
            style={{padding:"20px"}}
            items={[
                {
                    path: "/",
                    title: "Home",
                },
                {
                    title: `${location.pathname.replace("/", "")}`,
                },
            ]}
        />
    );
};

export default Breadcrumbs;
