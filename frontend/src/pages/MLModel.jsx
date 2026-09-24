import { BrainCircuit, GitBranch, Settings2, Database, Split, TreePine, FileDown } from "lucide-react"

function MLModel() {
 return <div className="info-page reinvented-page model-v2">
  <header className="v2-hero model-hero"><div><span className="v2-kicker">02 / CLASSIFICATION ENGINE</span><h1>Random Forest Classifier</h1><p>The classification model used to identify patterns associated with fraudulent insurance claims.</p></div><div className="model-badge"><TreePine size={34}/><b>100</b><span>DECISION TREES</span></div></header>

  <section className="model-layout">
   <div className="model-story v2-panel"><span className="panel-index">01</span><h2>Why Random Forest?</h2><p>Random Forest was selected as the main classification algorithm for the insurance fraud detection project. It combines multiple decision trees to produce a final classification.</p><p>Using multiple trees allows the model to consider different patterns in the processed insurance claim data instead of relying on a single decision tree.</p><div className="model-facts"><div><span>CLASS WEIGHT</span><b>Balanced</b></div><div><span>RANDOM STATE</span><b>42</b></div></div></div>
   <div className="forest-map"><div className="map-title"><span>MODEL ARCHITECTURE</span><b>How the model works</b></div><div className="forest-node input"><Database size={20}/><b>Processed Features</b><small>Cleaned + transformed claim data</small></div><div className="branch-line"></div><div className="tree-cluster">{[1,2,3,4,5].map(i=><div className="mini-tree" key={i}><TreePine size={22}/><span>TREE {i}</span></div>)}<div className="tree-more">+ 95<br/><small>MORE TREES</small></div></div><div className="branch-line"></div><div className="forest-node output"><GitBranch size={20}/><b>Combined Decision</b><small>Final classification</small></div></div>
  </section>

  <section className="config-console"><div className="console-heading"><span>02 / CONFIGURATION</span><h2>Training parameters</h2><p>Parameters used during model training</p></div><div className="config-list"><div><span>Algorithm</span><b>Random Forest Classifier</b></div><div><span>Number of Estimators</span><b>100</b></div><div><span>Class Weight</span><b>Balanced</b></div><div><span>Random State</span><b>42</b></div><div><span>Training Data</span><b>80%</b></div><div><span>Testing Data</span><b>20%</b></div></div></section>

  <section className="model-route"><div className="v2-section-title"><span>03 / MODEL ROUTE</span><h2>Dataset to prediction</h2></div><div className="route-line">{[["01",Database,"Processed Dataset","11,859 records × 44 columns"],["02",Split,"Train / Test Split","80% training · 20% testing"],["03",BrainCircuit,"Random Forest","100 decision trees"],["04",GitBranch,"Prediction","Fraud classification"]].map(([n,Icon,title,desc])=><div className="route-stop" key={n}><i>{n}</i><Icon size={20}/><div><b>{title}</b><span>{desc}</span></div></div>)}</div></section>
  <div className="v2-note"><FileDown size={18}/><p>The trained Random Forest model was saved as <strong> random_forest_model.pkl</strong> for use by the prediction system.</p></div>
 </div>
}
export default MLModel
