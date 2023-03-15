---
---
---
To analyse determinants of GDP per capita and growth in the long run we can use the Solow-Swan model. We can derive long run GDP using an **aggregate production function** which describes the relationship between production inputs and total output, $Y$. Since the main two inputs in production are capital, $K$, and number of workers, $N$, the aggregate production function can be described as: 
$$Y = F(K,N)$$
This relation can be amended to include technological progress by adding a coefficient to the number of workers $A$, which can be inferred as the *given state of technology* within the economy: 
$$Y = F(K,AN)$$
The implication that follows is that for any doubling of the state of technology has explicitly the same impact of doubling the number of workers. In practice, this holds as innovation that doubles the marginal output per worker would result in half as many workers needed to make the same number of goods. $AN$ henceforth will be referred to as effective workers, as it implies the amount of workers needed to produce the same output without current state of technology: 1 worker with technology that doubles their output is *effectively* the same as 2 workers without said technology. 

The aggregate production function can be manipulated to output per capita if we assume the function will always have constant returns to scale. In this case, any proportional change in both capital and labour would result in the same proportional change in output. For example, a doubling of both capital and number of workers would result in a doubling of output. This behaviour can be described as, 
$$xY= F(xK,xAN)$$
Since our number of effective workers is fixed at any point in time, we can set $x$ to the reciprocal of the number of effective workers, $\frac{1}{AN}$ and thus derive the output per capita production function: 
$$
\begin{align*}
\frac{Y}{AN}&= F\left( \frac{K}{AN}, \frac{AN}{AN} \right) \\  &=F\left( \frac{K}{AN}, 1 \right)\\
&=f\left( \frac{K}{AN} \right)
\end{align*}
$$
Since, the aggregate production function is essentially divided by the number of effective workers, $AN$ itself becomes a constant since $\frac{AN}{AN}$ is 1, and thus not a determinant in the output per capita aggregate production function. For simplicity, this relationship can be expressed as function $f\left( \frac{K}{AN} \right)$.  To establish an equilibrium output per worker (the steady-state output) we must determine the factors that change capital per worker over a period of time. 

Allowing for technological progress, the number of effective workers increases over time. Consequently, to retain the existing ratio of capital to effective workers, $\frac{K}{AN}$, an increase in the capital stock $K$ proportional to an increase in the number of effective workers $AN$ is needed. Furthermore, the capital stock depreciates over time as the value of machinery decreases and repairs need to be made. Therefore, additional investment on top of that needed to retain the capital to effective worker ratio is needed to prevent the value of capital stock deteriorating over time due to depreciation. Also, the growth rate of workers impacts the ratio of capital to effective worker; if over a period of time the number of workers decrease, then less investment is required to retain the current ratio of capital to effective worker. Combining these determinants, the value of future capital stock $K_{t+1}$ can be derived:
$$\frac{K_{t+1}}{AN}=(1-\delta + g_{N} +g_A) \frac{K_{t}}{AN}+\frac{I_t}{AN}$$
To derive changes in capital stock over time, $K_{t+1}-K_{t}$, we can subtract $K_{t}$ from both sides of the relation: 
$$\frac{K_{t+1}}{AN}-\frac{K_{t}}{AN}= (g_{N} + g_{A} - \delta)\frac{K_{t}}{AN} + \frac{I_{t}}{AN}$$
To bridge the gap between changes in capital stock and output in the long run, the investment-savings relation can be used, whereby current investment $I_{t}$ is equal to savings: the savings rate $S$ multiplied by output $Y$.
$$I_{t} = sY_{t}$$
Inserting this into the capital stock relation,
$$\frac{K_{t+1}}{AN}-\frac{K_{t}}{AN}= (g_{N} + g_{A} - \delta)\frac{K_{t}}{AN} + \frac{sY_{t}}{AN}$$
Or in terms of the per capita aggregate production function, 
$$\frac{K_{t+1}}{AN}-\frac{K_{t}}{AN}= (g_{N} + g_{A} - \delta)\frac{K_{t}}{AN} + sf\left(\frac{K_{t}}{AN}\right)$$






































