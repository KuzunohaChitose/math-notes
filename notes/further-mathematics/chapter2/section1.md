# 第一节 导数的概念

::: details Tables of Content

[[toc]]

:::

## I. 导数的定义

### 1.1 函数在一点处的导数

设函数$y = f(x)$在$U(x_0,\delta)$内有定义，若极限$\lim_{\Delta x \to 0} \dfrac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} \dfrac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$存在，则称$f(x)$在点$x_0$处可导，并称此极限值为$f(x)$在点$x_0$处的导数，记为$f'(x)$或$\dfrac{dy}{dx}|_{x = x_0}$；如果该极限不存在，则称此函数在点$x_0$处不可导

::: tip Tip

- **导数的意义**：

    1. 导数$f'(x_0)$表示函数在点$x_0$处的瞬时变化率。这意味着在$x_0$附近，当自变量$x$发生微小变化时，因变量$y$的变化速度
    2. 导数也是函数曲线在点$x_0$处的切线斜率，它反映了函数在该点增长或减少的趋势
    3. 在物理中，导数可以表示速度，例如：$y = f(x)$表示某物体的位移，$x$是时间，那么导数$f'(x)$就是物体在某时刻的速度，即位移随时间的变化率

- **定义式的解释**：

    $y$的变化量与$x$的变化量的比值，即$\dfrac{\Delta y}{\Delta x}$（$\Delta x$表示$x$的变化量，$\Delta y$表示$y$的变化量），而$y$的变化量可以表示为$x$变化后的量所求出的函数值减去$x$变化前的量所求出的函数值，最终得到如下表达式：
    $$
    f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
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

### 1.2 单侧导数

### 1.3 函数在一点处可导的充要条件

## II. 函数可导与连续的关系

## III. 区间可导与导函数

## IV. 导数的几何意义

## V. 相关变化率



如果函数$f(x)$在$x = a$处可导，是否可以说$\lim_{\Delta x \to 0} \dfrac{f(a + \Delta x) - f(a)}{\Delta x} = \lim_{\Delta x \to 0} \dfrac{f(a) - f(a - \Delta x)}{\Delta}$



