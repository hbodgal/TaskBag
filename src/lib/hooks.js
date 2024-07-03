import { useContext } from "react";
import { ItemsContext } from "../context/itemsContextProvider";

export function useItemContext() {
    const context = useContext(ItemsContext);
    if (!context) {
        throw new Error(
            "useItemContext must be used within an ItemContextProvider."
        )
    }
    return context;
}