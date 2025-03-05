# 第一节 微分中值定理

::: details Tables of Content

[[toc]]

:::

## I. 罗尔定理

> **极值**：若$\exists \delta \gt 0$，使得$\forall x \in U(x_0, \delta)$，若恒有$f(x) \geq f(x_0)$，则$f(x)$在$x_0$处取极小值；若恒有$f(x) \leq f(x_0)$，则$f(x)$在$x_0$处取极大值
>
> **费马引理**：设函数$f(x)$在$x_0$的某个邻域$U(x_0)$内有定义，并且在$x_0$处可导，如果对于任意$x \in U(x_0)$，有$f(x) \leq f(x_0)$或$f(x) \geq f(x_0)$，则$f'(x_0) = 0$
>
> 注：若$f'(x_0) = 0$，则称$x_0$为$f(x)$的驻点，可导点 $+$ 极值点 $\Rightarrow$ 驻点
>
> ::: details Proof
>
> > 已知$\forall x \in U(x_0)$，$\exists f(x) \geq f(x_0)$，且$f'(x_0)$存在
>
> 设$\Delta x + x \in U(x_0)$，则$f(\Delta x + x) \leq f(x_0)$，求$f'(x_0)$：
>
> - 左导数：
>     $$
>     f'_-(x_0) = \lim_{\Delta x \to 0^-} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
>     $$
>     分子$f(x_0 + \Delta x) - f(x_0) \leq 0$，分母$\Delta x \lt 0$，所以$f'_-(x_0) \geq 0$
>
> - 右导数：
>     $$
>     f'_+(x_0) = \lim_{\Delta x \to 0^+} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
>     $$
>     分子$f(x_0 + \Delta x) - f(x_0) \leq 0$，分母$\Delta x \gt 0$，所以$f'_-(x_0) \leq 0$
>
> 又因为已知$f'(x_0)$存在，则可知$\left[ f'_-(x_0) \geq 0 \right] = \left[ f'_+(x_0) \leq 0 \right]$，最终可得$f'(x_0) = 0$
>
> :::

设函数$f(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导，且$f(a) = f(b)$，则至少存在一个点$\xi \in (a, b)$，使得$f'(\xi) = 0$

::: details Proof

因为$f(x)$在$\left[ a, b \right]$上连续，所以根据极值定理，$f(x)$在$\left[ a, b \right]$上必然存在最大值$M$和最小值$m$，考虑两种情况：

- 若$M = m$：

    在此情况下，最大值与最小值相等，所以在$\left[ a, b \right]$上$f(x) \equiv M = m$，$f(x)$是一个常数函数，而常数函数的导数为零

- 若$M \neq m$：

    在此情况下，最大值与最小值不相等，则其中必然有一个最值点在$(a, b)$内，因为若最值点在两侧端点，而$f(a) = f(b)$，就会使得$M = m$，所以$(a, b)$内必然存在一个极值点，则根据费马引理可知，此极值点处的导数为零

:::

::: tip Tip

**罗尔定理的推论**：

1. 设$f(x)$在$(a, b)$内可导，若$\lim_{x \to a^+} f(x) = \lim_{x \to b^-} f(x) = A$，则在$(a, b)$内至少存在一点$\xi$，使得$f'(\xi) = 0$
2. 设$f(x)$在$(a, b)$内可导，若$\lim_{x \to a^+} f(x) = \lim_{x \to b^-} f(x) = \pm \infty$，则在$(a, b)$内至少存在一点$\xi$，使得$f'(\xi) = 0$
3. 设$f(x)$在$(a, +\infty)$内可导，若$\lim_{x \to a^+} f(x) = \lim_{x \to +\infty} f(x) = A$，则在$(a, +\infty)$内至少存在一点$\xi$，使得$f'(\xi) = 0$
4. 设$f(x)$在$(-\infty, +\infty)$内可导，若$\lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} f(x) = A$，则在$(-\infty, +\infty)$内至少存在一点$\xi$，使得$f'(\xi) = 0$

**罗尔定理的应用**：

1. $\exists \xi \in (a, b)$ $\Leftrightarrow$ $\xi$为方程$f'(x) = 0$的根；根的存在性定理：零点定理、罗尔定理、费马引理

2. 辅助函数的构造：

    - 导数的四则运算：
        $$
        \begin{gather}
        [x f(x)]' = f(x) + x f'(x) \\
        [x^2 f(x)]' = 2x f(x) + x^2 f'(x) ,\, \left[ 2 f(\xi) + x f'(\xi) = 0 \right] \\
        [e^x f(x)]' = e^x f(x) + e^x f'(x) ,\, \left[ f(\xi) + f'(\xi) = 0 \right] \\
        [e^{-x} f(x)]' = e^{-x} f'(x) - e^{-x} f(x) ,\, \left[ f'(\xi) - f(\xi) = 0 \right]
        \end{gather}
        $$

    - 利用不定积分

    - 利用还原法：
        $$
        f'(x) - f(x) = 0 
        \Rightarrow \frac{f'(x)}{f(x)} - 1 = 0 
        \Rightarrow \left[ \ln f(x) \right]' - (x)' = 0 
        \Rightarrow \left[ \ln f(x) - x \right]' = 0 
        \Rightarrow \ln f(x) - \ln e^x = C_1 
        \Rightarrow \ln e^{-x} f(x) = C_1 
        \Rightarrow e^{-x} f(x) = e^{C_1}
        $$

    - 利用微分方程

3. 寻找满足罗尔定理的区间：零点定理、介值定理、费马引理、罗尔定理、拉格朗日中值定理、极值点、最值点、拐点、积分中值定理及其推广

:::

- **例1**：已知$f(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导（$0 \lt a \lt b$），且$f(a) = f(b) = 0$，证明：在区间$(a, b)$内至少有一点$\xi$，使得$f'(\xi) = -\dfrac{f(\xi)}{\xi}$.

    ::: details Answer

    将原式进行恒等变换可得：
    $$
    \xi f'(\xi) + f(\xi) = 0
    $$
    设函数：
    $$
    F(x) = x f(x) ,\, F'(x) = f(x) + xf'(x)
    $$
    则$F(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导，且$F(a) = F(b) = 0$，所以根据罗尔定理可知：
    $$
    \exists \xi \in (a, b) ,\, F'(\xi) = f(\xi) + \xi f'(\xi) = 0
    $$
    变换回原式可得：
    $$
    \exists \xi \in (a, b) ,\,  f'(\xi) = -\frac{f(\xi)}{\xi}
    $$
    :::

- **例2**：设函数$f(x)$在$\left[ a, b \right]$上具有二阶连续导数，$f(a) = f(b) = 0$，$f'_+(a) f'_-(b) \gt 0$，证明：

    - 存在$\xi \in (a, b)$，使得$f(\xi) = 0$

        ::: details Answer

        由$f'_+(a) f'_-(b) \gt 0$可知，$f'_+(a)$与$f'_-(b)$同号，假设$f'_+(a) \gt 0$、$f'_-(b) \gt 0$，则：
        $$
        \begin{gather}
        f'_+(a) = \lim_{\Delta x \to 0^+} \frac{f(a + \Delta x)}{\Delta x} \gt 0 \\
        f'_-(b) = \lim_{\Delta x \to 0^-} \frac{f(b + \Delta x)}{\Delta x} \gt 0
        \end{gather}
        $$
        对于$f'_+(a)$，当$\Delta x \to 0^+$时，$\Delta x \gt 0$，则$f(a + \Delta x) \gt 0$；

        对于$f'_-(b)$，当$\Delta x \to 0^-$时，$\Delta x \lt 0$，则$f(b + \Delta x) \lt 0$；

        则根据极限的定义可知：

        - $\exists \epsilon_1 \gt 0$，使得当$x \in (a, a + \epsilon_1)$时，$f(x) \gt 0$；
        - $\exists \epsilon_2 \gt 0$，使得当$x \in (b - \epsilon_2, b)$时，$f(x) \lt 0$；

        取点$x_1 \in (a, a + \epsilon_1)$和$x_2 \in (b - \epsilon_2, b)$，可得$f(x_1) f(x_2) \lt 0$，且$f(x)$在$\left[ x_1, x_2 \right]$上连续，则根据零点定理可知，$\exists \xi \in (x_1, x_2)$，使得$f(\xi) = 0$；

        假设$f'_+(a) \lt 0$、$f'_-(b) \lt 0$，则：
        $$
        \begin{gather}
        f'_+(a) = \lim_{\Delta x \to 0^+} \frac{f(a + \Delta x)}{\Delta x} \lt 0 \\
        f'_-(b) = \lim_{\Delta x \to 0^-} \frac{f(b + \Delta x)}{\Delta x} \lt 0
        \end{gather}
        $$
        对于$f'_+(a)$，当$\Delta x \to 0^+$时，$\Delta x \gt 0$，则$f(a + \Delta x) \lt 0$；

        对于$f'_-(b)$，当$\Delta x \to 0^-$时，$\Delta x \lt 0$，则$f(b + \Delta x) \gt 0$；

        则根据极限的定义可知：

        - $\exists \epsilon_1 \gt 0$，使得当$x \in (a, a + \epsilon_1)$时，$f(x) \lt 0$；
        - $\exists \epsilon_2 \gt 0$，使得当$x \in (b - \epsilon_2, b)$时，$f(x) \gt 0$；

        取点$x_1 \in (a, a + \epsilon_1)$和$x_2 \in (b - \epsilon_2, b)$，可得$f(x_1) f(x_2) \lt 0$，且$f(x)$在$\left[ x_1, x_2 \right]$上连续，则根据零点定理可知，$\exists \xi \in (x_1, x_2)$，使得$f(\xi) = 0$；

        则最终可得：$\exists \xi \in (a, b)$，使得$f(\xi) = 0$.

        :::

    - 存在$\eta \in (a, b)$，使得$f''(\eta) = 0$

        ::: details Answer

        > 由上一问可知，$\exists \xi \in (a, b)$，使得$f(\xi) = 0$

        对于区间$\left[ a, \xi \right]$，函数$f(x)$在$\left[ a, \xi \right]$上连续且可导，$f(a) = f(\xi) = 0$，则根据罗尔定理可知：$\exists \eta_1 \in (a, \xi)$，使得$f'(\eta_1) = 0$；

        对于区间$\left[ \xi, b \right]$，函数$f(x)$在$\left[ \xi, b \right]$上连续且可导，$f(\xi) = f(b) = 0$，则根据罗尔定理可知：$\exists \eta_2 \in (\xi, b)$，使得$f'(\eta_2) = 0$；

        对于区间$\left[ \eta_1, \eta_2 \right]$，函数$f'(x)$在$\left[ \eta_1, \eta_2 \right]$上连续且可导，$f'(\eta_1) = f'(\eta_2) = 0$，则根据罗尔定理可知：$\exists \eta \in (\eta_1, \eta_2)$，使得$f''(\eta) = 0$；

        又因为$a \lt \eta_1 \lt \xi \lt \eta_2 \lt b$，而$\eta_1 \lt \eta \lt \eta_2$，则$a \lt \eta \lt b$，可得：$\exists \eta \in (a, b)$，使得$f''(\eta) = 0$.

        :::

- **例3**：设$f(x)$在$(a, b)$内二阶可导，且$f(x_1) = f(x_2) = f(x_3)$，其中$a \lt x_1 \lt x_2 \lt x_3 \lt b$. 试证明：在$(x_1, x_3)$内至少有一点$\xi$，使得$f''(\xi) = 0$.

    ::: details Answer

    因为$f(x_1) = f(x_2)$，则：
    $$
    \exists \xi_1 \in (x_1, x_2) ,\, f'(\xi_1) = 0
    $$
    又因为$f(x_2) = f(x_3)$，则：
    $$
    \exists \xi_2 \in (x_2, x_3) ,\, f'(\xi_2) = 0
    $$
    由此可知$f'(\xi_1) = f'(\xi_2) = 0$，则：
    $$
    \exists \xi \in (\xi_1, \xi_2) ,\, f''(\xi) = 0
    $$
    
    而：
    $$
    x_1 \lt \xi_1 \lt x_2 \lt \xi_2 \lt x_3
    $$
    则最终可得：
    $$
    \boxed{\exists \xi \in (x_1, x_3) ,\, f''(\xi) = 0}
    $$
    :::
    
- **例4**：设函数$f(x)$在$\left[ 0, 1 \right]$上连续，在$(0, 1)$内可导，且$\lim_{x \to 0^+} \dfrac{f(x)}{x} = 2$，试证明：在$(0, 1)$内存在$\xi$，使得$f'(\xi) = \dfrac{2\xi}{1 - \xi^2} f(\xi)$.

    ::: details Answer

    > 分析：把$\xi$换成$x$，有$f'(x) (1 - x^2) - 2x f(x) = 0$，由其可得$[(1 - x^2) f(x)]' = 0$，故等式左侧原函数为$(1 - x^2) f(x)$
    >
    > 令$F(x) = (1 - x^2)f(x)$，则$F(x)$在$\left[ 0, 1 \right]$上连续且在$(0, 1)$内可导

    因为：
    $$
    \lim_{x \to 0^+} \dfrac{f(x)}{x} = 0
    $$
    则：
    $$
    \lim_{x \to 0^+} f(x) = 0
    $$
    又因为$f(x)$在$x = 0$处连续，则：
    $$
    f(0) = \lim_{x \to 0^+} f(x) = 0
    $$
    则：
    $$
    F(0) = (1 - 0) f(0) = 0
    $$
    而：
    $$
    F(1) = (1 - 1) f(1) = 0
    $$
    则$F(0) = F(1)$，由罗尔定理可知：
    $$
    \exists \xi \in (0, 1) ,\, F'(\xi) = 0
    $$
    而：
    $$
    F'(x) = -2x f(x) + (1 - x^2) f'(x)
    $$
    则：
    $$
    F'(\xi) = -2\xi f(\xi) + (1 - \xi^2) f'(\xi) = 0
    $$
    又因为$0 \lt \xi \lt 1$，则$1 - \xi^2 \neq 0$，则最终可得：
    $$
    \boxed{f'(\xi) = \frac{2\xi}{1 - \xi^2} f(\xi)}
    $$
    :::

- **例5**：设函数$f(x)$在$\left[ 0, 1 \right]$上连续，在$(0, 1)$内可导，且$f(0) = f(1) = 0$，$f(0.5) = 1$，试证明：

    1. 存在$\eta \in (0.5, 1)$，使得$f(\eta) = \eta$；
    2. 对任意实数$\lambda$，必存在$\xi \in (0, \eta)$，使得$f'(\xi) - \lambda \left[ f(\xi) - \xi \right] = 1$.

    ::: details Answer

    - 证明一：

        > 令$F(x) = f(x) - x$，则$F(x)$在$\left[ 0, 1 \right]$上连续
    
        因为$f(\frac{1}{2}) = 1$，所以：
        $$
        F(\frac{1}{2}) = 1 - \frac{1}{2} = \frac{1}{2} \gt 0
        $$
        又因为$f(1) = 0$，所以：
        $$
        F(1) = 0 - 1 = -1 \lt 0
        $$
        故由零点定理可得：
        $$
        \exists \eta \in (\frac{1}{2}, 1) ,\, F(\eta) = f(\eta) - \eta = 0
        $$
        则最终可得：
        $$
        \boxed{f(\eta) = \eta}
        $$
    
    - 证明二：
    
        > 分析：由$f'(x) - \lambda \left[ f(x) - x \right] - 1 = 0$可以得到$\left[ f(x) - x \right]' - \lambda \left[ f(x) - x \right] = 0$，这种形式可以构造$\left[ e^{kx} f(x) \right]'$
        >
        > 令$G(x) = e^{-\lambda x} \left[ f(x) - x \right]$，则$G(x)$在$\left[ 0, 1 \right]$上连续且在$(0, 1)$内可导
        
        由（1）可知：
        $$
        \exists \eta \in (\frac{1}{2}, 1) ,\, f(\eta) - \eta = 0
        $$
        则：
        $$
        G(\eta) = e^{-\lambda x} \left[ f(\eta) - \eta \right] = 0
        $$
        又因为$f(0) = 0$，则：
        $$
        G(0) = e^{-\lambda x} \left[ 0 - 0 \right] = 0
        $$
        所以由罗尔定理可得：
        $$
        \exists \xi \in (0, \eta) ,\, G'(\xi) = 0
        $$
        而：
        $$
        G'(x) = -\lambda e^{-\lambda x} \left[ f(x) - x \right] + e^{-\lambda x} \left[ f'(x) - 1 \right]
        $$
        则：
        $$
        G'(\xi) = -\lambda e^{-\lambda \xi} \left[ f(\xi) - \xi \right] + e^{-\lambda \xi} \left[ f'(\xi) - 1 \right] = 0
        $$
        则：
        $$
        -\lambda \left[ f(\xi) - \xi \right] + \left[ f'(\xi) - 1 \right] = 0
        $$
        则最终可得：
        $$
        \boxed{\exists \xi \in (0, \eta) ,\, f'(\xi) - \lambda \left[ f(\xi) - f(x) \right] = 1}
        $$
    
    :::

## II. 拉格朗日中值定理

设函数$f(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导，则至少存在一个点$\xi \in (a, b)$，使得：
$$
f(b) - f(a) = f'(\xi) (b - a)
$$
::: details Proof

> 已知$f(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导，求证：$f(b) - f(a) = f'(\xi) (b - a)$

设函数$F(x) = \left[ f(b) - f(a) \right] x - \left[ b - a \right] f(x)$，则：
$$
\begin{gather}
F(a) = af(b) - af(a) - bf(a) + af(a) = af(b) - bf(a) \\
F(b) = bf(b) - bf(a) - bf(b) + af(b) = af(b) - bf(a)
\end{gather}
$$
可见$F(a) = F(b)$，且函数$F(x)$在$\left[ a, b \right]$上连续、在$(a, b)$内可导，则根据罗尔定理可知：
$$
\exists \xi \in (a, b), F'(\xi) = f(b) - f(a) - f'(\xi) (b - a) = 0
$$
则最终移项即可证得：
$$
\exists \xi \in (a, b), f(b) - f(a) = f'(\xi) (b - a)
$$
:::

::: tip Tip

拉格朗日中值定理本质是是罗尔定理的推广，罗尔定理是拉格朗日中值定理当$f(a) = f(b)$时的特殊情况，而拉格朗日中值定理的几何含义则是：一条满足条件的曲线，在$(a, b)$内至少存在一个点，使得在此点处的曲线的切线的斜率等于曲线在此区间的两侧端点的连线的斜率；或是在$(a, b)$内至少存在一个点，使得在此点处的瞬时变化率等于曲线在此区间的平均变化率

**推论**：如果函数$f(x)$在区间$I$上连续，$I$内可导且导数恒为零，那么$f(x)$在区间$I$上是一个常数

:::

- **例6**：设函数$f(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导，证明：在$(a, b)$内至少存在一点$\xi$，使得$\dfrac{bf(b) - af(a)}{b - a} = \xi f'(\xi) + f(\xi)$.

    ::: details Answer

    > 设函数$F(x) = xf(x)$，则$F'(x) = xf'(x) + f(x)$，且$F(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导

    对于函数$F(x)$，在区间$\left[ a, b \right]$上应用拉格朗日中值定理，则有：
    $$
    \exists \xi \in (a, b), F(b) - F(a) = F'(\xi) (b - a)
    $$
    即：
    $$
    \frac{bf(b) - af(a)}{b - a} = \xi f'(\xi) + f(\xi)
    $$
    :::

- **例7**：已知函数$f(x)$在$\left[ 0, 1 \right]$上连续，在$(0, 1)$内可导，且$f(0) = 0$、$f(1) = 1$，试证明：在$(0, 1)$内至少有一点$\xi$，使得$e^{\xi - 1} \left[ f(\xi) + f'(\xi) \right] = 1$.

    ::: details Answer

    > 令$F(x) = e^{x - 1} f(x)$，则$F(x)$在$\left[ 0, 1 \right]$上连续且在$(0, 1)$内可导

    因为$f(0) = 0$，所以：
    $$
    F(0) = e^{0 - 1} f(0) = 0
    $$
    又因为$f(1) = 1$，所以：
    $$
    F(1) = e^{1 - 1} f(1) = 1
    $$
    则由拉格朗日中值定理可得：
    $$
    \exists \xi \in (0, 1) ,\, F(1) - F(0) = F'(\xi) = 1
    $$
    而：
    $$
    F'(x) = e^{x - 1} f(x) + e^{x - 1} f'(x) = e^{x - 1} \left[ f(x) + f'(x) \right]
    $$
    则最终可得：
    $$
    \boxed{F'(\xi) = e^{\xi - 1} \left[ f(\xi) + f'(\xi) \right] = 1}
    $$
    :::
    
- **例8**：设$b \gt a \gt 0$，试证明：$\dfrac{b - a}{1 + b^2} \lt \arctan b - \arctan a \lt \dfrac{b - a}{1 + a^2}$.

    ::: details Answer

    > 设$f(x) = \arctan x$，则$f(x)$在$\left[ a, b \right]$上连续且在$(a, b)$内可导

    根据拉格朗日中值定理可知：
    $$
    \exists \xi \in (a, b) ,\, \arctan b - \arctan a = f'(\xi) (b - a)
    $$
    而：
    $$
    f'(x) = \frac{1}{1 + x^2}
    $$
    则：
    $$
    f'(\xi) (b - a) = \frac{b - a}{1 + \xi^2}
    $$
    又因为：
    $$
    a \lt \xi \lt b
    $$
    所以：
    $$
    \frac{b - a}{1 + b^2} \lt \frac{b - a}{1 + \xi^2} \lt \frac{b - a}{1 + a^2}
    $$
    则最终可得：
    $$
    \boxed{\dfrac{b - a}{1 + b^2} \lt \arctan b - \arctan a \lt \dfrac{b - a}{1 + a^2}}
    $$
    :::

- **例9**：求极限$\lim_{x \to 0} \dfrac{\tan \sin x - \tan x}{x^3}$.

    ::: details Answer

    对$f(x) = \tan x$在$\left[ \sin x, x \right]$上使用拉格朗日中值定理，则有：
    $$
    \exists \xi \in (\sin x, x) ,\, \tan (\sin x) - \tan x = (\sin x - x) \sec^2 \xi
    $$
    将其代入原式后：
    $$
    \lim_{x \to 0} \dfrac{\tan \sin x - \tan x}{x^3} = \lim_{x \to 0} \frac{(\sin x - x) \sec^2 \xi}{x^3} \\
    = \lim_{x \to 0} \frac{\sin x - x}{x^2} = \lim_{x \to 0} \frac{-\frac{1}{6} x^3}{x^3} = -\frac{1}{6}
    $$
    :::

## III. 柯西中值定理

设函数$f(x)$、$g(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导，且$g'(x) \neq 0$，则至少存在一个点$\xi \in (a, b)$，使得：
$$
\dfrac{f(b) - f(a)}{g(b) - g(a)} = \dfrac{f'(\xi)}{g'(\xi)}
$$

::: details Proof

> 设函数$f(x)$、$g(x)$，它们在$\left[ a, b \right]$上连续、在$(a, b)$内可导，且$\forall x \in (a, b) ,\, \exists g'(x) \neq 0$，试证明柯西中值定理

设函数：
$$
\varphi(x) = g(x) \left[ f(b) - f(a) \right] - f(x) \left[ g(b) - g(a) \right]
$$
则其在$\left[ a, b \right]$上连续、在$(a, b)$内可导，且：
$$
\begin{gather}
\varphi(a) = g(a) \left[ f(b) - f(a) \right] - f(a) \left[ g(b) - g(a) \right]
= g(a) f(b) - g(a) f(a) - f(a) g(b) + f(a) g(a) = g(a) f(b) - f(a) g(b) \\
\varphi(b) = g(b) \left[ f(b) - f(a) \right] - f(b) \left[ g(b) - g(a) \right]
= g(b) f(b) - g(b) f(a) - f(b) g(b) + f(b) g(a) = f(b) g(a) - g(b) f(a)
\end{gather}
$$
显然$\varphi(a) = \varphi(b)$，则由罗尔定理可知：
$$
\exists \xi \in (a, b) ,\, \varphi'(\xi) = g'(\xi) \left[ f(b) - f(a) \right] - f'(\xi) \left[ g(b) - g(a) \right] = 0
$$
又因为$\forall x \in (a, b) ,\, \exists g'(x) \neq 0$，则：
$$
\exists \xi \in (a, b) ,\, \frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(\xi)}{g'(\xi)}
$$
:::

- **例10**：设$ab \gt 0 \, (a \lt b)$，试证明：存在一点$\xi \in (a, b)$，使得$ae^b - be^a = (a - b)(1 - \xi)e^{\xi}$.

    ::: details Answer

    > 设$f(x) = \dfrac{e^x}{x}$、$g(x) = \dfrac{1}{x}$，则$f(x)$、$g(x)$皆在$\left[ a, b \right]$上连续、在$(a, b)$内可导，且$g'(x) \neq 0$

    根据柯西中值定理，可知：
    $$
    \exists \xi \in (a, b) ,\, \frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(\xi)}{g'(\xi)}
    $$
    即：
    $$
    \frac{\frac{e^b}{b} - \frac{e^a}{a}}{\frac{1}{b} - \frac{1}{a}} = \frac{\frac{\xi e^{\xi} - e^{\xi}}{\xi^2}}{-\frac{1}{\xi^2}}
    $$
    整理可得：
    $$
    ae^b - be^a = e^{\xi} (a - b) (1 - \xi)
    $$
    :::

- **例11**：设函数$f(x)$在$\left[ a, b \right]$上连续，在$(a, b)$内可导，且$f'(x) \neq 0$，试证明：存在$\xi, \eta \in (a, b)$，使得$\dfrac{f'(\xi)}{f'(\eta)} = \dfrac{e^b - e^a}{b - a} \cdot e^{-\eta}$.

    ::: details Answer

    > 设$g(x) = e^x$，则$g(x)$在$\left[ a, b \right]$上连续且在$(a, b)$内可导

    根据柯西中值定理，可知：
    $$
    \exists \eta \in (a, b) ,\, \frac{f(b) - f(a)}{e^b - e^a} = \frac{f'(\eta)}{e^{\eta}}
    $$
    根据拉格朗日中值定理，可知：
    $$
    \exists \xi \in (a, b) ,\, \frac{f(b) - f(a)}{b - a} = f'(\xi)
    $$
    则：
    $$
    \exists \xi ,\, \eta \in (a, b) ,\, \frac{f'(\xi) (b - a)}{e^b - e^a} = \frac{f'(\eta)}{e^{\eta}}
    $$
    即：
    $$
    \exists \xi ,\, \eta \in (a, b) ,\, \frac{f'(\xi)}{f'(\eta)} = \frac{e^b - e^a}{b - a} \cdot e^{-\eta}
    $$
    :::

## IV. 泰勒公式

::: details Proof

> 若函数$f(x)$在$x_0$处$n$阶可导，则必存在邻域$U(x_0)$，使得$\forall x \in U(x_0)$，有：
> $$
> f(x) = f(x_0) + f'(x_0) (x - x_0) + \frac{1}{2!} f''(x_0) (x - x_0)^2 + \frac{1}{3!} f'''(x_0) (x - x_0)^3
>  + \dots + \frac{1}{n!} f^{(n)}(x_0) (x - x_0)^n + R_n(x)
> $$
> 其中$R_n(x) = \omicron \left[ (x - x_0)^n \right]$为皮亚诺余项、$R_n(x) = \dfrac{f^{(n + 1)}(\xi)}{(n + 1)!} (x - x_0)^{n + 1}$为拉格朗日余项，其中$x_0 \lt \xi \lt x$.

首先，令$\Delta x = x - x_0$、$\Delta y = f(x) - f(x_0)$；然后，若$f(x)$在$x_0$处可微，则有：
$$
\Delta y = f'(x_0) \Delta x + \omicron(\Delta x)
$$
即：
$$
f(x) - f(x_0) = f'(x_0) ( x - x_0 ) + \omicron(x - x_0)
$$
移项可得：
$$
f(x) = f(x_0) + f'(x_0) (x - x_0) + \omicron(x - x_0)
$$
尝试用一个$n$次多项式来近似函数值，设：
$$
\rho(x) = a_0 + a_1 (x - x_0) + a_2 (x - x_0)^2 + \dots + a_n (x - x_0)^n
$$
且：
$$
f(x) = \rho(x) + R_n(x)
$$
其中$R_n(x)$为$(x - x_0)^n$的高阶无穷小，则：
$$
\begin{gather}
f(x) = a_0 + a_1 (x - x_0) + a_2 (x - x_0)^2 + a_3 (x - x_0)^3 + \dots + a_n (x - x_0)^n + R_n(x) \\
f'(x) = a_1 + 2 a_2 (x - x_0) + 3 a_3 (x - x_0)^2 + \dots + n a_n (x - x_0)^{n - 1} + R_n(x) \\
f''(x) = 2 a_2 + 6 a_3 (x - x_0) + \dots + n (n - 1) a_n (x - x_0)^{n - 2} + R_n(x) \\
f'''(x) = 6 a_3 + \dots + n(n - 1)(n - 2) a_n (x - x_0)^{n - 3} + R_n(x) \\
\end{gather}
$$
将$x = x_0$代入$f(x)$可得：
$$
a_0 = f(x_0)
$$
将$x = x_0$代入$f'(x)$可得：
$$
a_1 = f'(x_0)
$$
将$x = x_0$代入$f''(x)$可得：
$$
a_2 = \frac{1}{2} f''(x_0)
$$
将$x = x_0$代入$f'''(x)$可得：
$$
a_3 = \frac{1}{6} f'''(x_0)
$$
将$x = x_0$代入$f^{(n)}(x)$可得：
$$
a_n = \frac{1}{n!} f^{(n)}(x_0)
$$
由此可将$f(x)$重写为：
$$
f(x) = f(x_0) + f'(x_0) (x - x_0) + \frac{1}{2!} f''(x_0) (x - x_0)^2 + \frac{1}{3!} f'''(x_0) (x - x_0)^3
 + \dots + \frac{1}{n!} f^{(n)}(x_0) (x - x_0)^n + R_n(x)
$$
当$n = 2$时：
$$
f(x) = f(x_0) + f'(x_0) (x - x_0) + \frac{1}{2!} f''(x_0) (x - x_0)^2 + R_2(x)
$$
考虑这个极限：
$$
\begin{gather}
\lim_{x \to x_0} \frac{R_2(x)}{(x - x_0)^2}
= \lim_{x \to x_0} \frac{f(x) - \left[ f(x_0) + f'(x_0) (x - x_0) + \dfrac{f''(x_0)}{2!} (x - x_0)^2 \right]}{(x - x_0)^2} \\
= \lim_{x \to x_0} \frac{f'(x) - f'(x_0) - f''(x_0) (x - x_0)}{2 (x - x_0)}
= \frac{1}{2} \lim_{x \to x_0} \frac{f'(x) - f'(x_0)}{x - x_0} - \frac{1}{2} \lim_{x \to x_0} \frac{f''(x_0) (x - x_0)}{x - x_0} \\
= \frac{1}{2} f''(x_0) - \frac{1}{2} f''(x_0) = 0
\end{gather}
$$
将此推广即可得到皮亚诺余项形式的泰勒公式：
$$
f(x) = f(x_0) + f'(x_0) (x - x_0) + \frac{1}{2!} f''(x_0) (x - x_0)^2 + \frac{1}{3!} f'''(x_0) (x - x_0)^3
 + \dots + \frac{1}{n!} f^{(n)}(x_0) (x - x_0)^n + \omicron \left[ (x - x_0)^n \right]
$$
再尝试求出$R_2(x)$的具体表达式，考虑这个式子：
$$
\frac{R_2(x)}{(x - x_0)^3}
$$
其中：
$$
R_2(x) = f(x) - f(x_0) - f'(x_0) (x - x_0) - \frac{f''(x_0)}{2!} (x - x_0)^2 \Rightarrow R_2(x_0) = 0
$$
对其使用柯西中值定理：
$$
\exists \xi_1 \in (x_0, x), \frac{R_2(x)}{(x - x_0)^3} = \frac{R_2(x) - R_2(x_0)}{(x - x_0)^3 - 0} = \frac{R_2'(\xi_1)}{3 (\xi_1 - x_0)^2}
$$
其中：
$$
R_2'(x) = f'(x) - f'(x_0) - f''(x_0) (x - x_0) \Rightarrow R_2'(x_0) = 0
$$
对其再次使用柯西中值定理：
$$
\exists \xi_2 \in (x_0, \xi_1), \frac{R_2'(x)}{3(\xi_1 - x_0)^2} = \frac{R_2'(\xi_1) - R_2'(x_0)}{3(\xi_1 - x_0)^2 - 0} = \frac{R_2''(\xi_2)}{3 \cdot 2 \cdot (\xi_2 - x_0)}
$$
其中：
$$
R_2''(x) = f''(x) - f''(x_0) \Rightarrow R_2''(x_0) = 0
$$
对其再次使用柯西中值定理：
$$
\exists \xi \in (x_0, \xi_2), \frac{R_2''(\xi_2)}{3! (\xi_2 - x_0)} = \frac{R_2''(\xi_2) - R_2''(x_0)}{3! (\xi_2 - x_2) - 0} = \frac{R_2'''(\xi)}{3!} = \frac{f'''(\xi)}{3!}
$$
于是：
$$
R_2(x) = \frac{f'''(\xi)}{3!} (x - x_0)^3
$$
将此推广即可得到拉格朗日余项形式的泰勒公式：
$$
f(x) = f(x_0) + f'(x_0) (x - x_0) + \frac{f''(x_0)}{2!} (x - x_0)^2 + \dots + \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n + \frac{f^{(n + 1)}(\xi)}{(n + 1)!} (x - x_0)^{n + 1}
$$
:::

### 4.1 带拉格朗日余项的泰勒公式

设$x_0 \in (a, b)$，$f(x)$在$(a, b)$内有$n + 1$阶导数，则对任意$x \in (a, b)$，皆有：
$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2!} (x - x_0)^2 + \dots + \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n + R_n(x)
$$
其中$R_n(x) = \dfrac{f^{(n + 1)}(\xi)}{(n + 1)!} (x - x_0)^{n + 1}$（$\xi$介于$x_0$与$x$之间）

### 4.2 带佩亚诺余项的泰勒公式

设$f(x)$在点$x_0$的某邻域内有$n$阶导数，则在此邻域内，有：
$$
f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2!} (x - x_0)^2 + \dots + \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n + R_n(x)
$$
其中$R_n(x) = \omicron((x - x_0)^n)$

- **麦克劳林公式**：

    上述公式当$x_0 = 0$时即为麦克劳林公式：
    $$
    f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!} x^2 + \dots + \frac{f^{(n)}(0)}{n!} x^n + R_n(x)
    $$
    其中$R_n(x) = \omicron(x^n)$或$R_n(x) = \dfrac{f^{(n + 1)}(\xi)}{(n + 1)!} x^{n + 1}$（$\xi$介于$x_0$与$x$之间）

### 4.3 常用的麦克劳林展开式

$$
\begin{gather}
e^x = 1 + x + \frac{x^2}{2!} + \dots + \frac{x^n}{n!} + \omicron(x^n) \tag{1} \\
\sin x = x - \frac{x^3}{3!} + \dots + (-1)^n \frac{x^{2n + 1}}{(2n + 1)!} + \omicron(x^{2n + 1}) \tag{2} \\
\cos x = 1 - \frac{x^2}{2!} + \dots + (-1)^n \frac{x^{2n}}{2n!} + \omicron(x^{2n}) \tag{3} \\
\ln (1 + x) = x - \frac{x^2}{2} + \dots + (-1)^{n - 1} \frac{x^n}{n} + \omicron(x^n) \tag{4} \\
(1 + x)^a = 1 + ax + \frac{a(a - 1)}{2!} x^2 + \dots + \frac{a(a - 1) \dots (a - n + 1)}{n!} x^n + \omicron(x^n) \tag{5}
\end{gather}
$$

- **例12**：设函数$f(x) = \dfrac{\sin x}{1 + x^2}$在$x = 0$处的3次泰勒多项式为$ax + bx^2 + cx^3$，则$a$、$b$、$c$的值是多少？

    ::: details Answer

    直接就是一手泰勒展开：
    $$
    \begin{gather}
    f(x) = \sin x \cdot (1 + x^2)^{-1} \\
    = (x - \frac{x^3}{6} + \omicron(x^3)) (1 - x^2 + \omicron(x^2)) \\
    = x - x^3 + \omicron(x^3) - \frac{1}{6} x^3 + \frac{1}{6} x^5 - \omicron(x^5) + \omicron(x^3) - \omicron(x^5) + \omicron(x^5) \\
    = x - \frac{7}{6} x^3 + \omicron(x^3)
    \end{gather}
    $$
    显然可见：
    $$
    a = 1 ,\, b = 0 ,\, c = -\frac{7}{6}
    $$
    :::

- **例13**：函数$f(x) = x^2 2^x$在$x = 0$处的$n$阶导数$f^{(n)}(0)$的值是多少？

    ::: details Answer

    直接就是一手泰勒展开：
    $$
    \begin{gather}
    f(x) = x^2 \cdot e^{x \ln 2} = x^2 \left[ 1 + x \ln 2 + \frac{(x \ln 2)^2}{2} + \dots + \frac{(x \ln 2)^n}{n!} + \omicron(x^n) \right] \\
    = x^2 + x^3 \ln 2 + \frac{x^4 \ln^2 2}{2} + \dots + \frac{x^{n + 2} \ln^n 2}{n!} + \omicron(x^{n +2})
    \end{gather}
    $$
    随后计算各阶导数值以找到规律：

    - $f'(0) = 0$
    - $f''(0) = 2$
    - $f'''(0) = 6 \ln 2$
    - $f''''(0) = 12 \ln^2 2$

    最终可以推断出：
    $$
    f^{(n)}(0) = \frac{n! \ln^{n - 2} 2}{(n - 2)!} = n (n - 1) (\ln 2)^{n - 2}
    $$
    :::

- **例14**：设函数$f(x)$在区间$\left[ a, b \right]$上有三阶导数，且$f'(a) = f'(b) = 0$，试证明：在区间$(a, b)$内至少存在一点$\xi$，使得$\left| f''(\xi) \right| \geq \dfrac{4}{(b - a)^2} \left| f(b) - f(a) \right|$.

- **例15**：试确定常数$a$和$b$，使$f(x) = x - (a + b \cos x) \sin x$为当$x \to 0$时关于$x$的5阶无穷小。

    ::: details Answer

    由题可得：
    $$
    \lim_{x \to 0} \frac{x - (a + b \cos x)\sin x}{x^5} \neq 0
    $$
    当场就是一个泰勒展开：
    $$
    \begin{gather}
    \lim_{x \to 0} \frac{x - a \sin x - b \sin x \cos x}{x^5} \\
    = \lim_{x \to 0} \frac{x - a \left[ x - \frac{x^3}{6} + \frac{x^5}{120} + \omicron(x^5) \right] - \frac{b}{2} \sin (2x)}{x^5} \\
    = \lim_{x \to 0} \frac{x - a \left[ x - \frac{x^3}{6} + \frac{x^5}{120} + \omicron(x^5) \right] - \frac{b}{2} \left[ 2x - \frac{4}{3} x^3 + \frac{4}{15} x^5 + \omicron(x^5) \right]}{x^5} \\
    = \lim_{x \to 0} \frac{x - ax + \frac{a}{6} x^3 - \frac{a}{120} x^5 - bx + \frac{2b}{3} x^3 - \frac{2b}{15} x^5 + \omicron(x^5)}{x^5} \\
    = \lim_{x \to 0} \frac{(1 - a - b) x + (\frac{a}{6} + \frac{2b}{3}) x^3 - (\frac{a}{120} + \frac{2b}{15}) x^5 + \omicron(x^5)}{x^5} \neq 0
    \end{gather}
    $$
    为保证结果不为零，则分子中小于五次的项必须被干掉，即：
    $$
    \begin{cases}
    1 - a - b = 0 \\
    \frac{1}{6} a + \frac{2}{3} b = 0
    \end{cases}
    $$
    解得：
    $$
    a = \frac{4}{3} ,\, b = -\frac{1}{3}
    $$
    :::

