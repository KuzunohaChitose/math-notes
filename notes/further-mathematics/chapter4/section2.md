# 第二节 不定积分的基本积分法

::: details Tables of Content

[[toc]]

:::

## I. 换元积分法

### 1.1 第一类换元积分法（凑微分法）

设$F(x)$是$f(x)$的一个原函数，$u = \varphi(x)$可导，则：
$$
\int f\left[ \varphi(x) \right] \varphi'(x) \mathrm{d}x
= \int f\left[ \varphi(x) \right] \mathrm{d}\varphi(x) 
= \int f(u) \mathrm{d}u 
= F(u) + C 
= F\left[ \varphi(x) \right] + C
$$

::: tip Tip

1. 关键在于将积分变量$x$的微分$\mathrm{d}x$凑成中间变量$g(x)$的微分$\mathrm{d}g(x)$
2. 被积函数中存在两个函数且两个函数存在“导数关系”

:::

- **例1**：求下列不定积分：

    1. $\int \dfrac{\mathrm{d}x}{x(1 + 2\ln x)}$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{x(1 + 2\ln x)} 
        = \int \frac{1}{1 + 2 \ln x} \mathrm{d} (\ln x) \\
        = \frac{1}{2} \int \frac{1}{1 + 2 \ln x} \mathrm{d} (1 + 2 \ln x) 
        = \frac{1}{2} \ln \left| 1 + 2 \ln x \right| + C
        \end{gather}
        $$
        :::

    2. $\int \dfrac{\mathrm{d}x}{a^2 + x^2} (a \neq 0)$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{a^2 + x^2}
        = \frac{1}{a^2} \int \frac{\mathrm{d}x}{1 + \frac{x^2}{a^2}} \\
        = \frac{1}{a} \int \frac{1}{1 + u^2} \mathrm{d} u, u = \frac{x}{a} \\
        = \frac{1}{a} \arctan u + C = \frac{1}{a} \arctan \frac{x}{a} + C
        \end{gather}
        $$

    3. $\int \sin^3 x \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \sin^3 x \mathrm{d}x
        = -\int \sin^2 x \mathrm{d} (\cos x)
        = -\int (1 - \cos^2 x) \mathrm{d} (\cos x) \\
        = -\int \mathrm{d} (\cos x) + \int \cos^2 x \mathrm{d} (\cos x)
        = -\cos x + \frac{1}{3} \cos^3 x + C
        \end{gather}
        $$
        :::

    4. $\int \dfrac{\mathrm{d}x}{\sqrt{x(1 + x)}} (x \gt 0)$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{\sqrt{x(1 + x)}}
        = \int (1 + x)^{-\frac{1}{2}} \cdot x^{-\frac{1}{2}} \mathrm{d}x \\
        = 2 \int \frac{1}{\sqrt{1 + u^2}} \mathrm{d}u, u = x^{\frac{1}{2}} \\
        = 2 \ln (u + \sqrt{1 + u^2}) + C \\
        = 2 \ln (\sqrt{x} + \sqrt{1 + x}) + C
        \end{gather}
        $$
        :::
    
    5. $\int \dfrac{1}{\sqrt{a^2 - x^2}} \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{\sqrt{a^2 - x^2}} \mathrm{d}x
        = \frac{1}{a} \int \frac{1}{\sqrt{1 - (\frac{x}{a})^2}} \mathrm{d}x \\
        = \int \frac{1}{\sqrt{1 - (\frac{x}{a})^2}} \mathrm{d}(\frac{x}{a})
        = \int \frac{1}{\sqrt{1 - u^2}} \mathrm{d}u, u = \frac{x}{a} \\
        = \arcsin u + C
        = \arcsin \frac{x}{a} + C
        \end{gather}
        $$
        :::
    
    6. $\int \dfrac{1}{x^2 - a^2} \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{x^2 - a^2} \mathrm{d}x
        = \int \frac{1}{(x + a)(x - a)} \mathrm{d}x \\
        = \frac{1}{2a} \int \frac{1}{x - a} \mathrm{d}x - \frac{1}{2a} \int \frac{1}{x + a} \mathrm{d}x \\
        = \frac{1}{2a} \left[ \int \frac{1}{x - a} \mathrm{d}(x - a) - \int \frac{1}{x + a} \mathrm{d}(x + a) \right] \\
        = \frac{1}{2a} \left[ \ln \left| x - a \right| - \ln \left| x + a \right| \right] + C \\
        = \frac{1}{2a} \ln \left| \frac{x - a}{x + a} \right| + C \\
        \end{gather}
        $$
        ::: 
    
    7. $\int \dfrac{1}{x^2 + a^2} \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{x^2 + a^2} \mathrm{d}x
        = \frac{1}{a^2} \int \frac{1}{1 + (\frac{x}{a})^2} \mathrm{d}x \\
        = \frac{1}{a} \int \frac{1}{1 + u} \mathrm{d}u, u = \frac{x}{a} \\
        = \frac{1}{a} \arctan u + C
        = \frac{1}{a} \arctan \frac{x}{a} + C \\
        \end{gather}
        $$
        :::
    
    8. $\int \dfrac{1}{x^2 + 8x + 25} \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{x^2 + 8x + 25} \mathrm{d}x \\
        = \int \frac{1}{(x + 4)^2 + 3^2} \mathrm{d}(x + 4) \\
        = \frac{1}{3} \arctan \frac{x + 4}{3} + C \\
        \end{gather}
        $$
        :::
    
    9. $\int f(ax^n + b) \cdot x^{n - 1} \mathrm{d}x$
    
        ::: details Answer
    
        > 设$F'(x) = f(x)$
    
        $$
        \begin{gather}
        \int f(ax^n + b) \cdot x^{n - 1} \mathrm{d}x \\
        = \frac{1}{an} \int f(ax^n + b) \mathrm{d}(ax^n + b) \\
        = \frac{1}{an} F(ax^n + b) + C \\
        \end{gather}
        $$
    
        :::
    
    10. $\int \dfrac{x^3}{\sqrt{1 + x^2}} \mathrm{d}x$
    
        ::: details Answer
        $$
        \begin{gather}
        \int \frac{x^3}{\sqrt{1 + x^2}} \mathrm{d}x
        = \frac{1}{2} \int \frac{x^2}{\sqrt{1 + x^2}} \mathrm{d}(x^2) \\
        = \frac{1}{2} \int \frac{x^2 + 1 - 1}{\sqrt{x^2 + 1}} \mathrm{d}(x^2) 
        = \frac{1}{2} \int \left[ (x^2 + 1)^{\frac{1}{2}} - (x^2 + 1)^{-\frac{1}{2}} \right] \mathrm{d}(x^2) \\
        = \frac{1}{2} \int u^{\frac{1}{2}} \mathrm{d}u - \frac{1}{2} \int u^{-\frac{1}{2}} \mathrm{d}u, u = x^2 + 1 \\
        = \frac{1}{3} u^{\frac{3}{2}} - u^{\frac{1}{2}} + C
        = \frac{1}{3} \sqrt{(x^2 + 1)^3} - \sqrt{x^2 + 1} + C
        \end{gather}
        $$
        :::

### 1.2 第二类换元积分法

设$x = \varphi(t)$是单调、可导函数，若$\varphi'(t) \neq 0$，则有：
$$
\int f(x) \mathrm{d}x = \int f\left[ \varphi(t) \right] \mathrm{d} \varphi(t) = \int f\left[ \varphi(t) \right] \varphi'(t) \mathrm{d}t
$$

::: tip Tip

1. 整体代换：被积函数中含有$\sqrt[n]{ax + b}$或$\sqrt[n]{\dfrac{ax + b}{cx + d}}$，直接令$t$等于根式整体
2. TODO...

:::

- **例2**：求下列不定积分：

    1. $\int \dfrac{1}{\sqrt{x} + \sqrt[3]{x}} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{\sqrt{x} + \sqrt[3]{x}} \mathrm{d}x
        = \int \frac{1}{t^3 + t^2} \mathrm{d}(t^6), t = \sqrt[6]{x} \\
        = 6 \int \frac{t^5}{t^3 + t^2} \mathrm{d}t
        = 6 \int \frac{t^3}{t + 1} \mathrm{d}t \\
        = 6 \int \frac{(t + 1)(t^2 - t + 1) - 1}{t + 1} \mathrm{d}t \\
        = 6 \int (t^2 - t + 1 - \frac{1}{t + 1}) \mathrm{d}t \\
        = 6 \int t^2 \mathrm{d}t - 6 \int t \mathrm{d}t + 6 \int \mathrm{d}t - 6 \int \frac{1}{t + 1} \mathrm{d}(t + 1) \\
        = 2 t^3 - 3 t^2 + 6t - 6 \ln \left| t + 1 \right| + C \\
        = 2 x^{\frac{1}{2}} - 3 x^{\frac{1}{3}} + 6x^{\frac{1}{6}} - 6 \ln (x^{\frac{1}{6}} + 1) + C \\
        \end{gather}
        $$
        :::

    1. $\int \dfrac{\mathrm{d}x}{x(x^5 + 1)}$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{x(x^5 + 1)}
        = \int \frac{1}{\frac{1}{t} (\frac{1}{t^5} + 1)} \mathrm{d} (\frac{1}{t}), x = \frac{1}{t}
        = -\int \frac{t^6}{t^5 + 1} \cdot \frac{1}{t^2} \mathrm{d}t \\
        = -\int \frac{t^4}{t^5 + 1} \mathrm{d}t
        = -\frac{1}{5} \int \frac{1}{t^5 + 1} \mathrm{d} t^5
        = -\frac{1}{5} \int \frac{1}{u} \mathrm{d}u, u = t^5 + 1 \\
        = -\frac{1}{5} \ln \left| u \right| + C
        = -\frac{1}{5} \ln \left| t^5 + 1 \right| + C
        = -\frac{1}{5} \ln \left| \frac{1 + x^5}{x^5} \right| + C
        \end{gather}
        $$
        :::

    2. $\int \dfrac{\sqrt{x + 1} - 1}{\sqrt{x + 1} + 1} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\sqrt{x + 1} - 1}{\sqrt{x + 1} + 1} \mathrm{d}x
        = \int \frac{\sqrt{t^2 - 1 + 1} - 1}{\sqrt{t^2 - 1 + 1} + 1} \mathrm{d} (t^2 - 1), x = t^2 - 1 \\
        = 2 \int \frac{t^2 - t}{t + 1} \mathrm{d}t
        = 2 \int (t - 2 + \frac{2}{t + 1}) \mathrm{d}t
        = 2 \int t \mathrm{d}t - 4 \int \mathrm{d}t + 4 \int \frac{1}{t + 1} \mathrm{d}t \\
        = t^2 - 4t + 4\ln \left| t + 1 \right| + C
        = x + 1 - 4\sqrt{x + 1} + 4 \ln (\sqrt{x + 1} + 1) + C \\
        \end{gather}
        $$
        :::

    3. $\int \sqrt{a^2 - x^2} \mathrm{d}x \, (a \gt 0)$

        ::: details Answer
        $$
        \begin{gather}
        \int \sqrt{a^2 - x^2} \mathrm{d}x = \int a \sqrt{1 - \frac{x^2}{a^2}} \mathrm{d}x \\
        = a^2 \int \sqrt{1 - \sin^2 t} \mathrm{d} (\sin t), x = a \sin t \\
        = a^2 \int \cos^2 t \mathrm{d}t = a^2 \int \frac{1 + \cos 2t}{2} \mathrm{d}t \\
        = \frac{a^2}{2} (\int \mathrm{d}t + \int \cos 2t \mathrm{d}t) \\
        = \frac{a^2}{2} t + \frac{a^2}{4} \sin 2t + C \\
        = \frac{a^2}{2} t + \frac{a^2}{2} \sin t \cos t + C \\
        = \frac{a^2}{2} (\arcsin \frac{x}{a} + \frac{x}{a^2} \sqrt{a^2 - x^2}) + C
        \end{gather}
        $$
        :::

    4. $\int \dfrac{1}{\sqrt{x^2 + a^2}} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{\sqrt{x^2 + a^2}} \mathrm{d}x
        = \int \frac{1}{\sqrt{a^2 \tan^2 u + a^2}} \mathrm{d}(a \tan u), x = a \tan u \\
        = \int \frac{\sec^2 u}{\sqrt{\tan^2 u + 1}} \mathrm{d}u
        = \int \sec u \mathrm{d}u
        = \ln \left| \sec u + \tan u \right| + C \\
        = \ln \left| \sqrt{1 + \tan^2 u} + \tan u \right| + C
        = \ln \left| \sqrt{1 + (\frac{x}{a})^2} + \frac{x}{a} \right| + C \\
        = \ln \left| \sqrt{\frac{a^2 + x^2}{a^2}} + \frac{x}{a} \right| + C
        = \ln \left| \frac{\sqrt{a^2 + x^2} + x}{a} \right| + C \\
        = \ln (\sqrt{a^2 + x^2} + x) - \ln a + C
        = \ln (\sqrt{a^2 + x^2} + x) + C \\
        \end{gather}
        $$
        :::

    5. $\int \dfrac{1}{\sqrt{x^2 - a^2}} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{\sqrt{x^2 - a^2}} \mathrm{d}x
        = \int \frac{1}{\sqrt{a^2 \sec^2 u - a^2}} \mathrm{d}(a \sec u), x = a \sec u \\
        = \int \frac{1}{\sqrt{\sec^2 u - 1}} \mathrm{d}(\sec u) 
        = \int \frac{\cos u}{\sin u} \cdot \frac{\sin u}{\cos^2 u} \mathrm{d}u \\
        = \int \sec u \mathrm{d}u
        = \ln \left| \sec u + \tan u \right| + C \\
        = \ln \left| \sec u + \sqrt{\sec^2 u - 1} \right| + C 
        = \ln \left| \frac{x}{a} + \sqrt{\frac{x^2}{a^2} - 1} \right| + C \\
        = \ln \left| \frac{x + \sqrt{x^2 - a^2}}{a} \right| + C 
        = \ln \left| x + \sqrt{x^2 - a^2} \right| + C \\
        \end{gather}
        $$
        :::

## II. 分部积分法

设$u = u(x)$、$v = v(x)$均有连续的导数，则：
$$
\int u(x) v'(x) \mathrm{d}x = u(x) v(x) - \int v(x) u'(x) \mathrm{d}x
$$
或：
$$
\int u(x) \mathrm{d}v(x) = u(x) v(x) - \int v(x) \mathrm{d}u(x)
$$

- **例3**：求下列不定积分：

    1. $\int x \arctan x \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int x \arctan x \mathrm{d}x
        = \frac{1}{2} \int  \arctan x \mathrm{d} (x^2) \\
        = \frac{1}{2} x^2 \arctan x - \frac{1}{2} \int x^2 \mathrm{d} (\arctan x) \\
        = \frac{1}{2} x^2 \arctan x - \frac{1}{2} \int \frac{x^2}{1 + x^2} \mathrm{d}x \\
        = \frac{1}{2} x^2 \arctan x - \frac{1}{2} \int (1 - \frac{1}{1 + x^2}) \mathrm{d}x \\
        = \frac{1}{2} x^2 \arctan x - \frac{1}{2} \int \mathrm{d}x + \frac{1}{2} \int \frac{\mathrm{d}x}{1 + x^2} \\
        = \frac{1}{2} x^2 \arctan x - \frac{1}{2} x + \frac{1}{2} \arctan x + C
        \end{gather}
        $$
        :::

    2. $\int x^2 \ln x \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int x^2 \ln x \mathrm{d}x
        = \frac{1}{3} \int \ln x \mathrm{d}(x^3) \\
        = \frac{1}{3} x^3 \ln x - \frac{1}{3} \int x^3 \mathrm{d}(\ln x) \\
        = \frac{1}{3} x^3 \ln x - \frac{1}{3} \int x^2 \mathrm{d}x \\
        = \frac{1}{3} x^3 \ln x - \frac{1}{9} x^3 + C
        \end{gather}
        $$
        :::

    3. $\int e^x \cos x \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int e^x \cos x \mathrm{d}x
        = \int \cos x \mathrm{d}(e^x) \\
        = e^x \cos x - \int e^x \mathrm{d}(\cos x) \\
        = e^x \cos x + \int e^x \sin x \mathrm{d}x \\
        = e^x \cos x + \int \sin x \mathrm{d}(e^x) \\
        = e^x \cos x + e^x \sin x - \int e^x \mathrm{d}(\sin x) \\
        = e^x \cos x + e^x \sin x - \int e^x \cos x \mathrm{d}x
        \end{gather}
        $$
        由此可知：
        $$
        \int e^x \cos x \mathrm{d}x = e^x \cos x + e^x \sin x - \int e^x \cos x \mathrm{d}x
        $$
        则：
        $$
        2 \int e^x \cos x \mathrm{d}x = e^x \cos x + e^x \sin x
        $$
        则：
        $$
        \int e^x \cos x \mathrm{d}x = \frac{1}{2} e^x \cos x + \frac{1}{2} e^{x} \sin x + C
        $$
        :::

    4. $\int e^{\sqrt{x}} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int e^{\sqrt{x}} \mathrm{d}x
        = \int e^t \mathrm{d}(t^2), t = \sqrt{x} \\
        = 2 \int t e^t \mathrm{d} t
        = 2 \int t \mathrm{d}(e^t)
        = 2t e^t - 2 \int e^x \mathrm{d}t \\
        = 2t e^t - 2e^t + C
        = 2\sqrt{x} e^{\sqrt{x}} - 2e^{\sqrt{x}} + C
        \end{gather}
        $$
        :::

- **例4**：设$f(\ln x) = \dfrac{\ln (1 + x)}{x}$，计算$\int f(x) \mathrm{d}x$.

    ::: details Answer

    设$t = \ln x$，则$x = e^t$，则：
    $$
    f(t) = \frac{\ln (1 + e^t)}{e^t} \Rightarrow f(x) = \frac{\ln (1 + e^x)}{e^x}
    $$
    将$f(x)$代入不定积分：
    $$
    \begin{gather}
    \int \frac{\ln (1 + e^x)}{e^x} \mathrm{d}x
    = -\int \ln (1 + e^x) \mathrm{d}(e^{-x}) \\
    = -e^{-x} \ln (1 + e^x) + \int e^{-x} \mathrm{d}(\ln (1 + e^x)) \\
    = -e^{-x} \ln (1 + e^x) + \int e^{-x} \cdot \frac{e^x}{1 + e^x} \mathrm{d}x \\
    = -e^{-x} \ln (1 + e^x) + \int \frac{1}{1 + e^x} \mathrm{d}x \\
    = -e^{-x} \ln (1 + e^x) + \int (1 - \frac{e^x}{1 + e^x}) \mathrm{d}x \\
    = -e^{-x} \ln (1 + e^x) + \int \mathrm{d}x - \int \frac{e^x}{1 + e^x} \mathrm{d}x \\
    = -e^{-x} \ln (1 + e^x) + \int \mathrm{d}x - \int \frac{1}{1 + e^x} \mathrm{d}(1 + e^x) \\
    = -e^{-x} \ln (1 + e^x) + x - \ln (1 + e^x) + C
    \end{gather}
    $$
    :::

