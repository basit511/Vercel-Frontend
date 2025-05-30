export default function Home() {
  return (
    <main>
      <h1>Vercel + Render Hello</h1>
      <p id="message">Loading...</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            fetch('/api/hello')
              .then(r => r.text())
              .then(t => document.getElementById('message').textContent = t)
          `
        }}
      />
    </main>
  );
}