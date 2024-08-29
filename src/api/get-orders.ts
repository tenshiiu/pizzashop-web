import { api } from "@/lib/axios";

export interface getOrdersQuery {
    pageIndex?: number | null
}

export interface getOrdersResponse {
    orders: {
        orderId: string;
        createdAt: string;
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }[];
    meta: {
        pageIndex: number;
        perPage: number;
        totalCount: number;
    };
}

export async function getOrders({ pageIndex }: getOrdersQuery) {
    const response = await api.get<getOrdersResponse>("/orders", {
        params: {
            pageIndex,
        },
    })

    return response.data
}