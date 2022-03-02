import { useMemo } from "react";
import { Product, ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Product[];
  totalPrice: number;
  onAddWishlist: (id: number) => void;
};

export function SearchResults({
  results,
  totalPrice,
  onAddWishlist,
}: SearchResultsProps) {
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
