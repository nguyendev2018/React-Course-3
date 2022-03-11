import { inDecreaseAmountType } from "../types/Bugger"
export const inDecreaseAmount = (itemId, trueOrFalse) => ({
    type: inDecreaseAmountType,
    itemId, trueOrFalse
})