export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p className="text-lg">
              I'm a passionate full-stack developer with a love for creating innovative solutions.
              My journey in tech started with curiosity and has evolved into a career built on
              continuous learning and problem-solving.
            </p>
            <p>
              I specialize in modern web technologies and enjoy working on projects that challenge
              me to think creatively and push the boundaries of what's possible. Whether it's
              building scalable web applications or crafting intuitive user experiences, I bring
              enthusiasm and dedication to every project.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What I Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Problem Solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
            <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}