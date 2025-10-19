import Image from "next/image"


type Team = {
  entry: string;
};

export default async function Page() {
      const response = await fetch('http://backend:8000/glossary', {cache: 'no-store'});
 const teams: Team[] = await response.json ();

  return (
    <div>
      <div className=" bg-red-100 p-5 rounded-md">
        <h1 className=" text-7xl absolute top-20 left-115 ">Stupid Dumb Fetched Glossary</h1>
        <h2 className=" text-4xl absolute top-38 left-115 ">But Tanner isnt it static text? &quot;Yes, but what if I want to change it?&quot;</h2>
        <Image
          src="/Dumbjared-glossary.png"
          alt="DumbJared"
          width={150}
          height={150}
          className="z-0 flex rotate-8 justify-start"
/>
      </div>
        <div className="text-4xl my-12 relative mb-52">
          <ul className="list-disc space-y-4 pl-5">
              {teams.map((def, index) => (
              <li key={`${def.entry}-${index}`}>{def.entry}</li>
              ))}
          </ul>
        </div>
   </div>
  );
}
