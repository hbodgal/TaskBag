import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

// added items to the store
// we export store to use over app.
// to create datastore persistant just wrap the store with persist function.
export const useItemsStore = create(persist((set, get) => ({
    items: initialItems,
    totalNumberOfItems: 0,
    totalSelectedItems: 0,
    removeAllItems: () => {
        set(() => { 
            return {items: []};
        });
        get().updateTotalNumberOfItems();
        get().updateTotalSelectedItems();
    },
    resetToInitial: () => {
        set(() => {
            return {items: initialItems}});
        get().updateTotalNumberOfItems();
        get().updateTotalSelectedItems();
    },
    markAllAsComplete: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return { ...item, packed: true};
            })
            return { items: newItems};
        });
        get().updateTotalSelectedItems();
    },
    markAllAsIncomplete: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return { ...item, packed: false};
            })
            return { items: newItems}; 
        });
        get().updateTotalSelectedItems();
    },
    addItem: (newItemText) => {
        const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false
          };
        //   let newItems = ;
          set(state => {
            // ...state.items, newItem]
            return {items: [...state.items, newItem]};
          });
          get().updateTotalNumberOfItems();
          get().updateTotalSelectedItems();
    },
    deleteItem: (itemId) => {
        set((state) => {
            const newItems = state.items.filter((item) => item.id !== itemId);
            return {items: newItems};
        });
        get().updateTotalNumberOfItems();
        get().updateTotalSelectedItems();
    },
    toggleItem: (itemId) => {
        set((state) => {
            const newItems = state.items.map(item => {
                if(item.id === itemId) {
                  return {...item, packed: !item.packed}
                }
                return item;
              }
            );
            return {items: newItems};
        });
        get().updateTotalSelectedItems();
    },
    updateTotalNumberOfItems: () => {
        set((state) => ({totalNumberOfItems: state.items.length}));
    },
    updateTotalSelectedItems: () => {
        set((state) => ({totalSelectedItems: state.items.filter(item => item.packed).length}));
    }
}), {
    name:"items"
}));

// zustand is modeled after useState
//  here there is set function
