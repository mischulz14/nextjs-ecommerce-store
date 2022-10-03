import Link from 'next/link';

const HomeScreen = () => {
  return (
    <div className="max-w-6xl h-[750px] homescreen flex flex-col items-center">
      <div className="mt-16 text-3xl text-gray-600">DO YOU LOVE ORIGAMI?</div>
      <Link href="/origami">
        <button className="mt-10 scale-125 btn-primary hover:scale-[1.3]">
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

export default HomeScreen;
