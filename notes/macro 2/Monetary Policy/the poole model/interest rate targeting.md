# Interest Rate Targeting 
>[!Definition]
>Interest rate targeting is where the central bank sets the interest rate for the financial market regardless of what the money supply is. This occurs in a floating currency whereby the money supply is dictated by market forces and directly influenced by the interest rate set by the central bank. 

Under the Poole Model, interest rate targeting results in a flat LM curve since there is no adjusting of interest rates when money demand changes: 

![[interest rate targeting-2.png]]

Here we can see that under a fixed interest rate, the LM curve is flat since the market forces adjust to an equilibrium of the set interest rate. 

## Choosing an optimal interest rate
In the poole model, the objective of the central bank is to minimise volatility. This can be modelled using a quadratic loss function: 
$$L = E\left[(Y-Y_{f})^{2}\right]$$
This loss function represents the difference between the actual output $Y$ and the target output $Y_{f}$, the $_f$ stands for full employment since the government's output target is along the PPF curve where full employment is achieved. 

The expected output is given by $E[Y]=E[\alpha_{0}+\alpha_{1}r + u]$.

Since the expected value of $u$ (our shock value in the goods market) is $0$, and the other parameters are non-stochastic, the expected value of the output can be simplified to:

$$Y_{f} =E[Y] = \alpha_{0}+\alpha_{1}r$$
Under perfect information the central bank would chose an interest rate such that the target output is achieved, the expected output value is the target output. 

Hence the **optimal interest rate** for a given target output is: 
$$r^{*}= \frac{Y_{f}-\alpha_{0}}{\alpha_{1}}$$




