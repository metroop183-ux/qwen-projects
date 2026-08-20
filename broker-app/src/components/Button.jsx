import { cn } from '../lib/utils'

export function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed rounded-lg'
  
  const variants = {
    primary: 'bg-neon text-black hover:bg-neon-dark',
    outline: 'border border-neon text-neon hover:bg-neon hover:text-black',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/10',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
