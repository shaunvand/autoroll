export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <h1>Autoroll</h1>
        <p>Your camera roll, posted automatically.<br/>AI picks your best shots, enhances them, writes the caption. You tap once to approve.</p>
        <a href="#waitlist" className="cta">Join the waitlist</a>

        <div className="features">
          <div className="feature">
            <h3>AI curates</h3>
            <p>Scores every photo, rejects blurry, repeats, screenshots.</p>
          </div>
          <div className="feature">
            <h3>Auto-enhance</h3>
            <p>Pro color, contrast, sharpness — applied automatically.</p>
          </div>
          <div className="feature">
            <h3>Smart captions</h3>
            <p>Captions match your voice. Edit before posting if you want.</p>
          </div>
          <div className="feature">
            <h3>One-tap approve</h3>
            <p>Push notification with 4 candidates. Tap, done.</p>
          </div>
        </div>
      </section>
      <footer>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/data-deletion">Data Deletion</a>
        <a href="mailto:hello@autoroll.online">Contact</a>
        <div style={{ marginTop: 16 }}>© {new Date().getFullYear()} Autoroll. Operated by AfriYaziMedia.</div>
      </footer>
    </>
  );
}
