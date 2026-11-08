import { createContext, useContext } from "react";
import type { LibraryContextType } from "../types";

export const LibraryContext = createContext<LibraryContextType>(null!);

export function useLibraryContext() {
  return useContext(LibraryContext);
}