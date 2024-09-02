import { api } from "@/lib/axios";

export interface getOrdersQuery {
    pageIndex?: number | null
    orderId?: string | null
    customerName?: string | null
    status?: string | null
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

export async function getOrders({ pageIndex, orderId, customerName, status }: getOrdersQuery) {
    const response = await api.get<getOrdersResponse>("/orders", {
        params: {
            pageIndex,
            orderId,
            customerName,
            status,
        },
    })

    return response.data
}