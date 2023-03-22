#lecture-notes #micro1 

> [!note] Game Theory 
> Is the study of interacting decision makers. Decision makers make decisions that take into account the other agents' actions and responses, decision makers are making strategic decisions.

## Strategic Games
---

> [!note] Strategic Games
> A strategic game refers to a situation in which decision makers make simultaneous strategic decisions (they take into account the actions and responses of the other decision maker). 

### Composition
A strategic game consists of: 
1. A set of players
2. A set of actions (all of the different decisions a player can make) 
3. Payoffs (specify the value of each possible action to the game) 

Each player in the game uses a **strategy** which is essentially an algorithm which dictates the action a firm uses. A player's strategy is given by a **best response function** which shows which action to take given the other players strategy. 

### Notation: Payoff Matrix
We can graphically represent a game between a small number of actions and players using a payoff matrix: 

Consider a game representing a market of two firms who can choose between a low price and a high price.  
| A,B (profits)| High (B)   | Low (B)   |
| ----- | --- | --- |
| High (A)  | 50,50    | 90,10     |
| Low  (A)  | 90,10    | 25,25   |

The optimal equilibrium for both firms would be where both chose a higher price, both getting $50 each. However, this equilibrium is unstable as both firms are incentivised to lower their prices to extract more profit than the other firm. 

Knowing each firm has an incentive to lower prices, they will both choose the lower price, reaching a stable state where both firms have $25 profit. It's stable as if either firm increase their price, they will lose profit. This equilibrium is known as a **Nash Equilibrium**. 

> [!note] Nash Equilibrium
> Is the likely outcome of the game. It is the outcome such that the strategy played by each player is a best reply to the strategies played by the other players. One property of Nash Equilibrium is that they are **self-enforcing** where given the strategy of the other other player, each player will stick to their chosen strategy.
> 
> A strategic game with a finite number of players and actions, there would be at least one Nash Equilibrium.

In this example, the **dominant strategy** for each of the firms occurs when the other firm has the higher price and they have the lower price. 

> [!note] Dominant Strategy
> Is the strategy that is best no matter what the other players do. 

> [!note] Pure Strategy 
> Is one that consists of only one action. For example, one of the players action is best regardless of what the other player does. 
> 

## The Prisoner's Dilemma
---
| A, B    | Confess | Deny  |
| ------- | ------- | ----- |
| Confess | -3,-3        | 0,-6  |
| Deny    | -6,0    | -1,-1 |

In this scenario, the Nash equilibrium is to both confess, even though both would be better off if they both denied doing the crime, this is because they both have more to lose when, when they deny, the other prisoner has an incentive to confess to reduce their sentence. Consequently, to minimise the number of years regardless of what the other does, it is best to confess as it is the dominant strategy. 

In this example, we can show that Nash Equilibrium is not necessarily Pareto efficient. 

> [!note] Mixed Strategy 
> A strategy that consists of choosing a probability distribution over the possible actions. 

## Using Mixed Strategy 
---
| A,B | Left $c$  | Right $(1-c)$  |
| --- | --- | --- |
| Up $(r)$  | 2,1    | 0,0  |
| Down $(1-r)$  | 0,0 | 1,2    |

$$
A: \quad\begin{align*}
E_A[U]&=2c+0(1-c)=2c\\
E_A[D]&=0c+1(1-c)=1-c
\end{align*}
$$
$$
B: \quad\begin{align*}
E_B[L]&=1r+0(1-r)=r\\
E_B[R]&=0r+2(1-r)=2-2r
\end{align*}
$$
The Nash Equilibrium in mixed strategy: 
$$
((r,1-r), (c,1-c))
$$
## Classes of Games 

### Coordination Games
Games in which the payoffs are highest when the players coordinate their actions: Battle of the Sexes, Assurance Games, Chicken. 
### Zero-sum Games
Games in which the payoff to one player is equal to the losses to the other player. For example, matching pennies, penalty kicks. 
### Commitment Games 
These are sequential games in which commitment is an important strategic issue. For example, the frog and the scorpion; and entry deterrence.
