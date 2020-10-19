import React from 'react';
import Layout from './components/Layout/Layout';
import RideBuilder from './containers/RideBuilder/RideBuilder';

function App() {
  return (
    <div>
      <Layout>
        <RideBuilder />
      </Layout> 
    </div>
  );
}

export default App;
