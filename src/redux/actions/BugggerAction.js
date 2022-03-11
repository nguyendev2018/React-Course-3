import { inDecreaseAmount } from "../types/Bugger"
export const inDecreaseAmount = (itemId) => ({
    type: inDecreaseAmount,
    itemId
})