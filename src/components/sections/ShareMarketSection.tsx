"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { TrendingUp, DollarSign, BarChart2, Users, ArrowUp } from 'lucide-react';
import Link from 'next/link';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ShareMarketSection = () => {
  const [timeframe, setTimeframe] = useState<'1M' | '6M' | '1Y'>('1M'); // default 1M

  // Stock price data (different starting points per timeframe)
  // Stock price data (different starting points per timeframe)
  const dataByTimeframe: Record<string, number[]> = {
    '1M': [1.2, 1.3, 1.4, 1.55],     // last 1 month -> end price 1.55
    '6M': [0.8, 1.0, 1.1, 1.25, 1.35, 1.6], // last 6 months -> end price 1.6
    '1Y': [0.5, 0.6, 0.75, 0.9, 1.1, 1.3, 1.45], // last 12 months -> end price 1.45
  };


  const labelsByTimeframe: Record<string, string[]> = {
    '1M': ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    '6M': ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    '1Y': ['Sep', 'Nov', 'Jan', 'Mar', 'May', 'Jul', 'Aug'],
  };

  // --- Constants & financial assumptions ---
  // NOTE: totalShares chosen so max market cap (1.5 * totalShares) stays < ₹40 Lakh
  const totalShares = 2_500_000; // 2.5 million shares -> 1.5 * 2.5M = 3,750,000 (₹37.5 Lakh)
  const EPS = 0.05; // earnings per share (for P/E)
  const dividendPerShare = 0.03; // ₹0.03 dividend per share

  // Prepare dynamic values based on selected timeframe
  const prices = dataByTimeframe[timeframe];
  const startPrice = prices[0];
  const endPrice = prices[prices.length - 1];
  const growthPercent = (((endPrice - startPrice) / startPrice) * 100).toFixed(1);

  // Market cap (Rupees) computed from endPrice and totalShares
  const marketCapRupees = endPrice * totalShares; // in ₹
  const marketCapLakh = (marketCapRupees / 100000);

  // P/E and dividend yield computed from formulas (dynamic)
  const peRatio = (endPrice / EPS).toFixed(1);
  const dividendYield = ((dividendPerShare / endPrice) * 100).toFixed(2);

  // --- Trading volume: make it proportional to market cap ---
  // 1) Compute max possible market cap across timeframes (for scaling)
  const marketCapsAll = Object.values(dataByTimeframe).map(arr => arr[arr.length - 1] * totalShares);
  const maxMarketCapRupees = Math.max(...marketCapsAll);

  // 2) Base turnover rates per timeframe (meaning: share of total shares traded in the period)
  const baseTurnover: Record<string, number> = {
    '1M': 0.05, // 5% of total shares traded in month (example)
    '6M': 0.04, // 4% of total shares for 6-month view
    '1Y': 0.03, // 3% for yearly view
  };

  // 3) Scale turnover by (currentMarketCap / maxMarketCap) so bigger market cap => larger volume
  const scaledTurnover = baseTurnover[timeframe] * (marketCapRupees / (maxMarketCapRupees || 1));
  const tradingVolumeShares = Math.max(1, Math.round(totalShares * scaledTurnover)); // at least 1 share

  // Format numbers nicely
  const nf = (num: number) => new Intl.NumberFormat('en-IN').format(num);
  const formatLakh = (numLakh: number) => `${numLakh.toFixed(2)} Lakh`;

  // Chart data & options (y-axis zoomed to price range, not always from zero)
  const chartData = {
    labels: labelsByTimeframe[timeframe],
    datasets: [
      {
        label: 'Stock Price (₹)',
        data: prices,
        fill: true,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Contact Us & Invest Today – Own a Stake in Our Company',
        position: 'bottom',
        font: { size: 11 },
        color: 'rgb(107, 114, 128)',
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `₹${ctx.parsed.y}`
        }
      }
    },
    scales: {
      y: {
        min: Math.max(0.0001, minPrice * 0.9),
        max: maxPrice * 1.1,
        grid: { display: true, color: 'rgba(0,0,0,0.05)' },
      },
      x: { grid: { display: false } },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
  };

  const timeframeButtons = ['1M', '6M', '1Y'];

  return (
    <section className="py-10 max-w-8xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-40 py-10">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Company Stock Performance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be a part of our growth journey. Invest today and secure your ownership in the company.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Graph Section */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-1">
            <div className="flex flex-col md:flex-row md:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold">₹{endPrice.toFixed(2)}</h3>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="w-4 h-4" />
                  <span className="ml-1">+{growthPercent}% Growth from ₹{startPrice}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0">
                {timeframeButtons.map((button) => (
                  <button
                    key={button}
                    onClick={() => setTimeframe(button as any)}
                    className={`px-4 py-2 rounded-lg transition-all ${timeframe === button ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[400px] md:h-[500px] w-full ">
              <Line data={chartData} options={chartOptions as any} />
            </div>
          </motion.div>

          {/* Metrics Section */}
          <div className="lg:col-span-1 space-y-4">
            <MetricCard title="Market Cap" value={`₹${formatLakh(marketCapLakh)}`} icon={<DollarSign />} />
            <MetricCard title="Trading Volume" value={`${nf(tradingVolumeShares)} shares`} icon={<BarChart2 />} />
            <MetricCard title="P/E Ratio" value={peRatio} icon={<TrendingUp />} />
            <MetricCard title="Dividend Yield" value={`${dividendYield}%`} icon={<Users />} />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-16 text-center">
          <Link href={'/contactUs'}>
          <button className="bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            Invest Now
          </button>
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            Contact us <span className="text-sm font-bold">And invest now today</span>
          </p>

        </motion.div>
      </div>
    </section>
  );
};

const MetricCard = ({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-gray-600 text-sm">{title}</h4>
      <div className="text-indigo-600">{icon}</div>
    </div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

export default ShareMarketSection;
