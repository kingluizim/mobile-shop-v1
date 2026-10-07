import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="home-container">
      <h2>Catálogo de Produtos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            nome={product.nome}
            preco={product.preco}
            imagem={product.imagem}
            descricao={product.descricao}
          />
        ))}
      </div>
    </main>
  );
}
