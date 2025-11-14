export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      <h1 className="text-6xl font-bold mb-4">Tobi Odebo</h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Software Engineer • Data Analytics • AI • Product Management
      </p>

      <div className="flex gap-6 mt-6">
        <a
          href="/projects"
          className="px-6 py-3 bg-black text-white rounded-lg text-lg"
        >
          View Projects
        </a>

        <a href="/about" className="px-6 py-3 bg-gray-200 rounded-lg text-lg">
          About Me
        </a>
      </div>
    </div>
  );
}
