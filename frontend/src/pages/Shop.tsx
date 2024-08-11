import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter';
import Offers from '../components/Offers'
import ProductsDisplay from '../components/ProductsDisplay';
import data_product from '../constants/data';
import { new_collections } from '../constants/new_collections';

const Shop = () => {
  return (
    <main className="grid gap-16">
      <Hero />
      <ProductsDisplay
        heading="popular"
        product_collection={data_product}
      />
      <Offers />
      <ProductsDisplay
        id='newCollection'
        heading="new collections"
        product_collection={new_collections}
      />

      <NewsLetter />

    </main>
  );
}

export default Shop