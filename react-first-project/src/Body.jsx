import Button from "./Button";
import Card from "./Card";

export function Abc() {
  return( 
  
  <div><p>hello</p>
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
      <p className="text-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        animi culpa ullam impedit omnis delectus quisquam voluptatum iste,
        molestias placeat officia soluta facere. Recusandae unde porro iure sit
        totam voluptates?
      </p>
      <div className="grid grid-cols-3 p-10 gap-y-10">
        {data?.map((obj, index) => (
          <Card key={index} data={obj}>
            
            
            <Abc/>
            <Abc/>
            
            
            </Card>
        ))}
      </div>
    </>
  );
}

export default Body;
