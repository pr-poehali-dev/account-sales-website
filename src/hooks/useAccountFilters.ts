import { useState, useMemo } from "react";
import { Account } from "@/types/Account";

export const useAccountFilters = (accounts: Account[]) => {
  const [selectedGame, setSelectedGame] = useState<string>("Все игры");
  const [priceRange, setPriceRange] = useState<string>("Любая цена");

  const filteredAccounts = useMemo(() => {
    return accounts.filter((account) => {
      const gameMatch =
        selectedGame === "Все игры" || account.game === selectedGame;
      let priceMatch = true;

      if (priceRange === "До 2000₽") priceMatch = account.price < 2000;
      else if (priceRange === "2000₽ - 4000₽")
        priceMatch = account.price >= 2000 && account.price <= 4000;
      else if (priceRange === "Свыше 4000₽") priceMatch = account.price > 4000;

      return gameMatch && priceMatch;
    });
  }, [accounts, selectedGame, priceRange]);

  return {
    selectedGame,
    setSelectedGame,
    priceRange,
    setPriceRange,
    filteredAccounts,
  };
};
