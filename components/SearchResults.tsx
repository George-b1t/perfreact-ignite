import { List, ListRowRenderer } from "react-virtualized";
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} onAddWishlist={onAddWishlist} />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
