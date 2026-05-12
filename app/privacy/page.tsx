export const metadata = { title: 'Privacy Policy — Autoroll' };

export default function Privacy() {
  return (
    <section className="wrap legal">
      <a href="/" className="back">← Back</a>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: 12 May 2026</p>

      <p>Autoroll (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by AfriYaziMedia, 27 Stuart Rd, Rondebosch, Cape Town 7800, South Africa. This policy explains what data we collect, why, and how to delete it.</p>

      <h2>1. Data we collect</h2>
      <ul>
        <li><strong>Account data:</strong> name, email, Facebook user ID, Instagram Business/Creator account ID, linked Facebook Page ID — provided via Facebook Login when you connect your account.</li>
        <li><strong>Photos you submit:</strong> images you select through the Autoroll app to be analyzed, enhanced, captioned, and posted to your Instagram account. We do not access your camera roll without your action.</li>
        <li><strong>Posting metadata:</strong> captions generated, scheduled post times, post status, and the Instagram media IDs returned by Meta after publish.</li>
        <li><strong>Operational logs:</strong> timestamps, error codes, IP address at OAuth time. Retained 90 days for debugging and abuse prevention.</li>
      </ul>

      <h2>2. Why we collect it</h2>
      <ul>
        <li>To run the service you signed up for (publishing to your Instagram account on your behalf).</li>
        <li>To send you push notifications when curated posts are ready for approval.</li>
        <li>To prevent abuse and comply with Meta&apos;s Platform Terms.</li>
      </ul>

      <h2>3. Who we share data with</h2>
      <ul>
        <li><strong>Meta (Facebook + Instagram):</strong> we call the Graph API on your behalf using the access token you granted us via Facebook Login. Photos and captions are uploaded to Meta to create the post.</li>
        <li><strong>AI providers:</strong> photos are sent to Google (Gemini) for scoring and enhancement; photos and metadata are sent to OpenAI for caption generation. Both providers act as processors — see their respective privacy policies.</li>
        <li><strong>Image hosting:</strong> photos are temporarily hosted on a CDN to be ingested by the Meta Graph API. Removed within 7 days.</li>
        <li><strong>Infrastructure:</strong> Render (US), Postgres database (US/EU).</li>
        <li>We do not sell your data and do not run advertising on it.</li>
      </ul>

      <h2>4. Retention</h2>
      <ul>
        <li>Account data: until you delete your account.</li>
        <li>Submitted photos: 30 days after posting (then deleted from our storage; the published post remains on Instagram per your settings).</li>
        <li>Captions and post metadata: until you delete your account.</li>
        <li>Operational logs: 90 days.</li>
      </ul>

      <h2>5. Your rights</h2>
      <p>You can: access your data, correct it, export it, or delete everything. See <a href="/data-deletion">Data Deletion</a> for instructions. Email <a href="mailto:privacy@autoroll.online">privacy@autoroll.online</a> for access/export requests; we respond within 30 days.</p>

      <h2>6. Disconnecting Facebook / Instagram</h2>
      <p>You can revoke Autoroll&apos;s access at any time in Facebook → Settings → Business Integrations → Autoroll → Remove. Revocation stops all future posting and triggers data deletion per Section 4.</p>

      <h2>7. Security</h2>
      <p>Access tokens are encrypted at rest. All traffic is TLS. We do not store your Facebook or Instagram password (we never see it).</p>

      <h2>8. Children</h2>
      <p>Autoroll is not for children under 13. We do not knowingly collect data from anyone under 13.</p>

      <h2>9. Changes</h2>
      <p>Material changes will be notified by email at least 14 days before taking effect.</p>

      <h2>10. Contact</h2>
      <p>AfriYaziMedia, 27 Stuart Rd, Rondebosch, Cape Town 7800, South Africa. Email: <a href="mailto:privacy@autoroll.online">privacy@autoroll.online</a>.</p>
    </section>
  );
}
