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

## III. 微分的几何意义

## IV. 初等函数的微分公式与微分运算法则

## V. 一阶微分形式的不变性
