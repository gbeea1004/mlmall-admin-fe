import { Content } from "antd/es/layout/layout";

function Bodys ({colorBgContainer}) {
    return (
        <Content 
            style={{
            margin: '24px 16px',
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
            }}
        />
    )
};

export default Bodys;