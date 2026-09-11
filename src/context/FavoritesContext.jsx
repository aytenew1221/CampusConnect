import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteClubs, setFavoriteClubs] = useState([]);

  function toggleFavorite(clubId) {
    setFavoriteClubs((current) => {
      if (current.includes(clubId)) {
        return current.filter((id) => id !== clubId);
      }

      return [...current, clubId];
    });
  }

  function isFavorite(clubId) {
    return favoriteClubs.includes(clubId);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteClubs,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
