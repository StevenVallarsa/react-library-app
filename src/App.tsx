import ListGroup from "./components/ListGroup";

const cities: any[] = ["Sudbury", "Toronto", "Ottawa", "North Bay", "Sarnia"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
