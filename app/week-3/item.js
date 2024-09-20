export default function Item({ shoppingItem }) {
  let { name, quantity, category } = shoppingItem;

  return (
    <main>
      <div>
        <h3>{name}</h3>
        <p>{quantity}</p>
        <p>{category}</p>
      </div>
    </main>
  );
}
