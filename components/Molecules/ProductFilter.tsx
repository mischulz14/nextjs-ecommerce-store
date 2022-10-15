const ProductFilter = (props: any) => {
  return (
    <>
      <button
        onClick={() => props.setShowFilter((prev: boolean) => !prev)}
        className="show-filter-btn absolute top-0 text-center sm:hidden w-[100%] py-2 text-lg  bg-slate-300 dark:bg-slate-900 dark:text-white z-[99] "
      >
        <span>FILTERS</span>
        <span
          className={`${
            props.showFilter ? 'rotate-180' : 'pl-1'
          } inline-block text-lg font-bold`}
        >
          ⬇
        </span>
      </button>
      <div
        className={`${
          props.showFilter ? 'block appear-height' : 'hidden'
        } relative flex-col items-center px-4 pb-20 text-center border-b-2 border-l-2 border-r-2 sm:flex main__filter-sidebar basis-1/4 border-slate-200`}
      >
        <h2 className="mt-16 mb-6 text-xl font-semibold dark:text-white">
          Filters
        </h2>
        <form
          className="p-10 border-2 border-slate-600 dark:text-white"
          onSubmit={props.handleFilter}
        >
          <label htmlFor="price" className="block mb-2 font-semibold">
            Price: {props.filteredPrice}
          </label>
          <input
            className="mb-8"
            id="price"
            type="range"
            min="0"
            max="30"
            onChange={(event) => {
              props.setFilteredPrice(event.currentTarget.value);
            }}
            value={props.filteredPrice}
          />
          <label htmlFor="difficulty" className="block mb-2 font-semibold">
            Difficulty: {props.filteredDifficulty}
          </label>
          <input
            id="difficulty"
            type="range"
            min="0"
            max="10"
            onChange={(event) => {
              props.setFilteredDifficulty(event.currentTarget.value);
            }}
            value={props.filteredDifficulty}
          />
          <div className="flex flex-col items-center justify-center btn-container">
            <button className="mt-8 btn-primary dark:bg-white dark:text-gray-900">
              Apply filters
            </button>
            <button
              className="btn-secondary w-[140px] dark:hover:bg-slate-800 mt-4"
              onClick={() => {
                props.setFilteredPrice('30');
                props.setFilteredDifficulty('10');
                props.setFilteredProducts(props.origamiFigures);
              }}
            >
              Remove filters
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductFilter;
