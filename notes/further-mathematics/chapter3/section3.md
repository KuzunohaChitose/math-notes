# 第三节 函数的单调性与极值

::: details Tables of Content

[[toc]]

:::

## I. 函数的单调性

设函数$y = f(x)$在$\left[ a, b \right]$上连续、在$(a, b)$内可导，则：

1. 若在$(a, b)$内$f'(x) \geq 0$，且等号仅在有限多个点处成立，那么函数$y = f(x)$在$\left[ a , b \right]$上单调递增
2. 若在$(a, b)$内$f'(x) \leq 0$，且等号仅在有限多个点处成立，那么函数$y = f(x)$在$\left[ a , b \right]$上单调递减

- **例1**：判断函数$f(x) = (1 + \dfrac{1}{x})^x$在区间$(0, +\infty)$上的单调性。

    ::: details Answer

    直接开导：
    $$
    \begin{gather}
    f'(x) = \left[ (1 + \frac{1}{x})^x \right]' = (e^{x \ln (1 + \frac{1}{x})})' \\
    = e^{x \ln (1 + \frac{1}{x})} \cdot \left[ \ln (1 + \frac{1}{x}) - \frac{x \cdot x^{-2}}{1 + \frac{1}{x}} \right] \\
    = (1 + \frac{1}{x})^x \left[ \ln (1 + \frac{1}{x}) - \frac{1}{x + 1} \right] 
    \end{gather}
    $$
    又因为：
    $$
    \frac{x}{1 + x} \lt \ln (1 + x) \lt x
    $$
    所以：
    $$
    \frac{1}{1 + x} \lt \ln (1 + \frac{1}{x}) \lt \frac{1}{x}
    $$
    所以当$x \gt 0$时，$f'(x) \gt 0$，$f(x)$在$(0, +\infty)$上单调递增

    :::

- **例2**：设$f(x)$是可导函数，且满足$f(x) f'(x) \gt 0$，则\_\_\_\_\_.

    - （A）$f(1) \gt f(-1)$
    - （B）$f(1) \lt f(-1)$
    - （C）$\left| f(1) \right| \gt \left| f(-1) \right|$
    - （D）$\left| f(1) \right| \lt \left| f(-1) \right|$

    ::: details Answer

    

    :::

## II. 函数的极值与求法

## III. 函数的最值