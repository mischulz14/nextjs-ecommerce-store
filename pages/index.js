import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import origamiFigures from '../data/data';

export default function Home() {
  const [rendered, setRendered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(origamiFigures);
  const [filteredPrice, setFilteredPrice] = useState('50');
  const [filteredDifficulty, setFilteredDifficulty] = useState('10');
  const [brightness, setBrightness] = useState(false);
  const context = useContext(ThemeContext);

  function handleFilter(event) {
    event.preventDefault();

    const arrayCopy = [...origamiFigures];

    const difficultyAndPriceFilteredArray = arrayCopy
      .filter((origami) => origami.price <= filteredPrice)
      .filter((origami) => origami.difficulty <= filteredDifficulty);

    // ? why doesn't this work with === ?

    setFilteredProducts(difficultyAndPriceFilteredArray);
  }

  return (
    <>
      <Head>
        <title>All Origamis</title>
        <meta name="description" content="list page of origamis" />
      </Head>
      <div className="flex main__container">
        <div className="flex flex-col items-center px-4 text-center border-b-2 border-l-2 border-r-2 main__filter-sidebar basis-1/4 border-slate-200">
          <h1 className="mt-12 mb-6 text-xl font-semibold dark:text-white">
            Filters
          </h1>
          <form
            className="p-10 border-2 border-slate-600 dark:text-white"
            onSubmit={handleFilter}
          >
            <label htmlFor="price" className="block mb-2 font-semibold">
              Price: {filteredPrice}
            </label>
            <input
              className="mb-8"
              id="price"
              type="range"
              min="0"
              max="50"
              onChange={(event) => {
                setFilteredPrice(parseInt(event.currentTarget.value));
              }}
              value={filteredPrice}
            />
            <label htmlFor="difficulty" className="block mb-2 font-semibold">
              Difficulty: {filteredDifficulty}
            </label>
            <input
              id="difficulty"
              type="range"
              min="0"
              max="10"
              onChange={(event) => {
                setFilteredDifficulty(parseInt(event.currentTarget.value));
              }}
              value={filteredDifficulty}
            />

            <button className="btn-primary dark:bg-white dark:text-gray-900">
              Apply filters
            </button>
            <button
              className="btn-secondary w-[140px] dark:hover:bg-slate-800"
              onClick={() => {
                setFilteredPrice('50');
                setFilteredDifficulty('10');
                setFilteredProducts(origamiFigures);
              }}
            >
              Remove filters
            </button>
          </form>
        </div>
        <div>
          <div className="main__product-content basis-3/4 flex flex-col gap-6 p-8 h-[750px] overflow-y-scroll border-slate-200 border-b-2">
            <h1 className="text-xl font-light text-center dark:text-white">
              PICK YOUR ORIGAMI
            </h1>
            <div>
              <ul className="flex flex-wrap gap-12">
                {filteredProducts.map((figure) => {
                  return (
                    <li
                      key={figure.id}
                      className={`px-6 mb-2 h-[400px] min-w-[230px] grow bg-white flex items-center justify-center flex-col card transition-all dark:before:bg-slate-700 dark:bg-slate-700 dark:text-slate-200 ${
                        context.darkMode ? 'dark' : ''
                      }`}
                    >
                      <Link href={`/${figure.id}`}>
                        <div className="flex flex-col items-center w-full mx-auto cursor-pointer">
                          <div
                            className={context.darkMode ? 'image-wrapper' : ''}
                          >
                            <Image
                              src={figure.activePicture}
                              width="100"
                              height="100"
                              className="block pb-10 transition-all cursor-pointer product hover:-translate-y-1"
                              alt={figure.name}
                            />
                          </div>
                          <span className="block w-[100px] text-center py-4 border-t-2 border-black text-2xl font-bold dark:border-white">
                            {figure.name}
                          </span>
                          <span className="block mb-6">
                            Difficulty: {figure.difficulty}
                          </span>
                        </div>
                      </Link>
                      <div className="flex items-center gap-8">
                        <div className="flex gap-1 min-w-[60px]">
                          <button
                            onClick={() => {
                              figure.activePicture = figure.firstPicture;
                              figure.activePrice = figure.price;
                              setRendered((prev) => !prev);
                              setBrightness(false);
                            }}
                            className="w-6 h-6 bg-white border-2 rounded-full border-slate-400"
                          />
                          <button
                            onClick={() => {
                              figure.activePicture = figure.secondPicture;
                              figure.activePrice = figure.priceColor;
                              setRendered((prev) => !prev);
                              setBrightness(true);
                            }}
                            className="w-6 h-6 border-2 rounded-full border-slate-400"
                            style={{ backgroundColor: figure.secondColor }}
                          />
                        </div>
                        <span className="text-lg font-bold">
                          {figure.activePrice}$
                        </span>
                      </div>
                      <button className="btn-primary dark:bg-gray-900 dark:text-white dark:border-white">
                        Add to cart
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
