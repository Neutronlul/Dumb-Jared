import NumberGraph from "@/app/lib/Chart";

// export default async function Page() {
//   const response = await fetch("http://backend:8000/numbers", { cache: "no-store" });
//   const numbers: number[] = await response.json();
//   const chartData = numbers.map((value, index) => ({ name: `Point ${index + 1}`, value }));

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Number Data</h1>
//       <NumberGraph data={chartData} />
//     </div>
//   );
// }


export default function TestPage() {
  const testData = [
    { name: "1", value: 12 },
    { name: "2", value: 18 },
    { name: "3", value: 25 },
    { name: "4", value: 22 },
    { name: "5", value: 30 },
    { name: "6", value: 28 },
    { name: "7", value: 35 },
    { name: "8", value: 40 },
    { name: "9", value: 40 },
    { name: "10", value: 45 },
    { name: "11", value: 50 },
    { name: "12", value: 55 },
    { name: "13", value: 60 },
    { name: "14", value: 65 },
    { name: "15", value: 70 },
  ];

  return (
<div>
    <div className="p-2">
      <h1 className="text-3xl font-bold mb-4">Test Data Chart</h1>
      <NumberGraph data={testData}/>
    </div>

        <div className="p-2">
      <h1 className="text-3xl font-bold mb-4">Test Data Chart 2</h1>
      <NumberGraph data={testData}/>
    </div>
</div>
  );
}