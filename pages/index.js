import Image from 'next/image';
import { useState } from 'react';
import origamiFigures from '../data/data';

export default function Home() {
  const [rendered, setRendered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(origamiFigures);
  const [filteredPrice, setFilteredPrice] = useState('50');
  const [filteredDifficulty, setFilteredDifficulty] = useState('10');

  function handleFilter(event) {
    event.preventDefault();

    const arrayCopy = [...origamiFigures];

    const priceFilteredArray = arrayCopy.filter(
      (origami) => origami.price < filteredPrice,
    );
    const difficultyFilteredArray = priceFilteredArray.filter(
      (origami) => origami.difficulty < filteredDifficulty,
    );

    setFilteredProducts(difficultyFilteredArray);
  }

  return (
    <div className="flex">
      <div className="main__filter-sidebar px-4 basis-1/4 flex flex-col items-center text-center border-r-2 border-slate-200 border-l-2 border-b-2">
        <h1 className="text-xl font-semibold mt-12 mb-6">Filters</h1>
        <form
          className="border-2 border-slate-600 p-10"
          onSubmit={handleFilter}
        >
          <label htmlFor="price" className="block font-semibold mb-2">
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
          <label htmlFor="difficulty" className="block font-semibold mb-2">
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

          <button className="btn-primary">Apply filters</button>
          <button
            className="btn-secondary w-[140px]"
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
        <h1 className="text-xl font-light mt-6 text-center">
          PICK YOUR ORIGAMI
        </h1>
        <div className="main__product-content basis-3/4 flex p-8 h-[750px] overflow-y-scroll border-slate-200 border-b-2">
          <ul className="flex flex-wrap gap-12">
            {filteredProducts.map((figure) => {
              return (
                <li
                  key={figure.id}
                  className="px-6 mb-2 h-[400px] min-w-[230px] grow bg-white flex items-center justify-center flex-col card transition-all cursor-pointer"
                >
                  <Image
                    src={figure.activePicture}
                    width="100"
                    height="100"
                    className="product pb-10 block hover:-translate-y-1 transition-all cursor-pointer"
                    alt={figure.name}
                  />
                  <span className="block w-[100px] text-center py-4 border-t-2 border-black text-2xl font-bold">
                    {figure.name}
                  </span>
                  <span className="block mb-6">
                    Difficulty: {figure.difficulty}
                  </span>
                  <div className="flex gap-8 items-center">
                    <div className="flex gap-1 min-w-[60px]">
                      <button
                        onClick={() => {
                          figure.activePicture = figure.firstPicture;
                          figure.activePrice = figure.price;
                          setRendered((prev) => !prev);
                        }}
                        className="w-6 h-6 bg-white rounded-full border-2 border-slate-400"
                      />
                      <button
                        onClick={() => {
                          figure.activePicture = figure.secondPicture;
                          figure.activePrice = figure.priceColor;
                          setRendered((prev) => !prev);
                        }}
                        className="w-6 h-6 rounded-full border-2 border-slate-400"
                        style={{ backgroundColor: figure.secondColor }}
                      />
                    </div>
                    <span className="text-lg font-bold">
                      {figure.activePrice}$
                    </span>
                  </div>
                  <button className="btn-primary">Add to cart</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
