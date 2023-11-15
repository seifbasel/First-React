import ListGroup from "./components/ListGroup";
import { Button } from "./components/button";
// import Message from "./massage";

function App() {
  let films = [
    "the godfather",
    "the dark knight",
    "fight club",
    "inception",
    "me before you",
    "the matrix",
  ];

  let handel_selected_item = (item: string) => {
    console.log(item);
    alert(item);
  };
  return (
    <div>
      <ListGroup
        films={films}
        heading="films"
        on_select_item={handel_selected_item}
      />
      <Button children={"seif"}></Button>
    </div>
  );
}
export default App;
