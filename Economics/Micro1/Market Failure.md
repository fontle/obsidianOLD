#lecture-notes #micro1 
## Monopoly 
--- 
## Externalities
---
[[Externalities]] are situations in which the welfare of a primary agent is directly effected by the actions of a second agent. There is no market to evaluate this effect and internalise the consequences of the second agents actions.

There are two ways to characterise externalities:
- Positive vs Negative
- Consumption vs Production

### Examples of Externalities
---

|             | Positive   | Negative |
| ----------- | ---------- | -------- |
| Consumption | Education           | Alcohol and Smoking         |
| Production  | Beekeeping | Pollution         |

### Modelling Externalities
---
We can supplement a market's supply and demand functions to include the **social cost** which is equal to the private cost on the primary agent and the secondary costs on others. Which creates *two supply curves*. Furthermore, we can include the social benefit of a good which includes the private utility captured by the demand function and the secondary benefits. 

### Methods to Internalise Externalities
---
1. Emissions standards: 
	- Impose the market produces no more than the socially optimal level of output
	- Or, impose the firms do not produce more than the optimal level of pollution
	- The choice between the two depends on the information the government has.
2. Taxes and Subsidies for negative and positive externalities respectively as they can change the market price to the socially
3. Pollution Permits/Vouchers: We could allow firms to pollute providing they buy a permit for each unit of pollution, this puts a 'price' on pollution and creates a market which was missing.
4. Mergers: If one firm is polluting and doing so harms another, the firms could merger
5. Bargaining: Could allow each party to exchange to lead to an outcome in which everyone is better off.
### The Coase Theorem
---
If property rights are well-defined and there are no transaction costs, then economic agents will contract to achive an efficient outcome, irrespective of the assignment of property rights.

## Public Goods
---
The two main characteristics of public goods: 

**Non-Excludability** and **Non Rivalry**. It means that the goods consumption is allowed for everyone freely and also one person's consumption cannot reduce the availability for others. 

|                | Rival        | Non Rival   |
| -------------- | ------------ | ----------- |
| Excludable     | Private Good | Club Good   |
| Non Excludable | Common Good  | Public Good |

An example of a public good is a park since no one can be prevented from using it and me walking in the park does not hinder another's ability to walk in hte park.

### Modelling Public Goods
--- 
Our economy has two consumers $A,B$, and a public good that costs $c$. The reservation prices are $r_{A}$ and $r_{B}$ respectively which are the maximum money that $A$ and $B$ are willing to pay to have the public good available respectively. 

We can have a **payment schedule** which specifies how much money each consumer will contribute: 

$$g_{A} + g_{B} \ge c$$

The purchasing of the public good is a Pareto improvement if $r_{i} > g_{i}$ for both consumers. A payment scheme is a pareto improvement if $r_{A} + r_{B} > c$

### The Free Rider Problem 
---
The **Free Rider Problem** is a type of market failure that occurs when communal or public goods are consumed by agents who do not contribute or underpay for their use.

### Example 

| $A / B$   | Buy      | Don't Buy |
| --------- | -------- | --------- |
| Buy       | -50, -50 | -50,100   |
| Don't Buy | 100,-50  | 0,0       |

In this case the nash equilibrium is not to buy the public good as regardless of the other agent, the best option for each agent is not to puchase the good. 

This is the very definition of free-riding as it is better off for the consumer to not purchase the good.
### Solutions 
1. Government Provision
2. Voting
3. Auctions

### The Fisherman Problem (Example of Rival Goods and Tragedy of The Commons) 
---
#### Assumptions: 
- $b$ boats are sent to sea to catch $f(b)$ fish, and the price of sending a boat to the sea is $a$ per boat.
#### Social Optimium
The society wants to maximise the total *wealth* of the fishing town, and thus chooses $b$ by solving $\max_{b}f(b)-ab$

If the price is 1, for simplicity, the optimal number of boats $b^*$ is given by: 

$$MP(b^{*})= a$$

Therefore, the marginal product of each boat $MP(b^{*})$ is equal to the price of sending out each boat $a$
#### Private Optimum
Each fisherman sending a boat to sea can expect to catch $\frac{f(b)}{b}$ (which is equal to the average product of each boat) fish, thus the fishermen decide to go to see as long as the average product is greater than the price of each boat. Therefore, the number of boats sent to the sea will be equal to: 

$$\frac{f(b)}{b} = a$$

If the average product is greater than the cost of sending out of a boat, fishermen will enter the market, thus reducing the average product of the each boat as there are more boats for a fixed amount of fish. Alternatively, if the average product is less than the cost of sending out a boat, then fishermen will decide not to go, increasing the average product. Therefore in the long run, an equilibrium will occure where the average product of each boat is equal to the price of sending out a boat. 

## Asymmetric Information 
--- 
[[Asymmetric Information]] is a market with imperfect information, on which one side is better informed than the other, thus allowing exploitation.

### [[Adverse Selection]] 
---
Is where one party involved in exchange has information about a hidden characteristic regarding the good transacted that is unknown to other parties and takes advantage of this information. This is an example of **asymmetric information**.

#### Example of Adverse Selection
In used-car markets, the dealer has greater information about the health and state of each car, when most buyers do not. Thus the dealers increase the price of crap cars and reduce the price of good cars to distort the price signal of each car and increase overall profit. 

This market cannot have a pooling equilibrium, where both the types of gods are traded and cannot be distinguished by the buyers, as good quality cars are driven out of the market, the only equilibrium remains is a seperating equilibrium where only low quality cars are traded),  where only one of the two goods is traded, or both are traded and can be distinguished by the buyers, 

##### Assumptions 
- 50 good cars and 50 bad cars are for sale. Buyers do not observe the quality of the car, but sellers are sure on the quality. 
- Sellers are willing to sell a good car for $2000$ and a bad car for $1000$
- Buyers are willing to buy a good car for $2400$ and a bad car for $1200$
##### Private Optimum
Since the buyers cannot distinguish between each type of car, the dealer can set the price of all cars to the expected value of each car: 

As the proportion of good cars to bad cars is 1:1, the probability of each is 0.5: 

$$EV = 0.5 \times 2400 + 0.5 \times1200 \to 1800$$

#### Solutions to Adverse Selection
- **Screening**: the less informed party can gather information on the more informed party: For example, medical insurance companies may ask to see medical records. 
- **Signaling** the more infored party sends information to less informed party. For example, highly skilled workers may signal their quality by acquiring qualifications. This doesn't work for scenarios where the more informed party benefits from its information advantage, such as in the used car market. 
- **Third party intervention**: a third party not involved in the transaction, like the government, may collect information and sell it or give it to the less informed party. Governments provide information in an attempt to align social and private optimums.
-  **Government Intervention**: the government may impose certain regulations such as, 
	- disclosure agreements (*a seller of a house has to disclose all relevant infomration*) 
	- product liability laws (*protect consumers from malfunctioning products*)
	- universal coverage (insurance markets have to provide insurance to both low-risk and high-risk consumers)

### [[Moral Hazard]] 
---
One informeed party takes an action that another party cannot obesrve, and thus harms the less-informed. This is **asymmetric infromation** because of the hidden action.

#### Principal-Agent Problem 
The less informed agent (the principal) contracts with an agent (the more informaed party), but cannot observe the actions of the agent after the contract has been signed. Thus the agent may take advantage of the principal.

##### Assumptions 
- A principal is looking to hire an agent to produce output. Agent provides effort $e$ to produce $y=f(e)$. The agents incur a cost of effort $c(e)$. Effort is not observed.
- The principals payoff is equal to output which is a function of the agents effort $y=f(e)$. To decide the agent's reward / incentive contract, $s(y)$. The principal's payoff is the difference between output and payment of reward:

$$
f(e)-s(f(e))	
$$

- The agent's payoff, assuming they agree to the contract is the difference between the incentive payment and the cost of effort: 

$$s[f(e)]-c(e)$$

- Conditions of agreement: The agent only agrees if the payoff is greater than if than the payoff if they walked away, lets say, $u$
##### Optimum Effort
The principal would like the agent to choose the effort that maximises output relative to the participation constraint: 

$$
\max_{e} f(e) - s(f(e))
$$

The principal will design the contract such that the agent is exactly indifferent between walking away and of signing the contract therefore the difference between the incentive payment and the cost of effort would be equal to the payoff for the agent walking away: 

$$
s(f(e))-c(e)=u  
$$

Thus, if we substitute into original optimal, the prinicpal would like the agent to choose effort such that: 

$$
\max_{e}f(e)-c(e)-u
$$

Therefore principal payoff is maximised for the level of effort $e*$ where 

$$
\frac{\partial f(e^{*})}{\partial e} = \frac{\partial c(e^*)}{\partial e} 
$$

##### Optimal when effort is not observed 
The payment to the worker is given by the difference between the output and the a lumpsum taken by the principal, $R$: 

$$s(f(e)) = f(e) - R$$

Alterntively, sharecropping can occur where the agent can keep a share of the surplus such that there payment contract is equal to

$$s(e) = \alpha f(e) +F$$

#### Example of Moral Hazard
Once full insurance is provided to a consumer, they may elevate their risk once realising such fact. This increased risk is not accounted for when purchasing the insurance and thus is a moral hazard.

Alternatively, driving licenses are meant to ensure that consumers of cars are able to drive them amongst traffic, however once a person has passed, the licensing agency has no way to observe or provide consequence to drivers.

#### Solutions to Moral Hazard
- **Incentive Contracting** the principal designs an incentives contract to induce the agent to behave as expected.
- **Monitoring**: the principal may survey the agents actions to make they do not engage in opportunistic behaviour. 
- **Bonding**: THe agent may be asked to deposit funds as a guarantee that they will behave, thus the deposit acts as a cost to their bad behaviour. 
- **Deferred Payment**: For work contracts, the agent may receive a low wage for some period of time, before receiving a higher wage later on once their actions in the workplace have been realised. 
- **Efficiency wage**: In the context of work contracts, the agent may receive a relatively high wage to discourage them to be opportunistic. This is because the worker would lose the surplus. 
- **Stipulations**, it may be able to monitor the agent ater the fact and thus stipulations in the contract may be put in place. For example, an insurance company may refure to pay a driver who crashed whilst drunk. 

#### Modelling Incentive Contracting
In a labour market with high skilled workers (in proportion $q$) who generate $w_h$ and low skilled workers (in proportion $1-q$) , and generate output $w_l$, where $w_h$ > $w_l$. Skill is hidden when hiring the worker. 

**Without signalling**, the outcome is a pooling equilibrium in which all workers are paid the average wage $w$  equal to the expected value of output regardless of their skill: 

$$
w=qw_h+(1-q)w_l
$$

**With signalling**, suppose high skilled workers can by a qualification with cost $c$. 
Since high skilled workers invest in education, and receive a wage $w_h$ and low skilled workers are paid $w_l$. A seperating equilibrium can occur when the wage of the higher skilled worker is paid more than the low skilled worker once accounting for the cost of the qualification: 

$$
w_{h} - c > w_{l}
$$

Otherwise the market will resort to an inefficient pooling equilibrium. 

**As long as the cost of the qualification is less than difference between a high skill wage and low skilled wag, a seperating equilibrium can occur**: 

$$
c< w_{h} - w_{l}
$$
