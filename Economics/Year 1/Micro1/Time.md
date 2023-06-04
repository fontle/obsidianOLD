#micro1 #lecture-notes

## The Interest Rate
---

The *interest rate*, $r$ is the rate at which the consumer can borrow or lend money.

When saving amount $b$ over *one* period of time, then he will finish with the amount of $(1+r)b$ .

### Present Value
---

The *future value* of some amount $m$ received today is $(1+r)m$.

For a given period, the *present value* of $m$ received in the next period is given by:

$$\large
\frac{m}{1+r}
$$

### Present Value with More than Two Periods of time
---

Supposing a consumer gets there income over $t$ periods of time. The present value of this income, $m$ is given by:

$$ \large

m_{1} + \frac{m_{2}}{1+r} + \ldots + \frac{m_{t-1}}{(1+r)^{t-2}} + \frac{m_{t}}{(1+r)^{t-1}}
$$

## The Budget Constraint
---

If a consumer cannot borrow or lend money then the consumer will have full income in each period: $c_{1}=m_{1}$ and $c_{2}=m_{2}$.

Suppose the consumer decides to save money in the *first* period (he does not consume all of their income in the first periods and saves amount $m_{1}-c_{1}$, the value of income in the second period is:

$$ \large
c_{2}=m_{2}+(1+r)(m_{1}-c_{1})
$$

If the consumer instead decides to borrow amount $c_{1}-m_{1}$, in the second period he can consume:

$$ \large
c_{2}=m_{2}-(1+r)(c_{1}-m_{1})
$$

**NOTE**: THIS IS THE SAME EQUATION regardless of borrowing or saving.

Therefore we can derive the [[Intertemporal Budget Constraint]] which expresses the budget constraint in terms of future value:

$$ \large 
c_{1} + \frac{c_{2}}{1+r}=m_{1}+\frac{m_{2}}{1+r}
$$

We can re-arrange the terms to get in linear form:

$$ \large
c_{2} = (1+r)m_{1}+m_{2}-(1+r)c_{1}
$$

The **slope of the Budget line** is $-(1+r)$ as represents the *opportunity cost* of consuming today comparative to tomorrow.

### Intertemporal Indifference Curves
---

Like before the optimal choice is given by the point where the slope of the budget constraint is equal to marginal rate of substitution between the two time periods.

The utility function is defined by the income between now and the future time periods instead of between two goods:

$$\large 
u(q_{1},q_{2})= q_{1}^{a} +\alpha q_{2}^b \implies u(c_{1},c_{2}) = c_{1}^a+\frac{1}{1+\rho}c_{2}^b 
$$

Where $\rho$ is the [[Discount Rate]].

#### Changing the Interest Rate
---

Changing the interest rate will change the slope of the [[Budget Line]] which will *pivot* around the point $(m_{1},m_{2})$ if the interest rates increase, the budget line will become more steep, therefore lenders will remain lenders and some borrowers will become lenders.

#### Impatience
---

Impatience refers to how much a person favours consumption today over tomorrow. This can be shown as the different between the MRS along the [[Equal Consumption Line]] and -1. Therefore the [[Discount Rate|degree of impatience]], $\rho$ is given by:

$$\rho = -1-\text{MRS}$$

**NOTE** the MRS will be the same along the equal consumption line if we have [[Homothetic Preferences]].

## Discounted Utility Model
---

In the discounted utility model we refer to the present period and future period being separated by a discount. Thus assuming that future utility is less than the current utility by the value of the utility discount. This can be extended for more the two periods as follows:

$$\large
U(c_{1},\ldots, c_{T)}=u(c_{1})+ \frac{u(c_{2})}{1+\rho}+\ldots+\frac{u(c_{T})}{(1+\rho)^{T-1}}
$$

### [[Dynamic Consistency]]
---

Refers to the fact that if an individual choose a stream of consumption that is *optimal today*, the this stream will also be optimal *tomorrow* or over any period of time.

As a result, the consumer will never change its plans formulated at the beginning of the time period.

However, consumers can behave in a *dynamically inconsistent* manner, the most common form of such inconsistency is **procrastination**. This can occur when individuals overvalue the present compared to the discounted utility model. Where $\gamma > 1$

$$\large
U(c_{1},c_{2}, c_{3})=\gamma \cdot u(c_{1})+ \frac{u(c_{2})}{1+\rho}+\frac{u(c_{3})}{(1+\rho)^{T-1}}
$$

This model is called a *hyperbolic discounting model*. At the first period, the utility is much greater than the periods afterwards.
