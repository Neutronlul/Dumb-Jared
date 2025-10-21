
import Navbar from '@/app/lib/Navbar';


type Team = {
  name: string;
};

export default async function Page() {
const response = await fetch('http://backend:8000/teams', {cache: 'no-store'});
 const teams: Team[] = await response.json ();

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Navbar */}
      <div className="max-w-screen max-h-screen mx-auto w-full pb-4.5 not-last:md:w-64">
        <Navbar />
      </div>

      {/* Main format */}
      <div className="md:mt-4 mb-2 w-screen md:h-[calc(100vh-35px)] overflow-x-hidden bg-orange-200 rounded-md flex-grow p-4 md:overflow-y-auto md:p-12">
        
      </div>

      {/* Team list */}
      <div className="md:mt-4 mt-1 flex flex-col">
        <h1 className="mb-1 ml-2 bg-orange-200 p-2 mr-4 py-4 rounded-md text-3xl md:text-4xl font-bold text-center">
          This Week’s Trivia Teams 9/99/9999
        </h1>

        <div className="mr-4 py-2 max-h-[83.5vh] md:overflow-y-auto scrollbar-hide-safe">
          <ul className="list-decimal text-3xl space-y-1">
            {teams.map((team, index) => (
              <li
                key={`${team.name}-${index}`}
                className="text-3xl px-3 ml-2 bg-gradient-to-br from-yellow-200 to-pink-500 rounded-md border border-orange-300"
              >
                {team.name.length > 18 ? team.name.slice(0, 18) + "..." : team.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

