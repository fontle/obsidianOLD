# Solow Model

## Time Path of Labour Supply and Technology

- it is assumed that labour force exhibits same dynamics as population growth (exponential). $$L(t) = L_{0}\cdot e^{nt}$$

- labour force is completely inelastic at any given time, full employment insured. 

- Similarly, technology is assumed to advance exponentially at rate $g$. For evidence see hockey-stick diagram. $$A(t)=A_{0}\cdot e^{gt}$$

## Production Function
(the technological possibilities over time) 
- - -
- Reject constant returns to scale, assume *constant returns to scale*.
	- Diminishing marginal returns
	- Fixed labour supply at a given point in time limits marginal benefit of additional capital. 

- For simplicity, we will assume a be a Cobb-Douglas function $$Y(t)=F(K(t),L(t)) \Longrightarrow K(t)^{\alpha}\times [A(t)L(t)]^{1-\alpha}$$

## Intensive Form
- - -
to more easily incorporate the time path of capital, use intensive form where functions expressed as per effective unit of labour:

due to constant returns to scale, we can express output in per effective labour form as such:  

$$\frac{Y}{AL} = F\left( \frac{K(t)}{AL}, \frac{A(t)L(t)}{AL} = 1\right)$$

This *intensive* for shall be expressed henceforth using lower case letters: 

$$y(t) =F(k(t),1)$$

## Time Path of Capital
- - - 
### Accumulation from Investment
- since economy is simple (assumption blah blah blah), output is income $Y$
- portion of output saved or consumed in economy according to proportion $s$.  
- the value of new capital value is given by $sy(t)$.    
- substitute production function for output in capital identity (investment = savings):

$$\frac{dk}{dt}= sy(t) = sk(t)^{\alpha}$$

### Depreciation
 - Since the population increases at rate $n$, the same capital is spread across more people, thus in intensive form has to depreciate by the same rate.
 - the raw depreciation of capital caused by the obselecense effect of knowledge defined by the technological progress function as rate $g$. 
 - the raw depreciation of capital caused by effect of time and wear and tear is given by the rate $\delta$. 
- thus the total time path of capital is given by: 

$\cfrac{dk}{dt}=$
$\underbrace{sk(t)^{\alpha}}_{\begin{gather}\text{new savings} \\ \text{investment} \end{gather}}-$
$\ \overbrace{nk(t)}^{\begin{gather}\text{labour}\\ \text{spread} \end{gather}}$
$\ -$ $\ \underbrace{\delta k(t)-gk(t)}_{\text{raw depreciation}}$

$\cfrac{dk}{dt} =\  sk(t)^{\alpha} - [n+g+\delta]k(t)$  

## Steady State
- - -
using time path of capital, we can solve for the converging state of capital: 

$$
\begin{align}
	&\text{Given }\frac{dk}{dt}= 0:\\ \\ 
	0 &= sk^*(t)^{\alpha} - [n+g+\delta]k^*(t) \\ \\
	[n+g+\delta]k^*(t) &= sk^*(t)^{\alpha}   \\ \\ 
	k^*(t)^{1-\alpha}&= \frac{s}{n+g+\delta}   \\ \\ 
\end{align}
$$

Since, $k^*(t)$ is a constant its independent of time and can be expressed as $k^*$

$$
\begin{align}
	k^*&= \left[\frac{s}{n+g+\delta}\right]^\cfrac{1}{1-\alpha}  \\ \\ 
\end{align}
$$

Since, the output function in intensive form is given by $y=F(k,AL=1)$ and thus only dependent on capital. We can substitute $k^*$ into production function to get steady state output:
$$
y^{*} = \left[\frac{s}{n+g+\delta}\right]^{\frac{1}{1-\alpha}^\alpha} 
$$
# Mankiw Augmentation 

> The capital share of income $\alpha$ implied by the coefficient in the constrained regression for the intermediate sample is 0.59 (with a standard error of 0.02). Thus, the data strongly contradict the prediction that $\alpha$ is $1 \over 3$."

This observation backed by the empirical data by Mankir and Romer suggest there is a unobserved variable that contributed to the capital share of income that is not accounted for by the original Solow model. Their augmentation of the model is derived from the observation that a large part of capital accumulation is *human*. By improving human capital through education, training, healthcare, etc. the productivity of labour increases in a similar fashion to physical accumulation. 

Mankiw implemented human capital by decomposing the capital accumulation function into its respective parts, human capital and physical capital. The production function becomes,

$$
Y(t) = K(t)^{\alpha}\cdot H(t)^{\beta} \cdot \left[A(t)\cdot L(t)\right]^{1-\alpha-\beta}
$$

Where $H(t)$ is the stock of human capital. 





