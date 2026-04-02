import { useState } from "react";
import "./App.css";

const NAV = ["About", "Research", "Projects & Affiliations", "CV"];

export default function App() {
  const [active, setActive] = useState("About");
  return (
    <div className="site">
      <nav className="nav">
        <span className="nav-name">Kennedy Adriko</span>
        <ul className="nav-links">
          {NAV.map((n) => (
            <li key={n}>
              <button
                className={`nav-btn${active === n ? " active" : ""}`}
                onClick={() => setActive(n)}
              >
                {n}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {active === "About"    && <About    go={setActive} />}
      {active === "Research" && <Research />}
      {active === "Projects & Affiliations" && <Projects />}
      {active === "CV"       && <CV />}
    </div>
  );
}

/* ── About ─────────────────────────────────────────────────────────────── */
function About({ go }) {
  return (
    <>
      <section className="hero">
        <p className="hero-label">PhD Researcher · SDL AI & ML for Remote Sensing · JSC</p>
        <h1>AI for<br /><em>Earth Observation</em></h1>
        <p className="hero-bio">
          I am a PhD researcher in the SDL for AI and Machine Learning for Remote Sensing at the
          Jülich Supercomputing Centre (JSC), Forschungszentrum Jülich — led by Prof. Dr. Gabriele
          Cavallaro — and enrolled at the University of Iceland (Háskóli Íslands) through the
          joint SDL for Remote Sensing between JSC and the Icelandic HPC community.
        </p>
        <p className="hero-bio">
          My research focuses on efficient and scalable AI compression and data fusion for Earth
          observation with HPC. I hold an Erasmus Mundus MSc in Digital Earth (Geodata Science)
          from the University of Salzburg and Université Bretagne Sud, and a BSc in Land Surveying
          and Geomatics from Makerere University, Uganda.
        </p>
        <div className="hero-links">
          <a className="pill primary" href="https://github.com/adken" target="_blank" rel="noreferrer">GitHub</a>
          <a className="pill" href="https://www.linkedin.com/in/kennedy-adriko-345170124" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="pill" href="https://orcid.org/0009-0002-4374-300X" target="_blank" rel="noreferrer">ORCID</a>
          <a className="pill" href="mailto:k.adriko@fz-juelich.de">Email</a>
        </div>
      </section>

      <div>
        <div className="section-header"><h2>Research interests</h2></div>
        <div className="card-grid">
          {[
            { icon: "🗜", title: "AI compression", desc: "Efficient and scalable lossy neural compression of geospatial data for storage, transmission, and analytics at planetary scale." },
            { icon: "🛰", title: "Geospatial foundation models", desc: "Benchmarking and evaluation of large pretrained EO models (GeoFMs) for downstream agricultural and environmental tasks." },
            { icon: "⚡", title: "HPC for EO", desc: "Scalable geospatial ML pipelines on high-performance computing infrastructure for processing multi-year Sentinel archives." },
          ].map((c) => (
            <div className="proj-card" key={c.title}>
              <div className="proj-icon">{c.icon}</div>
              <div className="proj-name">{c.title}</div>
              <div className="proj-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="affil-row">
        {[
          "SDL AI & ML for Remote Sensing · JSC · Helmholtz",
          "Háskóli Íslands · University of Iceland",
          "FAST-EO · ESA Phi-Lab",
          "Embed2Scale · Horizon Europe",
          "Erasmus Mundus · Copernicus Master in Digital Earth",
        ].map((a) => (
          <div className="affil-item" key={a}>
            <span className="affil-dot" />
            {a}
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Research ───────────────────────────────────────────────────────────── */
function Research() {
  const pubs = [
    {
      venue: "IEEE JSTARS · 2025",
      badge: "Published · Paper 1",
      badgeDraft: false,
      title: "From MODIS to Sentinel-2: A Regional Comparative Analysis of Crop-Yield Prediction With Matched Spatiotemporal Data",
      authors: "Kennedy Adriko et al. · Forschungszentrum Jülich / JSC",
      abstract: "An empirical comparison of MODIS and Sentinel-2 data sources for regional crop yield prediction, using matched spatiotemporal data to isolate the effect of spatial resolution and sensor characteristics on model performance. Establishes the empirical foundation for subsequent GeoFM benchmarking work.",
      tags: ["MODIS", "Sentinel-2", "Crop yield", "Time series", "Remote sensing"],
      link: "https://doi.org/10.1109/JSTARS.2025.3624046",
      linkLabel: "DOI: 10.1109/JSTARS.2025.3624046",
    },
    {
      venue: "IEEE GRSL · 2025",
      badge: "Published · Co-author",
      badgeDraft: false,
      title: "Lossy Neural Compression for Geospatial Analytics: A Review",
      authors: "et al. including Kennedy Adriko · Forschungszentrum Jülich / JSC",
      abstract: "A comprehensive review of lossy neural compression techniques applied to geospatial and Earth observation data, covering methods, benchmarks, and implications for large-scale geospatial analytics pipelines.",
      tags: ["Neural compression", "Geospatial analytics", "EO data", "Review", "Embed2Scale"],
      link: "https://doi.org/10.1109/mgrs.2025.3546527",
      linkLabel: "DOI: 10.1109/mgrs.2025.3546527",
    },
    {
      venue: "",
      badge: "In preparation",
      badgeDraft: true,
      title: "From Pretraining to Prediction: Benchmarking Earth Observation Foundation Models for Corn Yield Estimation",
      authors: "Kennedy Adriko et al. · Forschungszentrum Jülich / JSC",
      abstract: "A systematic benchmark evaluating five state-of-the-art geospatial foundation models — PRESTO, Clay 1.5, Prithvi-EO-2.0, TerraMind, and AlphaEarth — for county-level corn yield prediction using Sentinel-2 time series embeddings. Includes analysis of S2-only and S2+Daymet late fusion regimes across multiple regression heads and spatial cross-validation strategies.",
      tags: ["GeoFMs", "TerraMind", "PRESTO", "Clay", "AlphaEarth", "Benchmark", "Corn yield"],
      link: null,
    },
    {
      venue: "Master's thesis · 2023",
      badge: null,
      title: "Multi-modal Fusion of Optical and Radar Satellite Time Series for Deforestation Mapping",
      authors: "Kennedy Adriko · University of Salzburg / Université Bretagne Sud",
      abstract: "Self-supervised learning using VICReg with dual TempCNN encoders for multimodal fusion of Sentinel-1 SAR and Sentinel-2 optical time series, applied to deforestation detection in the Amazon basin.",
      tags: ["VICReg", "SSL", "TempCNN", "Deforestation", "Amazon", "Sentinel-1"],
      link: "https://github.com/adken/ssl-deforestation",
      linkLabel: "GitHub",
    },
  ];

  return (
    <>
      <div className="section-header">
        <h2>Research &amp; publications</h2>
        <p>Peer-reviewed work and papers in preparation</p>
      </div>
      <div className="pub-list">
        {pubs.map((p) => (
          <div className="pub-card" key={p.title}>
            <div className="pub-meta">
              <span>{p.venue}</span>
              {p.badge && <span className={`pub-badge${p.badgeDraft ? " draft" : ""}`}>{p.badge}</span>}
            </div>
            <div className="pub-title">{p.title}</div>
            <div className="pub-authors">{p.authors}</div>
            <div className="pub-abstract">{p.abstract}</div>
            <div className="pub-tags">
              {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            {p.link && (
              <a className="pill" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel}</a>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Projects ───────────────────────────────────────────────────────────── */
function Projects() {
  const projects = [
    { icon: "📡", name: "FAST-EO · TerraMind", desc: "ESA Phi-Lab funded project developing geospatial foundation models for Earth observation. JSC is a consortium member. TerraMind is evaluated in the GeoFM benchmark.", link: "https://www.fast-eo.eu/", linkLabel: "fast-eo.eu ↗" },
    { icon: "🌐", name: "Embed2Scale", desc: "EU Horizon Europe project using AI embeddings for EO data federation and neural compression. Directly related to the lossy compression review and crop yield work.", link: "https://embed2scale.eu/", linkLabel: "embed2scale.eu ↗" },
    { icon: "🏔", name: "SDL AI & ML for Remote Sensing · JSC", desc: "The Simulation and Data Lab at Jülich Supercomputing Centre conducting interdisciplinary research at the intersection of remote sensing and large-scale AI with supercomputing and quantum computing.", link: "https://www.fz-juelich.de/en/jsc/about-us/structure/simulation-and-data-labs/sdl-ai-ml-remote-sensing", linkLabel: "fz-juelich.de ↗" },
    { icon: "🧊", name: "SimDataLab RS · IHPC Iceland", desc: "The Icelandic HPC community's Simulation and Data Lab for Remote Sensing, jointly operated with JSC. The institutional home of the PhD enrollment at the University of Iceland.", link: "https://www.ihpc.is/labs/simulation-and-data-lab-remote-sensing", linkLabel: "ihpc.is ↗" },
  ];

  return (
    <>
      <div className="section-header">
        <h2>Projects &amp; Affiliations</h2>
        <p>Research projects and institutional affiliations</p>
      </div>
      <div className="card-grid two-col">
        {projects.map((p) => (
          <div className="proj-card" key={p.name}>
            <div className="proj-icon">{p.icon}</div>
            <div className="proj-name">{p.name}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-foot">
              {p.link
                ? <a href={p.link} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{p.linkLabel}</a>
                : p.linkLabel}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

/* ── CV ─────────────────────────────────────────────────────────────────── */
function CV() {
  return (
    <>
      <div className="section-header">
        <h2>Curriculum vitae</h2>
        <p>Academic and research history</p>
      </div>
      <div className="cv-grid">
        <div className="cv-block">
          <h3>Education</h3>
          <div className="cv-entry">
            <div className="cv-year">2024 – 2027</div>
            <div>
              <div className="cv-title">PhD, Electrical and Computer Engineering</div>
              <div className="cv-sub">Háskóli Íslands · University of Iceland, Reykjavík</div>
              <div className="cv-sub" style={{ marginTop: "0.3rem" }}>Degree-conferring institution. Research conducted at Forschungszentrum Jülich / JSC within the joint SDL for Remote Sensing.</div>
            </div>
          </div>
          <div className="cv-entry">
            <div className="cv-year">2023 – present</div>
            <div>
              <div className="cv-title">PhD Researcher — SDL AI and ML for Remote Sensing</div>
              <div className="cv-sub">Jülich Supercomputing Centre (JSC) · Forschungszentrum Jülich · Helmholtz Association</div>
              <div className="cv-sub" style={{ marginTop: "0.3rem" }}>Supervised by Prof. Dr. Gabriele Cavallaro. Research on efficient and scalable AI compression and data fusion for EO with HPC.</div>
            </div>
          </div>
          <div className="cv-entry">
            <div className="cv-year">2021 – 2023</div>
            <div>
              <div className="cv-title">MSc Copernicus Master in Digital Earth</div>
              <div className="cv-sub">University of Salzburg &amp; Université Bretagne Sud · Erasmus Mundus</div>
              <div className="cv-sub" style={{ marginTop: "0.3rem" }}>Specialisation in Geodata Science. Thesis on multimodal SSL for deforestation mapping.</div>
            </div>
          </div>
          <div className="cv-entry">
            <div className="cv-year">2012 – 2017</div>
            <div>
              <div className="cv-title">BSc Land Surveying and Geomatics</div>
              <div className="cv-sub">Makerere University, Kampala, Uganda</div>
            </div>
          </div>
        </div>

        <div className="cv-block">
          <h3>Research &amp; affiliations</h3>
          {[
            { year: "2023 – present", title: "Doctoral Researcher", sub: "SDL AI and ML for Remote Sensing · JSC · Forschungszentrum Jülich · Helmholtz" },
            { year: "2023 – present", title: "FAST-EO Project", sub: "ESA Phi-Lab · Geospatial foundation model research (TerraMind)" },
            { year: "2023 – present", title: "Embed2Scale Project", sub: "EU Horizon Europe · AI embeddings and neural compression for EO data federation" },
          ].map((e) => (
            <div className="cv-entry" key={e.title}>
              <div className="cv-year">{e.year}</div>
              <div><div className="cv-title">{e.title}</div><div className="cv-sub">{e.sub}</div></div>
            </div>
          ))}
        </div>

        <div className="cv-block">
          <h3>Publications</h3>
          <div className="cv-entry">
            <div className="cv-year">2025</div>
            <div>
              <div className="cv-title">From MODIS to Sentinel-2: A Regional Comparative Analysis of Crop-Yield Prediction With Matched Spatiotemporal Data</div>
              <div className="cv-sub">IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (JSTARS)</div>
              <div className="cv-sub" style={{ marginTop: "0.2rem" }}>DOI: 10.1109/JSTARS.2025.3624046</div>
            </div>
          </div>
          <div className="cv-entry">
            <div className="cv-year">2025</div>
            <div>
              <div className="cv-title">Lossy Neural Compression for Geospatial Analytics: A Review</div>
              <div className="cv-sub">IEEE Geoscience and Remote Sensing Magazine · Co-author</div>
              <div className="cv-sub" style={{ marginTop: "0.2rem" }}>DOI: 10.1109/mgrs.2025.3546527</div>
            </div>
          </div>
        </div>

        <div className="cv-block">
          <h3>Technical skills</h3>
          <div style={{ paddingTop: "1rem" }}>
            <div className="cv-skills">
              {["Python", "PyTorch", "Google Earth Engine", "Sentinel-1 / SAR", "Sentinel-2", "JUWELS / HPC", "scikit-learn", "NumPy", "Self-supervised learning", "Foundation models", "Neural compression", "Data fusion", "Time series analysis", "LaTeX", "Git"].map((s) => (
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


