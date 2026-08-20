import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { strategies, activityFeed } from '../data/mockData'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { Button } from '../components/Button'
import { TrendingUp, Users, DollarSign, Activity, PlusCircle, AlertTriangle } from 'lucide-react'

export function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold text-neon">TRADEPRO</Link>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/dashboard" className="text-white hover:text-neon transition-colors">Dashboard</Link>
                <Link to="/strategies" className="text-gray-400 hover:text-neon transition-colors">Strategies</Link>
                <Link to="/portfolio" className="text-gray-400 hover:text-neon transition-colors">Portfolio</Link>
                <Link to="/transactions" className="text-gray-400 hover:text-neon transition-colors">Transactions</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{user?.email}</span>
              <Button variant="ghost" onClick={logout}>Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!user?.kycApproved && (
          <div className="mb-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-center gap-4">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-yellow-500 font-medium">Complete KYC to enable withdrawals</p>
              <p className="text-yellow-500/70 text-sm">Verify your identity to unlock full account features.</p>
            </div>
            <Button variant="outline" size="sm">Verify Now</Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Total Balance</CardTitle>
                <DollarSign className="w-5 h-5 text-neon" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">${user?.balance?.toLocaleString() || '0.00'}</p>
              <Button size="sm" className="mt-4 w-full">
                <PlusCircle className="w-4 h-4 mr-2" />
                Deposit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Total Equity</CardTitle>
                <TrendingUp className="w-5 h-5 text-neon" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">$21,750.00</p>
              <p className="text-neon text-sm mt-2">+12.5% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Copies</CardTitle>
                <Users className="w-5 h-5 text-neon" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-gray-400 text-sm mt-2">Across 3 strategies</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Total P&L</CardTitle>
                <Activity className="w-5 h-5 text-neon" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-white">+$4,250</p>
              <p className="text-neon text-sm mt-2">All time profit</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Top Strategies</h2>
              <Link to="/strategies">
                <Button variant="ghost">View All</Button>
              </Link>
            </div>
            <div className="grid gap-4">
              {strategies.map((strategy) => (
                <Card key={strategy.id} className="hover:border-neon/50 transition-colors cursor-pointer">
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{strategy.name}</h3>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            strategy.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                            strategy.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {strategy.riskLevel}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">by {strategy.trader}</p>
                        <div className="flex gap-6">
                          <div>
                            <p className="text-gray-500 text-xs">30D Return</p>
                            <p className="text-neon font-semibold">+{strategy.return30d}%</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Win Rate</p>
                            <p className="text-white font-semibold">{strategy.winRate}%</p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Copiers</p>
                            <p className="text-white font-semibold">{strategy.copiers.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link to={`/strategy/${strategy.id}`}>
                          <Button variant="outline" className="w-full">View Details</Button>
                        </Link>
                        <Button className="w-full">Copy Strategy</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <Card>
              <CardContent>
                <div className="space-y-4">
                  {activityFeed.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-neon mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm truncate">{activity.action}</p>
                        <p className="text-gray-400 text-xs">{activity.target}</p>
                        <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                      </div>
                      <span className="text-neon text-sm font-medium">
                        {activity.amount >= 0 ? '+' : ''}${activity.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
