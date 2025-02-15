import { create } from "zustand";
import { initialItems } from "../lib/constant";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: function (newItemText) {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };

        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: function (id) {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      toggleItem: function (id) {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }

            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: function () {
        set(() => ({ items: [] }));
      },
      resetToInitial: function () {
        set(() => ({ items: initialItems }));
      },
      markAllAsCompleted: function () {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });

          return { items: newItems };
        });
      },
      markAllAsIncomplete: function () {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });

          return { items: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
