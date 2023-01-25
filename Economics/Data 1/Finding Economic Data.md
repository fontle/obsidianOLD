#lecture-notes #data1

## Defining Data Sets
---

![[Pasted image 20230124142152.png]]
[[Cross-Section]] is a type of data collected by observing many subjects at **one time**, or over a smaller period of time than the period of the study.

[[Time Series]] is a series of data points indexed in time order. For example temperature over time, or RGDP growth quarterly.

[[Panel Data]] is the same measurement made on the **same respondent(s)** over time.

[[Repeated Cross-Sectional Data]] occurs when different cross section are taken from the *same population* but not necassarily the same respondents over time. Unlike [[Panel Data]] which ensures the same subjects (people, things, etc.) are followed over time.

[[Longitudinal Data]] is multidimensional data involving measurements over time.

[[Experimental Data]] is produced by a controlled method of investigating a causal relationship among variables. Researchers create a **control group** and a **treatment group** by randomisation of the independent variable which is under the control of the researcher.

For example, an experiment on the impact of income relief on poverty could be done by giving a treatment group income relief to a treatment group and nothing to the control group.

Other examples include the RAND study (1974) which estimated the price elasticity of demand for medical care: It involved 5000 individuals followed for 3 to 5 years which were randomly assigned different insurance schemes to different people to see how much medical care costed impacted consumption.

[[Experiments]] Is where the researcher introduces conditions that directly affect the variation of the independent variable. Subjects in the experiment are randomly assigned to a treatment group or a control group.

[[Natural Experiments]] where the researcer measures the impact of an exogenous shock (out of control of the researcher) which assigned subjects to a control and treatment group in a random or pseudorandom way.

[[Observational Data]] is when the independent variable is no under the control of the researcher.

For example:

- **Surveys** with data collected from a sample of respondents.
- **Institutional data** such as GDP, inflation, and financial indices
- **Adminastrative Data** such as mortality data and insurance claims
- **Data mining** from the metadate of digital transations.

[[Counterfactual]] is an observation made that estimates what would that would be true under different circumstances. In essence "If X had not occurred, Y would not have occurred".

Example of Counterfactual: *"Given Hillary Clinton did not win the presidential election, and given that she did not visit Michigan 3 days prior, what can we say about the probability of her winning the election had she visited Michigan?"*

## The Evaluation Problem
---
- It often occurs that researchers estimate causal effects with non-experimental data where all variables are controlled. In natural experiments it is sometimes difficult to identify causal effects.

- If omitted variables that influence whether an individual is in the treatment group (the group that is measured) then it is most likely that the sample is biased (selection bias).

- In natural experiments, not all variables are controlled and therefore unforeseen trends caused by omitted varrables occur.

> [!example] Moral Hazard in Health Insurance
> Potential Issues:
> - Selection Bias: Individuals who decide to purchase insurance might have greater dental care needs, however we cannot observe that before providing insurance
> - Trends: The average consumption of dental care might change over time. Such as increasing with an awareness campaign.
> Dataset Design:
> - Cross-section: *Two groups of individuals with and without insurance at a moment in time*
> 	- Repeated Cross-Section: *Two different groups of individuals with and without insurance sampled from the population at the beginning and end of a time period.*
> - Time Series: *One group of individuals observed before and after purchasing insurance*
> - Panel Data: *Two groups of individuals (with and without insurance) observed over time for consumption

> [!note]
$y^{0}$ represents the control group.
$y^{1}$ represents the treatment group.
$y_{t}$ represents observations now.
$y_{t-1}$ represents observations at the initial observation.

### Cross Section Example
---

![[Pasted image 20230125153739.png]]
In this example of insurance, we can see that if we take a *cross-section* of the observed groups at time $t$ then and compare those with insurance and without insurance we could make an estimate that the treatment group (those with insurance),$y^1_t$, has a greater consumption than the control group, $y^0_t$. Implying a positive average treatment effect (ATE).

However, if we include the whole time series to before the insurance was inplace at $t-1$ we can see that there is in fact no difference between expenditure after insurance for BOTH of the groups and therefore the initial observation would be biased.

This is an example of *sampling bias* because a characteristic of the treatment group resulted in diverging dental care consumption before insurance (the independent variable) was introduced.

### Time Series Example
---

![[Pasted image 20230125155125.png]]
In this other example of insurance, a different type of bias. Both the control group and treatment group started with the same dental care consumption before insurance, and therefore sampling bias is not a factor.

However, we can see that after insurance, not only does the consumption for the treatment group increase, *but also* for the control group.

In this case, there is is a trend caused by *omitted variables* that are **independent** of the insurance policy that have increase consumption in the whole population.

### Panel Data Example
---

![[Pasted image 20230125160010.png]]
In this example, we can see that before insurance was bought, both the treatment group and the control group had different consumption patterns thus indicating inherent [[Sampling Bias]].

After changing the independent variable (once the treatment group bought insurance), **BOTH** the groups consumption increased.

The difference in measurement before and after changing the independent variable is called the [[Trend]]. This highlights changes in omitted variables that are independent to the I.V.

We create a [[Counterfactual]] by assuming that the treatment group would follow the same trend as the control group.

Consequently, our true average treatment effect (ATE) is the difference between the counterfactual estimator of the treatment group had they not gotten insurance and the observed result.

## Differences in Differences Method
---

We can generalise the examples seen above with the differences in differences method.

### Requirements of Diff in Diff Method
---
- A dataset with at least **two dimensions** such as panel data of repeated cross-sections with representative samples.
- The groups must consist of the same subjects (people, products, index, etc.) followed over time (before and after IV change). **OR** the same subjects observed in different regions.
- We also need a control and treatment group: one that is not affected by the independent variable and one that is.

Difference in difference method can measure the effect of the policy adjusted for sampling biases and trends:

### Finding the Average Treatment Effect of a Policy Variable
---
- To adjust for **sampling bias**:

$$\large
ATE = \overbrace{(y^{1}_{t} - y^{0}_{t})}^{\text{Effect + Selection Bias}} - \underbrace{(y_{t-1}^{1}-y^{0}_{t-1})}_{\text{Selection Bias}}
$$

- To adjust for **trends**:

$$\large
ATE = \overbrace{(y^{1}_{t}-y^{1}_{t-1})}^{\text{Effect + Trend}}-\underbrace{(y^{0}_{t}-y^{0}_{t-1})}_{Trend}
$$

### Assumptions of Differences in Differences Method
---

[[Internal Validity]] shows that there is a causal effect from changing the policy variable on the population.
#### Requirements of Internal Validity
- No measurement errors: the outcome needs to be accurate and consistent.
- The groups for repeated cross-sections need to have as near identical characteristics as possible before and after observation.
- The treatment group **should not anticipate the change in policy**
- No other policy should affect the outcome of the treatment group during observation
- The control and treatment groups need to follow **parallel trends** to allow for accurate counterfactuals.
[[External Validity]] shows that the estimation can be applied to other subjects of similar characteristics. For example a change in government policy in different countries.
#### Requirements of External Validity
- Samples need to be representative of the population of interest.
- Policies, behaviours and environment need to be similar.

#### When Assumptions Are Wrong
![[Pasted image 20230125183336.png]]
In a natural experiment looking at the impact of an NHS policy that was implemented in England but not Wales we can use the former as the treatment group and the latter as the control group.

However, here we can see that the trends **are not parallel** and therefore creating counterfactuals would not provide an accurate basis for calculating the average treatment effect of the change in NHS policy.
