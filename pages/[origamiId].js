import Image from 'next/image';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import origamiFigures from '../data/data';
import ErrorPage from './404';

const Origami = ({ matchedOrigami }) => {
  const [rendered, setRendered] = useState(false);
  const context = useContext(ThemeContext);

  if (!matchedOrigami) {
    return <ErrorPage />;
  }

  return (
    <div
      className={`card px-6 mb-2 h-[750px] min-w-[230px] grow bg-white flex transition-all  border dark:before:bg-slate-700 dark:bg-slate-700 dark:text-slate-200 dark:border-t-0 ${
        context.darkMode ? 'dark' : ''
      }`}
    >
      <div className="image-container color-container price-container basis-2/4">
        <div className="border-2 border-black dark:border-white flex flex-col mt-6 justify-center items-center h-[50%]">
          <div className={context.darkMode ? 'image-wrapper' : ''}>
            <Image
              src={matchedOrigami.activePicture}
              width="500"
              height="300"
              alt={matchedOrigami.name}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 details-container">
          <div className="flex justify-center items-center flex-col gap-1 min-w-[60px]">
            <span className="block mt-6 mb-3 text-2xl text-center">COLORS</span>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  matchedOrigami.activePicture = matchedOrigami.firstPicture;
                  matchedOrigami.activePrice = matchedOrigami.price;
                  setRendered((prev) => !prev);
                }}
                className="w-20 h-20 bg-white border-2 rounded-full border-slate-400"
              />
              <button
                onClick={() => {
                  matchedOrigami.activePicture = matchedOrigami.secondPicture;
                  matchedOrigami.activePrice = matchedOrigami.priceColor;
                  setRendered((prev) => !prev);
                }}
                className="w-20 h-20 border-2 rounded-full border-slate-400"
                style={{ backgroundColor: matchedOrigami.secondColor }}
              />
            </div>
          </div>
          <div className="mt-4 text-center price">
            <span className="block mb-2 text-2xl">PRICE</span>
            <span className="text-4xl font-bold">
              {matchedOrigami.activePrice}$
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center grow basis-2/4">
        <span className="block pt-10 mt-10 mb-16 text-4xl font-bold text-center">
          {matchedOrigami.name.toUpperCase()}
        </span>
        <span className="pb-1 mb-8 text-xl text-center border-b-2 border-slate-300">
          DESCRIPTION
        </span>
        {matchedOrigami.difficulty < 4 && (
          <span className="inline-block p-10 mx-10 text-lg text-center border-2 border-slate-300">
            This {matchedOrigami.name} provides an easy challenge which can be
            solved faster than other origami challenges. This is a perfect
            project from beginners to advanced origami lovers, who want to fold
            an elegant looking origami without having to think to much.{' '}
          </span>
        )}

        {matchedOrigami.difficulty >= 5 && matchedOrigami.difficulty <= 8 ? (
          <span className="inline-block p-10 mx-10 text-lg text-center border-2 border-slate-300">
            This {matchedOrigami.name} provides an intermediate challenge which
            has be solved with more effort than other origami challenges. This
            is a project for intermediate or advanced origami lovers, who want
            to have a challenge while folding their origami.{' '}
          </span>
        ) : null}

        {matchedOrigami.difficulty > 8 && (
          <span className="inline-block p-10 mx-10 text-lg text-center border-2 border-slate-300">
            This {matchedOrigami.name} provides a hard challenge which requires
            more time and brainpower than other origami challenges. This is a
            project for advanced origami lovers, who really want to have a
            challenge while folding exceptionally looking origami.{' '}
          </span>
        )}

        <button className="btn-primary mt-16 scale-[1.4] hover:scale-[1.5]">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Origami;

export function getServerSideProps(context) {
  const origamiId = parseInt(context.query.origamiId);
  const matchedOrigami = origamiFigures.find(
    (origami) => origami.id === origamiId,
  );

  if (matchedOrigami === undefined) {
    return {
      props: {
        error: 'Page not found',
      },
    };
  }

  return {
    props: {
      matchedOrigami,
    },
  };
}
