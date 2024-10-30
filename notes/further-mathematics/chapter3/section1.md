# 第一节 微分中值定理

## I. 罗尔定理

> **极值**：若$\exists \delta \gt 0$，使得$\forall x \in U(x_0, \delta)$，若恒有$f(x) \geq f(x_0)$，则$f(x)$在$x_0$处取极小值；若恒有$f(x) \leq f(x_0)$，则$f(x)$在$x_0$处取极大值
>
> **费马引理**：设函数$f(x)$在$x_0$的某个邻域$U(x_0)$内有定义，并且在$x_0$处可导，如果对于任意$x \in U(x_0)$，有$f(x) \leq f(x_0)$或$f(x) \geq f(x_0)$，则$f'(x_0) = 0$
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

::: tip Tip

观察这三个条件，连续说明这个函数可以被不间断的一笔画出来，可导说明这个函数是光滑的，且两边端点函数值相等，则$f(x)$必然存在至少一个极大值或极小值，而根据费马引理可知，极大值或极小值处的导数值为零，罗尔定理还可以衍生出一些推论：

1. 设$f(x)$在$(a, b)$内可导，若$\lim_{x \to a^+} f(x) = \lim_{x \to b^-} f(x) = A$，则在$(a, b)$内至少存在一点$\xi$，使得$f'(\xi) = 0$
2. 设$f(x)$在$(a, b)$内可导，若$\lim_{x \to a^+} f(x) = \lim_{x \to b^-} f(x) = \pm \infty$，则在$(a, b)$内至少存在一点$\xi$，使得$f'(\xi) = 0$
3. 设$f(x)$在$(a, +\infty)$内可导，若$\lim_{x \to a^+} f(x) = \lim_{x \to +\infty} f(x) = A$，则在$(a, +\infty)$内至少存在一点$\xi$，使得$f'(\xi) = 0$
4. 设$f(x)$在$(-\infty, +\infty)$内可导，若$\lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} f(x) = A$，则在$(-\infty, +\infty)$内至少存在一点$\xi$，使得$f'(\xi) = 0$

:::

- **例1**：设$f(x)$在$(a, b)$内二阶可导，且$f(x_1) = f(x_2) = f(x_3)$，其中$a \lt x_1 \lt x_2 \lt x_3 \lt b$. 试证明：在$(x_1, x_2)内至少有一点$$\xi$，使得$f''(\xi) = 0$.

    ::: details Answer

    对于$f(x_1) = f(x_2)$，必然存在一点$\xi_1 \in (x_1, x_2)$使得$f'(\xi_1) = 0$；亦然，对于$f(x_2) = f(x_3)$，也必然存在一点$\xi_2 \in (x_2, x_3)$使得$f'(\xi_2) = 0$。由此可知对于$f'(\xi_1) = f'(\xi_2) = 0$，必然存在一点$\xi \in (\xi_1, \xi_2)$，使得$f''(\xi) = 0$

    :::
    
- **例2**：设函数$f(x)$在$\left[ 0, 1 \right]$上连续，在$(0, 1)$内可导，且$\lim_{x \to 0^+} \dfrac{f(x)}{x} = 2$，试证明：在$(0, 1)$内存在$\xi$，使得$f'(\xi) = \dfrac{2\xi}{1 - \xi^2} f(\xi)$.

    ::: details Answer

    

    :::

- **例3**：设函数$f(x)$在$\left[ 0, 1 \right]$上连续，在$(0, 1)$内可导，且$f(0) = f(1) = 0$，$f(0.5) = 1$，试证明：

    1. 存在$\eta \in (0.5, 1)$，使得$f(\eta) = \eta$；
    2. 对任意实数$\lambda$，必存在$\xi \in (0, \eta)$，使得$f'(\xi) - \lambda \left[ f(\xi) - \xi \right] = 1$.

    ::: details Answer

    - 证明一：

        设函数$g(x) = f(x) - x$，则：
        $$
        g(0.5) = 0.5 ,\, g(1) = -1
        $$
        根据介值定理，$g(x)$在$\left[ 0.5, 1 \right]$上连续，则至少存在一点$\eta \in (0.5, 1)$，使得$g(\eta) = 0$，即$f(\eta) = \eta$

    - 证明二：

        设$h(x) = f'(x) - \lambda f(x) + \lambda x - 1$，则：
        $$
        h(0) = f'(0) - 1 ,\, h(\eta) = f'(\eta) - 1
        $$

    :::

## II. 拉格朗日中值定理



## III. 柯西中值定理

## IV. 泰勒公式
