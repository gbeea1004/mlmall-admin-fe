import { Layout, Menu } from 'antd';
import Bodys from './component/Bodys';
import Headers from './component/Headers';
import Sidebars from './component/Sidebars';
import { useState } from 'react';

function App() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='Sidebar' />
        <Menu
          items={[
            {
              key: '1',
              label: 'nav 1'
            }
          ]}

        />

      </Sider>
    </Layout>
  );
}

export default App;
