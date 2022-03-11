import { inDecreaseAmountType } from "../types/Bugger"
export const inDecreaseAmount = (itemId) => ({
    type: inDecreaseAmountType,
    itemId
})