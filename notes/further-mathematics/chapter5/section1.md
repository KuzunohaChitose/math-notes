# 第一节 定积分

::: details Tables of Content

[[toc]]

:::

## I. 定积分的概念与性质

### 1.1 定积分的定义

设函数$f(x)$在区间$\left[ a, b \right]$上连续，用分点：
$$
a = x_0 \lt x_1 \lt x_2 \lt \dots \lt x_{i - 1} \lt x_i \lt \dots \lt x_n = b
$$
将$\left[ a, b \right]$分为$n$个小区间$\left[ x_{i - 1}, x_i \right]$（$i = 1, 2, ... , n$），用$\Delta x = x_i - x_{i - 1}$表示各个小区间的长度，在每个小区间上任取一点$\xi_i \in \left[ x_{i - 1}, x_i \right]$，进行作和：
$$
S_n = \sum_{i = 1}^n f(\xi_i) \Delta x_i
$$
令$\lambda = \max_{1 \leq i \leq n} \{ \Delta x_i \}$，若当$\lambda \to 0$时，对任意的划分方式和任意的取点方式，上述和式的极限存在且唯一，则称该极限值为函数$f(x)$在区间$\left[ a, b \right]$上的定积分，记作：
$$
\int_a^b f(x) \mathrm{d}x = \lim_{\lambda \to 0} \sum_{i = 1}^n f(\xi_i) \Delta x_i
$$
其中$x$称为积分变量，$f(x)$称为被积函数，$a$、$b$分别称为积分下限和积分上限；当$f(x)$在$\left[ a, b \right]$上的定积分存在时，称$f(x)$在$\left[ a, b \right]$上可积

> 特别地，若将$\left[ a, b \right]$平均分为$n$份，每一份的长度即为$\dfrac{b - a}{n}$，则：
> $$
> \lim_{n \to \infty} \sum_{i = 1}^n f(a + i \cdot \frac{b - a}{n}) \cdot \frac{b - a}{n} = \int_a^b f(x) \mathrm{d}x
> $$

### 1.2 可积的必要条件

若$f(x)$在$\left[ a, b \right]$上可积，则$f(x)$在$\left[ a, b \right]$上有界

### 1.3 可积的充分条件

若函数$f(x)$在$\left[ a, b \right]$上连续，则$f(x)$在$\left[ a, b \right]$上可积

若函数$f(x)$在$\left[ a, b \right]$上有界，且仅有有限个间断点，则$f(x)$在$\left[ a, b \right]$上可积

若函数$f(x)$在$\left[ a, b \right]$上单调，则$f(x)$在$\left[ a, b \right]$上可积

## II. 微积分基本定理

## III. 定积分的计算

## IV. 关于定积分的几个重要结论