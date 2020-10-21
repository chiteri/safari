import React from 'react';
import Layout from './components/Layout/Layout';
import RideBuilder from './containers/RideBuilder/RideBuilder';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.Container}>
      <Layout>
        <RideBuilder />
      </Layout>
    </div>
  );
}

export default App;
