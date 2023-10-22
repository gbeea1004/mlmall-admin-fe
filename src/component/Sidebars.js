import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

function Sidebar ({collapsed}) {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" 
          style={{    
            height: `32px`,
            margin: `16px`,
            borderRadius: `6px`,
          }}
        />
          <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'nav 1'
            },
            {
              key: '2',
              label: 'nav 2',
            },
            {
              key: '3',
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
    )
};

export default Sidebar;