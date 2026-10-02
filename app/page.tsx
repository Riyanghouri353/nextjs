import Counter from "./counter";

export default function Home() {
  const buildTime = new Date().toUTCString();

  return (
    <main>
      <h1>
        Next<span className="accent">.js</span> Demo
      </h1>
      <p className="subtitle">
        A fresh Next.js 15 project scaffolded with the App Router, ready to
        build on.
      </p>

      <div className="grid">
        <div className="card">
          <h2>⚛️ App Router</h2>
          <p>
            File-based routing with React Server Components. This page was
            server-rendered at <code>{buildTime}</code>.
          </p>
        </div>
        <div className="card">
          <h2>🔌 API Route</h2>
          <p>
            Try the demo endpoint at <code>/api/hello</code> — it returns JSON
            from a serverless route.
          </p>
        </div>
        <div className="card">
          <h2>🚀 Deploy anywhere</h2>
          <p>
            Runs on Vercel with one click, or self-host with{" "}
            <code>npm run build</code> + <code>npm start</code>.
          </p>
        </div>
      </div>

      <Counter />

      <footer>Built by Muse · Next.js 15 + React 19</footer>
    </main>
  );
}
