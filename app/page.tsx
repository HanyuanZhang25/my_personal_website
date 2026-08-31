const publications = [
  { title: 'CT Open: An Open-Access, Uncontaminated, Live Platform for the Open Challenge of Clinical Trial Outcome Prediction', before: 'Jianyou Wang*, Youze Zheng*, Longtian Bao*, ', name: 'Hanyuan Zhang*', after: ', Qirui Zheng, Yuhan Chen, Yang Zhang, Matthew Feng, Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Mohan Paturi, Umber Dube, Leon Bergen.', venue: 'Conference on Language Modeling (COLM), 2026.', url: 'https://arxiv.org/abs/2604.16742' },
  { title: 'DeepImagine: Clinical Trial Outcome Prediction via Stepwise Local Counterfactual Imaginations', before: 'Youze Zheng*, Jianyou Wang*, Yuhan Chen*, Matthew Feng, Longtian Bao, ', name: 'Hanyuan Zhang', after: ', Maxim Khan, Aditya K. Sehgal, Christopher D. Rosin, Umber Dube, Mohan Paturi.', venue: 'arXiv 2026.', url: 'https://arxiv.org/abs/2604.23054' },
  { title: 'Advancing Pharmacological Treatment Effectiveness with Dual-Encoder Model in Plain Scan Liver Tumors', before: 'Wen Sheng, Jun Zhao, Zhengdi Sima, Jiajun Liu, Han Lu, ', name: 'Hanyuan Zhang', after: ', Zhong Zheng, Zhihong Zhang, and Daoping Zhu.', venue: 'Indian Journal of Pharmaceutical Sciences, 2024.', url: 'https://www.ijpsonline.com/abstract/advancing-pharmacological-treatment-effectiveness-with-dualencoder-model-in-plain-scan-liver-tumors-5548.html' },
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
      <div className="publication-list">{publications.map((paper) => <article className="publication" key={paper.title}><h3>{paper.title}</h3><p>{paper.before}<strong>{paper.name}</strong>{paper.after}</p><p><em>{paper.venue}</em> <a href={paper.url} target="_blank" rel="noreferrer">Paper</a></p></article>)}</div>
    </section>

    <section><h2>Skills</h2><p>Python, PyTorch, Clinical NLP, Computer Vision, SQL, Neo4j, Spark, Java, C#, MATLAB, Pandas, NumPy, Scikit-Learn, OpenCV</p></section>
    <footer>Last updated August 2026.</footer>
  </main>;
}
