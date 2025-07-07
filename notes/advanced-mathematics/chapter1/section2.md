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

- **例1**：若$\lim_{n \to \infty} u_n = a$，证明$\lim_{n \to \infty} |u_n| = |a|$，并举例说明：如果数列$\{ \left| x_n \right| \}$有极限，数列$\{ x_n \}$未必有极限。

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

1. **唯一性**：若$\lim f(x)$存在，则其极限值唯一

2. **（局部）有界性**：若$\lim f(x) = A$，则存在一个去心邻域，在此去心邻域内$f(x)$有界

3. **（局部）保号性**：若$\lim f(x) = A \gt B$，则存在一个去心邻域，在此去心邻域内$f(x) \gt B$

> **推论**：若存在一个去心邻域，在此去心邻域内$f(x) \geq B$，且$\lim f(x) = A$，则$A \geq B$

- **例5**：设$\lim_{n \to \infty} a_n = a$，且$a \neq 0$，则当$n$充分大时有\_\_\_\_\_.
  
    - （A）$|a_n| \gt \dfrac{|a|}{2}$
    - （B）$|a_n| \lt \dfrac{|a|}{2}$
    - （C）$a_n \gt a - \dfrac{1}{n}$
    - （D）$a_n \lt a + \dfrac{1}{n}$
    
    ::: details Answer
    
    由于已知$\lim_{n \to \infty} a_n = a$，则当对于给定的$\epsilon$取值为$\dfrac{|a|}{2}$时有：
    $$
    |a_n| - |a| < |a_n - a| \lt \epsilon = \frac{|a|}{2}
    $$
    由此便可推得：
    $$
    |a_n| - |a| \lt \frac{|a|}{2} \Rightarrow |a_n| \gt \frac{|a|}{2}
    $$
    所以选项A成立
    
    :::

## IV. 极限的运算法则

### 4.1 极限的四则运算法则

$$
\lim_{x \to a} f(x) = A ,\, \lim_{x \to a} g(x) = B \Rightarrow
\begin{cases}
\lim_{x \to a} \left[ f(x) \pm g(x) \right] = A \pm B \\
\lim_{x \to a} \left[ f(x) \times g(x) \right] = A \times B \\
\lim_{x \to a} \left[ f(x) \div g(x) \right] = A \div B
\end{cases}
$$

::: tip Tip

- 注意：

    1. 和与积的运算法则只对有限项成立，对于无限项不成立！

    2. 若$\lim_{x \to a} \left[ f(x) \pm g(x) \right]$存在，则$\lim_{x \to a} f(x)$与$\lim_{x \to a} g(x)$同时存在或同时不存在

    3. 若$\lim_{x \to a} f(x) = A \neq 0$，则：
        $$
        \lim_{x \to a} \left[ f(x) \cdot g(x) \right] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x) = A \cdot \lim_{x \to a} g(x)
        $$

    4. 若$\lim_{x \to a} \dfrac{f(x)}{g(x)} = A$，则：
        $$
        \begin{cases}
        \lim_{x \to a} f(x) = 0 \Rightarrow
        \begin{cases}
        A \neq 0 \Rightarrow \lim_{x \to a} g(x) = 0 \\
        A = 0 \Rightarrow \lim_{x \to a} g(x) \neq 0
        \end{cases} \\
        \lim_{x \to a} g(x) = 0 \Rightarrow \lim_{x \to a} f(x) = \lim_{x \to a} \frac{f(x)}{g(x)} \cdot g(x) = A \cdot 0 = 0
        \end{cases}
        $$

- 推论：

    1. 若$\lim_{x \to a} f(x)$存在，且$c$为常数，则$\lim_{x \to a} \left[ c f(x) \right] = c \lim_{x \to a} f(x)$
    2. 若$\lim_{x \to a} f(x)$存在，且$n$为常数，则$\lim_{x \to a} \left[ f(x) \right]^n = \left[ \lim_{x \to a} f(x) \right]^n$

:::

- **例6**：设$\{ a_n \}$、$\{ b_n \}$、$\{ c_n \}$均为非负数列，且$\lim_{n \to \infty} a_n = 0$、$\lim_{n \to \infty} b_n = 1$、$\lim_{n \to \infty} c_n = \infty$，则必有\_\_\_\_\_.

    - （A）$a_n \lt b_n, n \in \mathbb{N}_+$
    - （B）$b_n \lt c_n, n \in \mathbb{N}_+$
    - （C）$\lim_{n \to \infty} a_n c_n$不存在
    - （D）$\lim_{n \to \infty} b_n c_n$不存在

    ::: details Answer

    - （A）
    
        由题可知，$\{ a_n \}$是一个从非零值开始趋于$0$的数列，而$\{ b_n \}$是一个从非零值开始趋于$1$的数列，因此无法保证它们从头到尾都能满足$a_n \lt b_n$，反例：
        $$
        a_n = \frac{2}{n} ,\, b_n = \frac{1}{n} + 1
        $$
        可见当$n = 1$时$a_n = b_n = 2$
    
    - （B）
    
        由题可知，$\{ b_n \}$是一个从非零值开始趋于$1$的数列，而$\{ c_n \}$是一个从非零值开始趋于$\infty$的数列，因此无法保证它们从头到尾都能满足$b_n \lt c_n$，反例：
        $$
        b_n = \frac{1}{n} + 1 ,\, c_n = n + 1
        $$
        可见当$n = 1$时$b_n = c_n = 2$
    
    - （C）
    
        由极限的运算法则可得：
        $$
        \lim_{n \to \infty} a_n c_n = 0 \cdot \infty
        $$
        因此这个极限是一个未定式，相乘的两方一方趋于无穷大、一方趋于无穷小，这意味着这个极限值取决于两方的变化速度
    
        当两方变化速度相同时结果是一个常数：
        $$
        a_n = \frac{c}{n} ,\, c_n = n ,\, \lim_{n \to \infty} a_n c_n = c
        $$
        当趋于无穷大的速度远大于趋于无穷小的速度时结果是无穷大：
        $$
        a_n = \frac{1}{n} ,\, c_n = n^2 ,\, \lim_{n \to \infty} a_n c_n = \lim_{n \to \infty} n = \infty
        $$
        当趋于无穷小的速度远大于趋于无穷大的速度时结果是无穷小：
        $$
        a_n = \frac{1}{n^2} ,\, c_n = n ,\, \lim_{n \to \infty} a_n c_n = \lim_{n \to \infty} \frac{1}{n} = 0
        $$
        因此无法保证$\lim_{n \to \infty} a_n c_n$的值一定不存在
    
    - （D）
    
        由极限的运算法则可得：
        $$
        \lim_{n \to \infty} b_n c_n = 1 \cdot \infty = \infty
        $$
        因此$\lim_{n \to \infty} b_n c_n$的值一定为$\infty$，即不存在
    
    :::

- **例7**：求下列极限。

    - （1）
        $$
        \lim_{x \to 3} \frac{x^2 - 2x - 3}{x^2 - 5x + 6}
        $$
        ::: details Answer

        通过因式分解可得：
        $$
        \lim_{x \to 3} \frac{(x + 1)(x - 3)}{(x - 2)(x - 3)}
        = \lim_{x \to 3} \frac{x + 1}{x - 2} = 4
        $$
        :::

    - （2）
        $$
        \lim_{x \to \infty} \frac{x^3 + x + 1}{3x^3 + 2x^2 + 1}
        $$
        ::: details Answer

        对分子分母同除以$x^3$可得：（抓大头）
        $$
        \lim_{x \to \infty} \frac{1 + \frac{1}{x^2} + \frac{1}{x^3}}{3 + \frac{2}{x} + \frac{1}{x^3}}
        $$
        然后将$x = \infty$代入可得：
        $$
        \frac{1 + 0 + 0}{3 + 0 + 0} = \frac{1}{3}
        $$
        :::
        
    - （3）
        $$
        \lim_{x \to +\infty} (\sqrt{4x^2 + 12x + 1} - 2x)
        $$
        ::: details Answer
    
        首先通过乘以共轭的方式简化这个极限：
        $$
        \lim_{x \to +\infty} (\sqrt{4x^2 + 12x + 1} - 2x) \cdot \frac{\sqrt{4x^2 + 12x + 1} + 2x}{\sqrt{4x^2 + 12x + 1} + 2x}
        $$
        化简可得：
        $$
        \lim_{x \to +\infty} \frac{12x + 1}{\sqrt{4x^2 + 12x + 1} + 2x} \
        $$
        将分子分母同除以$x$可得：
        $$
        \lim_{x \to +\infty} \frac{12 + \frac{1}{x}}{\sqrt{4 + \frac{12}{x} + \frac{1}{x^2}} + 2}
        $$
        然后将$x = +\infty$代入可得：
        $$
        \frac{12}{\sqrt{4 + 0 + 0} + 2} = \frac{12}{4} = 3
        $$
        :::
        
    - （4）
        $$
        \lim_{x \to -\infty} \frac{\sqrt{4x^2 - 2x + 5} - 2x + 2}{\sqrt{2x^2 + 1}}
        $$
        ::: details Answer
    
        对分子分母同时除以$x$可得：
        $$
        \lim_{x \to -\infty} (\frac{\sqrt{4x^2 - 2x + 5}}{x} - \frac{2x}{x} + \frac{2}{x}) \cdot \frac{x}{\sqrt{2x^2 + 1}}
        $$
        将带根式的分式项转换为根式项后得：（因为原项为负值所以转换后需要带上负号）
        $$
        \lim_{x \to -\infty} (-\sqrt{\frac{4x^2 - 2x + 5}{x^2}} - \frac{2x}{x} + \frac{2}{x}) \cdot -\sqrt{\frac{x^2}{2x^2 + 1}}
        $$
        对每一项抓大头后可得：
        $$
        \lim_{x \to -\infty} (-\sqrt{\frac{4x^2}{x^2}} - \frac{2x}{x} + \frac{2}{x}) \cdot -\sqrt{\frac{x^2}{2x^2}}
        = \frac{-2 - 2 + 0}{-\sqrt{2}} = 2\sqrt{2}
        $$
        :::
    
    - （5）
        $$
        \lim_{x \to 0^+} \frac{1 - e^{\frac{1}{x}}}{x + e^{\frac{1}{x}}}
        $$
        ::: details Answer
        
        对于分子：当$x \to 0^+$时，$\frac{1}{x}$趋向于$+\infty$，所以$e^{\frac{1}{x}}$趋向于$+\infty$，常数项$1$可忽略，则分子近似为$-e^{\frac{1}{x}}$
        
        对于分母：$e^{\frac{1}{x}}$趋向于$+\infty$的速度远大于$x$趋向于$0$的速度，因此项$x$可忽略，则分母近似为$e^{\frac{1}{x}}$
        
        所以，最后计算这个极限可得：
        $$
        \lim_{x \to 0^+} \frac{1 - e^{\frac{1}{x}}}{x + e^{\frac{1}{x}}}
        = \lim_{x \to 0^+} -\frac{e^{\frac{1}{x}}}{e^{\frac{1}{x}}} = -1
        $$
        :::

### 4.2 复合函数极限的运算法则

若$\lim_{x \to a} g(x) = u_0$且$g(x) \neq u_0$，$\lim_{u \to u_0} f(u) = A$，则$\lim_{x \to a} f\left[ g(x) \right] = \lim_{u \to u_0} f(u) = A$

- **例8**：已知$\lim_{x \to 0} \dfrac{f(3x)}{x} = 2$，求$\lim_{x \to 0} \dfrac{x}{f(2x)}$.

    ::: details Answer

    > 思路：通过换元求出$f(u) / u$的极限值

    已知：
    $$
    \lim_{x \to 0} \frac{f(3x)}{x} = 2
    $$
    设$u = 3x$，则：
    $$
    \lim_{u \to 0} \frac{f(u)}{u/3} = 3 \lim_{u \to 0} \frac{f(u)}{u} = 2
    $$
    由此可得：
    $$
    \lim_{u \to 0} \frac{f(u)}{u} = \frac{2}{3}
    $$
    接下来，设$u = 2x$，则：
    $$
    \lim_{x \to 0} \frac{x}{f(2x)} 
    = \lim_{u \to 0} \frac{u/2}{f(u)} 
    = \frac{1}{2} \lim_{u \to 0} \frac{u}{f(u)}
    = \frac{3}{4}
    $$
    :::
    
- **例9**：设函数：
    $$
    g(x) =
    \begin{cases}
    2 - x, & x \leq 0 \\
    x + 2, & x \gt 0
    \end{cases} \\
    $$

    $$
    f(x) =
    \begin{cases}
    x^2, & x \lt 0 \\
    -x, & x \geq 0
    \end{cases}
    $$

    求$\lim_{x \to 0} g\left[ f(x) \right]$.

    ::: details Answer

    首先计算内层函数在$x \to 0$时的极限：
    $$
    \lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = 0
    $$
    由此可得：（设$u = f(x)$）
    $$
    \lim_{x \to 0} g\left[ f(x) \right] = \lim_{u \to 0} g(u) = 2
    $$
    :::

## V. 极限存在的两个准则

### 5.1 夹逼准则

设$I$为包含某点$a$的区间，且函数为$f(x)$、$g(x)$、$h(x)$定义在$I$上且可能不包含点$a$的函数。若对于所有属于$I$而不等于$a$的$x$，有：

1. $g(x) \leq f(x) \leq h(x)$
2. $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$

则函数$f(x)$的极限存在，且也为$L$，而函数$g(x)$、$h(x)$分别称为$f(x)$的下界与上界

::: tip Tip

若$a$为$I$的端点，则上述的极限为左极限或右极限。对于$x \to \infty$，此定理依旧可用

:::

- **例10**：求极限$\lim_{n \to \infty} \sqrt[n]{a_1^n + a_2^n + ... + a_m^n}$，其中$a_i \gt 0 \, (i \in\{ 1, 2, ..., m \})$.

    ::: details Answer

    设一个最大值$M$：
    $$
    M = \max \{ a_1, a_2, \dots, a_m \}
    $$
    则：
    $$
    a_1^n + a_2^n + \dots + a_m^n \leq m \cdot M^n
    $$
    且因为至少有一个$a_i = M$，则：
    $$
    a_1^n + a_2^n + \dots + a_m^n \geq M^n
    $$
    所以存在不等式：
    $$
    \sqrt[n]{M^n} \leq \sqrt[n]{a_1^n + a_2^n + ... + a_m^n} \leq \sqrt[n]{m M^n}
    $$
    求上界的极限可得：
    $$
    \lim_{n \to \infty} \sqrt[n]{m M^n} = M
    $$
    求下界的极限可得：
    $$
    \lim_{n \to \infty} \sqrt[n]{M^n} = M
    $$
    则根据夹逼准则可得：
    $$
    \lim_{n \to \infty} \sqrt[n]{a_1^n + a_2^n + ... + a_m^n} = \max \{ a_1, a_2, \dots, a_m \}
    $$
    :::
    
- **例11**：求极限$\lim_{n \to \infty} \left[ \dfrac{1}{\sqrt{n^2 + 1}} + \dfrac{1}{\sqrt{n^2 + 2}} + ... + \dfrac{1}{\sqrt{n^2 + n}} \right]$.

    ::: details Answer

    设数列$a_n$：
    $$
    a_n = \frac{1}{\sqrt{n^2 + 1}} + \frac{1}{\sqrt{n^2 + 2}} + ... + \frac{1}{\sqrt{n^2 + n}}
    $$
    首先找出$a_n$中最大的一项：
    $$
    \max \{ \frac{1}{\sqrt{n^2 + 1}}, \frac{1}{\sqrt{n^2 + 2}}, ..., \frac{1}{\sqrt{n^2 + n}} \} = \frac{1}{\sqrt{n^2 + 1}}
    $$
    其次找出$a_n$中最小的一项：
    $$
    \min \{ \frac{1}{\sqrt{n^2 + 1}}, \frac{1}{\sqrt{n^2 + 2}}, ..., \frac{1}{\sqrt{n^2 + n}} \} = \frac{1}{\sqrt{n^2 + n}}
    $$
    又因为$a_n$这个多项式共有$n$项，因此必然存在不等式：
    $$
    \frac{n}{\sqrt{n^2 + n}} \leq a_n \leq \frac{n}{\sqrt{n^2 + 1}}
    $$
    求上界的极限可得：
    $$
    \lim_{n \to \infty} \frac{n}{\sqrt{n^2 + 1}}
    = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n^2}}} = 1
    $$
    求下界的极限可得：
    $$
    \lim_{n \to \infty} \frac{n}{\sqrt{n^2 + n}} 
    = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n}}} = 1
    $$
    则根据夹逼准则可得：
    $$
    \lim_{n \to \infty} \left[ \frac{1}{\sqrt{n^2 + 1}} + \frac{1}{\sqrt{n^2 + 2}} + ... + \frac{1}{\sqrt{n^2 + n}} \right] = 1
    $$
    :::

### 5.2 单调有界准则

单调递增（或递减）且有上界（或下界）的数列必有极限，即：

1. 若$a_1 \leq a_2 \leq a_3 \leq ... \leq a_n \leq M$，则$\lim_{n \to \infty} a_n = a$存在，且$a$为$\{ a_n \}$的一个上界
2. 若$a_1 \leq a_2 \leq a_3 \leq ... \leq a_n \leq m$，则$\lim_{n \to \infty} a_n = a$存在，且$a$为$\{ a_n \}$的一个下界

::: tip Tip

1. 单调有界准则只能证明$\{ a_n \}$的极限存在，但极限值未必能够求出
2. 若$\{ a_n \} \uparrow (\downarrow)$且无上（下）界，则$\{ a_n \}$的极限为$+\infty$（或$-\infty$）
3. 证明单调性的方法：
    - 比较$a_{n + 1} - a_n$与$0$的大小
    - 比较$\frac{a_{n + 1}}{a_n}$与$1$的大小
    - 数学归纳法
    - 重要不等式：$a^2 + b^2 \geq 2|ab|$
    - 判断$a_{n + 1} - a_n$与$a_n - a_{n - 1}$是否同号
    - 若$a_{n + 1} = f(a_n)$，则$y = f(x)$且$f'(x) \gt 0$
4. 证明有界性的方法：
    - 数学归纳法
    - 重要不等式
    - 最值

:::

- **例11**：已知$x_1 = \dfrac{1}{2}$，$x_{n + 1} = \dfrac{2}{1 + \frac{1}{x_n}} \, (n \in \mathbb{N}_+)$，证明$\lim_{n \to \infty} x_n$存在并求其值。

    ::: details
    
    - 首先证明其单调性：
    
        关于递推式：
        $$
        x_{n + 1} = f(x_n) = \frac{2}{1 + \frac{1}{x_n}} = \frac{2x_n}{1 + x_n}
        $$
        对$f(x_n)$求导得：
        $$
        f'(x_n) = \frac{2}{(1 + x)^2} \gt 0
        $$
        又因为$x_1 = 0.5$，所以$x_n$单调递增且$x_n \geq 0.5$
    
    - 其次证明其有界性：
    
        已知$x_n \geq 0.5$，则：
        $$
        0 \lt \frac{1}{x_n} \leq 2
        $$
        则：
        $$
        1 \lt \frac{1}{x_n} + 1 \leq 3
        $$
        则：
        $$
        1 \gt \frac{1}{1 + \frac{1}{x_n}} \geq \frac{1}{3}
        $$
        则：
        $$
        2 \gt \frac{2}{1 + \frac{1}{x_n}} \geq \frac{2}{3}
        $$
        可见，$x_n$存在上界，其始终小于$2$
    
    :::
    
- **例12**：设$x_n = 1 + \dfrac{1}{2^2} + \dfrac{1}{3^2} + ... + \dfrac{1}{n^2}$，证明$\lim_{n \to \infty} x_n$存在。

    ::: details
    
    - 首先证明其单调性：
    
        计算$x_{n + 1} - x_n$：
        $$
        x_{n + 1} - x_n = \left[ 1 + \frac{1}{2^2} + \frac{1}{3^2} + \dots + \frac{1}{n^2} + \frac{1}{(n + 1)^2} \right] - \left[ 1 + \frac{1}{2^2} + \frac{1}{3^2} + \dots + \frac{1}{n^2} \right] = \frac{1}{(n + 1)^2} \gt 0
        $$
        所以$x_n$为单调递增
    
    - 其次证明其有界性：
        $$
        x_n = 1 + \frac{1}{2^2} + \frac{1}{3^2} + \dots + \frac{1}{n^2} \lt 1 + 1 - \frac{1}{2} + \frac{1}{2} - \frac{1}{3} + \dots + \frac{1}{n - 1} - \frac{1}{n} = 2 - \frac{1}{n} \lt 2
        $$
        所以$x_n$存在上界，其始终小于$2$
    
    :::

## VI. 无穷小量与无穷大量

### 6.1 无穷小量的定义

设函数$f(x)$在点$x_0$的某去心邻域内有定义，如果对于任意$\epsilon \gt 0$，存在$\delta \gt 0$，使得当$0 \lt |x - x_0| \lt \delta$时，有$|f(x)| \lt \epsilon$，则称函数$f(x)$是$x \to x_0$时的无穷小量

::: tip Tip

简而言之，即：$\lim_{x \to x_0} f(x) = 0$，称其为一个无穷小量

:::

### 6.2 无穷小量与极限的关系

$$
\lim_{x \to a} f(x) = A \Leftrightarrow \lim_{x \to a} \left[ f(x) - A \right] = 0 \Leftrightarrow^{\alpha = f(x) - A} f(x) = A + \alpha ,\, \lim_{x \to a} \alpha = 0
$$

::: tip Tip

作用：可以用来去掉极限号，将$f(x)$的表达式求出来

用法：已知极限中含有抽象函数，可利用该方法将抽象函数表达式求出

:::

### 6.3 无穷大量的定义

设函数$f(x)$在点$x_0$的某去心邻域内有定义，如果对于任意正数$M$（无论它有多么大），存在$\epsilon \gt 0$，使得当$0 \lt |x - x_0| \lt \epsilon$时，有$|f(x)| \gt M$，则称函数$f(x)$是当$x \to x_0$时的无穷大量

::: tip Tip

简而言之，即：$\lim_{x \to x_0} f(x) = \infty$，称其为一个无穷大量

无穷大量与无界量之间的关系：无穷大量必为无界量，无界量未必为无穷大量，但无界量必定含有一个无穷大的子序列

:::

- **例13**：设数列$\{ x_n \}$与$\{ y_n \}$满足$\lim_{n \to \infty} x_n y_n = 0$，则以下说法正确的是：

    - （A）若$\{ x_n \}$发散，则$\{ y_n \}$不发散
    - （B）若$\{ x_n \}$无界，则$\{ y_n \}$必有界
    - （C）若$\{ x_n \}$有界，则$\{ y_n \}$必为无穷小
    - （D）若$\{ \frac{1}{x_n} \}$为无穷小，则$\{ y_n \}$必为无穷小

    ::: details Answer

    若$\lim_{n \to \infty} \frac{1}{x_n} = 0$，则：
    $$
    \lim_{n \to \infty} x_n = \infty
    $$
    在此情况下，只有当$\lim_{n \to \infty} y_n = 0$时，形成$\infty \cdot 0$的未定式，才有可能得到$\lim_{n \to \infty} x_n y_n = 0$，例如：
    $$
    x_n = x ,\, y_n = \frac{1}{x^2} ,\, \lim_{n \to \infty} x_n y_n = 0
    $$
    所以D选项正确

    :::

### 6.4 无穷小量与无穷大量的关系

1. 若$\lim_{x \to x_0} f(x) = \infty$，则$\lim_{x \to x_0} \dfrac{1}{f(x)} = 0$
2. 若$\lim_{x \to x_0} f(x) = 0$，且$f(x) \neq 0$，则$\lim_{x \to x_0} \dfrac{1}{f(x)} = \infty$

### 6.5 无穷小量和无穷大量的运算性质

1. 有限个无穷小量的和、差、积也是无穷小量
2. 有界量与无穷小量之积为无穷小量
3. 设$\lim f(x) = \pm \infty$、$\lim g(x) = \pm \infty$，则$\lim \left[ f(x) + g(x) \right] = \pm \infty$

### 6.6 无穷小量阶的比较

设$\lim \alpha = \lim \beta = 0$，且$\alpha \neq 0$，则：

- 若$\lim \dfrac{\beta}{\alpha} = 0$，则称$\beta$是比$\alpha$高阶的无穷小，记作$\beta = o(\alpha)$
- 若$\lim \dfrac{\beta}{\alpha} = \infty$，则称$\beta$是比$\alpha$低阶的无穷小
- 若$\lim \dfrac{\beta}{\alpha} = c \neq 0$，则称$\beta$与$\alpha$是同阶的无穷小；当$c = 0$时两者为等价的无穷小，记作$\beta \sim \alpha$
- 若$\lim \dfrac{\beta}{\alpha^k} \neq 0 \, (k \gt 0)$，则称$\beta$是$\alpha$的$k$阶无穷小

::: tip Tip

1. 同阶无穷小与等价无穷小之间的关系：
    $$
    \lim_{x \to a} \frac{\beta}{\alpha} = c \Leftrightarrow 
    \lim_{x \to a} \frac{\beta}{c \alpha} = 1 \Leftrightarrow
    \beta \sim c \alpha
    $$

2. 高阶无穷小与等价无穷小之间的关系：
    $$
    \lim_{x \to a} \frac{\beta}{\alpha} = 0 \Leftrightarrow 
    \lim_{x \to a} \left[ \frac{\beta}{\alpha} + 1 \right] = 1 \Leftrightarrow
    \lim_{x \to a} \frac{\beta + \alpha}{\alpha} = 1 \Leftrightarrow
    \beta + \alpha \sim \alpha \Leftrightarrow
    \alpha + o(\alpha) \sim \alpha
    $$

3. 高阶无穷小的运算：
    $$
    o(x^n) \pm o(x^n) = o(x^n) ,\, o(x^n) + o(x^m) = o(x^m) ,\, (m \lt n)
    $$

    $$
    x^m \cdot o(x^n) = o(x^{m + n}) ,\, o(x^m) \cdot o(x^n) = o(x^{m + n}) ,\, o(cx^n) = o(x^n) ,\, (c \neq 0)
    $$

:::

### 6.7 等价无穷小替换定理

在自变量的同一变化过程中，设$\alpha(x) \sim\tilde{\alpha}(x)$，$\beta(x) \sim \tilde{\beta}(x)$，且$\lim \dfrac{\tilde{\beta}}{\tilde{\alpha}}$存在，则$\lim \dfrac{\beta}{\alpha} = \lim \dfrac{\tilde{\beta}}{\tilde{\alpha}}$

### 6.8 常用的等价无穷小量

当$x \to 0$时：
$$
x \sim \sin x \sim \tan x \sim \arcsin x \sim \arctan x \sim \ln (1 + x) \sim e^x - 1
$$

$$
(1 + x)^a - 1 \sim ax (a \neq 0) ,\, a^x - a \sim x \ln a (a \gt 0, a \neq 1) ,\, 1 - \cos x \sim \frac{x^2}{2}
$$

$$
x - \sin x \sim \frac{x^3}{6} ,\, x - \tan x \sim -\frac{x^3}{3} ,\, x - \ln (1 + x) \sim \frac{x^2}{2}
$$

$$
x - \arcsin x \sim -\frac{x^3}{6} ,\, x - \arctan x - \frac{x^3}{3}
$$

- **例14**：设$\alpha(x) = (e^{kx} - 1) \arcsin x$，$\beta(x) = \sqrt{1 + x \arcsin x} - \sqrt{\cos x}$，当$x \to 0$时，$\alpha(x) \sim \beta(x)$，则$k$的值是多少？

    ::: details Answer

    通过等价无穷小替换来简化极限：
    $$
    \lim_{x \to 0} \frac{(e^{kx} - 1) \arcsin x}{\sqrt{1 + x \arcsin x} - \sqrt{\cos x}} \\
    = \lim_{x \to 0} \frac{kx^2}{\sqrt{1 + x^2} - \sqrt{1 - \frac{x^2}{2}}} \\
    = \lim_{x \to 0} \frac{kx^2}{1 + \frac{x^2}{2} - 1 + \frac{x^2}{4}} \\
    = \lim_{x \to 0} \frac{kx^2}{\frac{3x^2}{4}} = 1 \\
    $$
    可解得$k = \dfrac{3}{4}$

    :::

- **例15**：若极限$\lim_{x \to 0} \dfrac{\sin x}{e^x - a} (\cos x - b) = 5$，则$a$和$b$的值是多少？

    ::: details Answer

    通过等价无穷小替换来简化极限：
    $$
    \lim_{x \to 0} \frac{\sin x}{e^x - a} (\cos x - b)
    = \lim_{x \to 0} \frac{x}{1 - a + x} (1 - b - \frac{x^2}{2})
    $$
    已知分子为无穷小，则分母必须也为无穷小，否则无法得到极限值$5$，所以$1 - a = 0$，则$a = 1$；然后再将$a = 1$代入后求$b$：
    $$
    \lim_{x \to 0} \frac{x}{1 - 1 + x} (1 - b - \frac{x^2}{2}) 
    = \lim_{x \to 0} (1 - b - \frac{x^2}{2})
    = 1 - b = 5
    $$
    由此可得$b = -4$

    :::

