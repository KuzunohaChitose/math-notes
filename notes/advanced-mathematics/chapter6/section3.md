# 第三节 可降阶的高阶微分方程

::: details Tables of Content

[[toc]]

:::

## I. $y^{(n)} = f(x)$型

对两边分别进行$n$次积分即可得到通解

- **例1**：求解微分方程$y''' = e^{2x} - \cos x$.

    ::: details Answer
    $$
    \begin{gather}
    y''' = e^{2x} - \cos x \\
    \int y''' \mathrm{d}x = \int e^{2x} \mathrm{d}x - \int \cos x \mathrm{d}x \\
    y'' = \frac{1}{2} e^{2x} - \sin x + C_1 \\
    \int y'' \mathrm{d}x = \int \frac{1}{2} e^{2x} \mathrm{d}x - \int \sin x \mathrm{d}x + \int C_1 \mathrm{d}x \\
    y' = \frac{1}{4} e^{2x} + \cos x + C_1 x + C_2 \\
    \int y' \mathrm{d}x = \int \frac{1}{4} e^{2x} \mathrm{d}x + \int \cos x \mathrm{d}x + \int C_1 x \mathrm{d}x + \int C_2 \mathrm{d}x \\
    y = \frac{1}{8} e^{2x} + \sin x + \frac{1}{2} C_1 x^2 + C_2 x + C_3 \\
    \end{gather}
    $$
    :::

## II. $y'' = f(x, y')$型

进行变量代换，令$y' = p(x)$，则$y'' = p'$，于是原方程变为：
$$
\frac{\mathrm{d}p}{\mathrm{d}x} = f(x, p)
$$
这是一个关于变量$x$、$p$的一阶微分方程

- **例2**：求解微分方程$\displaystyle y'' = \frac{2xy'}{1 + x^2}$.

    ::: details Answer
    $$
    \begin{gather}
    y'' = \frac{2xy'}{1 + x^2} \\
    \frac{\mathrm{d}p}{\mathrm{d}x} = \frac{2x}{1 + x^2} \cdot p, y' = p \\
    \int \frac{1}{p} \mathrm{d}p = \int \frac{2x}{1 + x^2} \mathrm{d}x \\
    \ln \left| p \right| = \ln (1 + x^2) + C_1 \\
    p = C_1 (1 + x^2) \\
    y = C_1 \int (1 + x^2) \mathrm{d}x \\
    = C_1 x + C_1 \frac{1}{3} x^3 + C_2 \\
    \end{gather}
    $$
    :::

- **例3**：求解微分方程$\displaystyle y'' - \frac{y'}{x} = x$.

    ::: details Answer
    $$
    \begin{gather}
    y'' - \frac{y'}{x} = x \\
    p' - \frac{p}{x} = x, y' = p \\
    p = e^{-\int -\frac{1}{x} \mathrm{d}x} \int x e^{\int -\frac{1}{x} \mathrm{d}x} \\
    = x \int x \cdot \frac{1}{x} \mathrm{d}x
    = x^2 + C_1 x \\
    y = \int p \mathrm{d}x = \frac{1}{3} x^3 + \frac{1}{2} C_1 x^2 + C_2 \\
    \end{gather}
    $$
    :::

## III. $y'' = f(y, y')$型

设$y' = p(y)$，则$y'' = \dfrac{\mathrm{d}p}{\mathrm{d}x} = \dfrac{\mathrm{d}p}{\mathrm{d}y} \cdot \dfrac{\mathrm{d}y}{\mathrm{d}x}$，于是有：
$$
p \cdot \frac{\mathrm{d}p}{\mathrm{d}y} = f(y, p)
$$
这是一个关于变量$y$、$p$的一阶微分方程

- **例4**：求解微分方程$\displaystyle yy'' - 2y'^2 = 0$.

    ::: details Answer
    $$
    \begin{gather}
    yy'' - 2(y')^2 = 0 \\
    p \frac{\mathrm{d}p}{\mathrm{d}y} = \frac{2p^2}{y}, y' = p(y) \\
    \int p \cdot \frac{1}{2p^2} \mathrm{d}p = \int \frac{1}{y} \mathrm{d}y \\
    \ln \left| p \right| = \ln \left| C_1 y^2 \right| \\
    p = \frac{\mathrm{d}y}{\mathrm{d}x} = C_1 y^2 \\
    \int y^{-2} \mathrm{d}y = \int C_1 \mathrm{d}x \\
    -\frac{1}{y} = C_1 x + C_2 \\
    y = -\frac{1}{C_1 x + C_2} \\
    \end{gather}
    $$
    :::

- **例5**：求解微分方程$\displaystyle y'' = (y')^3 + y'$.

    ::: details Answer
    $$
    \begin{gather}
    y'' = (y')^3 + y' \\
    p \frac{\mathrm{d}p}{\mathrm{d}y} = p^3 + p, y' = p(y) \\
    \int \frac{p}{p^3 + p} \mathrm{d}p = \int \mathrm{d}y \\
    \arctan p = y + C_1 \\
    \frac{\mathrm{d}y}{\mathrm{d}x} = \tan (y + C_1) \\
    \int \cot (y + C_1) \mathrm{d}y = \int \mathrm{d}x \\
    \ln \left| \sin (y + C_1) \right| = x + C_2 \\
    \end{gather}
    $$
    :::