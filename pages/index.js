import Image from 'next/image';
import { useState } from 'react';
import origamiFigures from '../data/data';

export default function Home() {
  const [rendered, setRendered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(origamiFigures);
  const [filteredPrice, setFilteredPrice] = useState('20');
  const [filteredDifficulty, setFilteredDifficulty] = useState('10');
  return (
    <div className="flex">
      <div className="main__filter-sidebar basis-1/4 flex flex-col items-center text-center bg-slate-50">
        <h1 className="text-xl font-semibold mt-6">Filters</h1>
        <form className="border-2 border-black p-10">
          <label htmlFor="price" className="block">
            Price: {filteredPrice}
          </label>
          <input
            id="price"
            type="range"
            min="0"
            max="20"
            onChange={(e) => {
              setFilteredPrice(e.currentTarget.value);
            }}
            value={filteredPrice}
          />
          <label htmlFor="difficulty" className="block">
            Difficulty: {filteredDifficulty}
          </label>
          <input
            id="difficulty"
            type="range"
            min="0"
            max="10"
            onChange={(e) => {
              setFilteredDifficulty(e.currentTarget.value);
            }}
            value={filteredDifficulty}
          />

          <button className="btn-secondary">Apply filters</button>
        </form>
      </div>
      <div className="main__product-content basis-3/4 flex p-9 h-[750px] overflow-y-scroll">
        <ul className="flex flex-wrap gap-12">
          {filteredProducts.map((figure) => {
            return (
              <li
                key={figure.id}
                className="px-6 h-[400px] min-w-[230px] grow bg-white flex items-center justify-center flex-col card-shadow transition-all cursor-pointer"
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
  );
}
