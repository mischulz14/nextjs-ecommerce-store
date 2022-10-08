import Link from 'next/link';

const HomeScreen = () => {
  return (
    <div className="max-w-6xl h-[750px] homescreen flex flex-col items-center">
      <h1 className="mt-16 text-3xl text-center text-gray-600">
        DO YOU LOVE ORIGAMI?
      </h1>
      <Link href="/products">
        <button className="mt-10 scale-125 btn-primary hover:scale-[1.3]">
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

export default HomeScreen;
