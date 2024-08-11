import Item, { productProps } from "./Item";

interface product extends productProps {

}

interface productDisplayProps {
  heading?: string;
  id?: string;
  product_collection: product[];
  category?: string;
}

const ProductsDisplay = ({
  heading,
  product_collection,
  id,
  category,
}: productDisplayProps) => {
  return (
    <section
      id={id}
      className="container w-full max-container flex-col items-center gap-4">
      <h1 className="text-center md:text-left uppercase text-5xl font-semibold">
        {heading}
      </h1>
      {heading && <hr className="w-60 py-0.5 bg-neutral-800 rounded-lg" />}

      <div className="flex justify-between w-full gap-y-10 flex-wrap mt-16">
        {product_collection.map(
          (product) =>
            product.category === category && (
              <Item key={product.id} {...product} />
            )
        )}
      </div>
    </section>
  );
};

export default ProductsDisplay;
