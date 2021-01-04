import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './index.css';

function App() {
  return (
    <div style={{height: '90vh'}}>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
