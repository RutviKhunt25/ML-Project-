import { Database, Search, AlertTriangle, Type, Layers3, BarChart3, ArrowRight } from "lucide-react"

function DataProcessing() {
  return (
    <div className="info-page reinvented-page processing-v2">
      <header className="v2-hero">
        <div><span className="v2-kicker">01 / DATA PIPELINE</span><h1>Data Cleaning & Preprocessing</h1><p>The steps used to transform the original insurance claims dataset into a clean numerical dataset suitable for machine learning.</p></div>
        <div className="hero-stamp"><Database size={22}/><span>READY FOR<br/><b>MODEL DEVELOPMENT</b></span></div>
      </header>

      <section className="processing-board">
        <aside className="stat-rail">
          <div><span>RAW RECORDS</span><b>12,002</b></div><div><span>RAW COLUMNS</span><b>29</b></div><div><span>MISSING VALUES</span><b>0</b></div><div><span>PROCESSED COLUMNS</span><b>44</b></div>
        </aside>
        <div className="processing-main">
          <div className="v2-panel intro-panel"><span className="panel-index">A</span><div><h2>Processing Overview</h2><p>The original insurance claims dataset contained 12,002 records and 29 columns. Before applying machine learning, the data was inspected, cleaned and transformed into a numerical representation.</p><p>After preprocessing, the dataset contained 11,859 records and 44 columns, with no missing values and no remaining non-numeric columns.</p></div></div>
          <div className="v2-section-title"><span>PROCESS MAP</span><h2>Five preparation stages</h2></div>
          <div className="process-timeline">
            {[
              ["01","INSPECTION","Data Inspection","The dataset was examined to understand its structure, columns, data types and the information available for model development.",Search],
              ["02","CLEANING","Missing & Invalid Data Handling","Missing and invalid data were handled during preprocessing. Invalid claim_date values were identified and removed.",AlertTriangle],
              ["03","TRANSFORMATION","Data Type Correction","Columns were converted and corrected into appropriate data types so they could be used consistently during model development.",Type],
              ["04","ENCODING","Categorical Encoding","Categorical variables were transformed into numerical representations required by the machine learning model.",Layers3],
              ["05","OUTLIERS","Outlier Handling","Outliers were examined and handled as part of the preprocessing process to prepare the dataset for model training.",BarChart3]
            ].map(([n,label,title,desc,Icon])=><article className="timeline-card" key={n}><span className="timeline-no">{n}</span><div className="timeline-icon"><Icon size={19}/></div><div><small>{label}</small><h3>{title}</h3><p>{desc}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="before-after">
        <div className="v2-section-title"><span>DATA JOURNEY</span><h2>From raw input to model-ready data</h2></div>
        <div className="journey-row">
          <div className="journey-card raw"><span>STAGE 01</span><h3>Raw Dataset</h3><strong>12,002 × 29</strong><p>Original insurance claims data</p></div><ArrowRight className="journey-arrow"/>
          <div className="journey-card"><span>STAGE 02</span><h3>Data Cleaning</h3><strong>Invalid values handled</strong><p>Missing, invalid and inconsistent data handled.</p></div><ArrowRight className="journey-arrow"/>
          <div className="journey-card"><span>STAGE 03</span><h3>Feature Preparation</h3><strong>Numerical representation</strong><p>Data types corrected and categorical features encoded.</p></div><ArrowRight className="journey-arrow"/>
          <div className="journey-card final"><span>STAGE 04</span><h3>Processed Dataset</h3><strong>11,859 × 44</strong><p>Clean numerical representation</p></div>
        </div>
      </section>

      <section className="result-band"><div><span>FINAL DATASET STATE</span><h2>Processing complete</h2></div><div className="result-values"><b>11,859<small>RECORDS</small></b><b>44<small>COLUMNS</small></b><b>0<small>MISSING VALUES</small></b><b>0<small>NON-NUMERIC</small></b></div></section>
      <div className="v2-note"><Database size={18}/><p>The final processed dataset provides a clean numerical representation of the insurance claim information and was used as the input data for machine learning model development.</p></div>
    </div>
  )
}
export default DataProcessing
