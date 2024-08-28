import { api } from "@/lib/axios";

export interface GetManagedRestaurantResponse {
    id: string
    name: string
    CreatedAt: Date | null
    updatedAt: Date | null
    description: string | null
    managerId: string | null
}

export async function getManagedRestaurant() {
    const response = await api.get<GetManagedRestaurantResponse>("/me")

    return response.data
}