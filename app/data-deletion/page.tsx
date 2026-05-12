export const metadata = { title: 'Data Deletion — Autoroll' };

export default function DataDeletion() {
  return (
    <section className="wrap legal">
      <a href="/" className="back">← Back</a>
      <h1>Data Deletion</h1>
      <p className="updated">Last updated: 12 May 2026</p>

      <p>You can delete all data Autoroll holds about you at any time using one of the methods below.</p>

      <h2>Option 1 — In the app (fastest)</h2>
      <ol>
        <li>Open Autoroll.</li>
        <li>Go to Settings → Account → <strong>Delete my account</strong>.</li>
        <li>Confirm. Your account, access tokens, photos, captions, and metadata are deleted within 24 hours.</li>
      </ol>

      <h2>Option 2 — Disconnect from Facebook</h2>
      <ol>
        <li>Go to Facebook → Settings &amp; Privacy → Settings.</li>
        <li>Apps and Websites → Active → <strong>Autoroll</strong> → Remove.</li>
        <li>Tick &ldquo;Delete all posts, videos or events Autoroll posted on your timeline.&rdquo;</li>
      </ol>
      <p>Facebook notifies us automatically. We delete your data within 30 days. You will receive a confirmation email at the address on file.</p>

      <h2>Option 3 — Email request</h2>
      <p>Email <a href="mailto:privacy@autoroll.online">privacy@autoroll.online</a> from the email address linked to your Autoroll account with the subject line <strong>Delete my data</strong>. We confirm within 7 days and complete deletion within 30 days.</p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your Autoroll account profile (name, email, Facebook ID, Instagram ID).</li>
        <li>All photos, captions, and post metadata in our storage.</li>
        <li>Stored access tokens (we also revoke them with Meta).</li>
        <li>Operational logs older than 90 days are already deleted automatically.</li>
      </ul>

      <h2>What does NOT get deleted</h2>
      <ul>
        <li>Posts already published to your Instagram account — those live on Meta&apos;s servers under your control. Delete them from Instagram directly if you wish.</li>
        <li>Billing records we are required to retain for tax purposes (anonymized).</li>
      </ul>

      <h2>Confirmation</h2>
      <p>You receive an email confirming deletion is complete. If you do not, contact <a href="mailto:privacy@autoroll.online">privacy@autoroll.online</a>.</p>
    </section>
  );
}
