import { memo } from "react";

export type Product = {
  id: number;
  price: number;
  title: string;
  priceFormatted: string;
};

type ProductItemProps = {
  product: Product;
  onAddWishlist: (id: number) => void;
};

function ProductItemComponent({ product, onAddWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddWishlist(product.id)}>Add to wishlist</button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
