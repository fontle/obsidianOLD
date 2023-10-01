# Money Supply Targeting

>[!Definition]
>Money Supply targeting refers to when the central bank sets the quantity of money in an economy, this allows money demand fluctuations to adjust the interest rate resulting in an upward sloping LM curve, since a greater output/income would result in an increase in demand for money to hold for transactions. 

![[money supply targeting-2.png]]

The slide above shows the mechanism of how fixing the money supply results in an upward sloping LM curve: As output $(Y)$ increases, the demand for money increases $(M_{d})$ resulting in an increased equilibrium interest rate.

## Choosing the Optimal Money Supply
To minimise volatility, the central bank must minimise the loss function that represents the difference between the target output and the actual output. It is expressed quadratically to incur the same 'cost' whether the difference is positive or negative:
$$L=E\left[(Y-Y_{f})^{2}\right]$$



- The goods market is simplified as $Y=\alpha_{0} + \alpha_{1}r + u$ 
- The financial/money market is simplified as $M=\beta_{0}+\beta_{1}Y+\beta_{2}r + v$ 

Where $u$ and $v$ are shocks to the goods market and money market respectively.

The bank will choose the Money supply $M$ such that the expected value of the output $E[Y]$ is equal to the target output $Y_{f}$. 

To find the expected output we first substitute the LM equation into the IS equation: $$
\begin{align*}
Y &= \alpha_{0} + \alpha_{1} \times \left(\frac{M-\beta_{0}-\beta_{1}Y +v}{\beta_{2}}\right)+u\\\\

&= \alpha_{0} + \frac{\alpha_{1}}{\beta_{2}}(M - \beta_{0}- \beta_{1}Y + v) + u \\\\
&= \alpha_{0}+ \frac{\alpha_{1}}{\beta_{2}}(M-\beta_{0}+v)- \frac{\beta_{1}\alpha_{1}}{\beta_{2}}Y + u \\\\
Y&= \frac{1}{1+ \frac{\beta_{1}\alpha_{1}}{\beta_{2}}}\left(\alpha_{0} +\frac{\alpha_{1}}{\beta_{2}}(M-\beta_{0}+v)+u\right) \\\\
E[Y] =Y_{f} &= \frac{1}{1+ \frac{\beta_{1}\alpha_{1}}{\beta_{2}}}\left(\alpha_{0} +\frac{\alpha_{1}}{\beta_{2}}(M-\beta_{0})\right) \\\\
M &=Y_{f}\left({\frac{\beta_{2}}{\alpha_{1}}+\beta_{1}}\right)- \frac{\beta_{2}}{\alpha_{1}}\alpha_{0} + \beta_{0} \\
\end{align*}

$$




