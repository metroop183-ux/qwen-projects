export const strategies = [
  {
    id: '1',
    name: 'Alpha Momentum',
    trader: 'John Doe',
    return30d: 24.5,
    winRate: 78,
    copiers: 1243,
    riskLevel: 'Medium',
    minCopy: 50,
    totalPnL: 145230,
    maxDrawdown: -8.2,
    description: 'Momentum-based trading strategy focusing on tech stocks and crypto assets.',
  },
  {
    id: '2',
    name: 'Safe Harbor',
    trader: 'Jane Smith',
    return30d: 12.3,
    winRate: 85,
    copiers: 2891,
    riskLevel: 'Low',
    minCopy: 100,
    totalPnL: 289450,
    maxDrawdown: -4.1,
    description: 'Conservative strategy with focus on capital preservation and steady growth.',
  },
  {
    id: '3',
    name: 'Crypto Whale',
    trader: 'Alex Chen',
    return30d: 45.8,
    winRate: 65,
    copiers: 856,
    riskLevel: 'High',
    minCopy: 200,
    totalPnL: 523100,
    maxDrawdown: -18.5,
    description: 'Aggressive crypto trading strategy targeting high volatility opportunities.',
  },
  {
    id: '4',
    name: 'Forex Master',
    trader: 'Sarah Johnson',
    return30d: 18.2,
    winRate: 72,
    copiers: 1567,
    riskLevel: 'Medium',
    minCopy: 75,
    totalPnL: 198760,
    maxDrawdown: -9.8,
    description: 'Expert forex trading across major currency pairs with technical analysis.',
  },
]

export const performanceData = [
  { date: '2025-01-01', asset: 'BTC/USD', result: 'Win', percent: 5.2 },
  { date: '2025-01-02', asset: 'ETH/USD', result: 'Loss', percent: -2.1 },
  { date: '2025-01-03', asset: 'AAPL', result: 'Win', percent: 3.8 },
  { date: '2025-01-04', asset: 'TSLA', result: 'Win', percent: 7.2 },
  { date: '2025-01-05', asset: 'EUR/USD', result: 'Loss', percent: -1.5 },
  { date: '2025-01-06', asset: 'GOOGL', result: 'Win', percent: 4.1 },
  { date: '2025-01-07', asset: 'BTC/USD', result: 'Win', percent: 8.9 },
  { date: '2025-01-08', asset: 'NVDA', result: 'Win', percent: 6.3 },
  { date: '2025-01-09', asset: 'GBP/USD', result: 'Loss', percent: -2.8 },
  { date: '2025-01-10', asset: 'AMZN', result: 'Win', percent: 4.5 },
]

export const equityCurveData = [
  { date: 'Jan 1', value: 10000 },
  { date: 'Jan 5', value: 10450 },
  { date: 'Jan 10', value: 10280 },
  { date: 'Jan 15', value: 10890 },
  { date: 'Jan 20', value: 11250 },
  { date: 'Jan 25', value: 11100 },
  { date: 'Jan 30', value: 11780 },
  { date: 'Feb 5', value: 12340 },
  { date: 'Feb 10', value: 12150 },
  { date: 'Feb 15', value: 12890 },
  { date: 'Feb 20', value: 13450 },
  { date: 'Feb 25', value: 13280 },
  { date: 'Mar 1', value: 14230 },
]

export const tradesLog = [
  { id: 1, date: '2025-03-01 14:32', asset: 'BTC/USD', type: 'Long', entry: 62450, exit: 65230, result: 'Win', percent: 4.45 },
  { id: 2, date: '2025-03-01 10:15', asset: 'ETH/USD', type: 'Short', entry: 3420, exit: 3580, result: 'Loss', percent: -4.68 },
  { id: 3, date: '2025-02-28 16:45', asset: 'NVDA', type: 'Long', entry: 785, exit: 825, result: 'Win', percent: 5.10 },
  { id: 4, date: '2025-02-28 09:30', asset: 'TSLA', type: 'Long', entry: 198, exit: 212, result: 'Win', percent: 7.07 },
  { id: 5, date: '2025-02-27 13:20', asset: 'EUR/USD', type: 'Short', entry: 1.0850, exit: 1.0780, result: 'Win', percent: 0.65 },
  { id: 6, date: '2025-02-27 11:00', asset: 'AAPL', type: 'Long', entry: 182, exit: 178, result: 'Loss', percent: -2.20 },
  { id: 7, date: '2025-02-26 15:30', asset: 'BTC/USD', type: 'Long', entry: 58900, exit: 61200, result: 'Win', percent: 3.90 },
  { id: 8, date: '2025-02-26 10:45', asset: 'GOOGL', type: 'Long', entry: 142, exit: 148, result: 'Win', percent: 4.23 },
]

export const transactions = [
  { id: 1, type: 'deposit', amount: 5000, status: 'completed', date: '2025-02-15', method: 'Paystack' },
  { id: 2, type: 'deposit', amount: 2500, status: 'completed', date: '2025-02-20', method: 'Paystack' },
  { id: 3, type: 'withdrawal', amount: 1000, status: 'processing', date: '2025-02-28', method: 'Bank Transfer' },
  { id: 4, type: 'deposit', amount: 10000, status: 'completed', date: '2025-03-01', method: 'Paystack' },
]

export const activityFeed = [
  { id: 1, action: 'Copied strategy', target: 'Alpha Momentum', time: '2 hours ago', amount: 500 },
  { id: 2, action: 'Trade closed', target: 'BTC/USD Long', time: '5 hours ago', amount: 245 },
  { id: 3, action: 'Deposit received', target: 'Paystack', time: '1 day ago', amount: 5000 },
  { id: 4, action: 'Strategy profit', target: 'Safe Harbor', time: '2 days ago', amount: 128 },
]
