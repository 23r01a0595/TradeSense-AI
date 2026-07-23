import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import TransactionCard from "../components/TransactionCard";
import { getTransactions } from "../services/transactionService";

function TransactionHistory() {

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadTransactions();

    }, []);

    const loadTransactions = async () => {

        try {

            const userId = Number(localStorage.getItem("userId"));

            const data = await getTransactions(userId);

            setTransactions(data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load transactions");

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <MainLayout>

                <h1 className="text-4xl font-bold text-white mb-8">
                    Transaction History
                </h1>

                <p className="text-slate-400">
                    Loading transactions...
                </p>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold text-white">
                    Transaction History
                </h1>

                <p className="text-slate-400 mt-2">
                    View all your buy and sell transactions.
                </p>

            </div>

            {transactions.length === 0 ? (

                <div className="bg-slate-800 rounded-2xl p-10 text-center border border-slate-700">

                    <h2 className="text-2xl text-white font-bold">
                        No Transactions Found
                    </h2>

                </div>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {transactions.map((transaction) => (

                        <TransactionCard
                            key={transaction.id}
                            transaction={transaction}
                        />

                    ))}

                </div>

            )}

        </MainLayout>

    );

}

export default TransactionHistory;