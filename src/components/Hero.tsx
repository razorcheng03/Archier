export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-4 sm:px-6 lg:px-8 fade-in">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 slide-up">
          Hi, I'm{' '}
          <span className="text-blue-600 dark:text-blue-400">Archier</span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer & Problem Solver
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto slide-up" style={{ animationDelay: '0.4s' }}>
          I build things because curiosity doesn't let me sleep. Passionate about creating
          innovative solutions and turning ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn text-lg px-8 py-4"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn text-lg px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}