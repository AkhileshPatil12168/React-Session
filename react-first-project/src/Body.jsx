import Button from "./Button";
import Card from "./Card";

function Body({ data }) {
  //   let data = {};
  //   const typeClass = `type-${data.type.toLowerCase()}`;

  return (
    <div style={{ backgroundColor: "white", width: "100%", height: "100vh" }}>
      {data?.map((obj, index) => (
        <Card key={index} data={obj} />
      ))}
    </div>
  );
}

export default Body;
