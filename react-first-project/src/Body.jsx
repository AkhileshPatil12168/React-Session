import Button from "./Button";
import Card from "./Card";

export function Abc() {
  return (
    <div>
      <p>hello</p>
      <span className=" top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 shadow-md">
        ⚡ HP
      </span>
    </div>
  );
}

function Body({ data }) {
  //   let data = {};
  //   const typeClass = `type-${data.type.toLowerCase()}`;

  return (
    <>
      <div className="h-screen w-full grid grid-cols-2 grid-rows-3 gap-5">
        <div className="bg-red-500 w-full">
          {/* <div className="bg-white size-full text-blue-500 text- font"></div> */}
        </div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
        <div className="bg-green-500 w-full"></div>
    

      </div>
      {/* <div className="grid grid-cols-3 p-10 gap-y-10">
        {data?.map((obj, index) => (
          <Card key={index} data={obj}></Card>
        ))}
      </div> */}
    </>
  );
}

export default Body;
