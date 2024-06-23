import BuyButtonGood from "@/app/useEffect/_components/buy_button_good";
import BuyButtonNotGood from "@/app/useEffect/_components/buy_button_not_good";
import SearchForm from "@/app/useEffect/_components/search_form";

export default function Page() {
  return (
    <div className="mx-4">
      <SearchForm />
      <BuyButtonGood />
    </div>
  );
}
