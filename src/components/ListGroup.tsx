

const names = ["Jagadish", "Sonu", "Yakub", "Padma","Tillu"];
function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
