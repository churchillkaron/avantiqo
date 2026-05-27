"use client";

import { create } from "zustand";

export const useDemoStore = create((set) => ({

  revenue: 48280,

  tables: [
    {
      id: "T1",
      status: "OPEN",
      orders: [],
    },
    {
      id: "T2",
      status: "ORDERING",
      orders: [],
    },
    {
      id: "T3",
      status: "WAITING",
      orders: [],
    },
  ],

  kitchenTickets: [],

  expoTickets: [],

  inventory: {
    beef: 18,
    fish: 12,
    wine: 24,
    pasta: 20,
    herbs: 30,
  },

  aiEvents: [
    "AI Runtime initialized.",
    "Operational synchronization active.",
  ],

  addOrder: (tableId, item) =>
    set((state) => {

      const updatedTables =
        state.tables.map((table) => {

          if (
            table.id !== tableId
          ) {
            return table;
          }

          return {
            ...table,
            status: "ORDERING",
            orders: [
              ...table.orders,
              item,
            ],
          };
        });

      return {
        tables: updatedTables,

        aiEvents: [
          `Order added to ${tableId}`,
          ...state.aiEvents,
        ],
      };
    }),

  sendToKitchen: (
    tableId
  ) =>
    set((state) => {

      const table =
        state.tables.find(
          (t) =>
            t.id === tableId
        );

      if (!table) {
        return {};
      }

      const tickets =
        table.orders.map(
          (order, index) => ({
            id: `${tableId}-${index}-${Date.now()}`,
            table: tableId,
            item: order.name,
            status:
              "PREPARING",
          })
        );

      const updatedTables =
        state.tables.map(
          (t) =>
            t.id === tableId
              ? {
                  ...t,
                  status:
                    "WAITING",
                }
              : t
        );

      return {
        tables:
          updatedTables,

        kitchenTickets:
          [
            ...tickets,
            ...state.kitchenTickets,
          ],

        aiEvents: [
          `${tableId} synchronized with Kitchen Runtime.`,
          ...state.aiEvents,
        ],
      };
    }),


  startCooking: (
    ticketId
  ) =>
    set((state) => {

      return {
        kitchenTickets:
          state.kitchenTickets.map(
            (ticket) =>

              ticket.id === ticketId
                ? {
                    ...ticket,
                    status:
                      "COOKING",
                  }
                : ticket
          ),

        aiEvents: [
          `Kitchen started cooking ticket ${ticketId}.`,
          ...state.aiEvents,
        ],
      };
    }),



  startCooking: (
    ticketId
  ) =>
    set((state) => {

      return {
        kitchenTickets:
          state.kitchenTickets.map(
            (ticket) =>

              ticket.id === ticketId
                ? {
                    ...ticket,
                    status:
                      "COOKING",
                  }
                : ticket
          ),

        aiEvents: [
          `Kitchen started cooking ticket ${ticketId}.`,
          ...state.aiEvents,
        ],
      };
    }),


  markReady: (
    ticketId
  ) =>
    set((state) => {

      const ticket =
        state.kitchenTickets.find(
          (t) =>
            t.id === ticketId
        );

      if (!ticket) {
        return {};
      }

      return {
        kitchenTickets:
          state.kitchenTickets.filter(
            (t) =>
              t.id !== ticketId
          ),

        expoTickets: [
          {
            ...ticket,
            status: "READY",
          },
          ...state.expoTickets,
        ],

        aiEvents: [
          `${ticket.item} moved to Expo Runtime.`,
          ...state.aiEvents,
        ],
      };
    }),

  markServed: (
    ticketId
  ) =>
    set((state) => {

      const ticket =
        state.expoTickets.find(
          (t) =>
            t.id === ticketId
        );

      if (!ticket) {
        return {};
      }

      const updatedTables =
        state.tables.map(
          (table) =>
            table.id ===
            ticket.table
              ? {
                  ...table,
                  status:
                    "SERVED",
                }
              : table
        );

      return {
        expoTickets:
          state.expoTickets.filter(
            (t) =>
              t.id !== ticketId
          ),

        tables:
          updatedTables,

        revenue:
          state.revenue + 420,

        aiEvents: [
          `${ticket.table} order served successfully.`,
          ...state.aiEvents,
        ],
      };
    }),

}));
