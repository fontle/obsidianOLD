#lecture-notes #data1 
## The Evaluation Problem
---

## Defining Data Sets
---
![[Pasted image 20230124142152.png]]
[[Cross-Section]] is a type of data collected by observing many subjects at **one time**, or over a smaller period of time than the period of the study. 

[[Time Series]] is a series of data points indexed in time order. For example temperature over time, or RGDP growth quarterly. 

[[Panel Data]] is the same measurement made on the **same respondent(s)** over time. 

[[Repeated Cross-Sectional Data]]  occurs when different cross section are taken from the *same population* but not necassarily the same respondents over time. Unlike [[Panel Data]] which ensures the same subjects (people, things, etc.) are followed over time.

[[Longitudinal Data]] is multidimensional data involving measurments over time. 

[[Experimental Data]] is produced by a controlled method of investigating a causal relationship among variables. Researchers create a **control group** and a **treatment group** by randomisation of the independent vairable which is under the control of the researcher. 

For example, an experiment on the impact of income relief on poverty could be done by giving a treatment group income relief to a treatment group and nothing to the control group. 

Other examples include the RAND study (1974) which estimated the price elasticity of demand for medical care: It involved 5000 indviduals followed for 3 to 5 years which were randomly assigned different insurance schemes to different people to see how much medical care costed impacted consumption. 

[[Experiments]] Is where the researcher introduces conditions that directly affect the variation of the independent vairable. Subjects in the experiment are randomly assigned to a treatment group or a control group. 

[[Natural Experiments]] where the researcer measures the impact of an exogenous shock (out of control of the researcher) which assigned subjects to a control and treatment group in a random or pseudorandom way.  

[[Observational Data]] is when the independent variable is no under the control of the researcher. 

For example: 
- **Surveys** with data collected from a sample of respondents. 
- **Institutional data** such as GDP, inflation, and financial indicies
- **Adminastrative Data** such as mortality data and insurance claims
- **Data mining** from the metadate of digital transations. 
[[Counterfactual]]
## Diff in Diff method 
---
$y^{0}$ represents the control group. 
$y^{1}$ represents the treatment group. 
$y_{t}$ represents observations now. 
$y_{t-1}$ represents observations at the initial observation. 