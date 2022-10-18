const ProductDescription = (props: any) => {
  return (
    <>
      {props.matchedProduct.difficulty < 4 && (
        <span className="inline-block p-4 text-lg text-center border-2 sm:p-10 sm:mx-10 border-slate-300">
          This {props.matchedProduct.name} provides an easy challenge which can
          be solved faster than other origami challenges. This is a perfect
          project from beginners to advanced origami lovers, who want to fold an
          elegant looking origami without having to think to much.{' '}
        </span>
      )}

      {props.matchedProduct.difficulty >= 5 &&
      props.matchedProduct.difficulty <= 8 ? (
        <span className="inline-block p-4 text-lg text-center border-2 border-slate-300 sm:p-10 sm:mx-10">
          This {props.matchedProduct.name} provides an intermediate challenge
          which has be solved with more effort than other origami challenges.
          This is a project for intermediate or advanced origami lovers, who
          want to have a challenge while folding their origami.{' '}
        </span>
      ) : null}

      {props.matchedProduct.difficulty > 8 && (
        <span className="inline-block p-4 text-lg text-center border-2 border-slate-300 sm:p-10 sm:mx-10">
          This {props.matchedProduct.name} provides a hard challenge which
          requires more time and brainpower than other origami challenges. This
          is a project for advanced origami lovers, who really want to have a
          challenge while folding exceptionally looking origami.{' '}
        </span>
      )}
    </>
  );
};

export default ProductDescription;
