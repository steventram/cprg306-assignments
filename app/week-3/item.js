export default function Item({ shoppingItem }) {
  let { name, quantity, category } = shoppingItem;

  let listLine = "border-b-red-600 border-b-2";

  return (
    <main>
      <div>
        <h3>{name}</h3>
        <p>{quantity}</p>
        <p className={listLine}>{category}</p>
      </div>
    </main>
  );
}
