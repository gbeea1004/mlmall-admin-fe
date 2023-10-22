import { Layout, theme } from 'antd';
import { useState } from 'react';
import Sidebar from './component/Sidebars';
import Headers from './component/Headers';
import Bodys from './component/Bodys';

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sidebar 
        collapsed = {collapsed}
      />
      <Layout>
        <Headers 
          collapsed = {collapsed}
          setCollapsed = {setCollapsed}
          colorBgContainer = {colorBgContainer}
        />
        <Bodys 
          colorBgContainer = {colorBgContainer}
        />
      </Layout>
    </Layout>
  );
}

export default App;
