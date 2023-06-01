## Section A
1. d
2. c
3. a
4. d
5. d

## Section B

#### Part A
Given the production function $Y_{t}=K_{t}^{0.4}N_{t}^{0.6}$ and the savings rate, $s=0.15$ and the depreciation rate, $\delta$ = 0.06. The output per worker is given by dividing by the number of workers $N$: 
$$
\begin{align}
y_{t}=& \frac{K_{t}^{0.4}N^{0.6}}{N}  \\ \\
y_{t}=& \left[ \frac{K_{t}}{N} \right]^{0.4} 
\end{align}
$$
Through the IS relation (assuming that the economy is closed with a balanced budget), investment equals savings and therefore investment per worker is given by: 
$$
s \times y_{t}
$$ 
The investment needed to retain the current capital stock is equal to the capital per worker multiplied by the depreciation rate of the capital: 
$$
\delta \times \frac{K_{t}}{N}
$$
The steady state values of capital per worker occurs when investment per worker is equal to the investment needed to retain the capital stock.  
$$
\begin{align}
s[y_{t}] = & \ \delta\frac{K_{t}}{N}  \\ \\
0.15\left[ \frac{K_{t}}{N} \right]^{0.4} = & \ 0.06 \frac{K_{t}}{N} \\ \\ 
\frac{0.15}{0.06} = & \left[ \frac{K_{t}}{N} \right]^{0.6} \\ \\
^{0.6}\sqrt{2.5} = & \frac{K_{t}}{N}  \\
\\ \approx& 4.61
\end{align}
$$
Then substitute the capital per capita into the per capita production function to get output per capita:
$$
y_{t} = [4.61\dots]^{0.4} \approx 1.842
$$
#### Part B
Since consumers can either save or consumer there income, the consumption per capita is given by the inverse of savings per capita, or equivalently: investment per worker (through the IS relation): 
$$c_{t}= (1-s)\cdot y_{t}$$
$$c_{t}=y_{t}-s\cdot y_{t}$$
In the steady state, capital per capita is equal to the required investment, therefore in the steady state,
$$c_{t}= y_{t}-\delta k_{t}$$
$$c_{t}=k_{t}^{0.4}-0.06k_{t}$$
Therefore consumption is maximised when the difference between output per worker and steady state investment per worker is maximised. Taking the slope of the consumption function: 
$$
\frac{dc_{t}}{dk_{t}} = 0.4k_{t}^{-0.6}-0.06
$$
The slope is 0 at maxima: 
$$
0=0.4k_{t}^{-0.6}-0.06
$$
$$^{0.6}\sqrt{ \frac{0.4}{0.06} }=k_{t}$$
$$k_{t}=23.61$$
This turning point is guaranteed to be maxima due to required investment being a linear positive function and the production function being an increasing function at an ever decreasing rate. 

The output per worker is given by $k_{t}^{0.4}$ therefore $y_{t} = 3.542$. Substituting into our investment function the savings rate can be calculated: 
$$3.54219=s\cdot 23.61463$$
$$s=0.15$$
#### Part C
In the figure, the output per worker decreased drastically fell from 2500 in 1990 to around 1600 by 2000. A substantial decrease in output can be attributed to a decrease in investment per worker. There are multiple potential causes for this decrease including economic disruption from the fallout of USSR dissolution, geopolitical changes, and loss of market access due to isolationist policies.

In the Solow Growth Model, a decrease in investment per worker regardless of fundamental cause is endogenised through a decrease in the savings rate since investment is assumed equal to savings through the IS relation. Therefore, North Korea's decrease in output can be shown in a decrease in savings rate from $s_{1} \to s_{2}$ causing a downward shift in the investment per worker function from $s_{1}\cdot y_{t} \to s_{2}\cdot y_{t}$. 

The reduction in investment per worker results in less capital per worker able to be maintained, reducing it from $k_{1} \to k_{2}$. In turn, this moves the steady state output level from $A \to B$ as the required investment for the lower level of capital is less. The reduced capital per worker reduces the productive capacity of the economy, reducing the steady state output per worker from $y_{1} \to y_{2}$. 
![[Pasted image 20230518124144.png]]
The dynamics of this shift in investment per worker is shown in the figure at the bottom. Assuming a constant growth rate, the log of output is a linear function with time. A decrease in the savings rate does not change the growth rate of the economy in the long run, and therefore a decrease in the savings rate results in a parallel shift of output per worker downwards from growth path $A \to B$.
![[Pasted image 20230518124204.png]]

In the **short run**, the reduced savings rate results in a reduction in output growth since a decrease in the savings rate reduces money demand, increasing the equilibrium interest rate, causing an inward shift in the LM curve and decreasing the equilibrium output in the short run. This short run negative growth converges to the steady state growth rate over time, resulting in the output per worker reaching $y_{2}$ in the long run, or as Figure one shows, around $1600 per worker.

## Section C

In a fixed exchange rate, the government fixes its nominal exchange rate. There is variation in the implementation of a fixed exchange rate: a hard peg whereby the domestic currency's value is fixed to a foreign currency at a predetermined exchange rate, for example the Saudi Riyal and US Dollar. Alternatively, dollarisation whereby a country adopts a foreign currency (usually the US dollar) for example Zimbabwe. 

One of the biggest consequences of using a fixed exchange rate is a loss of monetary autonomy. Firstly, by definition the government foregoes the opportunity to adjust nominal exchange rates. However this is not the largest consequence. The interest parity condition implies a positive relation between the interest rate and exchange rate: since the exchange rate is fixed both current and expected rates are $\bar{E}$, hence the interest rate at $i_{t}$ (Blanchard, 2013):
$$
(1+i_{t}) =  (1+i^{*}_{t})\frac{E_{t}}{E^{e}_{t+1}} \implies (1+i_{t}) =  (1+i^{*}_{t})\times \frac{\bar{E}}{\bar{E}} \implies 
i_{t}=  i^{*}_{t}

$$
Because of this, governments may lack the tools to respond to macroeconomic shocks. An external shock resulting in a decrease in potential output, such as a natural disaster, in the economy could result in the currency being overvalued since, the exchange rate does not automatically stabilise in response to changes in price levels as a result of deviations in aggregate supply and demand. If the currency is overvalued under the fixed regime, a speculative run can occur, whereby investors expect a devaluation imminent and withdraw from the economy. 

Furthermore, if the economy chooses an approach such as a monetary union where economies adopt a common currency, asynchronous business cycles could result in monetary policy that is not an optimal response to the domestic circumstance. For example, in the European Union, there is a monetary union between 20 countries that adopt the Euro as there currency, Guerini (2019) shows that synchronisation between eastern countries and western countries in the European Union decreased after the Great Recession, thus reducing the efficacy of the ECB due to 'heterogeneous responses to common policies'. Highlighting the fact that the loss monetary autonomy could result in sub-optimal common policy. 

However, a fixed exchange rate regime does have some benefits. First of all it can provide price stability for investors. Under a fixed regime, the pegged country adopts the monetary policy of the host currency's economy. For example, Zimbabwe would adopt the monetary policy of the Fed under dollarisation. If the anchor currency has historically low inflation, then the fixed regime can provide price stability. This is especially useful for developing economies with immature institutions such as in Zimbabwe, where corruption and poorly implementation of macro policy resulted in the hyperinflation which began in 2007. Fixed regimes can also enhance confidence as the value of the currency is better defined, allowing investors and consumers to make more informed decisions about pricing, consumption and investment.

For oil producing economies, fixing their currency to the US dollar ultimately provides increased economic stability. Firstly, it is a globally practised that oil is exchanged for US dollar rather than any other currency colloquially known as Petrodollars (Robbins, 2021). Therefore by pegging the currency, oil-producing countries mitigate the impact of oil price volatility, as due to being a major export, is a determinant of the overall price level in the economy. Furthermore, importing the monetary policy of the United States allows oil-producing countries to align with the largest consumer of oil in the world, the united states consumers 20.31% of global oil supply (NASDAQ, 2022).Despite these benefits there are still drawbacks for for oil-producing countries to fix their currency to the dollar. Changes in the US dollar can impact the international competitiveness of the country's non-oil exports. 

### Bibliography

Giavazzi, F, & Amighini, A 2013, Macroeconomics: A European Perspective, Pearson Education UK, Harlow. Available from: ProQuest Ebook Central. [18 May 2023].

Guerini, M., Luu, D. T. and Napoletano, M. (2022). Synchronization patterns in the European Union. Applied Economics, 55 (18), Informa UK Limited., pp–2059. [Online]. Available at: doi:10.1080/00036846.2022.2101607.

Posted by: Tony Robbins (2021) What is the petrodollar? benefits and drawbacks: Tonyrobbins_, _tonyrobbins.com_. Available at: https://www.tonyrobbins.com/wealth-lifestyle/what-is-the-petrodollar/ (Accessed: 18 May 2023).

Contributor Prableen Bajpai (2022), The world’s top 5 oil consumers, _Nasdaq_. Available at: https://www.nasdaq.com/articles/the-worlds-top-5-oil-consumers (Accessed: 18 May 2023).
