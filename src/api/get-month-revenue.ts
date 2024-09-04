import { api } from "@/lib/axios";

export interface GetMounthRevenueResponse {
    receipt: number
    diffFromLastMonth: number
}

export async function getMounthRevenue() {
    const response = await api.get<GetMounthRevenueResponse>('/metrics/month-receipt')

    return response.data
}