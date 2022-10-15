import Layout from './Layout';

const Global = ({ children, foundInCookies }: any) => {
  return <Layout foundInCookies={foundInCookies}>{children}</Layout>;
};

export default Global;
