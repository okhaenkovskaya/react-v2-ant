import PublicLayout from "./layouts";
import { ConfigProvider } from 'antd';

function App() {

  return (
  <ConfigProvider
      theme={{
          token: {
              colorPrimary: '#00b96b',
              fontSize: 24
          },
      }}
  >
      <PublicLayout/>
  </ConfigProvider>
  )
}

export default App
