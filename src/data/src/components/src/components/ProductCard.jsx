export default function ProductCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="product-card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p className="description">{descricao}</p>
      <p className="price">R$ {preco.toFixed(2)}</p>
      <button>Comprar</button>
    </div>
  );
}
