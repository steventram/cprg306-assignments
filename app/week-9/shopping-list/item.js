export default function Item({ shoppingItem, onSelect }) {
  let { name, quantity, category } = shoppingItem;

  let listLine = "border-b-red-600 border-b-2";

  return (
    <main>
      <div className="bg-orange-100 m-2 rounded-lg" onClick={onSelect}>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </div>
    </main>
  );
}
