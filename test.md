设 $G$ 是一个 $d$-regular graph，其拉普拉斯矩阵为 $L$。由于 $G$ 是 $d$-regular graph，所以每个顶点的度数都是 $d$。因此，对于所有的顶点 $v \in G$，我们有 $\sum_{u \in G} L_{uv} = d - d = 0$。

考虑向量 $\mathbf{1} = [1, 1, \dots, 1]^T$。我们有：

$$
L\mathbf{1} = \begin{bmatrix}
\sum_{u \in G} L_{u1} \\
\sum_{u \in G} L_{u2} \\
\vdots \\
\sum_{u \in G} L_{un}
\end{bmatrix}
= \begin{bmatrix}
0 \\
0 \\
\vdots \\
0
\end{bmatrix}
= 0\mathbf{1}
$$

因此，$\mathbf{1}$ 是 $L$ 的一个特征向量，对应的特征值为 $0$。这就证明了 $0$ 是拉普拉斯矩阵的特征值。

另外，我们还可以通过计算行列式来证明。由于拉普拉斯矩阵的每一行之和都为 $0$，所以它的行列式为 $0$。这意味着它的特征值之积也为 $0$，因此必定存在一个特征值为 $0$。