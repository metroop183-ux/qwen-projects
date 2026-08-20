import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react'
import { Button } from '../components/Button'
import { performanceData } from '../data/mockData'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/login" className="text-gray-300 hover:text-neon transition-colors">
              Login
            </Link>
            <div className="text-2xl font-bold text-neon">TRADEPRO</div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Copy Top Traders.
                <span className="text-neon block">Automatically.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                We support Copy Trading with excellent results. Mirror the trades of professional traders and grow your portfolio effortlessly.
              </p>
              <Link to="/signup">
                <Button size="lg" className="group">
                  Start Copy Trading Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Live Performance</h2>
              <p className="text-gray-400">Data synced directly from our spreadsheet</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Date</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Asset</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Result</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-medium">%</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.slice(0, 5).map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-gray-300">{row.date}</td>
                      <td className="py-4 px-4 text-white font-medium">{row.asset}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          row.result === 'Win' ? 'bg-neon/20 text-neon' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {row.result}
                        </span>
                      </td>
                      <td className={`py-4 px-4 text-right font-semibold ${
                        row.percent >= 0 ? 'text-neon' : 'text-red-400'
                      }`}>
                        {row.percent >= 0 ? '+' : ''}{row.percent}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Get started in minutes and begin copying successful traders</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Create Account</h3>
                <p className="text-gray-400">Sign up in seconds. No KYC required to start trading.</p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Choose Strategy</h3>
                <p className="text-gray-400">Browse top-performing traders and select your strategy.</p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Start Earning</h3>
                <p className="text-gray-400">Trades are copied automatically. Watch your portfolio grow.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-neon/10 to-transparent rounded-2xl p-8 lg:p-12">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
                <p className="text-gray-400 mb-8">Join thousands of traders who are already earning with copy trading.</p>
                <Link to="/signup">
                  <Button size="lg">Create Free Account</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-xl font-bold text-neon mb-4">TRADEPRO</div>
            <p className="text-gray-500 text-sm max-w-2xl">
              Risk Disclaimer: Trading involves substantial risk of loss and is not suitable for every investor. 
              The valuation of futures, stocks and options may fluctuate, and as a result, clients may lose more 
              than their original investment. Past performance is not indicative of future results.
            </p>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 Tradepro. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
