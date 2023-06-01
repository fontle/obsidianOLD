- - - 
1. Definitions and Assumptions
2. State Hypotheses
3. State Test Statistic
4. State Rejection Region 
5. Interpret Results
- - - 
 
## Question 1

> "The figures of a large corporation show that its salespeople deliver an average number of sales contacts per week of 15.The vice president in charge of sales claims that the salespeople are averaging more than 15 sales contacts per week. As a check on his claim, n = 36 salespeople are selected at random, and the number of contacts made by each is recorded for a single randomly selected week. The mean and variance of the 36 measurements were 17 and 9, respectively. Does the evidence contradict the vice presidents claim? Use a test with level $\alpha$ = 0.05."

Since the observed value is greater than the claim, our null hypothesis will be the vice presidents original claim that the average $\mu = 15$, whilst are test hypothesis is that $\mu > 15$ since are sample average $\bar{x} = 17$: 
$$
\begin{align}
H_{0} :&\ \mu=15  \\
H_{1} :&\ \mu<15  \\
\end{align}
$$
The population variance is unknown however since the sample size is sufficiently large we can assume that the sample variance $s^{2}= 9$ is an accurate estimator. We can use central limit theorem to assume that the sample mean is distributed around the actual population value $\mu$. Hence, 
$$\bar{X} \sim N\left( \mu,\frac{s^2}{n} \right) $$
*capitalised value used to represent unrealised value of the sample mean*

Standardising this we get: 
$$z_{n}=\frac{\bar{X}-\mu}{\sqrt{ \frac{s^{2}}{n}}} \sim N(0,1)$$
Substituting the values given into $z_{n}$ we can create a test statistic to see whether the new observed average is great enough to reject the original claim that the average is 15: 
$$z_{n}=\frac{17-15}{\frac{3}{\sqrt{ 36 }}} = 4$$
The rejection region is $z_{0.05} = 1.645$, since $4 > 1.645$ there is enough evidence to reject the null hypothesis and update the claim that the average sales contacts per week is 17 (to a 5% significance). 

## Question 2 

> "A machine in a factory must be repaired if it produces more than 10% defectives among the large lot of items that it produces in a day. A random sample of 100 items from the day's production contains 15 defectives, and the supervisor says that the machine must be repaired. Does the sample evidence support his decision? Use a test with level 0.01"

- Let $X$ be a random Bernoulli variable that indicates whether an item is defective or not, with 1 = defective and 0 = not defective. 
- Let $\pi$ be the proportion of items that the machine outputs that are defective (defect rate).
- Let $n$ be the sample size, 100. 
- Let $P$ be the sample proportion observed by the machine. 

Since the machine can produce an item that is defective or not, we can represent the probability of discrete amounts of item defects within the sample using a binomial distribution: 
$$X \sim \text{Bin}(100, \pi)$$
Our null hypothesis is the that defect rate is 10%. In line with the factory standard. Whilst our test hypothesis is that the machine's defect rate is higher, as the observed defect rate is 15% (15/100): 
$$
\begin{align}
H_{0}:& \ \pi = 0.1 \\
H_{1}:& \ \pi > 0.1
\end{align}
$$
Since the sample size is sufficiently large, a normal approximation can be used for the sampling distribution of $P$: 
$$
P \sim N\left( \pi, \frac{\pi(1-\pi)}{n} \right)
$$
Standardising this distribution for the test statistic: 
$$
\frac{P - \pi}{\sqrt{ \frac{\pi(1-\pi)}{n} }}
$$
Substituting the values into the test statistic we get the value: 
$$
\frac{0.15 - 0.1}{\sqrt{ \frac{0.1(0.9)}{100} }} = 1.667
$$
The rejection region given by a 1% significance is $z_{0.01} = 2.326$. Since the test statistic is less than the rejection region $1.667<2.326$, there is insufficient evidence to reject the null hypothesis, and thus can assume the machine does not need repair. 

## Question 3 
> A psychological study was conducted to compare the reaction times of men and women to a stimulus. Independent random samples of 50 men and 50 women were employed in the experiment. The results are shown in the tab 
> 
> | Men              | Women            |
> | ---------------- | ---------------- |
> | n1 = 50          | n2 = 50          |
> | x1 = 3:6 seconds | x2 = 3:8 seconds |
> | $s_{1}^2$ = 0:18        | $s_{2}^2$ = 0:14        |
> 
> where x1 and x2 are the sample means and s1 and s2 the sample variances. Do the data present sufficient evidence to suggest a difference between true mean reaction times for men and women? Use $\alpha$ = 0:05.

- Let $X$ represent a random variable for the reaction time of men 
- Let $Y$ represent a random variable for the reaction time of women 
- Let $\mu_{x}$ be the average reaction time of men 
- Let $\mu_{y}$ be the average reaction time of woman 
- Let $n_{x}$ be the sample size of men
- Let $n_{y}$ be the sample size of women
- Let $s_{x}$ be the sample standard deviation of men
- Let $s_{y}$ be the sample standard deviation of women


Are null hypothesis is that both men and women have equivalent average reaction times, whilst the test hypothesis is that men and women have different average reaction times: 
$$
\begin{align}
H_{0} :& \ \mu_{x} = \mu_{y} \\
H_{1} :& \ \mu_{x} \ne \mu_{y}
\end{align}
$$
Since both samples are sufficiently large, the sample standard deviations can be used as valid estimators for the true population standard deviation. Furthermore, the sample distribution for the average reaction time can be approximated using a normal distribution. To compare the difference between reaction times the test statistic uses 



