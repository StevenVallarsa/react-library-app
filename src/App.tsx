import ListGroup from "./components/ListGroup";

const cities: any[] = ["Sudbury", "Toronto", "Ottawa", "North Bay", "Sarnia"];

function App() {
  return (
    <div>
      <ListGroup items={cities} heading="cities" />
    </div>
  );
}

export default App;
