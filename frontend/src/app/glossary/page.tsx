import Image from "next/image"


type Team = {
  name: string;
};

export default async function Page() {
      const response = await fetch('http://backend:8000/glossary');
 const teams: Team[] = await response.json ();

  return (
    <div>
      <div className=" bg-red-100">
        <h1 className=" text-7xl absolute top-16 left-110 ">Stupid Dumb Fetched Glossary</h1>
        <h2 className=" text-4xl absolute top-34 left-110 ">But Tanner, isnt it static text? "Yes, but what if I want to change it?"</h2>
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
              {teams.map((team, index) => (
              <li key={`${team.name}-${index}`}>{team.name}</li>
              ))}
          </ul>
        </div>
   </div>
  );
}
