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

::: details Details

**若将$\left[ a, b \right]$平均分为$n$份，每一份的长度即为$\dfrac{b - a}{n}$**：

- 取$\xi_i = a + \dfrac{i - 1}{n} (b - a)$，则：
    $$
    \int_{a}^{b} f(x) \mathrm{d}x = \lim_{n \to \infty} \sum_{i = 1}^{n} f\left[ a + \frac{i - 1}{n} (b - a) \right] \cdot \frac{b - a}{n}
    $$

    > 特殊地，当$a = 0$、$b = 1$时：
    > $$
    > \int_{0}^{1} f(x) \mathrm{d}x = \lim_{n \to \infty} \frac{1}{n} \sum_{i = 1}^{n} f(\frac{i - 1}{n})
    > $$

- 取$\xi_i = a + \dfrac{i}{n} (b - a)$，则：
    $$
    \int_{a}^{b} f(x) \mathrm{d}x = \lim_{n \to \infty} \sum_{i = 1}^{n} f\left[ a + \frac{i}{n} (b - a) \right] \cdot \frac{b - a}{n}
    $$

    > 特殊地，当$a = 0$、$b = 1$时：
    > $$
    > \int_{0}^{1} f(x) \mathrm{d}x = \lim_{n \to \infty} \frac{1}{n} \sum_{i = 1}^{n} f(\frac{i}{n})
    > $$

- 取$\xi_i = a + \dfrac{2i - 1}{2n}$，则：
    $$
    \int_{a}^{b} f(x) \mathrm{d}x = \lim_{n \to \infty} f\left[ a + \frac{2i - 1}{2n} (b -a) \right] \cdot \frac{b - a}{n}
    $$

**若将$\left[ a, b \right]$平均分为$2n$份，每一份的长度为$\dfrac{b - a}{2n}$**：

- 取$\xi_i = a + \dfrac{i}{2n} (b - a)$，则：
    $$
    \int_{a}^{b} f(x) \mathrm{d}x = \lim_{n \to \infty} \sum_{i = 1}^{2n} f\left[ a + \frac{i}{2n} (b - a) \right] \cdot \frac{b - a}{2n}
    $$

    > 特殊地，当$a = 0$、$b = 1$时：
    > $$
    > \int_{a}^{b} f(x) \mathrm{d}x = \lim_{n \to \infty} \frac{1}{2n} \sum_{i = 1}^{2n} f(\frac{i}{2n})
    > $$

:::

- **例1**：将下列极限写出对应的定积分形式：

    1. $\displaystyle\lim_{n \to \infty} \dfrac{1}{n} (\sqrt{1 + \cos \dfrac{\pi}{n}} + \sqrt{1 + \cos \dfrac{2\pi}{n}} + ... + \sqrt{1 + \cos \dfrac{n\pi}{n}})$

        ::: details Answer
        $$
        \begin{gather}
        \lim_{n \to \infty} \frac{1}{n} (\sqrt{1 + \cos \frac{\pi}{n}} + \sqrt{1 + \cos \frac{2\pi}{n}} + \dots + \sqrt{1 + \cos \frac{n\pi}{n}}) \\
        = \lim_{n \to \infty} \frac{1}{n} \sum_{i = 1}^n \sqrt{1 + \cos \frac{i\pi}{n}}
        = \int_0^1 \sqrt{1 + \cos (\pi x)} \mathrm{d}x
        \end{gather}
        $$
        :::

    2. $\displaystyle\lim_{n \to \infty} (\dfrac{1}{n^3 + n^2} + \dfrac{4}{n^3 + 2n^2} + \dfrac{9}{n^3 + 3n^2} + ... + \dfrac{i^2}{n^3 + in^2} + ... + \dfrac{1}{2n})$

        ::: details Answer
        $$
        \begin{gather}
        \lim_{n \to \infty} (\frac{1}{n^3 + n^2} + \frac{4}{n^3 + 2n^2} + \frac{9}{n^3 + 3n^2} + \dots + \frac{i^2}{n^3 + in^2} + \dots + \frac{1}{2n}) \\
        = \lim_{n \to \infty} \sum_{i = 1}^n \frac{i^2}{n^3 + in^2}
        = \lim_{n \to \infty} \sum_{i = 1}^n \frac{i^2}{n^2 + in} \cdot \frac{1}{n} \\
        = \lim_{n \to \infty} \frac{1}{n} \sum_{i = 1}^n \frac{(\frac{i}{n})^2}{(1 + \frac{i}{n})}
        = \int_0^1 \frac{x^2}{1 + x} \mathrm{d}x \\
        \end{gather}
        $$
        :::

### 1.2 可积的必要条件

1. 若$f(x)$在$\left[ a, b \right]$上可积，则$f(x)$在$\left[ a, b \right]$上有界

### 1.3 可积的充分条件

1. 若函数$f(x)$在$\left[ a, b \right]$上连续，则$f(x)$在$\left[ a, b \right]$上可积

2. 若函数$f(x)$在$\left[ a, b \right]$上有界，且仅有有限个间断点，则$f(x)$在$\left[ a, b \right]$上可积

3. 若函数$f(x)$在$\left[ a, b \right]$上单调有界，则$f(x)$在$\left[ a, b \right]$上可积

### 1.4 定积分的几何意义

1. 若$\forall x \in \left[ a, b \right], f(x) \geq 0$，则$\int_{a}^{b} f(x) \mathrm{d}x$表示由曲线$y =f(x)$和两条直线$x = a$、$x = b$以及$x$轴所围成的曲边梯形的面积
2. 若$\forall x \in \left[ a, b \right], f(x) \leq 0$，则$\int_{a}^{b} f(x) \mathrm{d}x$表示由曲线$y = f(x)$和两条直线$x = a$、$x = b$以及$x$轴所围成的曲边梯形的面积的负值
3. 若上述条件均不满足，则$\int_{a}^{b} f(x) \mathrm{d}x$表示$f(x)$在$x$轴上方的图形面积与$x$轴下方的图形面积之差

::: tip Tip
$$
\begin{gather}
f(-x) = f(x) \Rightarrow \int_{-a}^{a} f(x) \mathrm{d}x = 2 \int_{0}^{a} f(x) \mathrm{d}x = 2 \int_{-a}^{0} f(x) \mathrm{d}x \\
f(-x) = -f(x) \Rightarrow \int_{-a}^{a} f(x) \mathrm{d}x = 0 \\
f(x + T) = f(x) \Rightarrow \int_{a}^{a + T} f(x) \mathrm{d}x = \int_{0}^{T} f(x) \mathrm{d}x \\
\end{gather}
$$
:::

- **例2**：根据定积分的几何意义计算$\int_0^1 \sqrt{1 - x^2} \mathrm{d}x$.

    ::: details Answer

    显然函数$y = \sqrt{1 - x^2}$是一个圆心在点$(0, 0)$且半径为$1$并处于$x$轴上方的半圆，则其面积为：
    $$
    S_{\circ} = \int_{0}^{1} \sqrt{1 - x^2} \mathrm{d}x = \frac{1}{4} \pi
    $$
    :::

- **例3**：设在区间$\left[ a, b \right]$上$f(x) \gt 0$、$f'(x) \lt 0$、$f''(x) \gt 0$，令$S_1 = \int_{a}^{b} f(x) \mathrm{d}x$、$S_2 = f(b)(b - a)$、$S_3 = \dfrac{1}{2} \left[ f(a) + f(b) \right](b - a)$，则三者之间的大小关系为\_\_\_\_\_.

    ::: details Answer

    > 设$f(x) = x^2 + 1$，$a = -1$，$b = 0$

    $$
    \begin{gather}
    S_1 = \int_{-1}^{0} (x^2 + 1) \mathrm{d}x = \frac{4}{3} \\
    S_2 = f(0) \left[ 0 - (-1) \right] = 1 \\
    S_3 = \frac{1}{2} \left[ f(-1) + f(0) \right] \left[ 0 - (-1) \right] = \frac{3}{2} \\
    \end{gather}
    $$

    比较后可得结果：
    $$
    S_3 \gt S_1 \gt S_2
    $$
    :::

### 1.5 定积分的性质

设下述定积分皆存在，则：

1. 设$\alpha$与$\beta$为常数，则：
    $$
    \int_{a}^{b} \left[ \alpha f(x) \pm \beta g(x) \right] \mathrm{d}x
    = \alpha \int_{a}^{b} f(x) \mathrm{d}x \pm \beta \int_{a}^{b} g(x) \mathrm{d}x
    $$

2. 设$a \lt b$，则：
    $$
    \int_{a}^{b} f(x) \mathrm{d}x = \int_{a}^{c} f(x) \mathrm{d}x + \int_{c}^{b} f(x) \mathrm{d}x
    $$

3. 若在区间$\left[ a, b \right]$上$f(x) \equiv 1$，则：
    $$
    \int_{a}^{b} 1 \mathrm{d}x = \int_{a}^{b} \mathrm{d}x = b - a
    $$

4. 若在区间$\left[ a, b \right]$上$f(x) \geq 0$，则：
    $$
    \int_{a}^{b} f(x) \mathrm{d}x \geq 0 \, (a \lt b)
    $$
    推论一：若在区间$\left[ a, b \right]$上$f(x) \leq g(x)$，则：（$a \leq b$）
    $$
    \int_{a}^{b} f(x) \mathrm{d}x \leq \int_{a}^{b} g(x) \mathrm{d}x \, (a \lt b)
    $$
    推论二：
    $$
    2 \left| \int_{a}^{b} f(x) \mathrm{d}x \right| \leq \int_{a}^{b} \left| f(x) \right| \mathrm{d}x \, (a \lt b)
    $$
    ::: details Attention

    > 设$f(x)$在$\left[ a, b \right]$上连续，且$\forall x \in \left[ a, b \right] \rightarrow f(x) \geq 0$

    1. $\exists x_0 \in \left[ a, b \right] \rightarrow f(x_0) \neq 0 \Leftrightarrow \displaystyle\int_{a}^{b} f(x) \mathrm{d}x \gt 0$
    2. $\displaystyle\int_{a}^{b} f(x) \mathrm{d}x = 0 \Leftrightarrow \forall x \in \left[ a, b \right] \rightarrow f(x) \equiv 0$

    :::

5. （估值定理）设$M$和$m$分别为函数$f(x)$在区间$\left[ a, b \right]$上的最大值和最小值，则：
    $$
    m(b - a) \leq \int_{a}^{b} f(x) \mathrm{d}x \leq M(b - a) ,\, a \lt b
    $$

6. （定积分第一中值定理）若函数$f(x)$在$\left[ a, b \right]$上连续，则：
    $$
    \exists \xi \in \left[ a, b \right] \rightarrow \int_{a}^{b} f(x) \mathrm{d}x = f(\xi) (b - a)
    $$

7. （定积分第二中值定理）若函数$f(x)$在$\left[ a, b \right]$上连续，$g(x)$在$\left[ a, b \right]$上可积且不变号，则：
    $$
    \exists \xi \in \left[ a, b \right] \rightarrow \int_{a}^{b} f(x) g(x) \mathrm{d}x = f(\xi) \int_{a}^{b} g(x) \mathrm{d}x
    $$

- **例4**：已知$\displaystyle\int_{-1}^{1} 3f(x) \mathrm{d}x = 18$、$\displaystyle\int_{-1}^{3} f(x) \mathrm{d}x = 4$、$\displaystyle\int_{-1}^{3} g(x) \mathrm{d}x = 3$
  
    1. $\displaystyle\int_{-1}^{1} f(x) \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int_{-1}^{1} 3f(x) \mathrm{d}x = 18 \\
        \Rightarrow 3 \int_{-1}^{1} f(x) \mathrm{d}x = 18 \\
        \Rightarrow \int_{-1}^{1} f(x) \mathrm{d}x = 6 \\
        \end{gather}
        $$
        :::
    
    2. $\displaystyle\int_{1}^{3} f(x) \mathrm{d}x$
    
        ::: details Answer
    
        由性质二可知：
        $$
        \begin{gather}
        \int_{1}^{3} f(x) \mathrm{d}x 
        = \int_{1}^{-1} f(x) \mathrm{d}x + \int_{-1}^{3} f(x) \mathrm{d}x \\
        = -\int_{-1}^{1} f(x) \mathrm{d}x + \int_{-1}^{3} f(x) \mathrm{d}x
        = -6 + 4 = -2 \\
        \end{gather}
        $$
        :::
    
    3. $\displaystyle\int_{3}^{-1} g(x) \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int_{3}^{-1} g(x) \mathrm{d}x
        = -\int_{-1}^{3} g(x) \mathrm{d}x
        = -3 \\
        \end{gather}
        $$
        :::
    
    4. $\displaystyle\int_{-1}^{3} \frac{1}{5} \left[ 4f(x) + 3g(x) \right] \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int_{-1}^{3} \frac{1}{5} \left[ 4f(x) + 3g(x) \right] \mathrm{d}x \\
        = \frac{4}{5} \int_{-1}^{3} f(x) \mathrm{d}x + \frac{3}{5} \int_{-1}^{3} g(x) \mathrm{d}x \\
        = \frac{4 \cdot 4}{5} + \frac{3 \cdot 3}{5} = 5 \\
        \end{gather}
        $$
        :::
    
- **例5**：设$I = \displaystyle\int_{0}^{\frac{\pi}{2}} \sin x \mathrm{d}x$、$J = \displaystyle\int_{0}^{\frac{\pi}{2}} x \mathrm{d}x$、$K = \displaystyle\int_{0}^{\frac{\pi}{2}} \tan x \mathrm{d}x$，则三者间的大小关系为\_\_\_\_\_.

    ::: details Answer

    :::

## II. 微积分基本定理

## III. 定积分的计算

## IV. 关于定积分的几个重要结论