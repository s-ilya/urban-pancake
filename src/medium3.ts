// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = Array<UserOrderState>;

// const orderStates = [
//     "initial",
//     "inWork",
//     "buyingSupplies",
//     "producing",
//     "fullfilled",
// ] as const;

type OrderInitial = "initial"
type OrderInWork = "inWork"
type OrderBuyingSupplies = "buyingSupplies"
type OrderProducing = "producing"
type OrderFulfilled = "fullfilled"

type OrderState = OrderInitial | OrderInWork | OrderFulfilled | OrderBuyingSupplies | OrderProducing

type UserOrderState = Exclude<OrderState, OrderBuyingSupplies | OrderProducing>

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
    orderStates.filter(
        (state): state is UserOrderState => state !== "buyingSupplies" && state !== "producing"
    );
