import ItemList from "./item-list";

export default function Page3() {
  return (
    <main className="bg-orange-200 p-5">
      <h1 className="font-bold text-4xl m-5 underline text-center">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
