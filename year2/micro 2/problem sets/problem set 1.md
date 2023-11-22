# Problem Set 1

## Problem 1.1
Anna's preferences are given by, 

$$u(x_{1},x_{2})=x_{1}^{\frac{1}{3}}x_{2}^{\frac{2}{3}} \qquad m = 12,\ p_{1}= 2, \ p_{2}= 1$$
- - -
**a.** The budget constraint is the combination of all the bundles such that Anna spends her entire endowment, 

$$ 2 x_1 + 1 x_2 = 12$$
Rearrange for intercept and slope: 
$$x_{2}=12-2x_1$$
Therefore, the slope of the budget constraint is $-2$
- - -
**b.** The marginal utilities are given by the partial derivatives of utility with respect to each good:

$$\frac{\partial U}{\partial x_{1}} = \frac{1}{3} \left(\frac{x_{2}}{x_{1}}\right)^{\frac{2}{3}}\qquad\qquad 

\frac{\partial U}{\partial x_{2}} = \frac{2}{3}\left(\frac{x_{1}}{x_{2}}\right)^{\frac{1}{3}}$$

The marginal rate of substitution is given by $\frac{-MU_{1}}{MU_{2}}$ therefore:
$$
\begin{align*}
\text{MRS} = \frac{-MU_{1}}{MU_{2}} &= \frac{-1}{3} \left(\frac{x_{2}}{x_{1}}\right)^{\frac{2}{3}} \div\frac{2}{3}\left(\frac{x_{1}}{x_{2}}\right)^{\frac{1}{3}} \\\\
&= \frac{-1}{3} \left(\frac{x_{2}}{x_{1}}\right)^{\frac{2}{3}} \times\frac{3}{2}\left(\frac{x_{2}}{x_{1}}\right)^{\frac{1}{3}}\\\\
&= \frac{-x_{2}}{2x_{1}}
\end{align*} 

$$
- - -
**c.** The optimal quantities can be obtained through the Lagrangian technique, however the standard solution to the Cobb-Douglas function is: 

$$x_1^{*}=\left(\frac{a}{a+b}\right)\times \frac{m}{p_{1}}\quad \qquad 
x_2^{*}=\left(\frac{b}{a+b}\right)\times \frac{m}{p_{2}}
$$ 
$$x_{1}^{*}=\left(\frac{\frac{1}{3}}{\frac{1}{3}+\frac{2}{3}}\right)\times \frac{12}{2}=2 \qquad x_{2}^{*}=\left(\frac{\frac{2}{3}}{\frac{1}{3}+\frac{2}{3}}\right)\times \frac{12}{1}=8$$
Therefore the optimal bundle is $u(2,8)=5.0396842$.
- - -
**d.** Changing the price of good 1 from $2$ to $1$ would change the marginal rate of transformation to 1, since both prices are the same, the ratio of good 1 to good 2 is given by $\frac{1}{3}$ and $\frac{2}{3}$; therefore,
$$
x_{1}= 12 \times \frac{1}{3}=4  \qquad x_{2}=12 \times \frac{2}{3}=8
$$
Using the Slutzky Equation to decompose income and substitution effects:



- - -
**e**. The compensating variation is the amount of money one would have to give (**take**) a consumer to offset completely the harm (**benefit**) from a price increase (**decrease**). The formula for the compensating variation $(CV)$ is, 
$$CV = m- e(\text{new prices},\ \text{old utility)}$$
Where function $e(p_{1},\ p_{2},\ u)$ is the expenditure function of Anna's preferences. Alternatively, the compensating variation is given by 
$$v(\text{new prices},\ m-CV)=\text{old utility}$$
Where $v(p_1,\ p_2,\ m)$ is the indirect utility function which assumes the consumer's utility is derived from the the prices and their income rather than the quantities of each good. 

Deriving indirect utility function by substituting optimal bundle condition into utility function: 

$$x_1^{*}=\left(\frac{a}{a+b}\right)\times \frac{m}{p_{1}}\quad \qquad 
x_2^{*}=\left(\frac{b}{a+b}\right)\times \frac{m}{p_{2}}$$ 
$$v(p_1,\ p_{2},\ m) =
\left(\frac{a}{a+b}\times\frac{m}{p1}\right)^{a} 
\times
\left(\frac{b}{a+b}\times\frac{m}{p_{2}}\right)^{b}$$
Substituting in values: 
$$\left(\frac{12-CV}{3(1)}\right)^{\frac{1}{3}}\times\left(\frac{2(12-CV)}{3(1)}\right)^{\frac{2}{3}} =5.04_\text{3sf}$$
let $w$ be $12-CV$:
$$w^{\frac{1}{3}} \times \left(\frac{1}{3}\right)^{\frac{1}{3}} \times w^{\frac{2}{3}} \times \left(\frac{2}{3}\right)^\frac{2}{3}=5.04$$
$$w=\frac{5.04}{\frac{1}{3}^{\frac{1}{3}} \times \frac{2}{3}^{\frac{2}{3}}}=9.52$$
Evaluate $CV$:
$$CV=12-w=2.48_\text{3sf}$$

On the other hand, the equivalent variation is the amount of money one would have to give (take) a consumer *reset* the the harm (benefit) caused by a price increase (decrease). It is the direct opposite of compensating variation: 
$$v(\text{old prices},\ m+EV)=\text{new utility}$$
Using the same indirect utility function:
$$v(p_1,\ p_{2},\ m) =
\left(\frac{a}{a+b}\times\frac{m}{p1}\right)^{a} 
\times
\left(\frac{b}{a+b}\times\frac{m}{p_{2}}\right)^{b}$$
Substituting in values: 
$$\left(\frac{12+EV}{3(2)}\right)^{\frac{1}{3}}\times\left(\frac{2(12+EV)}{3(1)}\right)^{\frac{2}{3}} =5.04_\text{3sf}$$
let $w$ be $12+EV$:
$$w^{\frac{1}{3}} \times \left(\frac{1}{6}\right)^{\frac{1}{3}} \times w^{\frac{2}{3}} \times \left(\frac{2}{3}\right)^\frac{2}{3}=6.34960$$
$$w=\frac{6.34960}{\frac{1}{6}^{\frac{1}{3}} \times \frac{2}{3}^{\frac{2}{3}}}= 15.12_{\ldots}$$
Evaluating for $EV$: 
$$EV=15.12_{\ldots}-12=3.12_{\text{3sf}}$$
