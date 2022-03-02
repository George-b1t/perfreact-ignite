import { FormEvent, useCallback, useState } from "react";
import { Product } from "../components/ProductItem";
import { SearchResults } from "../components/SearchResults";

type resultProps = {
  totalPrice: number;
  products: Product[];
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<resultProps>({
    totalPrice: 0,
    products: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data: Omit<Product, "priceFormatted">[] = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      priceFormatted: formatter.format(product.price),
    }));

    const totalPrice = data.reduce((total, product) => {
      return total + product.price;
    }, 0);

    setResults({ totalPrice, products: products });
  }

  const addWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults
        results={results.products}
        totalPrice={results.totalPrice}
        onAddWishlist={addWishlist}
      />
    </div>
  );
}
