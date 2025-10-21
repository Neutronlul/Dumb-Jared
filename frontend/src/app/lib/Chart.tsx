'use client'
import {Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function NumberGraph({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="md:w-160 w-full md:h-70 h-60 bg-orange-100 rounded-md shadow-md pt-2 pr-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, bottom: 25, left: 20 }} >
          <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="name" tickLine={false}>
                <Label 
                    value="Weeks" 
                    position="bottom" 
                    offset={1} 
                    style={{ textAnchor: "middle", fontWeight: "bold", fontSize: 20 }}/>
                </XAxis>
            <YAxis width={40} tickLine={true} axisLine={true}>
                <Label
                value="Score"
                angle={-90}       
                position="insideLeft"
                offset={1}        
                style={{ textAnchor: "middle", fontWeight: "bold", fontSize: 20 }}/>
            </YAxis>
          <Tooltip />
          <Line type="linear" dataKey="value" stroke="#f97316" strokeWidth={3} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}