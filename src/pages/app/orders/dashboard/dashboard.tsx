import { DayOrdersAmountCard } from "./cards/day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./cards/month-canceled-orders-amount-card";
import { MonthOrdersAmountCard } from "./cards/month-orders-amount-card";
import { MonthRevenueCard } from "./cards/month-revenue-card";
import { Helmet } from "react-helmet-async";
import { RevenueChart } from "./cards/revenue-chart";
import { PopularProductsChart } from "./cards/popular-products-chart";

export function Dashboard() {
    return <>
    <Helmet title="Dashboard"/>
    <div className="flex flex-col gap-4 p-4">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
            <MonthRevenueCard />
            <MonthOrdersAmountCard />
            <DayOrdersAmountCard />
            <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
            <RevenueChart />
            <PopularProductsChart />
        </div>
    </div>
    </>
}