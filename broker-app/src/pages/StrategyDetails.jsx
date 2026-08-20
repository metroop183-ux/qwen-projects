import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { strategies, equityCurveData, tradesLog } from '../data/mockData'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { ArrowLeft, Users, TrendingUp, Activity, AlertTriangle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function StrategyDetails() {
  const { id } = useParams()
  const strategy = strategies.find(s => s.id === id) || strategies[0]
  const [copyAmount, setCopyAmount] = useState('')
  const [riskMultiplier, setRiskMultiplier] = useState(1)

  if (!strategy) return <div>Strategy not found</div>

  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="text-2xl font-bold text-neon">TRADEPRO</Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/dashboard" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-white">{strategy.name}</h1>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        strategy.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                        strategy.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {strategy.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-gray-400">by {strategy.trader}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-5 h-5" />
                    <span>{strategy.copiers.toLocaleString()} copiers</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{strategy.description}</p>
                <Button className="w-full md:w-auto" size="lg">Copy This Strategy</Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-neon" />
                    <span className="text-gray-400 text-sm">30D Return</span>
                  </div>
                  <p className="text-2xl font-bold text-neon">+{strategy.return30d}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-neon" />
                    <span className="text-gray-400 text-sm">Win Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{strategy.winRate}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-neon" />
                    <span className="text-gray-400 text-sm">Max DD</span>
                  </div>
                  <p className="text-2xl font-bold text-red-400">{strategy.maxDrawdown}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-neon" />
                    <span className="text-gray-400 text-sm">Total P&L</span>
                  </div>
                  <p className="text-2xl font-bold text-white">${strategy.totalPnL.toLocaleString()}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Equity Curve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={equityCurveData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="date" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                        labelStyle={{ color: '#fff' }}
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                      />
                      <Line type="monotone" dataKey="value" stroke="#00FF88" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Trades Log</CardTitle>
                <p className="text-gray-400 text-sm">Last updated 5 min ago</p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-3 text-gray-400 font-medium text-sm">Date</th>
                        <th className="text-left py-3 px-3 text-gray-400 font-medium text-sm">Asset</th>
                        <th className="text-left py-3 px-3 text-gray-400 font-medium text-sm">Type</th>
                        <th className="text-right py-3 px-3 text-gray-400 font-medium text-sm">Entry</th>
                        <th className="text-right py-3 px-3 text-gray-400 font-medium text-sm">Exit</th>
                        <th className="text-left py-3 px-3 text-gray-400 font-medium text-sm">Result</th>
                        <th className="text-right py-3 px-3 text-gray-400 font-medium text-sm">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tradesLog.map((trade) => (
                        <tr key={trade.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 px-3 text-gray-300 text-sm">{trade.date}</td>
                          <td className="py-3 px-3 text-white font-medium">{trade.asset}</td>
                          <td className="py-3 px-3">
                            <span className={`text-xs font-medium ${trade.type === 'Long' ? 'text-green-400' : 'text-red-400'}`}>
                              {trade.type}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right text-gray-300">${trade.entry.toLocaleString()}</td>
                          <td className="py-3 px-3 text-right text-gray-300">${trade.exit.toLocaleString()}</td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              trade.result === 'Win' ? 'bg-neon/20 text-neon' : 'bg-red-500/20 text-red-400'
                            }`}>
                              {trade.result}
                            </span>
                          </td>
                          <td className={`py-3 px-3 text-right font-semibold ${
                            trade.percent >= 0 ? 'text-neon' : 'text-red-400'
                          }`}>
                            {trade.percent >= 0 ? '+' : ''}{trade.percent}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Copy Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Minimum to Copy</label>
                  <p className="text-neon text-lg font-semibold">${strategy.minCopy}</p>
                </div>
                <Input
                  label="Amount ($)"
                  type="number"
                  placeholder="Enter amount"
                  value={copyAmount}
                  onChange={(e) => setCopyAmount(e.target.value)}
                  min={strategy.minCopy}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Risk Multiplier: {riskMultiplier}x
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.5"
                    value={riskMultiplier}
                    onChange={(e) => setRiskMultiplier(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0.5x</span>
                    <span>3x</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">Start Copying</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Trader</p>
                  <p className="text-white font-medium">{strategy.trader}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Trading Style</p>
                  <p className="text-white font-medium">Swing Trading</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Assets</p>
                  <p className="text-white font-medium">Crypto, Forex, Stocks</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Avg Trade Duration</p>
                  <p className="text-white font-medium">2-5 days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function DollarSign({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
