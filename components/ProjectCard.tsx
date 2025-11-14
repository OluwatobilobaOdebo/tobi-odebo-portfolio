export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: any) {
  return (
    <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="text-sm text-gray-500 mb-4">
        <b>Tech:</b> {tech.join(", ")}
      </div>

      <div className="flex gap-4">
        {live && (
          <a
            className="px-4 py-2 bg-black text-white rounded-lg"
            href={live}
            target="_blank"
          >
            Live
          </a>
        )}

        {github && (
          <a
            className="px-4 py-2 bg-gray-200 rounded-lg"
            href={github}
            target="_blank"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
