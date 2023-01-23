#stats1 #lecture-notes

> Involves estimating population *parameters* using sample *estimators*

$$\bar{x} \xrightarrow{estimates} \sigma^2 $$

$$S^2 \xrightarrow{estimates} \sigma^2 $$

### Case 1: Sample Mean as Estimator of Population Mean
---

For a sample such that $X_{i}\sim i.i.d.N(\mu, \sigma^2)$ where the sample is **random** from a **normal population** then we know that:

$$\large 
Z = \frac{\bar{x}-\mu }{\frac{\sigma}{\sqrt{ n }}} \sim N(0,1)
$$ 

### Case 2: Sample Proportion as an Estimator of Population Proportion
---

Suppose we would like to know the proportion of families in York who own, rather than rent, their homes. We can use the *population proportion* as the parameter of interest, which we will denote hereforth as $\pi$

With a random sample of size $n$ each observation provides an independent Bernoulli R.V. -> $X_{i} \sim \text{Binomial}(n,\pi)$ the cummulation of all observations results in a Binomially distributed random variable: $\text{Binomial}(n, \pi)$

The sample proportion $P$ is given by $\sum^n_{i=1}\frac{X_{i}}{n}$ which is also the sample mean of the $n$ independent Bernoulli R.Vs.

For a sufficiently large value of $n$, we can use the central limit theorem to derive that the estimate proportion $P$ is:

$$\large
P \sim N(\pi, \frac{\pi(1-\pi)}{n})
$$

## Estimation of Population Mean
---

If sample is $i.i.d.N(\mu, \sigma^2)$ (idependentally and identically normally distributed) then for any value of $n$:

$$\large
Z = \frac{\bar{x}-\mu}{\frac{\sigma}{\sqrt{ n }}}
$$

If sample is $i.i.d.N(\mu, \sigma^2)$ and $\sigma$ is unknown then for any positive value of $n$:

$$\large
t = \frac{\bar{X} - \mu}{S / \sqrt{ n }}\sim t_{n-1}
$$

And sample variance is given by

$$\large
S^2 = \frac{\sum^n_{i=1}(X_{i}-\bar{X}^2)}{n-1}
$$

### For Large Samples
---

If sample is large $n \ge 30$, $\sigma$ is **known**, and sample is $i.i.d$ then:

$$\large
Z = \frac{\bar{X}-\mu}{\sigma / \sqrt{ n }} \sim N(0,1)
$$

If sample is large, sample is $i.i.d$ and $\sigma$ is **unknown** then:

$$\large
Z \approx \frac{\bar{X}-\mu}{S / \sqrt{ n }} \sim N(0,1)
$$

Where $S$ is the sample standard deviation:

$$\large
S = \sqrt{\frac{\sum^n_{i=1}(X_{i}-\bar{X})^2}{n-1}}
$$

## [[Unbiased Estimator]]
---

 A statistic $\hat{\theta}$ is an unbiased estimator of the parameter $\theta$ of a given distribution if $E(\hat{\theta}) = \theta$ for all possible values of \theta.

- [[Unbiasedness]] means that if the smpaling procedure is repeated many times, then on average the value obtained for the estimator is equal to the population parameter.
- All other things equal, unbiasedness is a desirable property in an estimator.
---

The [[Bias of an Estimator]] $\hat{\theta}$ of $\theta$ based on a random sample of size $n$ is defined as:

$$\large
\text{Bias}_{n} = E(\hat{\theta}) - \theta
$$

[[Relative Efficiency]]: Given two unbiased estimators $\hat{\theta}_{1}$ and $\hat{\theta}_{2}$ we can say that $\hat{\theta}_{1}$ is relatively more efficient than $\hat{\theta}_{2}$ if:

$$ \large
\text{var}\hat{\theta}_{1} < \text{var}\hat{\theta}_{2}
$$

The [[Minimum Variance Unbiased Estimator]] is the unbiased estimator for the parameter $\theta$ that has the smallest variance.

The [[Mean Squared Errors]] is used to compare biased estimators:
$$
\text{MSE}(\hat{\theta}) = E[(\hat{\theta}-\theta)^{2]}= \text{var}(\hat{\theta}) + [\text{Bias}_n(\hat{\theta})]^2
$$
