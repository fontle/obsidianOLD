# Problem Set 3 

\item
The marginal product of labour and capital for the given production function $f(K,L) = K^{\frac{1}{2}}L^{\frac{1}{2}}$ is given respectively by: 
    $$
    \frac{\partial L}{\partial f}=  \frac{K^{\frac{1}{2}}}{2L^{\frac{1}{2}}} = \frac{1}{2} \sqrt{\frac{K}{L}} \quad \textnormal{for labour, \  and}\quad \frac{1}{2}\sqrt{\frac{L}{K}} \quad\textnormal{for capital}
    $$
    The marginal rate of substitution is the rate of change of capital with respect to labour: 
    $$
        MRS = \frac{\partial K}{\partial L} = \frac{\partial K}{\partial f} \div \frac{\partial L}{\partial f} 
    $$
    For PaperInc, the technical rate of substitution is given by:
    $$
    0.5\sqrt{\frac{L}{K}} \div 0.5\sqrt{\frac{K}{L}} = 0.5\sqrt{\frac{L}{K}} \times 2\sqrt{\frac{L}{K}} = \frac{L}{K}
    $$
\item 
The optimal input bundle for 10 units: 
$$
\begin{align*}
10&=\sqrt{KL} \\
100 &= KL \\
K&= \frac{100}{L} \quad L=\frac{100}{K}
\end{align*}
$$
Substituting input ratios into the cost function: 

$$
c= \frac{400}{L} + \frac{100}{K}
$$
Finding partial derivative of L and K with respect to cost: 
$$
\begin{align*}

\frac{\partial c}{\partial L}&= -400L^{-2} \\\\

\frac{\partial c}{\partial K}&= -100K^{-2}
\end{align*}
$$
For cost to be minimised the marginal cost of capital and labour must equal 0:
$$
\begin{align*}
\frac{-400}{L^{2}}=\frac{-100}{K^{2}}
\end{align*}
$$
$$400K^{2}=100L^{2}$$
$$K=0.5L$$
Substituting into production function: 
$$10=\sqrt{KL}$$