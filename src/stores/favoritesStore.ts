import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Tool } from '@/components/dashboard/ToolCard';

interface FavoritesState {
  favorites: Tool[];
  addFavorite: (tool: Tool) => void;
  removeFavorite: (toolId: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (tool) =>
        set((state) => ({
          favorites: [...state.favorites, tool],
        })),
      removeFavorite: (toolId) =>
        set((state) => ({
          favorites: state.favorites.filter((tool) => tool.id !== toolId),
        })),
    }),
    {
      name: 'favorites-storage',
    }
  )
);
