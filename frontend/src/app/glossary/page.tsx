import Image from "next/image"


type Team = {
  entry: string;
};

export default async function Page() {
      const response = await fetch('http://backend:8000/glossary', {cache: 'no-store'});
 const teams: Team[] = await response.json ();

  return (
    <div>
      <div className=" md:from-yellow-200 to-pink-500 border-orange-300 p-5 rounded-md">
        <h1 className=" bg-orange-200 md:text-7xl text-2xl absolute top-45.5 left-3 md:top-20 md:left-115 md:pr-0 md:pl-0 pr-3 pl-3 rounded-md ">Stupid Dumb Fetched Glossary</h1>
        <h2 className=" hidden md:block md:text-4xl text-2xl absolute md:top-38 md:left-115 ">But Tanner isnt it static text? &quot;Yes, but what if I want to change it?&quot;</h2>
        <Image
          src="/glossary.png"
          alt="DumbJared"
          width={150}
          height={150}
          className="z-0 hidden md:flex rotate-8 justify-start"
/>
      </div>
        <div className="md:text-4xl text-2xl my-12 md:relative mb-52">
          <ul className="list-disc space-y-4 pl-5">
              {teams.map((def, index) => (
              <li key={`${def.entry}-${index}`}>{def.entry}</li>
              ))}
          </ul>
        </div>
   </div>
  );
}
