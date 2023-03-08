```tikz
\begin{document}

\begin{tikzpicture}[xscale=2,yscale=2]
  % Axes
  \draw[->] (0,0) -- (3,0) node[right] {Quantity};
  \draw[->] (0,0) -- (0,3) node[above] {Price};
  
  % Supply curve
  \draw (0.5,0.5) -- (2.5,2.5) node[right] {Supply};
  
  % Demand curve
  \draw (0.5,2.5) -- (2.5,0.5) node[right] {Demand};
  
  % Equilibrium
  \draw[dashed] (1.5,1.5) -- (1.5,0) node[below] {$Q^*$};
  \draw[dashed] (1.5,1.5) -- (0,1.5) node[left] {$P^*$};
\end{tikzpicture}

\end{document}
```
