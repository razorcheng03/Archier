interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "GraphQL", level: 65, category: "Backend" },

  // Tools & Others
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "AWS", level: 65, category: "Tools" },
  { name: "Figma", level: 75, category: "Design" },
]

const categories = ["Frontend", "Backend", "Tools", "Design"]

export default function Skills() {
  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm constantly learning and expanding my skill set. Here are the technologies
          I work with most frequently.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="card">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Currently Learning
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
            Rust
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-medium">
            Machine Learning
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium">
            DevOps
          </span>
        </div>
      </div>
    </section>
  )
}