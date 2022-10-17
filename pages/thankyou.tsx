import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thankyou Page</title>
        <meta name="description" content="thank you page" />
      </Head>
      <div>
        <div className="flex flex-col items-center justify-center p-8 dark:text-white dark:bg-slate-600">
          <h1 className="mb-4 uppercase">Thank you for your order!</h1>
          <p className="mb-4">Your purchase is being processed</p>
          <Image width={400} height={400} src="/images/send.gif" />

          <Link href="/">
            <button className="mt-6 btn-primary">Return to Homepage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
