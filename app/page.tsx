const publications = [
  { title: 'CT Open: An Open-Access, Uncontaminated, Live Platform for the Open Challenge of Clinical Trial Outcome Prediction', authors: 'Jianyou Wang*, Youze Zheng*, Longtian Bao*, Hanyuan Zhang*, Qirui Zheng, Yuhan Chen, Yang Zhang, Matthew Feng, Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Mohan Paturi, Umber Dube, Leon Bergen.', venue: 'Conference on Language Modeling (COLM), 2026.' },
  { title: 'DeepImagine: Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations', authors: 'Youze Zheng*, Jianyou Wang*, Yuhan Chen*, Matthew Feng*, Longtian Bao, Hanyuan Zhang, Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Umber Dube, Mohan Paturi.', venue: 'Under review at NeurIPS, 2026.' },
  { title: 'Advancing Pharmacological Treatment Effectiveness with Dual-Encoder Model in Plain Scan Liver Tumors', authors: 'Wen Sheng, Jun Zhao, Zhengdi Sima, Jiajun Liu, Han Lu, Hanyuan Zhang, Zhong Zheng, Zhihong Zhang, and Daoping Zhu.', venue: 'Indian Journal of Pharmaceutical Sciences, 2024.' },
];

export default function Home() {
  return <main className="page">
    <header className="profile">
      <div><h1>Hanyuan Zhang</h1>
        <p className="role">M.S. Student in Machine Learning and Data Science</p>
        <p>University of California San Diego</p>
        <p className="contact"><a href="mailto:haz146@ucsd.edu">haz146@ucsd.edu</a><span>/</span><a href="https://www.linkedin.com/in/hanyuan-zhang-09a224380/" target="_blank" rel="noreferrer">LinkedIn</a><span>/</span><a href="https://github.com/HanyuanZhang25" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
      <img className="portrait" src="/hanyuan-zhang.jpg" alt="Portrait of Hanyuan Zhang" />
    </header>

    <section className="intro">
      <p>I am an M.S. student in Machine Learning and Data Science at UC San Diego, advised by <a href="https://cseweb.ucsd.edu/~paturi/" target="_blank" rel="noreferrer">Prof. Ramamohan Paturi</a>. My research focuses on medical LLM agents and clinical natural language processing.</p>
      <p>I am interested in transforming unstructured clinical data into structured representations that support reliable reasoning and decision-making. I also work on clinical trial outcome prediction and medical image analysis.</p>
      <p>I received my B.Sc. in Information and Computing Science from Xi'an Jiaotong-Liverpool University in 2025.</p>
    </section>

    <section>
      <h2>Publications</h2>
      <p className="note">* indicates equal contribution.</p>
      <div className="publication-list">{publications.map((paper) => <article className="publication" key={paper.title}><h3>{paper.title}</h3><p>{paper.authors}</p><p><em>{paper.venue}</em></p></article>)}</div>
    </section>

    <section>
      <h2>Research Experiences</h2>
      <div className="experience">
        <article><h3>Research Assistant, UC San Diego <span>Mar. 2026 – Present</span></h3><p><strong>Scientific Knowledge Graphs: Research Map.</strong> Built a large-scale LLM pipeline that parses 311K+ PMC review articles covering 40M+ primary papers into approximately 1.9M question-level research narratives, linked into a multi-million-edge, LLM-verified knowledge graph of biomedical research.</p><p>Using this knowledge graph to trace evolutionary paths in medical research and help LLMs predict future biomedical research development.</p></article>
        <article><h3>Research Assistant, UC San Diego <span>Oct. 2025 – Jun. 2026</span></h3><p><strong>CT Open: Live Clinical Trial Outcome Prediction Benchmark.</strong> Co-developed a live, contamination-resistant benchmark for predicting clinical trial outcomes before public release. Built data curation, decontamination, verification, and leaderboard pipelines.</p></article>
        <article><h3>Research Assistant, UC San Diego <span>Oct. 2025 – Jun. 2026</span></h3><p><strong>DeepImagine: Counterfactual Clinical Trial Outcome Prediction.</strong> Contributed to a stepwise counterfactual method and evaluated its clinical trial prediction performance against RAG baselines.</p></article>
        <article><h3>Research Assistant, XJTLU <span>Oct. 2024 – May 2025</span></h3><p><strong>Ultrasound Image Recognition of Rare Thyroid Cancers.</strong> Led a hospital-collaborative study using ViT and MobileViT models for rare thyroid-cancer classification.</p></article>
        <article><h3>Research Assistant, XJTLU <span>Feb. 2023 – Dec. 2023</span></h3><p><strong>Non-Contrast Liver Tumor Segmentation.</strong> Implemented a wavelet-guided dual-encoder 3D Transformer for liver-tumor segmentation in PyTorch/MONAI.</p></article>
      </div>
    </section>

    <section><h2>Education</h2><div className="education"><p><strong>University of California San Diego</strong><span>2025 – 2027 (expected)</span><br />M.S. in Machine Learning and Data Science</p><p><strong>Xi'an Jiaotong-Liverpool University</strong><span>2021 – 2025</span><br />B.Sc. in Information and Computing Science</p></div></section>
    <section><h2>Skills</h2><p>Python, PyTorch, Clinical NLP, Computer Vision, SQL, Neo4j, Spark, Java, C#, MATLAB, Pandas, NumPy, Scikit-Learn, OpenCV</p></section>
    <footer>Last updated August 2026.</footer>
  </main>;
}
