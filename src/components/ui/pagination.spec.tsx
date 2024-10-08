import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Pagination } from "./pagination";

const OnPageChangeCallback = vi.fn()

describe("Pagination", () => {
    beforeEach(() => {
        OnPageChangeCallback.mockClear()
    })

    it('should display the right amount of pages and results', async () => {
        const wrapper = render(
            <Pagination 
            pageIndex={0}
            totalCount={200}
            perPage={10}
            onPageChange={() => {}}
            />
        )

        expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
        expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
    })

    it('should be able to navigate to the next page', async () => {
        const user = userEvent.setup()

        const wrapper = render(
            <Pagination 
            pageIndex={0}
            totalCount={200}
            perPage={10}
            onPageChange={OnPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: "Próxima página",
        })

        await user.click(nextPageButton)

        expect(OnPageChangeCallback).toHaveBeenCalledWith(1)
    })

    it('should be able to navigate to the', async () => {
        const user = userEvent.setup()

        console.log(OnPageChangeCallback.mock.calls)

        const wrapper = render(
            <Pagination 
            pageIndex={0}
            totalCount={200}
            perPage={10}
            onPageChange={OnPageChangeCallback}
            />,
        )

        const backPageButton = wrapper.getByRole('button', {
            name: "Página anterior",
        })

        await user.click(backPageButton)

        expect(OnPageChangeCallback).toHaveBeenCalledWith(4)
    })

    it('should be able to navigate to the first page', async () => {
        const user = userEvent.setup()

        const wrapper = render(
            <Pagination 
            pageIndex={0}
            totalCount={200}
            perPage={10}
            onPageChange={OnPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: "Primeira página",
        })

        await user.click(nextPageButton)

        expect(OnPageChangeCallback).toHaveBeenCalledWith(1)
    })
})