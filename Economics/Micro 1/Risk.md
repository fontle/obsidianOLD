#micro1 #lecture-notes

## Lotteries
---
Lotteries describe risky alternatives, and specifies each possible outcome of the risky alternatives it represents, and the probability that this outcome will occur. 

### Expected Value
---

$$\large
EV = \pi_{1}c_{1}+\pi_{2}c_2
$$

This represents how much on average a lottery will return, if you remember from probability, that this is the same as the expcected value of a random variable: 

$$\large
EV = E[X] = \sum\limits_{i=1}^{n}x \cdot P(X_{i}=x)
$$

### Expected Utility
---

$$\large
u(c_{1}, c_{2}, \pi_{1}, \pi_{2}) = \pi_{1} v(c_{1})+ \pi_{2}v(c_{2}) 
$$

This represents the average utility the lottery will return, where $v(c)$ is the risk function. 

### Compound Lottery
---

$$\large 
L_{3} = [L_{1}, L_{2};\alpha, 1- \alpha]
$$

Compound Lottery are ones where the outcomes are other lotteries, In this case, probability $L_3$ returns lottery $L_{1}$ is $\alpha$ whilst the probability that $L_{3}$ returns lottery $L_{2}$ is $1-\alpha$. 

## States of Nature
---

Whether an outcome is realised depends on the *state of nature* that will occur. Therefore lotteries can also be used to represent the *contingent consumption plans* of an individual, ie. what will be consumed in each state of nature

## Insurance as a Lottery 
--- 
A consumer can by $K$ units of insurance at unit price of $\gamma$. If the bad outcome occurs with a probability of $\pi$ he gets: 
$$c_{1}= \omega_{1}+K-\gamma K$$
If the **good** outcome occurs with probaility $1-\pi$ then 
$$c_{2}= \omega_{2}-\gamma K$$ 
### Budget line
$$c_{2} = \omega_{2} - \frac{\gamma}{1-\gamma}(c_{1}-\omega)$$
### Fair insurance
Occurs where the insurance company charges the price where $\gamma=\pi$ as the price ber unit is equal to the probability of the bad event happening. 



