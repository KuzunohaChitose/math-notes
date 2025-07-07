# 第二节 导数的计算

::: details Answer

[[toc]]

:::

## I. 导数公式

|                        $(C)' = 0$                         |          $(x^{\mu}) = \mu x^{\mu - 1}$          |
| :-------------------------------------------------------: | :---------------------------------------------: |
|                   $(\sin x)' = \cos x$                    |              $(\cos x)' = -\sin x$              |
|                  $(\tan x)' = \sec^2 x$                   |             $(\cot x)' = -\csc^2 x$             |
|                $(\sec x)' = \sec x \tan x$                |          $(\csc x)' = -\csc x \cot x$           |
|        $(a^x) = a^x \ln a ,\, (a \gt 0, a \neq 1)$        |                 $(e^x)' = e^x$                  |
| $(\log_a x)' = \dfrac{1}{x \ln a} \, (a \gt 0, a \neq 1)$ |            $(\ln x)' = \dfrac{1}{x}$            |
|        $(\arcsin x)' = \dfrac{1}{\sqrt{1 - x^2}}$         |   $(\arccos x)' = -\dfrac{1}{\sqrt{1 - x^2}}$   |
|            $(\arctan x)' = \dfrac{1}{1 + x^2}$            | $(\mathrm{arccot} \, x)' = -\dfrac{1}{1 + x^2}$ |

## II. 导数的四则运算法则

$$
\begin{gather}
\left[ kf(x) \right]' = kf'(x) ,\, (k \text{为常数}) \\
\left[ f(x) \pm g(x) \right]' = f'(x) \pm g'(x) \\
\left[ f(x) \cdot g(x) \right]' = f'(x) \cdot g(x) + f(x) \cdot g'(x) \\
\left[ \frac{f(x)}{g(x)} \right]' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)} ,\, (g(x) \neq 0)
\end{gather}
$$

- **例1**：求下列函数的导函数：

    - （1）$y = x \arcsin \frac{x}{2} + \sqrt{4 - x^2} + \ln 2$

        ::: details Answer
        $$
        \begin{gather}
        y' = (x \arcsin \frac{x}{2})' + (\sqrt{4 - x^2})' + (\ln 2)' \\
        = (x)' \arcsin \frac{x}{2} + x (\arcsin \frac{x}{2})' + \frac{1}{2} (4 - x^2)^{-\frac{1} {2}} \cdot (4 - x^2)' + 0 \\
        = \arcsin \frac{x}{2} + \frac{x}{\sqrt{1 - \frac{x^2}{4}}} \cdot (\frac{1}{2} x)' + \frac{1}{2 \sqrt{4 - x^2}} \cdot (-2x) \\
        = \arcsin \frac{x}{2} + \frac{\frac{1}{2} x}{\frac{1}{2} \sqrt{4 - x^2}} - \frac{x}{\sqrt{4 - x^2}} \\
        = \arcsin \frac{x}{2} + \frac{x}{\sqrt{4 - x^2}} - \frac{x}{\sqrt{4 - x^2}} = \arcsin \frac{x}{2}
        \end{gather}
        $$
        :::

    - （2）$y = e^{\tan \frac{1}{x}} \cos \frac{1}{x}$

        ::: details Answer
        $$
        \begin{gather}
        y' = (e^{\tan \frac{1}{x}})' \cdot \cos \frac{1}{x} + e^{\tan \frac{1}{x}} \cdot (\cos \frac{1}{x})' \\
        = e^{\tan \frac{1}{x}} \cdot (\tan \frac{1}{x})' \cdot \cos \frac{1}{x} + e^{\tan \frac{1}{x}} \cdot (-\sin \frac{1}{x}) \cdot (\frac{1}{x})' \\
        = e^{\tan \frac{1}{x}} \cdot \sec^2 \frac{1}{x} \cdot (-x^{-2}) \cdot \cos \frac{1}{x} + e^{\tan \frac{1}{x}} \cdot (-\sin \frac{1}{x}) \cdot (-x^{-2}) \\
        = -\frac{e^{\tan \frac{1}{x}}}{x^2} (\sec^2 \frac{1}{x} \cos \frac{1}{x} - \sin \frac{1}{x}) \\
        = -\frac{e^{\tan \frac{1}{x}}}{x^2} (\sec \frac{1}{x} - \sin \frac{1}{x})
        \end{gather}
        $$
        :::

    - （3）$y = e^{\sin \frac{1}{x}} + \frac{1 + x}{1 - x} e^{\sqrt{x}}$

        ::: details Answer
        $$
        \begin{gather}
        y' = (e^{\sin \frac{1}{x}})' + (\frac{1 + x}{1 - x})' e^{\sqrt{x}} + (\frac{1 + x}{1 - x}) (e^{\sqrt{x}})' \\
        = -\frac{e^{\sin \frac{1}{x}} \cos \frac{1}{x}}{x^2} + \frac{(1 + x)'(1 - x) - (1 + x)(1 - x)'}{(1 - x)^2} e^{\sqrt{x}} + \frac{1 + x}{1 - x} \cdot e^{\sqrt{x}} \cdot (\sqrt{x})' \\
        = -\frac{e^{\sin \frac{1}{x}} \cos \frac{1}{x}}{x^2} + \frac{1 - x + 1 + x}{(1 - x)^2} e^{\sqrt{x}} + \frac{1 + x}{1 - x} \cdot e^{\sqrt{x}} \cdot \frac{1}{2 \sqrt{x}} \\
        = -\frac{e^{\sin \frac{1}{x}} \cos \frac{1}{x}}{x^2} + \frac{e^{\sqrt{x}}}{1 - x} (\frac{2}{1 - x} + \frac{1 + x}{2\sqrt{x}})
        \end{gather}
        $$
        :::

    - （4）$y = x^{a^a} + a^{x^a} + a^{a^x}$

        ::: details Answer
        $$
        \begin{gather}
        y' = a^a x^{a^a - 1} + a^{x^a + 1} x^{a - 1} \ln a + a^{a^x + 1} \ln a
        \end{gather}
        $$
        :::

## III. 反函数的求导法则

设$y = f(x)$可导，且$f(x) \neq 0$，则其反函数$x = \varphi(y)$的导数为：
$$
\varphi'(y) = \frac{1}{f'(x)} = \frac{1}{\mathrm{d} y / \mathrm{d} x} = \frac{\mathrm{d} x}{\mathrm{d} y}
$$

- **例2**：设$y = f(x)$具有连续的一阶导数，且其反函数为$x = \varphi(y)$，若$f(1) = 2$、$f'(1) = 3$，则$\varphi'(2)$的值为何？

    ::: details Answer

    由反函数的导数的求导法则可知：
    $$
    \varphi'(y) = \frac{1}{f'(x)}
    $$
    又因为：
    $$
    f(1) = 2
    $$
    则：
    $$
    \varphi(2) = 1
    $$
    所以当$y = 2$时对应的$x = 1$：
    $$
    \varphi'(2) = \frac{1}{f'(1)} = \frac{1}{3}
    $$
    :::

## IV. 复合函数的求导法则

**链式求导法则**：设$y = f(u)$、$u = \varphi(x)$都可导，则$y = f\left[ \varphi(x) \right]$可导，且$\dfrac{\mathrm{d} y}{\mathrm{d} x} = \dfrac{\mathrm{d} y}{\mathrm{d} u} \cdot \dfrac{\mathrm{d} u}{\mathrm{d} x}$，即：
$$
\{ f \left[ \varphi(x) \right] \}' = f'\left[ \varphi(x) \right] \cdot \varphi'(x)
$$

- **例3**：求下列函数的导函数：

    - （1）$y = e^{\arctan \frac{x + 1}{x - 1}}$

        ::: details  Answer
        $$
        y' = e^{\arctan \frac{x + 1}{x - 1}} \cdot (\arctan \frac{x + 1}{x - 1})' \\
        = e^{\arctan \frac{x + 1}{x - 1}} \cdot \frac{1}{1 + (\frac{x + 1}{x - 1})^2} \cdot (\frac{x + 1}
        {x - 1})' \\
        = e^{\arctan \frac{x + 1}{x - 1}} \cdot \frac{1}{1 + (\frac{x + 1}{x - 1})^2} \cdot \frac{(x + 1)' (x - 1) - (x + 1)(x - 1)'}{(x - 1)^2} \\
        = e^{\arctan \frac{x + 1}{x - 1}} \cdot \frac{1}{1 + (\frac{x + 1}{x - 1})^2} \cdot \frac{-2}{(x - 1)^2} \\
        = e^{\arctan \frac{x + 1}{x - 1}} \cdot \frac{(x - 1)^2}{(x - 1)^2 + (x + 1)^2} \cdot \frac{-2}{(x - 1)^2} \\
        = -\frac{2 e^{\arctan \frac{x + 1}{x - 1}}}{(x - 1)^2 + (x + 1)^2}
        $$
        :::

    - （2）$y = \ln^2 \tan (x^2 + 1)$

        ::: details Answer
        $$
        y' = 2 \ln \tan (x^2 + 1) \cdot \frac{1}{\tan (x^2 + 1)} \cdot \sec^2 (x^2 + 1) \cdot 2x \\
        = \frac{4x \ln \tan (x^2 + 1) \sec^2 (x^2 + 1)}{\tan (x^2 + 1)}
        $$
        :::

    - （3）$y = \sin \left[ f(\sqrt{\frac{x + 1}{x - 1}}) \right]$

        ::: details Answer
        $$
        y' = \cos \left[ f(\sqrt{\frac{x + 1}{x - 1}}) \right] \cdot f'(\sqrt{\frac{x + 1}{x - 1}}) \cdot \frac{1}{2\sqrt{\frac{x + 1}{x - 1}}} \cdot \frac{-2}{(x - 1)^2} \\
        = -\frac{\cos \left[ f(\sqrt{\frac{x + 1}{x - 1}}) \right] f'(\sqrt{\frac{x + 1}{x - 1}})}{(x + 1)^{\frac{1}{2}} (x - 1)^{\frac{3}{2}}}
        $$
        :::

- **例4**：已知$y = f(\dfrac{3x - 2}{3x + 2})$，$f'(x) = \arctan x^2$，则$\dfrac{\mathrm{d} y}{\mathrm{d} x}|_{x = 0}$为何值？

    ::: details Answer

    根据链式法则求得$\dfrac{\mathrm{d} y}{\mathrm{d} x}$：
    $$
    y' = \arctan (\frac{3x - 2}{3x + 2})^2 \cdot \frac{12}{(3x + 2)^2}
    $$
    然后将$x = 0$代入：
    $$
    \frac{dy}{dx}|_{x = 0} = \arctan (\frac{0 - 2}{0 + 2})^2 \cdot \frac{12}{(0 + 2)^2}
    = 3 \arctan 1 = \frac{3}{4} \pi
    $$
    :::

## V. 隐函数的求导

设$y = f(x)$由方程$F(x, y) = 0$确定，在$F(x, y) = 0$中视$y$为$x$的函数，两边同时对$x$求导，即可得$\dfrac{\mathrm{d} y}{\mathrm{d} x}$

- **例5**：函数$y = y(x)$是由方程$xy + e^{x + y} = 2x + 1$所确定的隐函数，则$\dfrac{\mathrm{d} y}{\mathrm{d} x}|_{x = 0}$为何值？

    ::: details Answer

    两边同时对$x$求导：
    $$
    \begin{gather}
    y + xy' + e^{x + y} (1 + y') = 2 \\
    y' = \frac{2 - e^{x + y} - y}{x + e^{x + y}}
    \end{gather}
    $$
    然后将$x = 0$代入原方程求出$y$的值：
    $$
    \begin{gather}
    e^y = 1 \\
    y = 0
    \end{gather}
    $$
    最后代入$x = 0$和$y = 0$到$y'$的表达式中：
    $$
    y' = \frac{2 - e^0}{e^0} = 1
    $$
    即可得$\dfrac{\mathrm{d} y}{\mathrm{d} x}|_{x = 0} = 1$

    :::

## VI. 幂指函数的求导

对于幂指函数$y = u(x)^{v(x)} \, (u(x) \gt 0, u(x) \neq 1)$，若$u(x)$、$v(x)$均可导，常用求导方式有两种：

1. 转换为指数恒等式$u(x)^{v(x)} = e^{v(x) \ln u(x)}$，再利用复合函数的求导法则对其求导

2. 两边取对数得$\ln y = v(x) \ln \left[ u(x) \right]$，再对其两边关于$x$求导

最终解得：
$$
y' = u^v \left( v'\ln u + \frac{vu'}{u} \right)
$$

- **例6**：设$y = (1 + x^2)^{\sqrt{x}}$，求$y'$.

    ::: details Answer
    $$
    y' = (e^{\sqrt{x} \ln (1 + x^2)})'
    = e^{\sqrt{x} \ln (1 + x^2)} \left( \frac{\ln (1 + x^2)}{2\sqrt{x}} + \frac{2x^{\frac{3}{2}}}{1 + x^2} \right)
    $$
    :::

## VII. 由参数方程所确立的函数的求导

设函数$y = y(x)$由以下参数方程确立：
$$
\begin{cases}
x = x(t) \\
y = y(t)
\end{cases}
$$
$x(t)$及$y(t)$皆可导，且$x'(t) \neq 0$，则$\dfrac{\mathrm{d}y}{\mathrm{d}x} = \dfrac{\mathrm{d}y}{\mathrm{d}t} \cdot \dfrac{\mathrm{d}t}{\mathrm{d}x} = \dfrac{y'(t)}{x'(t)}$

- **例7**：设函数$y = y(x)$由
    $$
    \begin{cases}
    2x - tx^2 + e^t = 5 \\
    y = \arctan t
    \end{cases}
    $$
    确立，求$\dfrac{\mathrm{d}y}{\mathrm{d}x}$.

    ::: details Answer
    $$
    \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{\mathrm{d}y}{\mathrm{d}t} \cdot \frac{\mathrm{d}t}{\mathrm{d}x} = \frac{1}{1 + t^2} \cdot \frac{2 - 2tx}{x^2 - e^y}
    $$
    :::

