import { getProductListAndCookieInfo } from '../utils/serverSideProps';

const About = () => {
  return (
    <div className="p-20 text-center dark:text-white">
      This is a mockup store made by Michael Schulz, there are no real origami
      to purchase!
    </div>
  );
};

export default About;

export async function getServerSideProps(context: any) {
  return await getProductListAndCookieInfo(context);
}
