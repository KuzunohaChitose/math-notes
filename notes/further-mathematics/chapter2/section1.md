# 第一节 导数的概念

::: details Tables of Content

[[toc]]

:::

## I. 导数的定义

### 1.1 函数在一点处的导数

设函数$y = f(x)$在$U(x_0,\delta)$内有定义，若极限$\lim_{\Delta x \to 0} \dfrac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} \dfrac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$存在，则称$f(x)$在点$x_0$处可导，并称此极限值为$f(x)$在点$x_0$处的导数，记为$f'(x)$或$\dfrac{\mathrm{d} y}{\mathrm{d} x}|_{x = x_0}$；如果该极限不存在，则称此函数在点$x_0$处不可导

::: tip Tip

- **导数的意义**：

    1. 导数$f'(x_0)$表示函数在点$x_0$处的瞬时变化率。这意味着在$x_0$附近，当自变量$x$发生微小变化时，因变量$y$的变化速度
    2. 导数也是函数曲线在点$x_0$处的切线斜率，它反映了函数在该点增长或减少的趋势
    3. 在物理中，导数可以表示速度，例如：$y = f(x)$表示某物体的位移，$x$是时间，那么导数$f'(x)$就是物体在某时刻的速度，即位移随时间的变化率

- **定义式的解释**：

    $y$的变化量与$x$的变化量的比值，即$\dfrac{\Delta y}{\Delta x}$（$\Delta x$表示$x$的变化量，$\Delta y$表示$y$的变化量），而$y$的变化量可以表示为$x$变化后的量所求出的函数值减去$x$变化前的量所求出的函数值，以$x$的变化量$\Delta x$为变量，当其趋于$0$时，得到如下表达式：
    $$
    f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} \\
    $$
    从另一种角度考虑，同样是$y$的变化量与$x$的变化量的比值，直接以$x$为变量，$\Delta x = x - x_0$，当其趋向$x_0$时，得到如下表达式：
    $$
    f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
    $$

:::

- **例1**：设函数$f(x) = (e^x - 1)(e^{2x} - 2) ... (e^{nx} - n) ,\, (n \in \mathbb{Z}^+)$，则$f'(0)$的值为何？

    ::: details Answer

    根据导数的定义式，求此极限：
    $$
    f'(0) = \lim_{\Delta x \to 0} \frac{(e^{\Delta x + 0} - 1)(e^{2(\Delta x + 0)} - 2) \dots (e^{n(\Delta x + 0)} - n)}{\Delta x}
    $$
    注意其中的第一项，根据$e^x - 1 \sim x$，可以将其替换为$\Delta x$，然后与分母抵消，得到：
    $$
    f'(0) = \lim_{\Delta x \to 0} (e^{2\Delta x} - 2)(e^{3\Delta x} - 3) \dots (e^{n\Delta x} - n)
    $$
    此时直接将$\Delta x = 0$代入，最终可得：
    $$
    f'(0) = (1 - 2)(1 - 3) \dots (1 - n) = (-1) \cdot (-2) \dots -(n - 1) = (-1)^{n - 1} (n - 1)!
    $$
    :::

- **例2**：设$f(x)$在$x = a$处可导，则$\lim_{x \to 0} \dfrac{f(a + x) - f(a - x)}{x}$的值为何？

    ::: details Answer

    首先调整这个式子：
    $$
    \begin{gather}
    \lim_{x \to 0} \frac{f(a + x) - f(a - x)}{x} \\
    = \lim_{x \to 0} \frac{f(a + x) - f(a) + f(a) - f(a - x)}{x} \\
    = \lim_{x \to 0} \frac{f(a + x) - f(a)}{x} + \lim_{x \to 0} \frac{f(a) - f(a - x)}{x}
    \end{gather}
    $$
    对于第一项，显然它就是导数的定义式，故为$f'(a)$，考虑第二项（设$u = -x$）：
    $$
    \lim_{u \to 0} \frac{f(a) - f(u + a)}{-u} 
    = \lim_{u \to 0} \frac{f(u + a) - f(a)}{u} = f'(a)
    $$
    显然第二项也是导数的定义式，故其值也为$f'(a)$，则最终结果为：$2f'(a)$

    :::

### 1.2 单侧导数

正如极限分为左右极限，由极限定义的导数同样具有左右导数之分，其左导数为：
$$
f_-'(x_0) = \lim_{x \to x_0^-} \frac{f(x) - f(x_0)}{x - x_0}
$$
右导数为：
$$
f_+'(x_0) = \lim_{x \to x_0^+} \frac{f(x) - f(x_0)}{x - x_0}
$$

### 1.3 函数在一点处可导的充要条件

与极限一样，导数在一点处可导的充要条件也是左导数和右导数皆存在且相等，即：
$$
f_-'(x_0) = f_+'(x_0) = A \Leftrightarrow f'(x_0) = A
$$

- **例3**：函数$f(x) = (x^2 - 4x - 5) \left| x^3 - x \right|$的不可导点的个数为几个？

    ::: details Answer

    首先对函数进行分段处理：
    $$
    f(x) =
    \begin{cases}
    (x + 1)(x - 5)(x + 1)(x - 1)x, & x \geq 1 \\
    -(x + 1)(x - 5)(x + 1)(x - 1)x, & 0 \lt x \lt 1 \\
    (x + 1)(x - 5)(x + 1)(x - 1)x, & -1 \leq x \leq 0 \\
    -(x + 1)(x - 5)(x + 1)(x - 1)x, & x \lt -1 \\
    \end{cases}
    $$
    分别计算$x = 1$、$x = 0$、$x = -1$三点处的左右导数：

    - 当$x = 1$时：
        $$
        \begin{gather}
        f'_+(1) = \lim_{x \to 1^+} \frac{f(x) - f(1)}{x - 1} \\
        = \lim_{x \to 1^+} \frac{(x + 1)(x - 5)(x + 1)(x - 1)x}{x - 1} \\
        = \lim_{x \to 1^+} (x + 1)(x - 5)(x + 1)x = -16
        \end{gather}
        $$

        $$
        \begin{gather}
        f'_-(1) = \lim_{x \to 1^-} \frac{f(x) - f(1)}{x - 1} \\
        = \lim_{x \to 1^-} \frac{-(x + 1)(x - 5)(x + 1)(x - 1)x}{x - 1} \\
        = \lim_{x \to 1^-} -(x + 1)(x - 5)(x + 1)x = 16
        \end{gather}
        $$

        显然可见$f'_+(1) \neq f'_-(1)$

    - 当$x = 0$时：
        $$
        \begin{gather}
        f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0} \\
        = \lim_{x \to 0^+} \frac{-(x + 1)(x - 5)(x + 1)(x - 1)x}{x} \\
        = \lim_{x \to 0^+} -(x + 1)(x - 5)(x + 1)(x - 1) = -5 \\
        \end{gather}
        $$

        $$
        \begin{gather}
        f'_-(0) = \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0} \\
        = \lim_{x \to 0^-} \frac{(x + 1)(x - 5)(x + 1)(x - 1)x}{x} \\
        = \lim_{x \to 0^-} (x + 1)(x - 5)(x + 1)(x - 1) = 5 \\
        \end{gather}
        $$

        显然可见$f'_+(0) \neq f'_-(0)$

    - 当$x = -1时$：
        $$
        \begin{gather}
        f'_+(-1) = \lim_{x \to -1^+} \frac{f(x) - f(-1)}{x + 1} \\
        = \lim_{x \to -1^+} \frac{(x + 1)(x - 5)(x + 1)(x - 1)x}{x + 1} \\
        = \lim_{x \to -1^+} (x - 5)(x + 1)(x - 1)x = 0
        \end{gather}
        $$

        $$
        \begin{gather}
        f'_-(-1) = \lim_{x \to -1^-} \frac{f(x) - f(-1)}{x + 1} \\
        = \lim_{x \to -1^-} \frac{-(x + 1)(x - 5)(x + 1)(x - 1)x}{x + 1} \\
        = \lim_{x \to -1^-} -(x - 5)(x + 1)(x - 1)x = 0
        \end{gather}
        $$

        显然可见$f'_+(-1) = f'_-(-1)$

    综上所述，不可导点的个数为2

    :::

- **例4**：下列函数中，在$x = 0$处不可导的是哪个？

    - （A）$f(x) = \left| x \right| \sin \left| x \right|$
    - （B）$f(x) = \left| x \right| \sin \sqrt{\left| x \right|}$
    - （C）$f(x) = \cos \left| x \right|$
    - （D）$f(x) = \cos \sqrt{\left| x \right|}$

    ::: details Answer

    分别计算它们的左右极限：

    - A：
        $$
        \begin{gather}
        f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0} 
        = \lim_{x \to 0^+} \frac{x \sin x}{x}
        = \lim_{x \to 0^+} \sin x = 0
        \end{gather}
        $$

        $$
        \begin{gather}
        f'_-(0) = \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0} 
        = \lim_{x \to 0^-} \frac{-x \sin (-x)}{x}
        = \lim_{x \to 0^-} -\sin x = 0
        \end{gather}
        $$

        显然可见$f'_+(0) = f'_-(0)$

    - B：
        $$
        \begin{gather}
        f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0}
        = \lim_{x \to 0^+} \frac{x \sin \sqrt{x}}{x}
        = \lim_{x \to 0^+} \sin \sqrt{x} = 0
        \end{gather}
        $$

        $$
        \begin{gather}
        f'_-(0) = \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0}
        = \lim_{x \to 0^-} \frac{-x \sin \sqrt{-x}}{x}
        = \lim_{x \to 0^-} -\sin \sqrt{x} = 0
        \end{gather}
        $$

        显然可见$f'_+(0) = f'_-(0)$

    - C：
        $$
        \begin{gather}
        f'_+(0) = \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0}
        = \lim_{x \to 0^+} \frac{\cos x - 1}{x}
        = \lim_{x \to 0^+} \frac{-\frac{1}{2} x^2}{x} 
        = -\frac{1}{2} \lim_{x \to 0^+} x = 0
        \end{gather}
        $$

        $$
        \begin{gather}
        f'_-(0) = \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0}
        = \lim_{x \to 0^-} \frac{\cos (-x) - 1}{x}
        = \lim_{x \to 0^-} \frac{-\frac{1}{2} x^2}{x} 
        = -\frac{1}{2} \lim_{x \to 0^-} x = 0
        \end{gather}
        $$

        显然可见$f'_+(0) = f'_-(0)$

    - D：
        $$
        \begin{gather}
        f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0}
        = \lim_{x \to 0^+} \frac{\cos \sqrt{x} - 1}{x}
        = \lim_{x \to 0^+} \frac{-\frac{1}{2} x}{x} = -\frac{1}{2}
        \end{gather}
        $$

        $$
        \begin{gather}
        f'_-(0) = \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0}
        = \lim_{x \to 0^-} \frac{\cos \sqrt{-x} - 1}{x}
        = \lim_{x \to 0^-} \frac{\frac{1}{2} x}{x} = \frac{1}{2}
        \end{gather}
        $$

        显然可见$f'_+(0) \neq f'_-(0)$

    综上所述，最终答案选D

    :::

## II. 函数可导与连续的关系

若$f(x)$在点$x_0$处可导，则其在点$x_0$处必然连续；若$f(x)$在点$x_0$处连续，则其在点$x_0$处不一定可导

::: tip Tip

处处连续、处处不可导的魏尔斯特拉斯函数（Weierstrass Function）：
$$
W(x) = \sum_{n = 0}^{\infty} a^n \cos (b^n \pi x)
$$

> 其中$0 \lt a \lt 1$，$b$为正奇数，使得$ab \gt 1 + \frac{3}{2} \pi$

:::

- **例5**：设函数：
    $$
    f(x) =
    \begin{cases}
    x^2 \sin \frac{\pi}{x}, & x \lt 0, \\
    A, & x = 0, \\
    ax^2 + b, & x \gt 0
    \end{cases}
    $$
    在$a$、$b$、$A$取何值时使得$f(x)$在$x = 0$处可导，并求$f'(0)$.

    ::: details Answer

    若要使得$f(x)$在$x = 0$处可导，首先需要满足$f(x)$在$x = 0$处连续，即：
    $$
    \lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = A
    $$
    计算它的左侧连续值：
    $$
    \lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} x^2 \sin \frac{\pi}{x} = 0
    $$
    由此可得：
    $$
    \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (ax^2 + b) = b = A = 0
    $$
    已然解得$b = A = 0$，接下来需要满足$f(x)$在$x = 0$处左右导数相等，即：
    $$
    f'_+(0) = f'_-(0)
    $$
    计算其左侧导数：
    $$
    f'_-(0) = \lim_{x \to 0^-} \frac{f(x) - f(0)}{x - 0}
    = \lim_{x \to 0^-} \frac{x^2 \sin \frac{\pi}{x} - 0}{x - 0}
    = \lim_{x \to 0^-} x \sin \frac{\pi}{x} = 0
    $$
    则其右侧导数必然同为$0$：
    $$
    f'_+(0) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0}
    = \lim_{x \to 0^+} \frac{ax^2}{x}
    = a \lim_{x \to 0^+} x = 0
    $$
    可见$a$可以为任意常数，$A = b = 0$，$f'(0) = 0$

    :::

## III. 区间可导与导函数

1. 若函数$f(x)$在开区间$(a, b)$内每一点处可导，则称函数$f(x)$在开区间$(a, b)$内可导

2. 若函数$f(x)$在开区间$(a, b)$内可导，且导数$f'_+(a)$和$f'_-(b)$都存在，则称函数$f(x)$在闭区间$\left[ a, b \right]$上可导

3. 若函数$f(x)$在开区间$(a, b)$内可导，对于任一$x \in (a, b)$，都对应着一个确定的到数值$f'(x)$，则称$f'(x)$为函数$f(x)$在$(a, b)$内的导函数，$f'(x)$也记作$y'$、$\dfrac{\mathrm{d} y}{\mathrm{d} x}$或$\dfrac{\mathrm{d} f(x)}{x}$，导函数的定义式为：
    $$
    f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
    $$

- **例6**：试求$f(x) = x^a$的导函数$f'(x)$。

    ::: details Answer

    根据导函数的定义式，求此极限：
    $$
    \begin{gather}
    f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x} \\
    = \lim_{\Delta x \to 0} \frac{(x + \Delta x)^a - x^a}{\Delta x} \\
    = \lim_{u \to 0} \frac{(x + ux)^a - x^a}{ux} ,\, u = \frac{\Delta x}{x} \\
    = x^{a - 1} \lim_{u \to 0} \frac{(1 + u)^a - 1}{u} \\
    = x^{a - 1} \lim_{u \to 0} \frac{\frac{a!}{0!(a - 0)!} 1^a u^0 + \frac{a!}{1!(a - 1)!} 1^{a - 1} u^1 + o(u^2) - 1}{u} \\
    = x^{a - 1} \lim_{u \to 0} \frac{1 + a u + o(u^2) - 1}{u} = a x^{a - 1} \\
    \end{gather}
    $$
    :::

## IV. 导数的几何意义

1. $f'(x_0)$是曲线$y = f(x)$在点$(x_0, f(x_0))$处切线的斜率
2. 曲线$y = f(x)$在$x = x_0$处的切线方程是：$y - f(x_0) = f'(x_0)(x - x_0)$
3. 曲线$y = f(x)$在点$x = x_0$处的法线方程是：$y - f'(x_0) = -\dfrac{x - x_0}{f'(x_0)} ,\, (f'(x_0) \neq 0)$

- **例7**：设周期函数$f(x)$在$(-\infty, +\infty)$内可导，周期为$4$，且：
    $$
    \lim_{x \to 0} \frac{f(1) - f(1 - x)}{2x} = -1
    $$
    则曲线$y = f(x)$在点$(5, f(5))$处的切线的斜率是多少？

    ::: details Answer

    根据导数的定义可得：
    $$
    f'(5) = \lim_{\Delta x \to 0} \frac{f(\Delta x + 5) - f(5)}{\Delta x}
    = \lim_{u \to 0} \frac{f(5 - u) - f(5)}{-u} ,\, u = -\Delta x
    $$
    根据周期性可将此式子化为：
    $$
    \lim_{u \to 0} \frac{f(1) - f(1 - u)}{u}
    $$
    又因为题干所给出的条件：
    $$
    \lim_{x \to 0} \frac{f(1) - f(1 - x)}{-2x} = 1
    $$
    则可知：
    $$
    f(1) - f(1 - x) \sim -2x
    $$
    将此等价无穷小代入前式：
    $$
    \lim_{u \to 0} \frac{-2u}{u} = -2
    $$
    最终可得曲线$y = f(x)$在点$(5, f(5))$处的切线的斜率为$-2$

    :::

## V. 相关变化率

设$x = x(t)$及$y = y(t)$都是可导函数，而变量$x$与$y$之间存在某种关系，从而变化率$\mathrm{d} x / \mathrm{d} t$与$\mathrm{d} y / \mathrm{d} t$之间也存在某种关系，这两个相互依赖的变化率便称为**相关变化率**

- **例8**：已知一个长方形的长$h$以`2cm/s`的速率增加，宽$w$以`3cm/s`的速率增加，则当$h$ = 12cm、$w$ = 5cm时，它的对角线增加的速率是多少？

    ::: details Answer

    这个长方形的长$h$相关于时间$t$的函数为：
    $$
    h = 12 + 2t
    $$
    宽$w$相关于时间$t$的函数为：
    $$
    w = 5 + 3t
    $$
    对角线长度$l$相关于时间$t$的函数为：
    $$
    l  = \sqrt{h^2 + w^2} = \sqrt{(12 + 2t)^2 + (5 + 3t)^2}
    $$
    根据导函数的定义求其导函数：
    $$
    \begin{gather}
    l'(t) = \frac{\mathrm{d} l}{\mathrm{d} t} = \lim_{\Delta t \to 0} \frac{l(\Delta t + t) - l(t)}{\Delta t} \\
    = \lim_{\Delta t \to 0} \frac{\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} - \sqrt{(12 + 2t)^2 + (5 + 3t)^2}}{\Delta t} \\
    = \lim_{\Delta t \to 0} \frac{\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} - \sqrt{(12 + 2t)^2 + (5 + 3t)^2}}{\Delta t} \cdot \frac{\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} + \sqrt{(12 + 2t)^2 + (5 + 3t)^2}}{\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} + \sqrt{(12 + 2t)^2 + (5 + 3t)^2}} \\
    = \lim_{\Delta t \to 0} \frac{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2 - (12 + 2t)^2 - (5 + 3t)^2}{\Delta t (\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} + \sqrt{(12 + 2t)^2 + (5 + 3t)^2})} \\
    = \lim_{\Delta t \to 0} \frac{4\Delta t^2 + (12 + 2t)^2 + 4\Delta t(12 + 2t) + 9\Delta t^2 + (5 + 3t)^2 + 6\Delta t(5 + 3t) - (12 + 2t)^2 - (5 + 3t)^2}{\Delta t (\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} + \sqrt{(12 + 2t)^2 + (5 + 3t)^2})} \\
    = \lim_{\Delta t \to 0} \Delta t \cdot \frac{4\Delta t + 4(12 + 2t) + 9\Delta t + 6(5 + 3t)}{\Delta t 
    (\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} + \sqrt{(12 + 2t)^2 + (5 + 3t)^2})} \\
    = \lim_{\Delta t \to 0} \frac{4\Delta t + 4(12 + 2t) + 9\Delta t + 6(5 + 3t)}{\sqrt{(12 + 2\Delta t + 2t)^2 + (5 + 3\Delta t + 3t)^2} + \sqrt{(12 + 2t)^2 + (5 + 3t)^2}} \\
    = \frac{2(12 + 2t) + 3(5 + 3t)}{\sqrt{(12 + 2t)^2 + (5 + 3t)^2}}
    \end{gather}
    $$
    则当$h = 12$、$w = 5$时，对应的$t = 0$，将其代入$l'(t)$可得：
    $$
    l'(0) = \frac{24 + 15}{\sqrt{144 + 25}} = \frac{39}{13} = 3
    $$
    所以当$h = 12$、$w = 5$时，这个长方形的对角线增加的速率为`3cm/s`

    :::
