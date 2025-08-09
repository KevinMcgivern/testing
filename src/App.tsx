import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, Shield, Users, Star, ChevronRight } from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Experience blazing speeds with our optimized infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamlessly work together with real-time sync"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "This platform transformed how we handle our entire workflow. The speed and reliability are unmatched.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332-3fc4-4000-9b90-7c5a36e3b7f7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Lead at Innovate",
      content: "The attention to detail and user experience is incredible. It's like having a superpower for our team.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-8 h-8 text-purple-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Lumina
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-8 py-32 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Build the Future
            </span>
            <br />
            <span className="text-white">Faster</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of development tools. 
            Where innovation meets simplicity, and dreams become reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center">
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-slate-600 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> succeed</span>
            </h2>
            <p className="text-xl text-slate-400">Powerful features designed for modern teams</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> innovators</span>
            </h2>
            <p className="text-xl text-slate-400">See what teams are saying</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> transform</span>
            your workflow?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Join thousands of teams already building with Lumina
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center mx-auto">
            Get Started Now
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 px-8 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-bold">Lumina</span>
          </div>
          <p className="text-slate-400">© 2024 Lumina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
