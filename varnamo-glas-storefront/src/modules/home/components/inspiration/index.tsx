const Inspiration = () => {
  const projects = [
    {
      id: 1,
      title: "Modernt glasräcke",
      category: "Altan",
      image: "🏠",
    },
    {
      id: 2,
      title: "Rostfritt glas",
      category: "Balkong",
      image: "🏢",
    },
    {
      id: 3,
      title: "Vajerräcke",
      category: "Trappa",
      image: "🪜",
    },
    {
      id: 4,
      title: "Fransk balkong",
      category: "Fönster",
      image: "🪟",
    },
    {
      id: 5,
      title: "Poolräcke",
      category: "Pool",
      image: "🏊",
    },
    {
      id: 6,
      title: "Insynsskydd",
      category: "Trädgård",
      image: "🌿",
    },
    {
      id: 7,
      title: "Specialglas",
      category: "Uteplats",
      image: "🪟",
    },
    {
      id: 8,
      title: "Ledstänger",
      category: "Inomhus",
      image: "🪜",
    },
    {
      id: 9,
      title: "Designglas",
      category: "Balkong",
      image: "🏗️",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-16">
          Inspiration från våra kunder
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 mb-6 group-hover:from-slate-300 group-hover:to-slate-400 transition-all duration-300 flex items-center justify-center text-6xl opacity-80 group-hover:opacity-100">
                {project.image}
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600">{project.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="/se/store"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-heading font-bold text-lg hover:bg-emerald-700 transition-colors"
          >
            Utforska alla inspirationsprojekt
          </a>
        </div>
      </div>
    </section>
  )
}

export default Inspiration
