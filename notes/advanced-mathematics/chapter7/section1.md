# 第一节 多元函数的基本概念

::: details Tables of Content

[[toc]]

:::

## I. 邻域的概念

这是在数轴上的邻域：
$$
U(x_0, \delta) = (x_0 - \delta, x_0 + \delta)
$$
其包含所有与点$x_0$的距离小于$\delta$的点，而将其拓展到平面上呢？设点$P_0(x_0, y_0)$，也就是包含所有与点$P_0$的距离小于$\delta$的点的一个集合，我们可以将它表示成这样：
$$
U(P_0, \delta) = \{ (x, y) | \sqrt{(x - x_0)^2 + (y - y_0)^2} \lt \delta \}
$$
同理，这是在数轴上的去心邻域：
$$
\mathring{U}(x_0, \delta) = (x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)
$$
而这是在平面上的去心邻域：
$$
\mathring{U}(x_0, y_0) = \{ (x, y) | 0 \lt \sqrt{(x - x_0)^2 + (y - y_0)^2} \lt \delta \}
$$

## II. 二元函数的定义

设$D$是平面上的一个点集，若对于任意$(x, y) \in D$，变量$z$按照一定法则，总有确定的值和它对应，则称变量$z$是变量$x,y$的二元函数，记作：
$$
z = f(x, y)
$$
二元函数$z = f(x, y)$在几何层面上一般用于表示空间直角坐标系中的一个曲面

## III. 二元函数的极限

### 3.1 二重极限

设函数$f(x, y)$在点$(x_0, y_0)$的某去心邻域内有定义，则：
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = A \Leftrightarrow \forall \epsilon \gt 0, \exists \delta \gt 0: \forall (x, y) \in \mathring{U}((x_0, y_0), \delta) \Rightarrow \left| f(x, y) - A \right| \lt \epsilon
$$
::: tip Tip

1. $(x, y)$趋向于$(x_0, y_0)$的过程中并无特定路径可寻，即$(x, y)$无论沿何种路径趋于$(x_0, y_0)$，$f(x, y)$都要趋向于$A$
2. 若$(x, y)$沿不同路径趋于$(x_0, y_0)$时，$f(x, y)$的极限值不同，则可证明当$(x, y) \to (x_0, y_0)$时$f(x, y)$的极限不存在

:::

### 3.2 累次极限

即先让一个变量趋于某值（或无穷大），得到仅剩一个变量的表达式后，再对第二个变量进行极限运算，对于函数$f(x, y)$，其二次极限为：
$$
\lim_{x \to x_0} \lim_{y \to y_0} f(x, y) \, \text{或} \, \lim_{y \to y_0} \lim_{x \to x_0} f(x, y)
$$
::: tip Tip

1. 累次极限的值依赖于求极限的顺序，以不同的顺序进行逐次求极限所得到结果也可能不同
2. 若有不同顺序的累次极限的值不相等，则对应的重极限的值必然不存在
3. 当重极限的值存在时，累次极限的值若存在则必然与之相等
4. 当任意顺序的累次极限值均存在且相等时，无法判定重极限的值也存在且相等

:::

### 3.3 二重极限的运算性质

1. 若：
    $$
    \begin{gather}
    \lim_{(x, y) \to (x_0, y_0)} f(x, y) = A \\ 
    \lim_{(x, y) \to (x_0, y_0)} g(x, y) = B \\
    \end{gather}
    $$
    则：
    $$
    \begin{gather}
    \lim_{(x, y) \to (x_0, y_0)} \left[ f(x, y) \pm g(x, y) \right] = A \pm B \\
    \lim_{(x, y) \to (x_0, y_0)} \left[ f(x, y) \cdot g(x, y) \right] = A \cdot B \\
    \lim_{(x, y) \to (x_0, y_0)} \frac{f(x, y)}{g(x, y)} = \frac{A}{B} \, (B \neq 0) \\
    \end{gather}
    $$

2. 设：
    $$
    P_0 = (x_0, y_0), \lim_{(x, y) \to P_0} f(x, y) = A
    $$
    则：
    $$
    \exists \delta \Rightarrow \forall (x, y) \in \mathring{U}(P_0, \delta)
    $$
    有：
    $$
    \lim_{(x, y) \to P_0} \alpha(x, y) = 0 \Rightarrow f(x, y) = A + \alpha(x, y) \tag{1}
    $$

    $$
    A \neq 0 \Rightarrow A \cdot f(x, y) \gt 0 \tag{2}
    $$

::: tip Tip

二重极限的计算依然可以使用**等价无穷小替换**以及**夹逼准则**，但是无法使用**洛必达法则**

:::

- **例1**：设函数：
    $$
    f(x, y) =
    \begin{cases}
    \dfrac{xy}{x^2 + y^2}, & x^2 + y^2 \neq 0 \\
    0, & x^2 + y^2 = 0 \\
    \end{cases}
    $$
    讨论极限$\displaystyle \lim_{(x, y) \to (0, 0)} f(x, y)$是否存在

    ::: details Answer

    考虑点$(x, y)$沿着直线$y = kx$趋近于$(0, 0)$，则此时的极限为：
    $$
    \lim_{(x, y) \to (0, 0)} f(x,y)
    = \lim_{x \to 0}f \bigl( x, kx \bigr)
    = \lim_{x \to 0} \frac{x \cdot kx}{x^2 + (kx)^2}
    = \frac{k}{1 + k^2}
    $$
    可见在这种情况下的极限值随$k$的值而变化，所以这个极限并不存在

    :::
    
- **例2**：求下列极限：

    1. $\displaystyle \lim_{(x, y) \to (0, 0)} \frac{xy}{\sqrt{x^2 + y^2}}.$

        ::: details Answer

        根据重要不等式可得：
        $$
        x^2 + y^2 \geq 2 |xy| \Rightarrow -\frac{x^2 + y^2}{2} \leq xy \leq \frac{x^2 + y^2}{2}
        $$
        于是有：
        $$
        -\frac{x^2 + y^2}{2\sqrt{x^2 + y^2}} \leq \frac{xy}{\sqrt{x^2 + y^2}} \leq \frac{x^2 + y^2}{2 \sqrt{x^2 + y^2}}
        $$
        即：
        $$
        -\lim_{(x, y) \to (0, 0)} \frac{x^2 + y^2}{2\sqrt{x^2 + y^2}} \leq \lim_{(x, y) \to (0, 0)} \frac{xy}{\sqrt{x^2 + y^2}} \leq \lim_{(x, y) \to (0, 0)} \frac{x^2 + y^2}{2 \sqrt{x^2 + y^2}}
        $$
        而其中：
        $$
        \lim_{(x, y) \to (0, 0)} \frac{x^2 + y^2}{2\sqrt{x^2 + y^2}}
        = \frac{1}{2} \lim_{(x, y) \to (0, 0)} (x^2 + y^2)^{\frac{1}{2}} = 0
        $$
        所以：
        $$
        \lim_{(x, y) \to (0, 0)} \frac{x^2 + y^2}{2\sqrt{x^2 + y^2}} = -\lim_{(x, y) \to (0, 0)} \frac{x^2 + y^2}{2\sqrt{x^2 + y^2}} = 0
        $$
        则根据夹逼准则可得：
        $$
        \lim_{(x, y) \to (0, 0)} \frac{xy}{\sqrt{x^2 + y^2}} = 0
        $$
        :::

    2. $\displaystyle \lim_{(x, y) \to (0, 2)} \frac{\sin (xy)}{x}.$

        ::: details Answer
        $$
        \begin{gather}
        \lim_{(x, y) \to (0, 2)} \frac{\sin (xy)}{x} \\
        = \lim_{(x, y) \to (0, 2)} \frac{\sin (xy)}{xy} y \\
        = 1 \cdot \lim_{y \to 2} y = 2 \\
        \end{gather}
        $$
        :::
    
    3. $\displaystyle \lim_{(x, y) \to (0, 0)} \frac{\sin (xy)}{x}.$
    
        ::: details Answer
    
        注意，此处无法使用上一题的方法，因为分母乘以$y$会导致$y \neq 0$，这会少一条路径，所以考虑如下不等式：
        $$
        |\sin (xy)| \leq |xy|
        $$
        由此可得：
        $$
        0 \leq |\frac{\sin (xy)}{x}| \leq |\frac{xy}{x}| = |y|
        $$
        而其中：
        $$
        \lim_{(x, y) \to (0, 0)} 0 = \lim_{(x, y) \to (0, 0)} |y| = 0
        $$
        所以：
        $$
        \lim_{(x, y) \to (0, 0)} |\frac{\sin(xy)}{x}| = \lim_{(x, y) \to (0, 0)} \frac{\sin(xy)}{x} = 0 \\
        $$
        
        :::

## IV. 二元函数的连续性

### 4.1 二元函数连续性的定义

设函数$f(x, y)$在点$P_0(x_0, y_0)$的某邻域内有定义，若：
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = f(x_0, y_0)
$$
则称函数$f(x, y)$在点$P_0$处连续

::: tip

设：
$$
\begin{gather}
z = f(x, y) \\
\Delta x = x - x_0,
\Delta y = y - y_0 \\
\Delta z = f(x_0 + \Delta x, y_0 + \Delta y) - f(x_0, y_0) \\
\Delta_x z = f(x_0 + \Delta x, y_0) - f(x_0, y_0) \\
\Delta_y z = f(x_0, y_0 + \Delta y) - f(x_0, y_0) \\
\end{gather}
$$
则有：
$$
\begin{gather}
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = f(x_0, y_0) \Rightarrow \\
\lim_{(x, y) \to (x_0, y_0)} \left[ f(x, y) - f(x_0, y_0) \right] \\
= \lim_{(\Delta x, \Delta y) \to (0, 0)} \left[ f(x_0 + \Delta x, y_0 + \Delta y) - f(x_0, y_0) \right] \\
= \lim_{(\Delta x, \Delta y) \to (0, 0)} \Delta z = 0 \\
\end{gather}
$$
:::

### 4.2 二元函数连续性的性质

若函数$f(x, y)$的在有界闭区域$D$上连续，则：

1. 有界性与最值定理：
    $$
    \exists (x_m, y_m) \in D, \exists (x_M, y_M) \in D, \text{使得} \forall (x, y) \in D, f(x_m, y_m) \leq f(x, y) \leq f(x_M, y_M)
    $$
    
2. 介值定理：
    $$
    \forall f(x_m, y_m) \leq c \leq f(x_M, y_M), \exists (\xi, \eta) \in D, \text{使得} f(\xi, \eta) = c
    $$

- **例3**：讨论此函数在$(0, 0)$处的连续性：
    $$
    f(x, y) =
    \begin{cases}
    (x^2 + y^2) \sin (x^2 + y^2)^{-\frac{1}{2}}, & (x, y) \neq (0, 0) \\
    0, & (x, y) = (0, 0) \\
    \end{cases}
    $$
    ::: details Answer

    注意这个极限：
    $$
    \lim_{(x, y) \to (0, 0)} (x^2 + y^2) \sin (x^2 + y^2)^{-\frac{1}{2}}
    $$
    其中：
    $$
    x^2 + y^2 \to 0
    $$
    而：
    $$
    \sin (x^2 + y^2)^{-\frac{1}{2}}
    $$
    则是有界量，因此这个极限整体为：
    $$
    \lim_{(x, y) \to (0, 0)} (x^2 + y^2) \sin (x^2 + y^2)^{-\frac{1}{2}} = f(0, 0) = 0
    $$
    所以$f(x, y)$在点$(0, 0)$处连续
    :::
    
- **例4**：讨论此函数在$(0, 0)$处的连续性：
    $$
    f(x, y) =
    \begin{cases}
    \dfrac{x^2 y^2}{x^2 y^2 + (x - y)^2}, & (x, y) \neq (0, 0) \\
    0, & (x, y) = (0, 0) \\
    \end{cases}
    $$
    ::: details Answer
    $$
    \lim_{(x, y) \to (0, 0)} f(x, x) = \lim_{x \to 0} \frac{x^4}{x^4} = 1 \\
    \lim_{(x, y) \to (0, 0)} f(x, 0) = \lim_{x \to 0} \frac{x^2 \cdot 0}{0 + x^2} = 0 \\
    \lim_{(x, y) \to (0, 0)} f(x, x) \neq \lim_{(x, y) \to (0, 0)} f(x, 0) \\
    \Rightarrow \not \exists L, \lim_{(x, y) \to (0, 0)} \frac{x^2 y^2}{x^2 y^2 + (x - y)^2} = L \\
    $$
    :::
