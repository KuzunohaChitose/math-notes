# 第二节 反常积分

::: details Tables of Content

[[toc]]

:::

##  I. 无穷限的反常积分

### 1.1 无穷限反常积分的定义

若函数$f(x)$在无穷区间$\left[ a, +\infty \right)$上有定义，在任何有限区间$\left[ a, b \right]$上可积（$a \lt b$），如果极限$\displaystyle \lim_{b \to +\infty} \int_{a}^{b} f(x)$存在，则称该极限值为$f(x)$在区间$\left[ a, +\infty \right)$上的反常积分的值，记作：
$$
\int_{a}^{+\infty} f(x) \mathrm{d}x = \lim_{b \to +\infty} \int_{a}^{b} f(x) \mathrm{d}x
$$
此时也称上述反常积分存在或收敛，若上述极限不存在，则称反常积分$\displaystyle \int_{a}^{+\infty} f(x) \mathrm{d}x$发散，同理也可定义：
$$
\int_{-\infty}^{b} f(x) \mathrm{d}x = \lim_{a \to -\infty} \int_{a}^{b} f(x) \mathrm{d}x
$$
以及：（其中$c \in (-\infty, +\infty)$）
$$
\int_{-\infty}^{+\infty} f(x) \mathrm{d}x = \int_{-\infty}^{c} f(x) \mathrm{d}x + \int_{c}^{+\infty} f(x) \mathrm{d}x
$$

### 1.2 无穷限反常积分的计算

根据牛顿·莱布尼茨公式，设$F'(x) = f(x)$，可知：
$$
\begin{gather}
\int_{a}^{+\infty} f(x) \mathrm{d}x = F(x)|_{a}^{+\infty} \\
\int_{-\infty}^{b} f(x) \mathrm{d}x = F(x)|_{-\infty}^{b} \\
\int_{-\infty}^{+\infty} f(x) \mathrm{d}x = F(x)|_{-\infty}^{+\infty} \\
\end{gather}
$$
::: tip Tip

Gamma函数的定义：
$$
\Gamma(s) = \int_{0}^{+\infty} x^{s - 1} e^{-x} \mathrm{d}x ,\, (s \gt 0)
$$
Gamma函数的性质：
$$
\begin{gather}
\Gamma(s + 1) =s \Gamma(s)
\Rightarrow \Gamma(n + 1) = n \Gamma(n) = n! \Gamma(1) = n! \\
\Gamma(1) = \Gamma(2) = 1, \Gamma(\frac{1}{2}) = \sqrt{\pi} \\
\end{gather}
$$
:::

- **例1**：试判断$\displaystyle \int_{1}^{+\infty} \frac{1}{x^p} \mathrm{d}x$的收敛性.（“$p$积分”）

    ::: details Answer

    首先求出被积函数的原函数：（$p \neq 1$）
    $$
    \int \frac{1}{x^p} \mathrm{d}x = \int x^{-p} \mathrm{d}x = \frac{x^{1 - p}}{1 - p} \\
    $$
    然后考虑这个极限：
    $$
    \lim_{x \to +\infty} \frac{x^{1 - p}}{1 - p} = \frac{1}{1 - p} \lim_{x \to +\infty} x^{1 - p}
    $$

    - 当$p \gt 1$时：
        $$
        \frac{1}{1 - p} \lim_{x \to +\infty} x^{1 - p} = 0
        $$
        则此时此反常积分为收敛；

    - 当$p \lt 1$时：
        $$
        \frac{1}{1 - p} \lim_{x \to +\infty} x^{1 - p} = +\infty
        $$
        则此时此反常积分为发散；

    而当$p = 1$时：
    $$
    \int \frac{1}{x^p} \mathrm{d}x = \ln x
    $$
    考虑这个极限：
    $$
    \lim_{x \to +\infty} \ln x = +\infty
    $$
    所以，最终总结可得：当$p \leq 1$时，此反常积分为发散；当$p \gt 1$时，此反常积分为收敛。

    :::

- **例2**：讨论$\displaystyle \int_{2}^{+\infty} \frac{1}{x \ln^p x} \mathrm{d}x$的敛散性，其中$p$为任意实数.

    ::: details Answer
    $$
    \int_{2}^{+\infty} \frac{1}{x \ln^p x} \mathrm{d}x
    = \int_{2}^{+\infty} \frac{1}{\ln^p x} \mathrm{d}(\ln x)
    =|_{u = \ln x} \int_{\ln 2}^{+\infty} \frac{1}{u^p} \mathrm{d}u
    \Rightarrow \begin{cases}
    \text{收敛}, & p \gt 1 \\
    \text{发散}, & p \leq 1 \\
    \end{cases}
    $$
    :::

- **例3**：求$\displaystyle \int_{0}^{+\infty} e^{-x^2} \mathrm{d}x$.

    ::: details Answer
    $$
    \begin{gather}
    \int_{0}^{+\infty} e^{-x^2} \mathrm{d}x
    = \int_{0}^{+\infty} e^{-u} \mathrm{d}(\sqrt{u}), u = x^2 \\
    = \frac{1}{2} \int_{0}^{+\infty} u^{-\frac{1}{2}} e^{-u} \mathrm{d}u
    = \frac{1}{2} \Gamma(\frac{1}{2})
    = \frac{1}{2} \sqrt{\pi} \\
    \end{gather}
    $$
    :::

- **例4**：计算反常积分$\displaystyle \int_{0}^{+\infty} te^{-pt} \mathrm{d}t \, (p \gt 0)$.

    ::: details Answer
    $$
    \begin{gather}
    \int_{0}^{+\infty} te^{-pt} \mathrm{d}t
    = \frac{1}{p^2} \int_{0}^{+\infty} u e^{-u} \mathrm{d}u, u = pt \\
    = \frac{1}{p^2} \int_{0}^{+\infty} u^{2 - 1} e^{-u} \mathrm{d}u
    = \frac{1}{p^2} \Gamma(2) = \frac{1}{p^2} \\
    \end{gather}
    $$
    :::

### 1.3 无穷限反常积分敛散性的判定

对于反常积分$\displaystyle \int_{a}^{+\infty} f(x) \mathrm{d}x ,\, f(x) \geq 0$，其收敛性主要取决于当$x \to +\infty$时，$f(x) \to 0$的速度，趋于$0$的速度越快则此反常积分的收敛性越强，反之越弱；

**比较判别法**：设$f(x)$在$\left[ a, +\infty \right)$上连续，且$\forall x \in \left[ a, +\infty \right)$有$0 \leq f(x) \leq g(x)$，则：

1. 若$\displaystyle \int_{a}^{+\infty} g(x) \mathrm{d}x$收敛，则$\displaystyle \int_{a}^{+\infty} f(x) \mathrm{d}x$收敛：“大敛则小敛”
2. 若$\displaystyle \int_{a}^{+\infty} f(x) \mathrm{d}x$发散，则$\displaystyle \int_{a}^{+\infty} g(x) \mathrm{d}x$发散：“小散则大散”

**比较判别法的极限形式**：设$g(x) = \dfrac{1}{x^p}$，则：
$$
\lim_{x \to +\infty} \frac{f(x)}{g(x)} = \lim_{x \to +\infty} x^p f(x) = l \\
\Rightarrow
\begin{cases}
0 \leq l \lt +\infty,& p \gt 1 \Rightarrow \displaystyle \int_{a}^{+\infty} f(x) \mathrm{d}x \, \text{收敛} \\
0 \lt l \leq +\infty,& p \leq 1 \Rightarrow \displaystyle \int_{a}^{+\infty} f(x) \mathrm{d}x \, \text{发散} \\
\end{cases}
$$

::: tip Tip

注意：

1. 当$l = 0$时，只判敛不判散，即此时$p$只能取大于$1$的数；
2. 当$l = +\infty$时，只判散不判敛，即此时$p$只能取小于等于$1$的数；

另外，若$F'(x) = f(x)$，则：

1. 对于$\displaystyle \int_{a}^{+\infty} f(x) \mathrm{d}x$，若极限$\displaystyle \lim_{x \to +\infty} F(x)$存在则其收敛，否则发散；
2. 对于$\displaystyle \int_{-\infty}^{b} f(x) \mathrm{d}x$，若极限$\displaystyle \lim_{x \to -\infty} F(x)$存在则其收敛，否则发散；
3. 对于$\displaystyle \int_{-\infty}^{+\infty} f(x) \mathrm{d}x$，若极限$\displaystyle \lim_{x \to +\infty} F(x)$和$\displaystyle \lim_{x \to -\infty} F(x)$皆存在则其收敛，否则发散。

:::

- **例5**：判定反常积分$\displaystyle \int_{1}^{+\infty} \frac{\mathrm{d}x}{\sqrt[3]{x^4 + 1}}$的敛散性

    ::: details Answer

    因为：
    $$
    \frac{1}{\sqrt[3]{x^4 +1}} \lt \frac{1}{\sqrt[3]{x^4}}
    $$
    而且：
    $$
    \int_{1}^{+\infty} \frac{1}{\sqrt[3]{x^4}} \mathrm{d}x \, \text{收敛}
    $$
    所以：
    $$
    \int_{1}^{+\infty} \frac{1}{\sqrt[3]{x^4 + 1}} \mathrm{d}x \, \text{收敛}
    $$
    :::
    
- **例6**：判定反常积分$\displaystyle \int_{1}^{+\infty} \frac{1}{\ln (1 + x)} \mathrm{d}x$的敛散性

    ::: details Answer

    设$g(x) = \dfrac{1}{x}$，则反常积分$\displaystyle \int_{1}^{+\infty} g(x) \mathrm{d}x$发散，考虑此极限：
    $$
    \lim_{x \to +\infty} \frac{\frac{1}{\ln (1 + x)}}{\frac{1}{x}}
    = \lim_{x \to +\infty} \frac{x}{\ln (1 + x)} = +\infty
    $$
    因此，当$p = 1$时，极限值为$+\infty$，可判定此反常积分为发散
    
    :::

## III. 无界函数的反常积分