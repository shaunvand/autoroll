export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <img src="/icon-192.png" alt="Autoroll" width={96} height={96} style={{ borderRadius: 22, marginBottom: 24 }} />
        <h1>Autoroll</h1>
        <p>Your camera roll, posted automatically.<br/>AI picks your best shots, enhances them, writes the caption. You tap once to approve.</p>
        <a href="#waitlist" className="cta">Join the waitlist</a>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
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

      <section className="wrap">
        <h2 className="sect">How it works</h2>
        <div className="how">
          <div className="how-row">
            <img src="/hero-curate.png" alt="" />
            <div>
              <h3>1. Add photos</h3>
              <p>Pick photos from your gallery. Autoroll scores them in seconds and keeps only the keepers.</p>
            </div>
          </div>
          <div className="how-row reverse">
            <img src="/hero-enhance.png" alt="" />
            <div>
              <h3>2. AI enhance + caption</h3>
              <p>Every approved photo gets professional color grading and a caption written in your voice.</p>
            </div>
          </div>
          <div className="how-row">
            <img src="/hero-approve.png" alt="" />
            <div>
              <h3>3. Tap to approve</h3>
              <p>We push you 4 picks. Swipe through, tap ✅, and we schedule the post to Instagram for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2 className="sect">Pricing</h2>
        <div className="prices">
          <div className="price">
            <h3>Free</h3>
            <div className="amount">$0<span>/mo</span></div>
            <ul>
              <li>3 posts / month</li>
              <li>1 Instagram account</li>
              <li>5 batches / month</li>
            </ul>
          </div>
          <div className="price featured">
            <h3>Pro</h3>
            <div className="amount">$19<span>/mo</span></div>
            <ul>
              <li>Unlimited posts</li>
              <li>1 Instagram account</li>
              <li>30 regenerations per pick</li>
              <li>Priority enhancement (Nano)</li>
            </ul>
          </div>
          <div className="price">
            <h3>Studio</h3>
            <div className="amount">$49<span>/mo</span></div>
            <ul>
              <li>Unlimited posts</li>
              <li>3 Instagram accounts</li>
              <li>Everything in Pro</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2 className="sect">FAQ</h2>
        <div className="faq">
          <details>
            <summary>Do I need a Facebook account?</summary>
            <p>Yes. Instagram&apos;s API requires it. Your IG must be a Creator or Business account linked to a Facebook Page. We never see your password.</p>
          </details>
          <details>
            <summary>Will my photos look fake?</summary>
            <p>Default enhancement is content-preserving (color, contrast, sharpness) — same as a pro photo edit. Optional generative enhancement is available per pick.</p>
          </details>
          <details>
            <summary>Does it post automatically?</summary>
            <p>You approve every post before it goes live. Approved posts go into a schedule (default 1 feed + 3 stories per day). You stay in control.</p>
          </details>
          <details>
            <summary>Can I edit captions?</summary>
            <p>Yes. Captions are editable inline in the approval screen. You can regenerate with a different voice or write your own.</p>
          </details>
          <details>
            <summary>How does deletion work?</summary>
            <p>Tap &quot;Delete my account&quot; in Settings — all your data is removed within 30 days. <a href="/data-deletion">Details</a>.</p>
          </details>
        </div>
      </section>

      <section className="wrap" id="waitlist">
        <h2 className="sect">Get notified when we launch</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: 24 }}>
          Email <a href="mailto:hello@autoroll.online">hello@autoroll.online</a> to join the Android beta.
        </p>
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
