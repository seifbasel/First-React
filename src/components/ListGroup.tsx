function ListGroup() {
  let films = [
    "the godfather",
    "the dark knight",
    "fight club",
    "inception",
    "me before you",
    "the matrix",
  ];

  // let alert = () => {
  //   if (films.length === 0) {
  //     return <li>no films found</li>;
  //   }
  // };

  return (
    <>
      <h1>list of films</h1>
      {/* {alert()} */}
      {films.length === 0 && <li>no films found</li>}
      <ul className="list-group">
        {films.map((film, index) => (
          <li
            key={film}
            onClick={() => console.log(film, index)}
            className="list-group-item"
          >
            {film}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
