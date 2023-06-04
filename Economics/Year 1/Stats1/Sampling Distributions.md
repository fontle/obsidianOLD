#lecture-notes #stats1 

## Introduction to Sampling and Statistical Inference

- A **population** is the total aggregate of subjects/things/people that can be observed. 

- A **parameter** is a value for a measurement of the population.

- A **sample** is a subset of the population. 

- An **estimator** is an estimate of the parameter acquired by using the same method of collecting the parameter on the sample. 
- - - 
When creating a sample, in the process of **sampling**. We must be fair and representative by not over or under representing members of the population that have certain characteristics. 

If certain members of over or under represented in a sample, this is known as **sampling bias**, not to be confused with **sampling error** which is the difference between the estimated value acquired from a sample, and the actual value of the parameter of the population. 
- - -
The easiest way to achieve a fair representation of the population is a methodology called **simple random sampling**. 

Where by every possible sample of $n$ objects is equally likely to be chosen from a population of $N$ objects. The result of this methodology is a **random sample**, we notate random samples as $i.i.d$, for being independent and identically distributed
- - -
There are also other sampling methods: 
1. Systematic sampling
2. Stratified sampling
3. Cluster sampling

##### A note on notation
Upper case letters are used to denote random variables themselves, unrealised variables, meanwhile lower case letters are used to denote the actual values / realisation of the random variables. 

## Sampling Mean and Population Variance

For a sample of $X_{1}, X_{2}, X_{3}, \dots, X_{n}$ then the sample mean and sample variance are given by: 

> [!info] Sample Mean 
> $$
> \bar{X} = \frac{\sum_{i=1}^{n}X_{i}}{n} 
> $$

Another way to calculate the **sample mean** is by finding the expected value:

> [!info] Expected Value
> $$
> E[\bar{X}] = \sum_{i=1}^{n}{P(X_{i})\times X_{i}}
> $$
> For binomially distributed variables: 
> $$
> E[\bar{X}] = n \times \pi 
>$$
>Whereby $n$ is the size and $\pi$ is the probability of success

>[!info] Sample Variance
>
>$$S^{2} = \frac{\sum^{n}_{i=1}{(X_{i} - \bar{X})^{2}}}{n-1}$$
> In terms of expected values, variance can be expressed as, 
> $$E[\bar{X}^2]-E^2[\bar{X}]$$
> Or for binomially distributed random variables:
> $$\text{var}(\bar{X}) = n\pi(1-\pi)$$  
 
### Properties of Expected Values and Variances

You can find proofs online but there is 4 principles to remember when re-arranging expected values and variances: 
- - -
$$
E[X+Y] = E[X]+E[Y]
$$
*Where both $X$ and $Y$ are random variables*.
- - - 
$$
E[aX+c] = aE[X] + c
$$
Where $a$ and $c$ is a constant.
- - - 
$$
\text{var}[aX+c] = a^{2}\text{var}[X]
$$
Where $a$ and $c$ is a constant. 
- - - 
$$\text{var}[X+Y] = \text{var}[X]+\text{var}[Y] $$
*Where both $X$ and $Y$ are random variables*. - - - For **non-linear** transformations of expected values such as $E\left[\bar{X}^2\right]$ we have to substitute the value directly into the expected value formula and simplify: 
$$E\left[\bar{X^2}\right]=\sum_{i=1}^n{\bar{X}^{2}\times P(\bar{X})}$$
## Expected Values and Variance in infinite population 

> [!Quote] Sample Mean and Variance in Infinite Population
> If $X_{1}, X_{2}, \dots, X_{n}$ is a random sample from an **infinite population** (without replacement) with mean $\mu$ and a variance of $\sigma^2$ then: 
>
> $$
> E(\bar{X}) = \mu \qquad var(\bar{X}) = \frac{\sigma^2}{n} $$ 
> 
>"The expected value of the sample mean is equal to the population mean" 
> 
>"The variance of the sample mean is equal to the population variance divided by the size of the sample." 

Because of this, when $n$ becomes larger, we expect a higher change of obtaining values of $\bar{x}$ closer to $\mu$.

This principal is the result of the **Law of Large Numbers**, proved by **Chebyshev's Inequality**: 

> [!quote] Chebyshev's Inequality
> If $Y$ is a random variable with finite $E(Y^{2)}$ for any positive constant $c$:
> $$
> Pr(|Y| \ge c) \le \frac{E[Y^2]}{c^2}
> $$

## Distribution of Sample Mean in Infinite Populations

> [!quote] Central Limit Theorem 
> For a random sample of $n$ size from an **infinite population** with the mean $\mu$ and the variance $\sigma^{2}$ the converging (asymptotic) distribution of 
> $$
> \frac{\bar{X} - \mu}{\frac{\sigma}{\sqrt{ n }}}
>$$
> as $n \to \infty$ (as the size of the sample approaches infinity) is the standard normal distribution $(Z)$.

Since the sample mean converges on the population parameter as the size of the sample increases, **the accuracy of the estimator increases with sample size**.

To avoid ambiguity, we use $n \ge 30$ as the minimum sample size to assume that the distribution of the sample mean is the standard normal distribution. 

## Distribution of Sample Mean in Normal Finite Populations

For smaller samples, $n < 30$ we cannot use the central limit theorem to approximate the sample distribution of any population, as the sample can vary greater than the standard normal distribution portrays.

>[!info] Method for Normal population with known variance
>If the population variance/standard deviation is known ($\sigma$ is given) and the population is **normally distributed** then **for any $n$**, the distribution of 
>$$Z = \frac{\bar{X} - \mu}{\frac{\sigma}{\sqrt{ n }}}$$
>is the standard normal distribution $Z$.

If the variance of the population is unknown, we will use a difference distribution function: **student-t distribution** which has heavier tails that encapsulate more extreme values that are still possible in smaller samples of populations with unkown variance, this distribution takes a coefficient called **degrees of freedom** which dictate how heavy the tails are. 

For smaller sample sizes, we use less degrees of freedom, and therefore the tails are wider and probabilities for extreme values increase: 

>[!info] Method for Normal Population with unknown variance
>If the population variance/standard deviation is unknown ($\sigma$ is not given) and the population is **normally distributed** then **for any $n$**, the distribution of 
>$$Z = \frac{\bar{X} - \mu}{\frac{\sigma}{\sqrt{ n }}}$$
>is the student-t distribution with $n-1$.




