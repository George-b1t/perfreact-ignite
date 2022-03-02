import { useMemo } from "react";
import { Product, ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Product[];
  onAddWishlist: (id: number) => void;
};

export function SearchResults({ results, onAddWishlist }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddWishlist={onAddWishlist}
          />
        );
      })}
    </div>
  );
}
