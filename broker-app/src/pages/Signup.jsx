import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-neon">TRADEPRO</Link>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400 mb-8">Start copy trading in seconds</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            
            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
          </form>
          
          <p className="mt-6 text-center text-gray-400 text-sm">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
          
          <p className="mt-4 text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-neon hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
