# Question 1
> "A detergent is tested for its ability to remove stains of a certain type. An inspector judges that the detergent is successful on 63 out of 100 independent trials. Let $\pi$ denote the probability that the detergent removes the stain. Clearly denoting your variables, calculate the approximate 95% confidence interval for $\pi$."

## Definitions and Assumptions
Given that the sample is represented by a given Bernoulli random variable $X$, a binary value that represents whether the detergent removed the stain. We can represent the sample as $X_{i} = X_{1}, X_{2}, \dots, X_{100}$. 

Therefore the sample proportion, $P$ is given by: 
$$
P=\frac{1}{n}\sum_{i=1}^n{X_{i}}
$$
## Sampling Distribution
Since $n$ is sufficiently large, we can assume via central limit theorem that *approximately* the sample proportion $P$ is distributed normally: 
$$
P \sim N\left( \pi, \sqrt{ \frac{\pi(1-\pi)}{n} } \right) 
$$
Around the mean which is the population proportion $\pi$ and the variation of the population proportion. 

We can standardise this distribution approximation using:
$$
z=\frac{P-\pi}{\sqrt{ \frac{\pi(1-\pi)}{n} }}
$$
## Calculation
Using this sampling distribution we can construct the confidence interval such that the probability of the population proportion not being in the critical region is 95%: 
$$
\text{Pr}\left[ -z_{0.5\alpha} < \frac{P-\pi}{\sqrt{ \frac{P(1-P)}{n} }} \leq z_{0.5\alpha} \right] \approx 0.95
$$
Rearranging the inequality we get the following confidence interval for $\pi$: 
$$
\left[ P-z_{0.5\alpha}\sqrt{ \frac{P(1-P)}{n} } ,\quad P+z_{0.5\alpha}\sqrt{ \frac{P(1-P)}{n} }\right] 
$$
Substituting the values: 
$$
\left[ 0.63-1.960\sqrt{ \frac{0.63\times 0.37}{100} },\quad0.63+1.960\sqrt{ \frac{0.63\times 0.37}{100} }  \right] 
$$
For a final result of: 
$$
\left[ 0.535, 0.725 \right] 
$$
# Question 2

> "A regulatory agency is interested in estimating the average amount of milk contained in a 1 pint carton sold in a campus shop. They pick 10 cartons at random and measure the volume of milk that each contains. The sample mean volume is 0.98 pint and the associated sample standard deviation is 0.21 pint. Clearly denoting your variables and stating your assumptions, and a 90% confidence interval for the population mean volume. What do you conclude from this?"

## Definitions and Assumptions 
From the question, we are given the sample mean, size, and standard deviation. Furthermore we are not given the sampling distribution of the sample mean. 

Henceforth: sample mean = $\bar{x}$, sampling standard deviation = $s$, population mean = $\mu$, and population variance = $\sigma^2$.

Even though the sample is random, the sample size is not large enough (it is less than 30) to use central limit theorem to assume that the sample parameter is distributed normally. 

## Sampling Distribution

Instead of a normal distribution we use a less forgiving distribution: the student-t distribution that has heavier tales which include which are controlled by a coefficient called degrees of freedom, for a conservative approach, we will use $n-1$ degrees of freedom for our sampling distribution: 
$$\bar{X} \sim t_{10-1}\left( \mu, \frac{s^2}{n} \right) $$
Standardising to a distribution of mean 0, and standard deviation of 1: 
$$
\frac{\bar{X}-\mu}{\sqrt{\frac{s^{2}}{n}}} \sim t_{9}(0,1)
$$
## Computation

Using the sampling distribution, the confidence interval can be constructed: 
$$
\text{Pr} \left[ -t_{9_{0.5\alpha}} < \frac{\bar{X} - \mu}{\sqrt{ \frac{s^{2}}{n} }} \leq t_{9_{0.5\alpha}}\right] \approx 0.9
$$
Rearranging with respect to $\mu$:
$$\text{Pr}\left[\bar{X}-t_{9_{0.5\alpha}}\sqrt{\frac{s^{2}}{n}}<\mu \leq \bar{X}+t_{9_{0.5\alpha}}\sqrt{\frac{s^{2}}{n}}\right]\approx 0.9$$
Substituting in the values: 
$$\text{Pr}\left[\bar{X}-t_{9_{0.5\alpha}}\sqrt{\frac{0.21^{2}}{10}}<\mu \leq \bar{X}+t_{9_{0.5\alpha}}\sqrt{\frac{0.21^{2}}{10}}\right]\approx 0.9$$
$$\text{Pr}\left[0.98-1.8331\sqrt{\frac{0.21^{2}}{10}}<\mu \leq 0.98+1.8331\sqrt{\frac{0.21^{2}}{10}}\right]\approx 0.9$$
$$
\text{Pr}\left[ 0.858 < \mu \leq 1.102 \right] \approx 0.9 
$$
## Question 3 

$\sigma = 2.6$ 
Error maximum $=0.7yr$
$\alpha=0.05$

Assuming the sample mean is distributed normally around the expected value (the population mean $\mu$) with a known standard deviation 
$$\bar{X} \sim N\left( \mu, \frac{\sigma^2}{n} \right)$$
$$Pr$$