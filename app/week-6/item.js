export default function Item({ shoppingItem }) {
  let { id, name, quantity, category } = shoppingItem;

  let listLine = "border-b-red-600 border-b-2";

  return (
    <main>
      <div className="bg-orange-100 m-2 rounded-lg">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </div>
    </main>
  );
}
