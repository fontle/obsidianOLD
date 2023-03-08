#lecture-notes #stats1 
Previously used the assumption that random variables are independent and identically distributed. 

This assumption implies that $E(Y_i)$ is constant: $E(Y_i)=\mu$ does not depend on the value of any other variable. 

This is unrealistic: 
- For example, the mean stopping distance for a car would depend on the speed it is travelling. 
- Or, the sales of a new product may depend on its price. 

## Predictors
To compensate for this assumption we use inferential procedures that can be used when a random variable $Y$ (the D.V) has a mean that is a function of a nonrandom variable $x$, the independent variable. 

Although many functions can be used to the response variable $Y$, we will focus on linear statistical models. 

### Notation
We can use the model $E(Y|X=x) = \alpha + \beta x$ for some unknown parameters. In this case $\alpha$ is the intercept and $\beta$ is the gradient of the function. 

Any observed value in practice of $Y$ for a given $x$ of $X$ would almost always deviate from the hypothesised expectation $E(Y|X=x)$. If the discrepancy is denoted by the random variable $\epsilon$ then 

$$\epsilon = Y - E(Y|X=x) = Y - (\alpha+\beta x)$$
## Method of Least Squares


