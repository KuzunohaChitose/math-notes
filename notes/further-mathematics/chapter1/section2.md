# 第二节 极限

::: details Table of Contents

[[toc]]

:::

## I. 数列的极限

> 数列可以认为是一个定义域为正整数的函数，即：$a_n = f(n), n \in \mathbb{N}_+$

设$\{ x_n \}$为一数列，如果存在常数$a$，对于任意给定的正数$\epsilon$，总存在正整数$N$，使得当$n \gt N$时，以下不等式恒成立：
$$
|x_n - a| \lt \epsilon
$$
则称常数$a$为数列$\{ x_n \}$的极限，或称数列$\{ x_n \}$收敛于$a$，记为：
$$
\lim_{n \to \infty} x_n = a
$$
或：
$$
x_n \to a (n \to \infty)
$$
也可描述为：
$$
\lim_{n \to \infty} x_n = a \Leftrightarrow \forall \epsilon \gt 0, \,
\exists \text{整数} N > 0, \, \text{当} n \gt N \text{时}, \, \text{有} |x_n - a| \lt \epsilon
$$

::: tip Tip

收敛数列的性质：

1. 如果数列$\{ x_n \}$收敛，则其极限唯一（极限的唯一性）
2. 如果数列$\{ x_n \}$收敛，则其必定有界（收敛数列的有界性）
3. 如果$\lim_{n \to \infty} x_n = a$，且$a \gt 0$（或$a \lt 0$），则存在正整数$N \gt 0$，当$n \gt N$时，都有$x_n \gt 0$或（$x_n \lt 0$）
4. 如果数列$\{ x_n \}$收敛于$a$，则其任一子数列都收敛于$a$

:::

- **例1**：若$\lim_{n \to \infty} u_n = a$，证明$\lim_{n \to \infty} |u_n| = |a|$，并举例说明：如果数列$\{ x_n \}$有极限，数列$\{ x_n \}$未必有极限。

    ::: details Answer

    因为$u_n$的极限为$a$，则对于任意给定的正数$\epsilon \gt 0$，总存在正整数$N$，使得当$n \gt N$时，有：
    $$
    |x_n - a| \lt \epsilon
    $$
    又因为：
    $$
    ||a| - |b|| \leq |a \pm b| \leq |a| + |b|
    $$
    则对于任意的$u_n$和极限$a$，有：
    $$
    ||u_n| - |a|| \leq |u_n - a|
    $$
    那么，既然存在$|x_n - a| \lt \epsilon$，则必然也存在：
    $$
    ||u_n| - |a|| \lt \epsilon
    $$
    由此可知，对于任意给定的正数$\epsilon \gt 0$，总存在正整数$N$，使得当$n \gt N$时，有：
    $$
    ||u_n| - |a|| \lt \epsilon
    $$
    即：
    $$
    \lim_{n \to \infty} |u_n| = |a|
    $$
    反例：
    $$
    \{ x_n \} = (-1)^n = \{ 1, -1, 1, -1, \dots \}
    $$

    $$
    \{ |x_n| \} = |(-1)^n| = \{ 1, 1, 1, 1, \dots \}
    $$

    显然可见$\{ x_n \}$的值在$\pm1$之间不断交替，因此其并非收敛；而$\{ |x_n| \}$的值却总是为$1$，因此其收敛于$1$

    :::

## II. 函数的极限

> **函数极限与数列极限的关系**：如果极限$\lim_{x \to x_0} f(x)$存在，$\{ x_n \}$为函数$f(x)$的定义域内任一收敛于$x_0$的数列，且满足$x_n \neq x_0 \, (n \in \mathbb{N}_+)$，那么相应的函数值数列$\{ f(x_n) \}$必收敛，且$\lim_{n \to \infty} f(x_n) = \lim_{x \to x_0} f(x)$

### 2.1 自变量趋向于无穷时函数的极限

设函数$f(x)$在$|x| \gt b \, (b \gt 0)$上有定义，如果存在常数$A$，对$\forall \epsilon \gt 0$，存在正数$X \gt b$，使得当$|x| \gt X$时，有$|f(x) - A| \lt \epsilon$，则称函数$f(x)$当$x \to \infty$时以$A$为极限，记为：
$$
\lim_{x \to \infty} f(x) = A \text{ 或 } f(x) \to A(x \to \infty)
$$
也可简单表达为：
$$
\lim_{x \to \infty} f(x) = A \Leftrightarrow \forall \epsilon \gt 0 ,\, \exists X \gt 0 ,\,
\text{当} |x| \gt X \text{时} ,\, \text{有} |f(x) - A| \lt \epsilon
$$
::: tip Tip

直观解释：

这个定义表明，当$x$趋向于无穷大时，函数$f(x)$的值会越来越接近于$A$，并且可以在任意给定的误差范围$\epsilon$内稳定下来。这意味着无论给定的$\epsilon$有多小，只要$x$足够大，函数值$f(x)$与极限$A$之间的差就可以小于$\epsilon$

:::

- **例2**：设$f(x) = e^x$，试判断$\lim_{x \to \infty} f(x)$是否存在？

    ::: details Answer
    $$
    \lim_{x \to -\infty} e^x = 0 ,\, \lim_{x \to \infty} e^x = \infty \Rightarrow \lim_{x \to \infty} e^x = \text{Undefined}
    $$
    小结：对于指数函数的极限，当指数部分趋近于$\infty$时，一定要分开讨论
    
    :::
    
- **例3**：用定义法证明$\lim_{x \to \infty} \dfrac{\sin x}{x} = 0$.

    ::: details Answer

    考虑函数$f(x) = \dfrac{\sin x}{x}$，为了证明其极限为$0$，对于任意$\epsilon \gt 0$，需要找到正数$X \gt 0$，使得当$x \gt X$时，有：
    $$
    |\frac{\sin x}{x}| \lt \epsilon
    $$
    对于绝对值$|\dfrac{\sin x}{x}|$，因为$|\sin x| \leq 1$，则有：
    $$
    |\frac{\sin x}{x}| \leq \frac{1}{|x|}
    $$
    对于函数$\dfrac{1}{|x|}$，当$x \to \infty$时，函数值会无限趋近于$0$，因此存在：
    $$
    \frac{1}{|x|} \lt \epsilon
    $$
    解不等式可得：
    $$
    |x| \gt \frac{1}{\epsilon}
    $$
    因此，对于任意给定的$\epsilon \gt 0$，取$X = \dfrac{1}{\epsilon}$，当$x \gt X$时，有：
    $$
    |\frac{\sin x}{x}| \leq \frac{1}{|x|} \lt \epsilon
    $$
    由此可证：
    $$
    \lim_{x \to \infty} |\frac{\sin x}{x}| = 0
    $$
    :::

### 2.2 自变量趋向于有限值时函数的极限

设函数$f(x)$在点$x_0$的某去心邻域内有定义（于点$x_0$可以没有定义），如果存在常数$A$，对于$\forall \epsilon \gt 0$，$\exists \delta \gt 0$，使得当$0 \lt |x - x_0| \lt \delta$时，有$|f(x) - A| \lt \epsilon$，则称函数$f(x)$当$x \to x_0$时以$A$为极限，记为：
$$
\lim_{x \to x_0} f(x) = A \text{ 或 } f(x) \to A (x \to x_0)
$$
也可简单表达为：
$$
\lim_{x \to x_0} f(x) = A \Leftrightarrow \forall \epsilon \gt 0 ,\, \exists \delta \gt 0 ,\, 
\text{当} 0 \lt |x - x_0| \lt \delta \text{时} ,\, \text{有} |f(x) - A| \lt \epsilon
$$
::: tip Tip
$$
0 \le |x - x_0| \lt \delta 
\Leftrightarrow x \in (x_0 - \delta, x_0) \cup (x_0, x_0 + \delta)
\Leftrightarrow x \in \mathring{U}(x_0, \delta)
$$
:::

### 2.3 单侧极限

设函数$f(x)$在点$x_0$的左侧邻域内有定义（于点$x_0$可以没有定义），$A$为一个常数，如果对于任意$\epsilon \gt 0$，存在$\delta \gt 0$，使得当$-\delta \lt x - x_0 \lt 0$时，有$|f(x) - A| \lt \epsilon$，则称函数$f(x)$当$x \to x_0^-$时的左极限，记为$\lim_{x \to x_0^-} f(x) = A$

设函数$f(x)$在点$x_0$的右侧邻域内有定义（于点$x_0$可以没有定义），$A$为一个常数，如果对于任意$\epsilon \gt 0$，存在$\delta \gt 0$，使得当$0 \lt x - x_0 \lt \delta$时，有$|f(x) - A| \lt \epsilon$，则称函数$f(x)$当$x \to x_0^+$时的右极限，记为$\lim_{x \to x_0^+} f(x) = A$

函数$f(x)$当$x \to x_0$时的极限存在的充分必要条件是左、右极限存在且相等，即：
$$
\lim_{x \to x_0} f(x) \Leftrightarrow \lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = A
$$

::: tip Tip

左极限的定义描述的是当自变量从左往右接近$x_0$时函数值也接近于常数$A$；右极限的定义描述的是当自变量从右往左接近$x_0$时函数值也接近于常数$A$；而函数在某一点处的极限存在就必须满足以上两个条件，且两侧的极限值相等

作用：常用于判断特殊函数在特殊点的极限是否存在，例如分段函数在某点的左右两侧表达式不同，判断此点的极限是否存在时就需要计算其左右极限并判断是否相等

:::

- **例4**：求下列极限：

    - （1）
        $$
        \lim_{x \to 0} \frac{2 + 2^{\frac{1}{x}}}{1 + 2^{\frac{2}{x}}}
        $$
        ::: details Answer

        首先计算$x \to 0^-$时的极限：
        $$
        \lim_{x \to 0^-} \frac{2 + 2^{\frac{1}{x}}}{1 + 2^{\frac{2}{x}}} = 2
        $$
        然后计算$x \to 0^+$时的极限：
        $$
        \lim_{x \to 0^+} \frac{2 + 2^{\frac{1}{x}}}{1 + 2^{\frac{2}{x}}} = 0
        $$
        可见其左右极限存在但不相等，因此这个极限不存在！

        :::

    - （2）
        $$
        \lim_{x \to 0} \frac{e^{\frac{1}{x}} + 1}{e^{\frac{1}{x}} - 1} \arctan \frac{1}{x}
        $$
        ::: details Answer

        首先计算$x \to 0^-$时的极限：
        $$
        \lim_{x \to 0^-} \frac{e^{\frac{1}{x}} + 1}{e^{\frac{1}{x}} - 1} \arctan \frac{1}{x} = -1 \cdot (-\frac{\pi}{2}) = \frac{\pi}{2}
        $$
        然后计算$x \to 0^+$时的极限：
        $$
        \lim_{x \to 0^+} \frac{e^{\frac{1}{x}} + 1}{e^{\frac{1}{x}} - 1} \arctan \frac{1}{x} = \frac{\pi}{2}
        $$
        可见其左右极限存在且相等，因此这个极限存在且值为$\dfrac{\pi}{2}$

        :::

## III. 极限的性质
