import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import ProductFilter from '../../components/Molecules/ProductFilter';
import MainProductSection from '../../components/Organisms/MainProductSection';
import { ProductContext } from '../../context/ProductContext';
import origamiFigures from '../../data/data';
import { getProductListAndCookieInfo } from '../../utils/serverSideProps';
import { Product } from '../../utils/types';

type IndexProps = {
  origamiFigures: Product[];
  foundInCookies: Product[];
};

export default function Products(props: IndexProps) {
  const [rendered, setRendered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(
    props.origamiFigures,
  );
  const [filteredPrice, setFilteredPrice] = useState('30');
  const [filteredDifficulty, setFilteredDifficulty] = useState('10');
  const [userMessage, setUserMessage] = useState('Added to cart!');
  const [showFilter, setShowFilter] = useState(false);
  const productContext = useContext(ProductContext);

  useEffect(() => {
    productContext.setChosenProducts(props.foundInCookies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFilter(event: any) {
    event.preventDefault();

    const arrayCopy = [...props.origamiFigures];

    const difficultyAndPriceFilteredArray = arrayCopy
      .filter((origami) => origami.price <= parseInt(filteredPrice))
      .filter((origami) => origami.difficulty <= parseInt(filteredDifficulty));

    // ? why doesn't this work with === ?

    setFilteredProducts(difficultyAndPriceFilteredArray);
    setShowFilter(false);
  }

  return (
    <>
      {rendered}
      <Head>
        <title>All Origamis</title>
        <meta name="description" content="list page of origamis" />
      </Head>
      {/* FILTER SECTION */}
      <div className="relative flex flex-col sm:flex-row">
        <ProductFilter
          setShowFilter={setShowFilter}
          showFilter={showFilter}
          filteredPrice={filteredPrice}
          filteredDifficulty={filteredDifficulty}
          setFilteredPrice={setFilteredPrice}
          setFilteredDifficulty={setFilteredDifficulty}
          handleFilter={handleFilter}
          setFilteredProducts={setFilteredProducts}
          origamiFigures={origamiFigures}
        />
        {/* MAIN PRODUCT SECTION */}
        <div>
          <MainProductSection
            filteredProducts={filteredProducts}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            setRendered={setRendered}
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  return await getProductListAndCookieInfo(context);
}
