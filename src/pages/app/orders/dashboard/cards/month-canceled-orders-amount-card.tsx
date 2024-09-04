import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
    const { data: MonthCanceledOrdersAmount } = useQuery({
        queryFn: getMonthCanceledOrdersAmount,
        queryKey: ['metrics', 'month-canceled-orders-amount'],
    })

    return (
        <Card>
         <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
             <DollarSign className="h-4 w-4 text-muted-foreground" />
         </CardHeader>
         <CardContent className="space-y-1">
         
         { MonthCanceledOrdersAmount && (
          <>
            <span className="text-3xl font-bold tracking-tight">{MonthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}</span>
            <p className="text-xs text-muted-foreground">
                {MonthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                    <>
                    <span className="text-rose-500 dark:text-rose-400">
                        {MonthCanceledOrdersAmount.diffFromLastMonth}%
                    </span>{' '}
                    em relação ao mês passado
                    </>
                ) : (
                    <>
                    <span className="text-rose-500 dark:text-rose-400">
                        +{MonthCanceledOrdersAmount.diffFromLastMonth}%
                    </span>{' '} 
                    em relação ao mês passado
                    </>
                )
            }
            </p>
          </>
        )}
         </CardContent>
        </Card>
    )
}