import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import "./index.css"

import Layout from "./layout/Layout";

function App() {
  return (
    <ThemeProvider className="App"
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <main className="m-0 p-0">
        <Layout/>
      </main>
    </ThemeProvider>
  );
}

export default App;
