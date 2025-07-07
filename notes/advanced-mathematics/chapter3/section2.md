# 第二节 洛必达法则

- **若**：（$a = x_0, x_0^-, x_0^+, +\infty, -\infty, \infty$）
    1. 当$x \to a$时，$f(x)$和$g(x)$皆趋于$0$或$\infty$
    2. 当$x \to a$时，$f'(x)$和$g'(x)$均存在且$g'(x) \neq 0$
    3. $\lim_{x \to a} \dfrac{f'(x)}{g'(x)}$存在或为$\infty$

- **则**：
    $$
    \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
    $$

::: tip Tip

1. 抽象函数的极限利用洛必达法则时要首先验证是否满足条件二
2. 若$\lim_{x \to a} \dfrac{f'(x)}{g'(x)}$不存在，则洛必达法则失效
3. $\lim_{x \to a} \dfrac{f(x)}{g(x)} = \lim_{x \to a} \dfrac{f'(x)}{g'(x)} (0/0, \infty/\infty) = \lim_{x \to a} \dfrac{f''(x)}{g''(x)} (0/0, \infty/\infty) = \dots$

:::

- **例1**：求此极限：
    $$
    \lim_{x \to 0} (\frac{1 + x}{1 - e^{-x}} - \frac{1}{x})
    $$
    ::: details Answer
    $$
    \begin{gather}
    \lim_{x \to 0} (\frac{1 + x}{1 - e^{-x}} - \frac{1}{x}) \\
    = \lim_{x \to 0} \frac{x + x^2 - 1 + e^{-x}}{x (1 - e^{-x})} \\
    = \lim_{x \to 0} \frac{x + x^2 - 1 + e^{-x}}{x^2} \\
    = \lim_{x \to 0} \frac{1 + 2x - e^{-x}}{2x} \\
    = \lim_{x \to 0} \frac{2 + e^{-x}}{2} = \frac{3}{2}
    \end{gather}
    $$
    :::

- **例2**：求此极限：
    $$
    \lim_{x \to 0} \frac{\sqrt{1 + 2 \sin x} - x - 1}{x \ln (1 + x)}
    $$
    ::: details Answer
    $$
    \begin{gather}
    \lim_{x \to 0} \frac{\sqrt{1 + 2 \sin x} - x - 1}{x \ln (1 + x)} \\
    = \lim_{x \to 0} \frac{1 + \sin x - \frac{1}{2} \sin^2 x - x - 1}{x^2} \\
    = \lim_{x \to 0} \frac{\sin x - \frac{1}{2} \sin^2 x - x}{x^2} \\
    = \lim_{x \to 0} \frac{\cos x - \sin x \cos x - 1}{2x} \\
    = \lim_{x \to 0} \frac{\cos x - \frac{1}{2} \sin (2x) - 1}{2x} \\
    = \lim_{x \to 0} \frac{-\sin x - \cos (2x)}{2} = -\frac{1}{2}
    \end{gather}
    $$
    :::

- **例3**：求此极限：
    $$
    \lim_{x \to \infty} (\frac{a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}{x}}}{n})^{nx} ,\, a_i \gt 0, a_i \neq 1, i = 1,2,\dots,n
    $$
    ::: details Answer
    
    > 设$f(x) = nx \ln (\frac{a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}{x}}}{n})$
    
    $$
    \lim_{x \to \infty} f(x) = n \lim_{x \to \infty} x \ln (\frac{a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}{x}}}{n}) \\
    = n \lim_{x \to \infty} x \left[ \ln (a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}
    {x}}) - \ln n \right] \\
    = n \lim_{x \to \infty} \frac{\ln (a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}{x}}) - \ln n}{x^{-1}} \\
    = n \lim_{x \to \infty} \frac{-x^{-2} (a_1^{\frac{1}{x}} \ln a_1 + a_2^{\frac{1}{x}} \ln a_2 + \dots + a_n^{\frac{1}{x}} \ln a_n)}{a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}{x}}} \cdot \frac{1}{-x^{-2}} \\
    = n \lim_{x \to \infty} \frac{a_1^{\frac{1}{x}} \ln a_1 + a_2^{\frac{1}{x}} \ln a_2 + \dots + a_n^{\frac{1}{x}} \ln a_n}{a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}{x}}} \\
    = n \cdot \frac{\ln a_1 + \ln a_2 + \dots + \ln a_n}{n} = \ln (a_1 a_2 \dots a_n)
    $$
    
    $$
    \lim_{x \to \infty} (\frac{a_1^{\frac{1}{x}} + a_2^{\frac{1}{x}} + \dots + a_n^{\frac{1}{x}}}{n})^{nx}
    = e^{\lim_{x \to \infty} f(x)} = e^{\ln (a_1 a_2 \dots a_n)} = a_1 a_2 \dots a_n
    $$
    :::
