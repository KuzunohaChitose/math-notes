<script setup>
import { useExmaple2_4_1 } from "./hooks";

useExmaple2_4_1();
</script>

# 第四节 函数的微分

::: details Answer

[[toc]]

:::

## I. 微分的定义

设函数$f(x)$在某区间内有定义，$x_0$及$x_0 + \Delta x$在此区间内，若函数的增量：

$$
\Delta y = f(x_0 + \Delta x) - f(x_0) = A \Delta x + \omicron(\Delta x)
$$

其中$A$是不依赖于$\Delta x$的常数，则称函数$f(x)$在点$x = x_0$处可微，称$\mathrm{d}y = A\Delta x$为$f(x)$在点$x = x_0$处相应于自变量增量$\Delta x$的微分，通常把自变量的增量$\Delta x$称为自变量的微分，记作$\mathrm{d}x$，即$\mathrm{d}x = \Delta x$

函数$f(x)$在点$x_0$处可微的充分必要条件是$f(x)$在点$x_0$处可导，且存在：

$$
\mathrm{d}y = f'(x) \Delta x = f'(x) \mathrm{d}x
$$

::: tip Tip

<canvas id="example-graph-2-4-1"></canvas>

对于此图形，其表示$y = x^2$这个函数当$x_0 = AB$、$\Delta x = BE$时，$\Delta y$与$\Delta x$的关系，显然$y$的增量为两个长方形加上一个小正方形的面积，也就是$\Delta y = 2 x_0 \Delta x + \Delta x^2$，其符合微分的定义：$A = 2x_0$，这是一个与$\Delta x$无关的常量；$\omicron(\Delta x) = \Delta x^2$，这是$\Delta x$的高阶无穷小

:::

## II. 可导、可微与连续的关系

可导必连续，连续未必可导；可微必连续，连续未必可微；可导必可微，可微必可导
$$
\begin{cases}
\text{可导} \Rightarrow \text{连续} \\
\text{可微} \Rightarrow \text{连续} \\
\text{可导} \Leftrightarrow \text{可微} \\
\end{cases}
$$

## III. 微分的几何意义

$\Delta y = f(x_0 + \Delta x) - f(x_0)$是曲线$y = f(x)$在$x = x_0$处对应于自变量增量$\Delta x$的纵坐标的增量，而微分$\mathrm{d}y|_{x = x_0}$则是曲线$y = f(x)$在点$(x_0, f(x_0))$处的切线的纵坐标的增量，微分就是用切线的变化量来近似原曲线的变化量

## IV. 初等函数的微分公式与微分运算法则

- **基本微分公式：**
    $$
    \mathrm{d}f(x) = f'(x) \mathrm{d}x
    $$

- **微分运算法则：**
    $$
    \begin{gather}
    \mathrm{d} (u \pm v) = \mathrm{d}u \pm \mathrm{d}v \\
    \mathrm{d} (uv) = v \mathrm{d}u + u \mathrm{d}v \\
    \mathrm{d} (\frac{u}{v}) = \frac{v \mathrm{d}u - u \mathrm{d}v}{v^2} \, (v \neq 0)
    \end{gather}
    $$
    

## V. 一阶微分形式的不变性

设$y = f(u)$、$u = g(x)$，则符合函数$y = f\left[ g(x) \right]$的微分为：
$$
\mathrm{d}y = f'(u) \mathrm{d}u = f'(u) g'(x) \mathrm{d}x
$$
由此可见，无论$u$是自变量亦或是中间变量，微分形式$\mathrm{d}y = f'(u) \mathrm{d}u$保持不变，该性质称为一阶微分形式的不变性

- **例1**：设$x = y^y$，则$\mathrm{d}y$ = \_\_\_\_\_.

    ::: details Answer

    首先通过隐函数求导求得$\mathrm{d}y / \mathrm{d}x$：
    $$
    \frac{\mathrm{d}}{\mathrm{d}x} (x) = \frac{\mathrm{d}}{\mathrm{d}x} (y^y) \\
    1 = \frac{\mathrm{d}}{\mathrm{d}x} (e^{y \ln y}) \\
    1 = e^{y \ln y} \cdot (y' \ln y + y') \\
    y' = \frac{1}{x (\ln y + 1)} \\
    $$
    则根据微分公式可得：
    $$
    \mathrm{d} y = \frac{\mathrm{d}y}{\mathrm{d}x} \mathrm{d}x = \frac{\mathrm{d}x}{x \ln y + x}
    $$
    :::

- **例2**：设$y = f(\ln x) e^{f(x)}$，其中$f$可微，则$\mathrm{d}y$ = \_\_\_\_\_.

    ::: details Answer
    $$
    \begin{gather}
    \mathrm{d}y = y' \mathrm{d}x = \left[ f(\ln x)\right ]' \cdot e^{f(x)} \mathrm{d}x + f(\ln x) \cdot (e^{f(x)})' \mathrm{d}x \\
    = \frac{f'(\ln x) e^{f(x)}}{x} \mathrm{d}x + f(\ln x) e^{f(x)} f'(x) \mathrm{d}x
    \end{gather}
    $$
    :::
