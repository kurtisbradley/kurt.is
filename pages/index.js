import dynamic from 'next/dynamic';

import Page from '../components/page';
import Layout from '../components/layout';
import Loader from '../components/three/Loader';

const Three = dynamic(() => import('../components/three'), {
  ssr: false,
  loading: () => <Loader />,
});

const App = () => {
  return (
    <Page>
      <Layout>
        <Three />
      </Layout>
    </Page>
  );
};

export default App;