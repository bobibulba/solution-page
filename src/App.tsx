import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Code, Zap, Users, Heart, GraduationCap, ShoppingCart, Bot, Globe, Coins, Gamepad2, ChevronDown, ChevronUp, Star, Clock, MessageSquare } from 'lucide-react'

function App() {
  const [promptText, setPromptText] = useState('')
  const [showFloatingPrompt, setShowFloatingPrompt] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowFloatingPrompt(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePromptSubmit = () => {
    if (promptText.trim()) {
      // Redirect to AI builder with prompt
      console.log('Starting build with prompt:', promptText)
    }
  }

  const handleTryPrompt = (prompt: string) => {
    setPromptText(prompt)
    // Scroll to hero section
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  const categories = [
    { name: 'Productivity Tools', active: true },
    { name: 'Health & Wellness', active: false },
    { name: 'Education', active: false },
    { name: 'E-Commerce', active: false },
    { name: 'AI Tools', active: false },
    { name: 'Community & Social', active: false },
    { name: 'Web3 & Blockchain', active: false },
    { name: 'Entertainment', active: false },
  ]

  const solutions = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Wellness & Mindfulness Tools",
      description: "Build apps that support emotional check-ins, habit tracking, and self-care routines.",
      example: "MindfulDaily — a gratitude journal app built in 20 mins",
      prompt: "Build a gratitude journal app with reminders and mood tracking"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Productivity & Task Management",
      description: "Create powerful tools to organize work, manage projects, and boost efficiency.",
      example: "TaskFlow — a team collaboration platform built in 15 mins",
      prompt: "Build a task management app with team collaboration and time tracking"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-500" />,
      title: "Educational Platforms",
      description: "Develop learning management systems, quiz apps, and educational tools.",
      example: "LearnQuick — an interactive quiz platform built in 25 mins",
      prompt: "Build an educational quiz app with progress tracking and leaderboards"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      title: "E-Commerce Solutions",
      description: "Launch online stores, marketplaces, and commerce platforms quickly.",
      example: "ShopEasy — a marketplace app built in 30 mins",
      prompt: "Build an e-commerce store with product catalog and shopping cart"
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Applications",
      description: "Integrate AI capabilities into your apps for smart automation and insights.",
      example: "ChatBot Pro — an AI customer service bot built in 20 mins",
      prompt: "Build an AI chatbot for customer support with knowledge base integration"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Community & Social Apps",
      description: "Connect people through forums, social networks, and community platforms.",
      example: "ConnectHub — a community forum built in 25 mins",
      prompt: "Build a community forum with user profiles and discussion threads"
    }
  ]

  const userHighlights = [
    {
      name: "TaskMaster Pro",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      prompt: "Build a project management tool with Kanban boards",
      time: "Built in 18 minutes",
      rating: 5
    },
    {
      name: "FitTracker",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      prompt: "Create a fitness tracking app with workout logging",
      time: "Built in 22 minutes",
      rating: 5
    },
    {
      name: "Recipe Finder",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      prompt: "Build a recipe app with ingredient search and meal planning",
      time: "Built in 15 minutes",
      rating: 4
    }
  ]

  const faqs = [
    {
      question: "What types of apps can I build?",
      answer: "You can build virtually any type of web application - from simple landing pages to complex SaaS platforms, e-commerce stores, social networks, productivity tools, and more. Our AI understands your requirements and creates production-ready code."
    },
    {
      question: "Can I publish or monetize them?",
      answer: "Absolutely! All apps you build are yours to own, modify, and monetize. You can deploy them anywhere, sell them, or use them for your business. There are no restrictions on commercial use."
    },
    {
      question: "Is this free to use?",
      answer: "We offer a free tier that lets you build and experiment with apps. For advanced features, custom domains, and priority support, we have affordable paid plans starting at just $9/month."
    },
    {
      question: "What makes ChatAndBuild different?",
      answer: "Unlike traditional no-code tools, ChatAndBuild uses conversational AI to understand exactly what you want to build. You describe your idea in plain English, and we generate clean, production-ready code that you can customize and own completely."
    },
    {
      question: "Can I add AI agents to my app?",
      answer: "Yes! ChatAndBuild makes it easy to integrate AI capabilities into your apps. You can add chatbots, content generation, image processing, data analysis, and more with simple prompts."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Prompt Box */}
      {showFloatingPrompt && (
        <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-md">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="font-semibold text-gray-900">Quick Start</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Describe what you want to build..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
            />
            <button
              onClick={handlePromptSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Build
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build What Matters.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fast.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              From side projects to startups, see what's possible with ChatAndBuild.
            </p>

            {/* Prompt Input */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Describe what you want to build..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
                />
                <button
                  onClick={handlePromptSubmit}
                  className="absolute right-2 top-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                >
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Idea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're building for productivity, wellness, education, or entertainment, 
              ChatAndBuild has the tools to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Example</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">{solution.example}</p>
                </div>
                <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Prompt</span>
                  </div>
                  <code className="text-sm text-gray-800 font-mono">
                    {solution.prompt}
                  </code>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleTryPrompt(solution.prompt)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    Try This Prompt
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                    See More Apps
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet The Builders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real apps built by real people in minutes, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userHighlights.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(app.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {app.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    "{app.prompt}"
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{app.time}</span>
                  </div>
                  <button
                    onClick={() => handleTryPrompt(app.prompt)}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                  >
                    Try a Similar Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ChatAndBuild
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your idea is one sentence away from becoming real.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Describe it. Build it. Done.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Describe your next big idea..."
                className="w-full px-6 py-4 text-lg rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/20 transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
              />
              <button
                onClick={handlePromptSubmit}
                className="absolute right-2 top-2 px-6 py-2 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-bold flex items-center gap-2"
              >
                Start Building Now
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ChatAndBuild</span>
            </div>
            <p className="text-gray-400 mb-8">
              Build what matters. Fast.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
