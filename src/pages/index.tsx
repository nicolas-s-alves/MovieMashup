import { Home } from '@/app/Home';

import MainLayout from './layouts/MainLayout';

const HomePage = () => {
  return <Home />;
};

HomePage.getLayout = MainLayout;

export default HomePage;
