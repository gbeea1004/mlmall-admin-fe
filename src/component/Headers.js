import { Button, theme } from "antd";
import { Header } from "antd/es/layout/layout";

function Headers ({collapsed, setCollapsed, colorBgContainer}) {

    return (
        <Header
            style= {{
                padding: 0,
                background: colorBgContainer,
            }}
        >
            <Button 
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            style={{
                fontSize: '16px',
                width: 64,
                height: 64,
            }}/>
        </Header>
    )
};

export default Headers;