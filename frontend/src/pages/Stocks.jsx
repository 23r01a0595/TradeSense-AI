import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import StockCard from "../components/StockCard";
import { getStocks } from "../services/stocksService";

function Stocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const data = await getStocks();
        setStocks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-white mb-8">
        Stocks
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {stocks.map((stock) => (
          <StockCard
            key={stock.id}
            stock={stock}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default Stocks;