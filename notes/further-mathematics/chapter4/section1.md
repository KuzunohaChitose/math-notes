# 第一节 不定积分的概念与性质

::: details Tables of Content

[[toc]]

:::

## I. 原函数与不定积分

### 1.1 原函数的概念

如果在区间$I$上，可导函数$F(x)$的导函数为$f(x)$，即为任一$x$，都有$F'(x) = f(x)$，则称$F(x)$为$f(x)$在区间$I$上的一个原函数

::: tip Tip

**原函数存在定理**：

1. 连续函数必有原函数（反之并不成立）
2. 函数存在第一类间断点时一定没有原函数；存在第二类间断点时未必没有原函数

:::

- **例1**：当$x \in (0, 1)$时，试证明：函数$\arcsin (2x - 1)$、$\arccos (1 - 2x)$、$2 \arctan \sqrt{\dfrac{x}{1 - x}}$都是$\dfrac{1}{\sqrt{x - x^2}}$的原函数。

    ::: details Answer

    话不多说，直接对着就是导：
    $$
    \left[ \arcsin (2x - 1) \right]'
    = \frac{2}{\sqrt{1 - 4x^2 - 1 + 4x}} 
    = \frac{1}{\sqrt{x - x^2}}
    $$

    $$
    \left[ \arccos (1 - 2x) \right]' = -\frac{-2}{\sqrt{1 - 1 - 4x^2 + 4x}} = \frac{1}{\sqrt{x - x^2}}
    $$

    $$
    \begin{gather}
    \left[ 2 \arctan \sqrt{\frac{x}{1 - x}} \right]' \\
    = \frac{2}{1 + \frac{x}{1 - x}} \cdot \frac{1}{2} (\frac{x}{1 - x})^{-\frac{1}{2}} \cdot \frac{1 - x + x}{(1 - x)^2} \\
    = (1 - x) \cdot \frac{\sqrt{1 - x}}{\sqrt{x}} \cdot \frac{1}{(1 - x)^2} \\
    = \frac{1}{\sqrt{x}} \cdot \frac{1}{\sqrt{1 - x}} 
    = \frac{1}{\sqrt{x - x^2}}
    \end{gather}
    $$

    显然可见，这哥仨导完都是$\dfrac{1}{\sqrt{x - x^2}}$，所以它们都是$\dfrac{1}{\sqrt{x - x^2}}$的原函数

    :::
    
- **例2**：设函数$f(x) = \dfrac{e^{1/x} - 1}{e^{1/x} +1}$，
    $$
    g(x) =
    \begin{cases}
    x \sin \frac{1}{x}, & x \gt 0 \\
    x^2, & x \leq 0
    \end{cases}
    $$
    则在区间$(-1, 1)$内：

    - （A）$f(x)$与$g(x)$都存在原函数
    - （B）$f(x)$与$g(x)$都不存在原函数
    - （C）$f(x)$存在原函数，$g(x)$不存在原函数
    - （D）$f(x)$不存在原函数，$g(x)$存在原函数

### 1.2 不定积分的概念

在区间$I$上，函数$f(x)$的带有任意常数项的原函数称为$f(x)$在区间$I$上的不定积分，记作$\int f(x) \mathrm{d}x$，其中记号$\int$为积分符号，$f(x)$为被积函数，$f(x) \mathrm{d}x$为被积表达式，$x$为积分变量，即：
$$
F'(x) = f(x) \Rightarrow \int f(x) \mathrm{d}x = F(x)
$$


​    

