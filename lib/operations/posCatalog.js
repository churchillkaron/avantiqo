export const POS_TABLES = [
  { id: "T1", guests: 4, status: "ORDERING" },
  { id: "T2", guests: 2, status: "DINING" },
  { id: "T3", guests: 3, status: "PAYMENT" },
  { id: "T4", guests: 0, status: "OPEN" },
  { id: "T5", guests: 2, status: "WAITING" },
  { id: "VIP", guests: 6, status: "DINING" },
];

export const POS_CATALOG = [
  {
    id: "wagyu",
    nameKey: "pos.dishes.wagyu",
    categoryKey: "pos.categories.burgers",
    price: 420,
    station: "Kitchen",
    statusKey: "pos.status.highDemand",
  },
  {
    id: "fries",
    nameKey: "pos.dishes.fries",
    categoryKey: "pos.categories.starters",
    price: 180,
    station: "Kitchen",
    statusKey: "pos.status.liveCooking",
  },
  {
    id: "wine",
    nameKey: "pos.dishes.wine",
    categoryKey: "pos.categories.drinks",
    price: 320,
    station: "Bar",
    statusKey: "pos.status.barRouting",
  },
  {
    id: "salad",
    nameKey: "pos.dishes.salad",
    categoryKey: "pos.categories.starters",
    price: 240,
    station: "Kitchen",
    statusKey: "pos.status.freshPrep",
  },
];

export const POS_INITIAL_ORDERS = {
  T1: [
    { itemId: "wagyu", quantity: 2 },
    { itemId: "wine", quantity: 1 },
  ],
  T2: [
    { itemId: "fries", quantity: 2 },
  ],
  T3: [
    { itemId: "wagyu", quantity: 3 },
    { itemId: "salad", quantity: 2 },
  ],
  T4: [],
  T5: [
    { itemId: "salad", quantity: 2 },
  ],
  VIP: [
    { itemId: "wagyu", quantity: 6 },
    { itemId: "wine", quantity: 4 },
  ],
};

export function formatBaht(amount) {
  return `฿${amount.toLocaleString("en-US")}`;
}

export function calculateOrderTotals(order) {
  const subtotal = order.reduce((total, line) => {
    const item = POS_CATALOG.find((catalogItem) => catalogItem.id === line.itemId);
    return total + (item?.price ?? 0) * line.quantity;
  }, 0);

  const serviceCharge = Math.round(subtotal * 0.1);

  return {
    subtotal,
    serviceCharge,
    total: subtotal + serviceCharge,
  };
}
