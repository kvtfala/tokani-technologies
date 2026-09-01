import type { Metadata } from "next";

const Arrow = () => <span aria-hidden="true">→</span>;

const canonical = "https://www.tokani.com.fj/case-studies/unravel-viti";
const siteScreenshot = "/portfolio/portfolio-unravel.jpg";
const communityHero = "https://res.cloudinary.com/gbsz4bq3/image/upload/e_improve/c_fill,g_auto,h_1000,w_1600/f_auto/q_auto/v1788233561/IMG-e489b0b7fbaef1aee0f29cd8b73e8079-V.jpg";
const villageWelcome = "https://res.cloudinary.com/gbsz4bq3/image/upload/e_improve/c_fill,g_auto,h_1000,w_1600/f_auto/q_auto/v1788241434/IMG-7ee75ddaeac951d2903e117984e25b00-V.jpg";
const mangroves = "https://res.cloudinary.com/gbsz4bq3/image/upload/e_improve/c_fill,g_auto,h_1000,w_1600/f_auto/q_auto/v1788241435/IMG-186dc28426ce540407d9d7728a1f3832-V.jpg";
const sharedTable = "https://res.cloudinary.com/gbsz4bq3/image/upload/e_improve/c_fill,g_auto,h_1000,w_1600/f_auto/q_auto/v1788241436/IMG-a3ed8d7e300657f6b423c0b894ede502-V.jpg";
const transport = "https://res.cloudinary.com/gbsz4bq3/image/upload/e_improve/c_fill,g_auto,h_1000,w_1600/f_auto/q_auto/v1788228246/IMG-d9b009c4151d342c19a94b693e75603b-V.jpg";

export const metadata: Metadata = {
  title: "Unravel Viti Case Study | Fiji SME Website Development | Tokani Technologies",
  description: "How Tokani Technologies turned a five-page brief into a future-ready digital foundation for Unravel Viti's community-led tourism and transport business in Fiji.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "en_FJ",
    siteName: "Tokani Technologies",
    title: "Unravel Viti — Building a Digital Foundation for Community-Led Tourism in Fiji",
    description: "A Tokani Technologies case study in business discovery, UX, custom website development, tourism product structuring, local SEO and future-ready architecture.",
    url: canonical,
    images: [{ url: "https://www.tokani.com.fj/portfolio/portfolio-unravel.jpg", width: 1360, height: 904, alt: "Unravel Viti website developed by Tokani Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unravel Viti — A Tokani Technologies Case Study",
    description: "From a five-page brief to a future-ready digital platform for community-led tourism in Fiji.",
    images: ["https://www.tokani.com.fj/portfolio/portfolio-unravel.jpg"],
  },
};

const outcomes = [
  "Original five-page concept expanded into a structured digital storefront",
  "Three signature cultural experiences individually productised online",
  "Transport offering organised into clear customer-facing services",
  "Detailed enquiry journey designed around real trip requirements",
  "Authentic Unravel photography integrated into a managed digital asset workflow",
  "Local Fiji SEO and search-engine structured data implemented",
  "Cloud-based responsive image optimisation implemented",
  "GitHub and Vercel deployment workflow established",
  "Architecture prepared for future booking, payment and CRM capabilities",
];

const roles = [
  "Strategy",
  "Business positioning",
  "Information architecture",
  "UX",
  "UI",
  "Copy & content structuring",
  "Tourism product presentation",
  "Photography strategy",
  "SEO",
  "Development",
  "Performance",
  "Deployment",
  "Future technology planning",
];

const buildValue = [
  ["Custom Next.js development", "A modern, fast and flexible foundation that can evolve as Unravel adds new experiences, services and operational tools."],
  ["GitHub version control", "Every change is tracked so the platform can be maintained, reviewed and developed safely over time."],
  ["Vercel cloud deployment", "Controlled releases and reliable delivery make updates easier to manage without rebuilding the business around the website."],
  ["Cloudinary image delivery", "Unravel's photographic library is resized, compressed and served appropriately for phones, tablets and desktop screens."],
  ["SEO architecture", "Search engines receive structured information about Unravel, its services, locations and individual tourism experiences."],
  ["Mobile-first design", "The customer journey is built around the devices travellers and local customers are most likely to use."],
];

const launchCompletion = [
  ["Custom domain", "unravel.com.fj connection remains to be completed."],
  ["Professional email", "Branded email configuration follows the final domain connection."],
  ["Contact channels", "Confirmed phone, WhatsApp and social channels are still to be supplied by Unravel."],
  ["Enquiry routing", "The structured form is designed, but final production delivery is not yet connected."],
  ["Analytics", "GA4 or equivalent production analytics remains a launch-completion item."],
  ["ROVA", "The final ROVA decision and booking link are still to be confirmed."],
  ["Payments", "Secure payment-link integration is planned as a scalable later step rather than forced into launch."],
  ["Legal & QA", "Privacy/legal pages and final public-launch QA remain before full production release."],
];

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Unravel Viti — Building a Digital Foundation for Community-Led Tourism in Fiji",
  description: "A Tokani Technologies case study in Fiji SME digital strategy, tourism website development, UX, SEO, content positioning and future-ready architecture.",
  mainEntityOfPage: canonical,
  image: "https://www.tokani.com.fj/portfolio/portfolio-unravel.jpg",
  author: { "@type": "Organization", name: "Tokani Technologies", url: "https://www.tokani.com.fj" },
  publisher: { "@type": "Organization", name: "Tokani Technologies", url: "https://www.tokani.com.fj" },
  about: { "@type": "Organization", name: "Unravel Viti" },
  inLanguage: "en-FJ",
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tokani Technologies", item: "https://www.tokani.com.fj/" },
    { "@type": "ListItem", position: 2, name: "Case studies", item: "https://www.tokani.com.fj/#case-studies" },
    { "@type": "ListItem", position: 3, name: "Unravel Viti", item: canonical },
  ],
};

export default function UnravelVitiCaseStudy() {
  return <main className="uv-case-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

    <header className="site-header uv-case-header">
      <a className="brand" href="/" aria-label="Tokani Technologies home"><img src="/brand/tokani-logo-transparent.webp" alt="Tokani Technologies" width={366} height={92}/></a>
      <nav aria-label="Main navigation"><a href="/#services">What we do</a><a href="/#work">Our work</a><a href="/#case-studies">Case studies</a><a href="/#story">Our story</a></nav>
      <a className="button button-small" href="/#contact">Let&apos;s talk <Arrow/></a>
    </header>

    <article>
      <section className="uv-case-hero">
        <div className="uv-case-hero-copy">
          <p className="eyebrow blue">A Tokani Technologies Case Study</p>
          <h1>Unravel Viti — Building a Digital Foundation for Community-Led Tourism in Fiji</h1>
          <p className="lead">Tokani took a broad business vision spanning cultural tourism, transport and community opportunity and translated it into a focused digital platform customers can understand and use today.</p>
          <div className="uv-case-meta">
            <span><strong>Client</strong> Unravel Viti</span>
            <span><strong>Focus</strong> Tourism + transport</span>
            <span><strong>Stage</strong> Launch completion</span>
          </div>
          <div className="uv-case-hero-actions"><a className="text-link" href="#evolution">See how the brief evolved <Arrow/></a><a className="text-link" href="https://unravel-viti.vercel.app" target="_blank" rel="noreferrer">View the current Unravel build <Arrow/></a></div>
        </div>
        <div className="uv-case-hero-visual">
          <figure className="uv-screen"><img src={siteScreenshot} alt="Current Unravel Viti website developed by Tokani Technologies" width={1360} height={904}/><figcaption>Current Unravel Viti digital platform</figcaption></figure>
          <figure className="uv-photo-card"><img src={communityHero} alt="Authentic Unravel Viti community experience photography" width={1600} height={1000}/></figure>
        </div>
      </section>

      <section className="section uv-case-intro">
        <p className="eyebrow brown">The challenge</p>
        <div className="intro-grid"><h2>The brief was five pages. The real job was building a useful digital foundation.</h2><div><p>Unravel Viti had a strong story and a much broader ambition than a conventional tourism operator. But before it could grow into that vision, it needed a clear central storefront rather than relying mainly on social media, messages and manual communication.</p><p>Tokani deliberately concentrated the proposition around what a customer can understand and enquire about now: cultural experiences, transfers, private charters, corporate transport and tailored journeys around Viti Levu.</p></div></div>
      </section>

      <section className="section uv-context">
        <div className="section-heading"><div><p className="eyebrow blue">Business discovery first</p><h2>We did not start by asking what pages to build.</h2></div><p>We started with Unravel&apos;s business model, purpose, customers and future ambition, then decided what the first digital version actually needed to do.</p></div>
        <div className="uv-context-grid">
          <div><h3>What Unravel is building</h3><p>A Fiji business centred on reviving and strengthening cultural tourism by helping communities structure experiences and then using Unravel&apos;s customer relationships, transport capability and digital presence to direct opportunity toward those communities.</p></div>
          <div><h3>What the first platform needed to sell</h3><p>Cultural and village experiences, airport and hotel transfers, private charters, corporate transport, family and group transport, and tailored journeys around Viti Levu.</p></div>
          <div><h3>What Tokani deliberately held back</h3><p>The wider rural and maritime ecosystem was not forced into launch. The website establishes the foundation first, with the architecture left ready to expand when real demand justifies more technology.</p></div>
        </div>
        <blockquote className="uv-pullquote">Build the digital foundation first. Add heavier booking, payment and operational systems when transaction volume gives them a real job to do.</blockquote>
      </section>

      <section className="section uv-evolution" id="evolution">
        <div className="section-heading"><div><p className="eyebrow brown">Project evolution</p><h2>From a website requirement to a digital storefront.</h2></div><p>The strategic value is visible in the difference between the original page list and the platform that emerged through discovery, product structuring and iteration.</p></div>
        <div className="uv-evolution-flow">
          <div className="uv-evolution-card original"><span>Original concept</span><h3>Five-page website</h3><ul><li>Home</li><li>Transfers</li><li>Experiences</li><li>About</li><li>Contact</li></ul></div>
          <div className="uv-evolution-arrow"><span>Strategy</span><Arrow/><span>Structure</span><Arrow/><span>Build</span></div>
          <div className="uv-evolution-card result"><span>What it became</span><h3>A future-ready platform</h3><ul><li>Digital storefront</li><li>Transport catalogue</li><li>Cultural experience catalogue</li><li>Individual product pages</li><li>Structured enquiry journey</li><li>Authentic photographic storytelling</li><li>Local SEO architecture</li><li>Cloud image delivery</li><li>Future booking/payment foundation</li></ul></div>
        </div>
      </section>

      <section className="section uv-journey-section">
        <div className="section-heading"><div><p className="eyebrow blue">Customer journey</p><h2>Make the next step obvious.</h2></div><p>The platform was designed around a practical enquiry-led sales process instead of introducing a heavy reservation engine before the business needs one.</p></div>
        <div className="uv-journey">
          {["Discover Unravel","Understand its purpose","Explore transport or cultural experiences","Open a specific service","Submit a structured enquiry","Unravel reviews availability","Quote, payment and confirmation"].map((step, i) => <div key={step}><span>{String(i + 1).padStart(2,"0")}</span><p>{step}</p>{i < 6 && <Arrow/>}</div>)}
        </div>
      </section>

      <section className="section uv-built">
        <div className="section-heading"><div><p className="eyebrow brown">What Tokani built</p><h2>A structured commercial platform, not just five attractive screens.</h2></div><p>Core pages, individual products and transport services were organised so customers can move from interest to a relevant enquiry without having to decode the business first.</p></div>
        <div className="uv-built-grid">
          <article><span>01</span><h3>Core storefront</h3><p>Home, Transfers, Tours &amp; Experiences, About / Our Story, and Contact &amp; Booking.</p></article>
          <article><span>02</span><h3>Productised experiences</h3><p>Savumoli Vulagi Adventure; Silana Village, Dolphins &amp; Moon Reef; and Tokani Cross Road Saravanua.</p></article>
          <article><span>03</span><h3>Transport catalogue</h3><p>Airport transfers, private charters, corporate transport, family/group travel, vehicle guidance and larger transport by arrangement.</p></article>
        </div>
      </section>

      <section className="section uv-enquiry">
        <div className="uv-enquiry-copy"><p className="eyebrow blue">Conversion design</p><h2>Ask for the information the team will actually need.</h2><p>The enquiry journey captures the operational details required to assess a transfer or experience before quoting. Service and experience pages can pre-select the relevant enquiry type so customers do not have to start again.</p><p className="uv-status-note"><strong>Current status:</strong> the interface is designed and present in the current build. Final production email/enquiry routing is still part of launch completion and is not being represented here as live automation.</p></div>
        <div className="uv-field-cloud">{["Name","Email","Phone / WhatsApp","Service / experience","Travel date","Time","One-way / return / multi-stop","Adults","Children","Bags","Flight information","Accommodation","Additional stops","Pickup","Destination","Special requirements"].map(field => <span key={field}>{field}</span>)}</div>
      </section>

      <section className="section uv-photography">
        <div className="section-heading"><div><p className="eyebrow brown">Photography & storytelling</p><h2>Show the human experience, not generic travel stock.</h2></div><p>Tokani built the visual story around authentic Unravel photography and a Cloudinary workflow that serves responsive, compressed imagery across devices.</p></div>
        <div className="uv-photo-grid">
          <figure className="uv-photo-tall"><img loading="lazy" src={villageWelcome} alt="Community interaction during an Unravel Viti experience" width={1600} height={1000}/><figcaption>Community interaction</figcaption></figure>
          <figure><img loading="lazy" src={mangroves} alt="Guided landscape and mangrove experience with Unravel Viti" width={1600} height={1000}/><figcaption>Landscape + local knowledge</figcaption></figure>
          <figure><img loading="lazy" src={sharedTable} alt="Food and hospitality during an Unravel Viti community experience" width={1600} height={1000}/><figcaption>Food + hospitality</figcaption></figure>
          <figure className="uv-photo-wide"><img loading="lazy" src={transport} alt="Unravel Viti transport vehicles and team" width={1600} height={1000}/><figcaption>Transport capability</figcaption></figure>
        </div>
        <div className="uv-photo-copy"><p>The homepage&apos;s editorial “Unravel the Experience” sequence is designed to communicate welcome, learning, food, culture and human connection rather than functioning as a conventional gallery.</p><p>Cloudinary handles automatic sizing, format optimisation, compression and responsive cropping, while non-critical imagery is lazy-loaded.</p></div>
      </section>

      <section className="section uv-seo">
        <div className="section-heading"><div><p className="eyebrow blue">SEO & discoverability</p><h2>Make each service and experience understandable to search engines too.</h2></div><p>The SEO layer is built around real Fiji service and location intent, not keyword stuffing.</p></div>
        <div className="uv-seo-grid">
          <article><h3>Page-level foundations</h3><p>Unique titles and descriptions, canonical URLs, sitemap generation, robots control and OpenGraph/social sharing metadata.</p></article>
          <article><h3>Structured data</h3><p>Organization, TravelAgency, Service, TouristTrip and Breadcrumb schema help describe Unravel&apos;s business, transport services and individual experiences.</p></article>
          <article><h3>Local themes</h3><p>Fiji cultural tours, Suva, Nausori, Nadi, Naitasiri, Tailevu, Viti Levu, airport transfers, private transport and village experiences.</p></article>
          <article><h3>Controlled launch</h3><p>The Vercel preview is deliberately noindex until a production custom domain is connected. That is launch control, not an SEO omission.</p></article>
        </div>
      </section>

      <section className="uv-behind section">
        <div className="section-heading"><div><p className="eyebrow blue">Behind the build</p><h2>Technology translated into business value.</h2></div><p>The stack matters because of what it allows Unravel to do next—not because the customer needs a list of developer logos.</p></div>
        <div className="uv-tech-grid">{buildValue.map(([title, copy], i) => <article key={title}><span>{String(i + 1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className="uv-iteration-note"><strong>99 tracked GitHub commits/iterations</strong> sit between the initial repository work and the current inspected version. That does not mean 99 hours or 99 major features; it is evidence of substantial refinement, testing, content work, optimisation and iteration.</p>
      </section>

      <section className="section uv-role">
        <div className="section-heading"><div><p className="eyebrow brown">Tokani&apos;s role</p><h2>Much more than coding.</h2></div><p>Tokani Technologies provided the initial digital development as a strategic contribution toward establishing Unravel Viti&apos;s digital foundation.</p></div>
        <div className="uv-role-tags">{roles.map(role => <span key={role}>{role}</span>)}</div>
      </section>

      <section className="section uv-outcomes">
        <div className="section-heading"><div><p className="eyebrow blue">Project outcomes</p><h2>What can be stated today, without inventing performance numbers.</h2></div><p>Unravel has not been publicly live long enough for credible traffic, booking or conversion claims. These outcomes are therefore factual delivery outcomes from the current platform.</p></div>
        <div className="uv-outcome-grid">{outcomes.map((outcome, i) => <article key={outcome}><span>{String(i + 1).padStart(2,"0")}</span><p>{outcome}</p></article>)}</div>
      </section>

      <section className="section uv-status">
        <div className="section-heading"><div><p className="eyebrow brown">Launch completion</p><h2>Transparent about what is still being connected.</h2></div><p>These are not framed as failures or missing ambition. They are the controlled next steps between a strong digital foundation and a fully public operational launch.</p></div>
        <div className="uv-status-grid">{launchCompletion.map(([title, copy]) => <article key={title}><span>In progress</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="section uv-roadmap">
        <div className="section-heading"><div><p className="eyebrow blue">Future roadmap</p><h2>Scale the technology when the business is ready.</h2></div><p>The architecture leaves room for later capabilities without forcing Unravel to absorb the cost or complexity before transaction volume justifies them.</p></div>
        <div className="uv-roadmap-flow">{["Secure payment links","Booking / reservation system","Automated confirmations","CRM","Corporate account workflows","More cultural-tourism products","More destination content","Analytics-led optimisation","Broader Unravel service ecosystem"].map((item, i) => <div key={item}><span>{String(i + 1).padStart(2,"0")}</span><p>{item}</p></div>)}</div>
      </section>

      <section className="uv-final-cta">
        <p className="eyebrow blue">The Tokani principle</p>
        <h2>Your business may not need the same website as Unravel Viti.<br/><em>It needs the same level of thought.</em></h2>
        <p>Start with the business. Build the right digital foundation. Add more technology when it has a real job to do.</p>
        <a className="button" href="/#contact">Build your digital foundation with Tokani <Arrow/></a>
      </section>
    </article>

    <footer><img src="/brand/tokani-logo-transparent.webp" alt="Tokani Technologies" width={220} height={56}/><p>Your friend in technology.</p><div><a href="/#services">Services</a><a href="/#work">Our work</a><a href="/#story">Our story</a><a href="/#contact">Contact</a></div><small>© {new Date().getFullYear()} Tokani Technologies Pte Limited. Built in Fiji.</small></footer>
  </main>;
}
