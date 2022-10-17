import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error Page</title>
        <meta name="description" content="error page" />
      </Head>
      <div className="flex flex-col items-center justify-center border-2 border-black h-[650px] dark:border-white">
        <Image
          src="/images/warning.gif"
          alt="error-message"
          height="400"
          width="400"
        />
        <span className="pt-10 text-xl font-bold dark:text-white">
          404 Page not found
        </span>

        <Link href="/">
          <button className="btn-primary dark:bg-white dark:text-gray-900">
            Back to main Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
