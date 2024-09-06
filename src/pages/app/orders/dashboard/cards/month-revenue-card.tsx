import { getMounthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthRevenueCard() {
    const { data: MonthRevenue } = useQuery({
        queryFn: getMounthRevenue,
        queryKey: ['metrics', 'month-revenue'],
    })

    return (
        <Card>
                <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base font-semibold">
                        Receita total (mês)
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
               <CardContent className="space-y-1">
               {MonthRevenue ? (
          <>
            <span className="text-3xl font-bold tracking-tight">{(MonthRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}</span>
            <p className="text-xs text-muted-foreground">
                {MonthRevenue.diffFromLastMonth >= 0 ? (
                    <>
                    <span className="text-emerald-500 dark:text-emerald-400">
                        +{MonthRevenue.diffFromLastMonth}%
                    </span>{' '}
                    em relação ao mês passado
                    </>
                ) : (
                    <>
                    <span className="text-rose-500 dark:text-rose-400">
                        {MonthRevenue.diffFromLastMonth}%
                    </span>{' '} 
                    em relação ao mês passado
                    </>
                )
            }
            </p>
          </>
        ): (
            <MetricCardSkeleton />
        )}
               </CardContent>
        </Card>
    )
}