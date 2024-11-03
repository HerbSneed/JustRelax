import cuMassage from "../assets/images/cuMassage.webp";

function Image() {
  return (
    <>
      <div
        className="bg-primary flex flex-col justify-center 
      gap-y-4 items-center text-center"
      >
        <img className="object-cover" src={cuMassage}/>
      </div>
    </>
  );
}

export default Image;
