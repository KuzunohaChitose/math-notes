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

1. 若$\forall x \in \left[ a, b \right], f(x) \geq 0$，则$\displaystyle\int_{a}^{b} f(x) \mathrm{d}x$表示由曲线$y =f(x)$和两条直线$x = a$、$x = b$以及$x$轴所围成的曲边梯形的面积
2. 若$\forall x \in \left[ a, b \right], f(x) \leq 0$，则$\displaystyle\int_{a}^{b} f(x) \mathrm{d}x$表示由曲线$y = f(x)$和两条直线$x = a$、$x = b$以及$x$轴所围成的曲边梯形的面积的负值
3. 若上述条件均不满足，则$\displaystyle\int_{a}^{b} f(x) \mathrm{d}x$表示$f(x)$在$x$轴上方的图形面积与$x$轴下方的图形面积之差

::: tip Tip
$$
\begin{gather}
f(-x) = f(x) \Rightarrow \int_{-a}^{a} f(x) \mathrm{d}x = 2 \int_{0}^{a} f(x) \mathrm{d}x = 2 \int_{-a}^{0} f(x) \mathrm{d}x \\
f(-x) = -f(x) \Rightarrow \int_{-a}^{a} f(x) \mathrm{d}x = 0 \\
f(x + T) = f(x) \Rightarrow \int_{a}^{a + T} f(x) \mathrm{d}x = \int_{0}^{T} f(x) \mathrm{d}x \\
\end{gather}
$$
:::

- **例2**：根据定积分的几何意义计算$\displaystyle\int_0^1 \sqrt{1 - x^2} \mathrm{d}x$.

    ::: details Answer

    显然函数$y = \sqrt{1 - x^2}$是一个圆心在点$(0, 0)$且半径为$1$并处于$x$轴上方的半圆，则其面积为：
    $$
    S_{\circ} = \int_{0}^{1} \sqrt{1 - x^2} \mathrm{d}x = \frac{1}{4} \pi
    $$
    :::

- **例3**：设在区间$\left[ a, b \right]$上$f(x) \gt 0$、$f'(x) \lt 0$、$f''(x) \gt 0$，令$S_1 = \displaystyle\int_{a}^{b} f(x) \mathrm{d}x$、$S_2 = f(b)(b - a)$、$S_3 = \dfrac{1}{2} \left[ f(a) + f(b) \right](b - a)$，则三者之间的大小关系为\_\_\_\_\_.

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

1. （线性运算性质）设$\alpha$与$\beta$为常数，则：
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
    ::: details Proof
    
    设$F(x) = g(x) - f(x)$，则在$\left[ a, b \right]$上$F(x) \geq 0$，则根据定积分性质一和性质四可知：
    $$
    \begin{gather}
    0 \leq \int_{a}^{b} F(x) \mathrm{d}x = \int_{a}^{b} \left[ g(x) - f(x) \right] \mathrm{d}x \\
    = \int_{a}^{b} g(x) \mathrm{d}x - \int_{a}^{b} f(x) \mathrm{d}x \\
    \Rightarrow \int_{a}^{b} f(x) \mathrm{d}x \leq \int_{a}^{b} g(x) \mathrm{d}x
    \end{gather}
    $$
    :::
    
    推论二：
    $$
    \left| \int_{a}^{b} f(x) \mathrm{d}x \right| \leq \int_{a}^{b} \left| f(x) \right| \mathrm{d}x \, (a \lt b)
    $$
    ::: details Proof
    
    因为：
    $$
    -\left| f(x) \right| \leq f(x) \leq \left| f(x) \right|
    $$
    则由定积分性质四的推论一可知：
    $$
    -\int_a^b \left| f(x) \right| \mathrm{d}x \leq \int_a^b f(x) \mathrm{d}x \leq \int_a^b \left| f(x) \right| \mathrm{d}x
    $$
    即可证得：
    $$
    \left| \int_a^b f(x) \mathrm{d}x \right| \leq \int_a^b \left| f(x) \right| \mathrm{d}x
    $$
    :::
    
    ::: details Attention
    
    > 设$f(x)$在$\left[ a, b \right]$上连续，且$\forall x \in \left[ a, b \right] \rightarrow f(x) \geq 0$，试证明：
    >
    > 1. $\exists x_0 \in \left[ a, b \right] \rightarrow f(x_0) \neq 0 \Rightarrow \displaystyle\int_{a}^{b} f(x) \mathrm{d}x \gt 0$
    > 2. $\displaystyle\int_{a}^{b} f(x) \mathrm{d}x = 0 \Rightarrow \forall x \in \left[ a, b \right] \rightarrow f(x) \equiv 0$
    
    由$f(x)$在$\left[ a, b \right]$上连续可知：
    $$
    \forall x_0 \in \left[ a, b \right] \rightarrow f(x_0) = \lim_{x \to x_0} f(x)
    $$
    又因为：
    $$
    \forall x \in \left[ a, b \right] \rightarrow f(x) \geq 0
    $$
    且：
    $$
    \exists x_0 \in \left[ a, b \right] \rightarrow f(x_0) \neq 0
    $$
    所以：
    $$
    \exists x_0 \in \left[ a, b \right] \rightarrow f(x_0) = \lim_{x \to x_0} f(x) \gt 0
    $$
    又由极限的保号性可知：
    $$
    \exists \delta \gt 0 \rightarrow \forall x \in (x_0 - \delta, x_0 + \delta) \rightarrow f(x) \gt \epsilon \gt 0
    $$
    于是根据定积分的可加性可知：
    $$
    \begin{gather}
    \int_{a}^{b} f(x) \mathrm{d}x = \int_{a}^{x_0 - \delta} f(x) \mathrm{d}x + \int_{x_0 - \delta}^{x_0 + \delta} f(x) \mathrm{d}x + \int_{x_0 + \delta}^{b} f(x) \mathrm{d}x \\ 
    \gt \int_{x_0 - \delta}^{x_0 + \delta} f(x) \mathrm{d}x \gt \int_{x_0 - \delta}^{x_0 + \delta} \epsilon \mathrm{d}x = \epsilon \cdot 2\delta \gt 0
    \tag{1}
    \end{gather}
    $$
    假设：
    $$
    \forall x \in \left[ a, b \right] \rightarrow f(x) \not\equiv 0
    $$
    所以：
    $$
    \exists x_0 \in \left[ a, b \right] \rightarrow f(x_0) \gt 0
    $$
    则由（1）可知：
    $$
    \int_{a}^{b} f(x) \mathrm{d}x \gt 0
    $$
    这不符合前提条件，所以：
    $$
    \forall x \in \left[ a, b \right] \rightarrow f(x) \equiv 0 \tag{2}
    $$
    :::
    
5. （估值定理）设$M$和$m$分别为函数$f(x)$在区间$\left[ a, b \right]$上的最大值和最小值，则：
    $$
    m(b - a) \leq \int_{a}^{b} f(x) \mathrm{d}x \leq M(b - a) ,\, a \lt b
    $$
    ::: details Proof
    
    因为：
    $$
    \forall x \in \left[ a, b \right] \rightarrow m \leq f(x) \leq M \\
    $$
    所以由定积分性质四的推论一可知：
    $$
    \int_{a}^{b} m \mathrm{d}x \leq \int_{a}^{b} f(x) \mathrm{d}x \leq \int_{a}^{b} M \mathrm{d}x
    $$
    又因为定积分的线性运算性质以及性质三，有：
    $$
    \begin{gather}
    \int_{a}^{b} m \mathrm{d}x = m \int_{a}^{b} 1 \mathrm{d}x = m(b - a) \\
    \int_{a}^{b} M \mathrm{d}x = M \int_{a}^{b} 1 \mathrm{d}x = M(b - a) \\
    \end{gather}
    $$
    所以最终可得：
    $$
    m(b - a) \leq \int_a^b f(x) \mathrm{d}x \leq M(b - a)
    $$
    :::
    
6. （定积分第一中值定理）若函数$f(x)$在$\left[ a, b \right]$上连续，则：
    $$
    \exists \xi \in \left[ a, b \right] \rightarrow \int_{a}^{b} f(x) \mathrm{d}x = f(\xi) (b - a)
    $$
    ::: details Proof
    
    设$m$和$M$分别为函数$f(x)$在区间$\left[ a, b \right]$上的最大值和最小值，则由定积分性质五估值定理可知：
    $$
    m(b - a) \leq \int_{a}^{b} f(x) \mathrm{d}x \leq M(b - a)
    \Rightarrow m \leq \frac{\displaystyle\int_{a}^{b} f(x) \mathrm{d}x}{b - a} \leq M
    $$
    又因为$f(x)$在$\left[ a, b \right]$上连续，则由介值定理可知：
    $$
    \exists \xi \in \left[ a, b \right] \rightarrow f(\xi) = \frac{\displaystyle\int_a^b f(x) \mathrm{d}x}{b - a} \Rightarrow \int_a^b f(x) \mathrm{d}x = f(\xi)(b - a)
    $$
    ::: tip Tip
    
    1. 作用：用于去掉积分号
    2. $f(\xi) = \dfrac{\displaystyle\int_a^b f(x) \mathrm{d}x}{b - a}$表示$f(x)$在$\left[ a, b \right]$上的“平均值”
    
    :::
    
7. （定积分第二中值定理）若函数$f(x)$在$\left[ a, b \right]$上连续，$g(x)$在$\left[ a, b \right]$上可积且不变号，则：
    $$
    \exists \xi \in \left[ a, b \right] \rightarrow \int_{a}^{b} f(x) g(x) \mathrm{d}x = f(\xi) \int_{a}^{b} g(x) \mathrm{d}x
    $$
    ::: details Proof
    
    设$m$和$M$分别为函数$f(x)$在区间$\left[ a, b \right]$上的最小值和最大值，则$m \leq f(x) \leq M$，不妨设$g(x) \gt 0$，则有：
    $$
    m \cdot g(x) \leq f(x) \cdot g(x) \leq M \cdot g(x)
    $$
    则由定积分性质四的推论二可知：
    $$
    m \int_a^b g(x) \mathrm{d}x \leq \int_a^b f(x) g(x) \mathrm{d}x \leq M \int_a^b g(x) \mathrm{d}x
    \Rightarrow m \leq \frac{\displaystyle\int_a^b f(x) g(x) \mathrm{d}x}{\displaystyle\int_a^b g(x) \mathrm{d}x} \leq M
    $$
    则最终由介值定理可证：
    $$
    \exists \xi \in \left[ a, b \right] \rightarrow 
    f(\xi) = \frac{\displaystyle\int_a^b f(x) g(x) \mathrm{d}x}{\displaystyle\int_a^b g(x) \mathrm{d}x}
    \Rightarrow \int_a^b f(x) g(x) \mathrm{d}x = f(\xi) \int_a^b g(x) \mathrm{d}x
    $$
    而在$g(x) \lt 0$时也同理可证
    
    :::

- **例4**：求$\displaystyle\lim_{n \to \infty} \int_0^1 \frac{x^n}{1 + x} \cdot f(x) \mathrm{d}x$，其中$f(x)$在$\left[ 0, 1 \right]$上连续

    ::: details Answer

    因为$\dfrac{f(x)}{1 + x}$在区间$\left[ a, b \right]$上连续，且$x^n$在区间$\left[ 0, 1 \right]$上可积并不变号，则根据定积分第二中值定理可知：
    $$
    \begin{gather}
    \exists \xi \in \left[ 0, 1 \right] \rightarrow \lim_{n \to \infty} \int_0^1 \frac{x^n f(x)}{1 + x} \mathrm{d}x \\
    = \lim_{x \to \infty} \frac{f(\xi)}{1 + \xi} \int_0^1 x^n \mathrm{d}x \\
    = \frac{f(\xi)}{1 + \xi} \lim_{x \to \infty} \left[ \frac{x^{n + 1}}{n + 1} \right]_{0}^{1} \\
    = \frac{f(\xi)}{1 + \xi} \lim_{x \to \infty} (\frac{1^{n + 1}}{n + 1} - \frac{0^{n + 1}}{n + 1}) \\
    = \frac{f(\xi)}{1 + \xi} \lim_{x \to \infty} \frac{1}{n + 1} = 0 \\
    \end{gather}
    $$
    :::

- **例5**：已知$\displaystyle\int_{-1}^{1} 3f(x) \mathrm{d}x = 18$、$\displaystyle\int_{-1}^{3} f(x) \mathrm{d}x = 4$、$\displaystyle\int_{-1}^{3} g(x) \mathrm{d}x = 3$
  
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
    
- **例6**：设$I = \displaystyle\int_{0}^{\frac{\pi}{4}} \sin x \mathrm{d}x$、$J = \displaystyle\int_{0}^{\frac{\pi}{4}} x \mathrm{d}x$、$K = \displaystyle\int_{0}^{\frac{\pi}{4}} \tan x \mathrm{d}x$，则三者间的大小关系为\_\_\_\_\_.

    ::: details Answer
    $$
    \begin{gather}
    \because \forall x \in (0, \frac{\pi}{2}) \rightarrow \frac{2}{\pi} x \lt \sin x \lt x \lt \tan x \\
    \therefore \int_{0}^{\frac{\pi}{4}} \sin x \mathrm{d}x \lt \int_{0}^{\frac{\pi}{4}} x \mathrm{d}x \lt \int_{0}^{\frac{\pi}{4}} \tan x \mathrm{d}x \\
    \therefore I \lt J \lt K
    \end{gather}
    $$
    :::

## II. 微积分基本定理

### 2.1 积分限函数的定义

设函数$f(x)$在区间$\left[ a, b \right]$上连续，而$x$为$\left[ a, b \right]$上任意一点，则称：
$$
\varphi(x) = \int_a^x f(t) \mathrm{d}t
$$
为积分上限函数；称：
$$
\psi(x) = \int_x^b f(t) \mathrm{d}t
$$
为积分下限函数

### 2.2 积分限函数的性质

- **奇偶性**：

    1. 若函数$f(x)$为连续的奇函数，则$\varphi(x) = \displaystyle\int_a^x f(t) \mathrm{d}t$为偶函数

        ::: details Proof
        $$
        \begin{gather}
        f(-x) = -f(x) \Rightarrow \\
        \varphi(-x) = \int_{a}^{-x} f(t) \mathrm{d}t \\
        = \int_{-a}^{x} f(-u) \mathrm{d}(-u), t = -u \\
        = \int_{-a}^{a} f(u) \mathrm{d}u + \int_{a}^{x} f(u) \mathrm{d}u \\
        = 0 + \int_{a}^{x} f(u) \mathrm{d}u = \varphi(x) \\
        \end{gather}
        $$
        :::

    2. 若函数$f(x)$为连续的偶函数，则$\varphi(x) = \displaystyle\int_0^x f(t) \mathrm{d}t$为奇函数

        ::: details Proof
        $$
        \begin{gather}
        f(-x) = f(x) \Rightarrow \\
        \varphi(-x) = \int_{0}^{-x} f(t) \mathrm{d}t \\
        = \int_{0}^{x} f(-u) \mathrm{d}(-u), t = -u \\
        = -\int_{0}^{x} f(u) \mathrm{d}u = -\varphi(x) \\
        \end{gather}
        $$
        :::

- **连续性**：

    若函数$f(x)$在区间$\left[ a, b \right]$上可积，则$\varphi(x) = \displaystyle\int_a^x f(t) \mathrm{d}t$在$\left[ a, b \right]$上连续

    ::: details Proof

    对于所有的$x_0 \in \left[ a, b \right]$，设$\Delta x$和$\Delta y$分别为自变量和因变量的增量，且$a \leq x_0 + \Delta x \leq b$，则只需证明当$\Delta x \to 0$时$\Delta y \to 0$即可，考虑这个极限：
    $$
    \begin{gather}
    \lim_{\Delta x \to 0}  \Delta y = \lim_{\Delta x \to 0} \left[ \varphi(x_0 + \Delta x) - \varphi(x_0) \right] \\
    = \lim_{\Delta x \to 0} \left[ \int_{a}^{x_0 + \Delta x} f(t) \mathrm{d}t - \int_{a}^{x_0} f(t) \mathrm{d}t \right] \\
    = \lim_{\Delta x \to 0} \left[ \int_{a}^{x_0} f(t) \mathrm{d}t + \int_{x_0}^{x_0 + \Delta x} f(t) \mathrm{d}t - \int_{a}^{x_0} f(t) \mathrm{d}t \right] \\
    = \lim_{\Delta x \to 0} \int_{x_0}^{x_0 + \Delta x} f(t) \mathrm{d}t \\
    \end{gather}
    $$
    又因为$f(x)$在$\left[ a, b \right]$上可积，则其必然有界，即：
    $$
    \exists M \gt 0 \rightarrow \left| f(x) \right| \leq M
    $$
    于是有：
    $$
    0 \leq \left| \int_{x_0}^{x_0 + \Delta x} f(t) \mathrm{d}t \right| \leq \int_{x_0}^{x_0 + \Delta x} \left| f(t) \right| \mathrm{d}t \leq M \int_{x_0}^{x_0 + \Delta x} \mathrm{d}t = M \cdot \left| \Delta x \right|
    $$
    则根据夹逼准则可得：
    $$
    \lim_{\Delta x \to 0} \left| \int_{x_0}^{x_0 + \Delta x} f(t) \mathrm{d}t \right| = 0
    \Rightarrow \lim_{\Delta x \to 0} \int_{x_0}^{x_0 + \Delta x} f(t) \mathrm{d}t = 0
    $$
     于是：
    $$
    \lim_{\Delta x \to 0} \Delta y = \lim_{\Delta x \to 0} \int_{x_0}^{x_0 + \Delta x} f(t) \mathrm{d}t = 0
    $$
    即$\varphi(x)$在$x_0$处连续，而$x_0$的取值具有任意性，所以$\varphi(x)$在$\left[ a, b \right]$上连续

    :::

- **可导性**：

    若函数$f(x)$在区间$\left[ a, b \right]$上连续，则$\varphi(x) = \displaystyle\int_{a}^{x} f(t) \mathrm{d}t$在$\left[ a, b \right]$上可导，且$\varphi'(x) = f(x)$

    ::: details Proof

    - 当$a \lt x \lt b$时：
        $$
        \varphi'(x) = \lim_{\Delta x \to 0} \frac{\varphi(x + \Delta x) - \varphi(x)}{\Delta x}
        = \lim_{\Delta x \to 0} \frac{\displaystyle\int_{x}^{x + \Delta x} f(t) \mathrm{d}t}{\Delta x}
        $$
        根据定积分第一中值定理可知：
        $$
        \exists \xi \in \left[ x, x + \Delta x \right] \rightarrow 
        \lim_{\Delta x \to 0} \frac{\displaystyle\int_{x}^{x + \Delta x} f(t) \mathrm{d}t}{\Delta x}
        = \lim_{\Delta x \to 0} \frac{f(\xi) \Delta x}{\Delta x}
        = \lim_{\xi \to x} f(\xi) = f(x)
        $$

    - 当$x = a$时：
        $$
        \varphi_+'(a) = \lim_{\Delta x \to 0^+} \frac{\varphi(a + \Delta x) - \varphi(a)}{\Delta x}
        = \lim_{\Delta x \to 0^+} \frac{\displaystyle\int_{a}^{a + \Delta x} f(t) \mathrm{d}t}{\Delta x}
        $$
        根据定积分第一中值定理可知：
        $$
        \exists \xi \in \left[ a, a + \Delta x \right] \rightarrow
        \lim_{\Delta x \to 0^+} \frac{\displaystyle\int_{a}^{a + \Delta x} f(t) \mathrm{d}t}{\Delta x}
        = \lim_{\Delta x \to 0^+} \frac{f(\xi) \Delta x}{\Delta x}
        = \lim_{\xi \to a^+} f(\xi) = f(a)
        $$

    - 当$x = b$时：
        $$
        \varphi'_-(b) = \lim_{\Delta x \to 0^-} \frac{\varphi(b + \Delta x) - \varphi(b)}{\Delta x}
        = \lim_{\Delta x \to 0^-} \frac{\displaystyle\int_{b}^{b + \Delta x} f(t) \mathrm{d}t}{\Delta x}
        $$
        根据定积分第一中值定理可知：
        $$
        \exists \xi \in \left[ a, b + \Delta x \right] \rightarrow
        \lim_{\Delta x \to 0^-} \frac{\displaystyle\int_{b}^{b + \Delta x} f(t) \mathrm{d}t}{\Delta x}
        = \lim_{\Delta x \to 0^-} \frac{f(\xi) \Delta x}{\Delta x}
        = \lim_{\xi \to b^-} f(\xi) = f(b)
        $$

    综上所述，可证得$\varphi(x)$在$\left[ a, b \right]$上可导，且$\varphi'(x) = f(x)$

    :::
    
- **求导法则**：
    $$
    \begin{gather}
    \left[ \int_{a}^{x} f(t) \mathrm{d}t \right]' = f(x) \\
    \left[ \int_{x}^{b} f(t) \mathrm{d}t \right]' = -f(x) \\
    \left[ \int_{a}^{\varphi(x)} f(t) \mathrm{d}t \right]' = f\left[ \varphi(x) \right] \varphi'(x) \\
    \left[ \int_{\psi(x)}^{b} f(t) \mathrm{d}t \right]' = -f\left[ \psi(x) \right] \psi'(x) \\
    \left[ \int_{\psi(x)}^{\varphi(x)} f(t) \mathrm{d}t \right]' = f\left[ \varphi(x) \right] \varphi'(x) - f\left[ \psi(x) \right] \psi'(x)
    \end{gather}
    $$

- **例7**：求$F(x) = \displaystyle\int_{\sin x}^{x^2} \frac{x}{\sqrt{1 + t^4}} \mathrm{d}t$的导数

    ::: details Answer
    $$
    \begin{gather}
    F'(x) = \left[ x \int_{\sin x}^{x^2} \frac{1}{\sqrt{1 + t^4}} dt \right]' \\
    = \int_{\sin x}^{x^2} \frac{1}{\sqrt{1 + t^4}} \mathrm{d}t + x \left[ \frac{2x}{\sqrt{1 + x^8}} - \frac{\cos x}{\sqrt{1 + \sin^4 x}} \right] \\
    \end{gather}
    $$
    :::

- **例8**：设$f(x) = \dfrac{x^2}{x - a} \displaystyle\int_{a}^{x} f(t) \mathrm{d}t$，其中$f(x)$为连续函数，求$\displaystyle\lim_{x \to a} f(x)$.

    ::: details Answer

    首先判定极限的类型：
    $$
    \lim_{x \to a} f(x) = \lim_{x \to a} \frac{x^2 \displaystyle\int_{a}^{x} f(t) \mathrm{d}t}{x - a}
    $$
    明显这是一个零比零型未定式，考虑使用洛必达法则对分子分母分别进行求导：
    $$
    \lim_{x \to a} f(x) = \lim_{x \to a} \frac{2x \displaystyle\int_{a}^{x} f(t) \mathrm{d}t + x^2 f(x)}{1}
    = \lim_{x \to a} 2x \int_a^x f(t) \mathrm{d}t + \lim_{x \to a} x^2 f(x)
    = a^2 f(a)
    $$
    :::

- **例9**：设$f(x)$在$(-\infty, +\infty)$上有连续导数，且$f'(0) = 1$，求：$\displaystyle\lim_{a \to 0^+} \frac{1}{4a^2} \int_{-a}^{a} \left[ f(t + a) - f(t - a) \right] \mathrm{d}t$.

    ::: details Answer
    $$
    \lim_{a \to 0^+} \frac{1}{4a^2} \int_{-a}^{a} \left[ f(t + a) - f(t - a) \right] \mathrm{d}t
    = \lim_{a \to 0^+} \frac{\displaystyle{\int_{-a}^{a} f(t + a) \mathrm{d}t - \int_{-a}^{a} f(t - a) \mathrm{d}t}}{4a^2} \\
    = \lim_{a \to 0^+} \frac{\displaystyle{\int_{0}^{2a} f(u) \mathrm{d}(u - a) - \int_{-2a}^{0} f(v) \mathrm{d}(v + a)}}{4a^2} ,\, u = t + a ,\, v = t - a \\
    = \lim_{a \to 0^+} \frac{\displaystyle{\int_{0}^{2a} f(u) \mathrm{d}u - \int_{-2a}^{0} f(v) \mathrm{d}v}}{4a^2}
    = \lim_{a \to 0^+} \frac{\displaystyle{\int_{0}^{2a} f(u) \mathrm{d}u + \int_{0}^{-2a} f(v) \mathrm{d}v}}{4a^2} \\
    = \lim_{a \to 0^+} \frac{2f(2a) - 2f(-2a)}{8a}
    = \lim_{a \to 0^+} \frac{4f'(2a) + 4f'(-2a)}{8} \\
    = \frac{1}{2} \lim_{a \to 0^+} \left[ f'(2a) + f'(-2a) \right]
    = \frac{1}{2} \left[ f'(0) + f'(0) \right] = 1 \\
    $$
    :::

### 2.3 牛顿 · 莱布尼茨公式

若函数$F(x)$是连续函数$f(x)$在区间$\left[ a, b \right]$上的一个原函数，则：
$$
\int_{a}^{b} f(x) \mathrm{d}x = F(b) - F(a)
$$
::: details Proof

因为$f(x)$在$\left[ a, b \right]$上连续，所以：
$$
\varphi(x) = \int_{a}^{x} f(t) \mathrm{d}t
$$
是$f(x)$在$\left[ a, b \right]$上的一个原函数，设$F(x)$为$f(x)$在$\left[ a, b \right]$上的一个原函数，则：
$$
\varphi(x) = F(x) + C
$$
又因为：
$$
\varphi(a) = \int_a^a f(t) \mathrm{d}t = 0 = F(a) + C
$$
所以：
$$
C = -F(a)
$$
即：
$$
\varphi(x) = \int_{a}^{x} f(t) \mathrm{d}t = F(x) - F(a)
$$
从而最终可得当$x = b$时：
$$
\int_{a}^{b} f(t) \mathrm{d}t = F(b) - F(a)
$$
:::

- **例10**：设：
    $$
    f(x) =
    \begin{cases}
    x^2, & 0 \leq x \leq 1 \\
    x, & 1 \leq x \leq 2 \\
    \end{cases}
    $$
    求$\Phi(x) = \displaystyle\int_{0}^{x} f(t) \mathrm{d}t$在$\left[ 0, 2 \right]$上的表达式

    ::: details Answer
    $$
    \Phi(x) = \int_{0}^{x} f(t) \mathrm{d}t = 
    \begin{cases}
    \displaystyle\int_{0}^{x} t^2 \mathrm{d}t, & 0 \leq x \leq 1 \\
    \displaystyle\int_{0}^{1} t^2 \mathrm{d}t + \int_{1}^{x} t \mathrm{d}t, & 1 \leq x \leq 2 \\
    \end{cases}
    $$
    根据牛顿·莱布尼茨公式，可以进一步写成：
    $$
    \Phi(x) =
    \begin{cases}
    \displaystyle \frac{x^3}{3}, & 0 \leq x \leq 1 \\
    \displaystyle \frac{1}{3} + \frac{x^2 - 1}{2}, & 1 \leq x \leq 2 \\
    \end{cases}
    $$
    :::

- **例11**：计算$\displaystyle \int_{0}^{2\pi} \left| \sin x \right| \mathrm{d}x$.

    ::: details Answer
    $$
    \begin{gather}
    \int_{0}^{2\pi} \left| \sin x \right| \mathrm{d}x
    = \int_{0}^{\pi} \sin x \mathrm{d}x - \int_{\pi}^{2\pi} \sin x \mathrm{d}x \\
    = -\left[ \cos x \right]_{0}^{\pi} + \left[ \cos x \right]_{\pi}^{2\pi}
    = 2 + 2 = 4 \\
    \end{gather}
    $$
    :::
    
- **例12**：设$f(x)$是连续函数，若$f(x) = 3x - \sqrt{1 - x^2} \displaystyle\int_{0}^{1} f(t) \mathrm{d}t$，则$f(x)$ = \_\_\_\_\_.

    ::: details Answer

    因为$\displaystyle\int_{0}^{1} f(t) \mathrm{d}t$是一个常数，所以设：
    $$
    A = \int_{0}^{1} f(t) \mathrm{d}t
    $$
    于是：
    $$
    f(x) = 3x - A \cdot \sqrt{1 - x^2}
    $$
    将其代入回$A$，则有：
    $$
    \begin{gather}
    A = \int_{0}^{1} (3x - A \sqrt{1 - x^2}) \mathrm{d}x \\
    = 3 \int_{0}^{1} x \mathrm{d}x - A \int_{0}^{1} \sqrt{1 - x^2} \mathrm{d}x \\
    = \frac{3}{2} \left[ x^2 \right]_{0}^{1} - A \int_{0}^{\frac{\pi}{2}} \cos t \mathrm{d}(\sin t), x = \sin t \\
    = \frac{3}{2} (1^2 - 0^2) - \frac{A}{2} \left[ \sin t \cos t + t \right]_{0}^{\frac{\pi}{2}} \\
    = \frac{3}{2} - \frac{A}{2} (\sin \frac{\pi}{2} \cos \frac{\pi}{2} + \frac{\pi}{2} - \sin 0 \cos 0 - 0) \\
    = \frac{3}{2} - \frac{\pi}{4} A \Rightarrow A = \frac{6}{4 + \pi} \\
    \end{gather}
    $$
    则最终可得：
    $$
    f(x) = 3x - \frac{6}{4 + \pi} \cdot \sqrt{1 - x^2}
    $$
    :::

## III. 定积分的计算

### 3.1 定积分的换元积分法

**凑微分**：设$F'(x) = f(x)$，则：
$$
\int_{a}^{b} f\left[ \varphi(x) \right] \varphi'(x) \mathrm{d}x
= \int_{a}^{b} f\left[ \varphi(x) \right] \mathrm{d}\varphi(x)
= F\left[ \varphi(b) \right] - F\left[ \varphi(a) \right]
$$
**变量代换**：设函数$f(x)$在区间$\left[ a, b \right]$上连续，令$x = \varphi(t)$，若：

1. $\varphi(t)$在区间$\left[ \alpha, \beta \right]$或$\left[ \beta, \alpha \right]$上有连续的导数；
2. $\varphi(\alpha) = a$、$\varphi(\beta) = b$，当$t$从$\alpha$变到$\beta$时，$x$从$a$变到$b$，则：

$$
\int_{a}^{b} f(x) \mathrm{d}x = \int_{\alpha}^{\beta} f\left[ \varphi(t) \right] \varphi'(t) \mathrm{d}t
$$

- **例13**：计算下列定积分：

    1. $\displaystyle \int_{0}^{\sqrt{2}a} \frac{x \mathrm{d}x}{\sqrt{3a^2 - x^2}} \, (a \gt 0)$

        ::: details Answer
        $$
        \begin{gather}
        \int_{0}^{\sqrt{2}a} \frac{x \mathrm{d}x}{\sqrt{3a^2 - x^2}}
        = \frac{1}{2} \int_{0}^{\sqrt{2}a} \frac{1}{\sqrt{3a^2 - x^2}} \mathrm{d}(x^2) \\
        = -\frac{1}{2} \int_{0}^{\sqrt{2}a} (3a^2 - x^2)^{-\frac{1}{2}} \mathrm{d}(3a^2 - x^2) \\
        = -\left[ \sqrt{3a^2 - x^2} \right]_{0}^{\sqrt{2}a}
        = -\sqrt{3a^2 - (\sqrt{2}a)^2} + \sqrt{3a^2 - 0^2} \\
        = -a + \sqrt{3}a = a(\sqrt{3} - 1) \\
        \end{gather}
        $$
        :::

    2. $\displaystyle \int_{0}^{1} \sqrt{2x - x^2} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int_{0}^{1} \sqrt{2x - x^2} \mathrm{d}x
        = \int_{0}^{1} \sqrt{1 - (x^2 - 2x + 1)} \mathrm{d}x \\
        = \int_{0}^{1} \sqrt{1 - (x - 1)^2} \mathrm{d}x
        = \int_{-1}^{0} \sqrt{1 - u^2} \mathrm{d}u, u = x - 1 \\
        \end{gather}
        $$
        到这一步就可以发现，这个被积函数正是一个圆心在$(0, 0)$且半径为$1$并处于$x$轴上方的半圆，而积分区间正是这个半圆的左半部分，即结果为：
        $$
        \boxed{\frac{\pi}{4}}
        $$
        :::
    
    3. $\displaystyle \int_{0}^{4} \frac{x + 2}{\sqrt{2x + 1}} \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int_{0}^{4} \frac{x + 2}{\sqrt{2x + 1}} \mathrm{d}x
        = \frac{1}{2} \int_{0}^{4} \frac{\frac{1}{2} (2x + 1) + \frac{3}{2}}{\sqrt{2x + 1}} \mathrm{d}(2x + 1) \\
        = \frac{1}{4} \int_{0}^{4} (2x + 1)^{\frac{1}{2}} \mathrm{d}(2x + 1) + \frac{3}{4} \int_{0}^{4} (2x + 1)^{-\frac{1}{2}} \mathrm{d}(2x + 1) \\
        = \frac{1}{6} \left[ \sqrt{(2x + 1)^3} \right]_{0}^{4} + \frac{3}{2} \left[ \sqrt{2x + 1} \right]_{0}^{4} \\
        = \frac{1}{6} (\sqrt{(8 + 1)^3} - \sqrt{(0 + 1)^3}) + \frac{3}{2} (\sqrt{8 + 1} - \sqrt{0 + 1}) \\
        = \frac{1}{6} (27 - 1) + \frac{3}{2} (3 - 1)
        = \frac{22}{3} \\
        \end{gather}
        $$
        :::
    
    4. $\displaystyle \int_{0}^{\sqrt{2}} \sqrt{2 - x^2} \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int_{0}^{\sqrt{2}} \sqrt{2 - x^2} \mathrm{d}x
        = 2 \int_{0}^{\sqrt{2}} \sqrt{1 - (\frac{x}{\sqrt{2}})^2} \mathrm{d}(\frac{x}{\sqrt{2}}) \\
        = 2 \int_{0}^{1} \sqrt{1 - u^2} \mathrm{d}u, u = \frac{x}{\sqrt{2}}
        = 2 \cdot \frac{\pi}{4} = \frac{\pi}{2} \\
        \end{gather}
        $$
        :::

### 3.2 定积分的分部积分法

## IV. 关于定积分的几个重要结论