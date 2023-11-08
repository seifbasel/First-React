import { useState } from "react";

interface props {
  films: string[];
  heading: string;
  on_select_item:(item:string)=>void;
}

function ListGroup({ films, heading, on_select_item }: props) {
  //hook
  let [selected_index, setselected_index] = useState(-1);

  return (
    <>
      <h1 className="text-center">{heading}</h1>
      {/* {alert()} */}
      {films.length === 0 && <li>no films found</li>}
      <ul className="list-group text-center">
        {films.map((film, index) => (
          <li
            key={film}
            onClick={() => {
              setselected_index(index);
              on_select_item(film)
            }}
            className={
              selected_index === index
                ? "list-group-item text-center active"
                : "list-group-item"
            }
          >
            {film}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
