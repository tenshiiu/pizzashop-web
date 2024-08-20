import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from "recharts";
import colors from "tailwindcss/colors";

const data = [
    { date: "20/08", revenue: 1200 },
    { date: "21/08", revenue: 800 },
    { date: "22/08", revenue: 900 },
    { date: "23/08", revenue: 400 },
    { date: "24/08", revenue: 2300 },
    { date: "25/08", revenue: 800 },
    { date: "26/08", revenue: 640 },
]

export function RevenueChart() {
    return (
        <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8">
            <div className="space-y-1">
             <CardTitle className="text-base font-medium">
                Receita no período
             </CardTitle>
             <CardDescription>Receita diária no período</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data} style={{ fontSize: 12 }}>
                <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>

                <YAxis 
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) => 
                    value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })
                }/>
                <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet["400"]} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
        </Card>
    )
}