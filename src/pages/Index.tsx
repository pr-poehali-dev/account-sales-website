import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Filters from "@/components/Filters";
import AccountsGrid from "@/components/AccountsGrid";
import Footer from "@/components/Footer";
import { mockAccounts } from "@/data/mockAccounts";
import { useAccountFilters } from "@/hooks/useAccountFilters";

const Index = () => {
  const {
    selectedGame,
    setSelectedGame,
    priceRange,
    setPriceRange,
    filteredAccounts,
  } = useAccountFilters(mockAccounts);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <HeroSection />
      <Filters
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        resultsCount={filteredAccounts.length}
      />
      <AccountsGrid accounts={filteredAccounts} />
      <Footer />
    </div>
  );
};

export default Index;
