import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { GetDayOrdersAmountMock } from "./get-day-orders-amount";
import { GetMonthOrdersAmountMock } from "./get-month-orders-amount";
import { GetMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { GetDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { GetPopularProductsMock } from "./get-popular-products-mocks";
import { getProfileMock } from "./get-profile";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { updateProfileMock } from "./update-profile-mock";

export const worker = setupWorker(
    signInMock, 
    registerRestaurantMock, 
    GetDayOrdersAmountMock,
    GetMonthOrdersAmountMock,
    GetMonthCanceledOrdersAmountMock,
    GetDailyRevenueInPeriodMock,
    GetPopularProductsMock,
    getProfileMock,
    getManagedRestaurantMock,
    updateProfileMock,
)

export async function enableMSW() {
    if (env.MODE != 'test') {
        return
    }

    await worker.start()
}