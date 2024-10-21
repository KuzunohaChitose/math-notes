# 第二节 导数的计算

::: details Answer

[[toc]]

:::

## I. 导数公式

|                        $(C)' = 0$                         |        $(x^{\mu}) = \mu x^{\mu - 1}$        |
| :-------------------------------------------------------: | :-----------------------------------------: |
|                   $(\sin x)' = \cos x$                    |            $(\cos x)' = -\sin x$            |
|                  $(\tan x)' = \sec^2 x$                   |           $(\cot x)' = -\csc^2 x$           |
|                $(\sec x)' = \sec x \tan x$                |        $(\csc x)' = -\csc x \cot x$         |
|        $(a^x) = a^x \ln a ,\, (a \gt 0, a \neq 1)$        |               $(e^x)' = e^x$                |
| $(\log_a x)' = \dfrac{1}{x \ln a} \, (a \gt 0, a \neq 1)$ |          $(\ln x)' = \dfrac{1}{x}$          |
|        $(\arcsin x)' = \dfrac{1}{\sqrt{1 - x^2}}$         | $(\arccos x)' = -\dfrac{1}{\sqrt{1 - x^2}}$ |
|            $(\arctan x)' = \dfrac{1}{1 + x^2}$            |   $(\cot^{-1} x)' = -\dfrac{1}{1 + x^2}$    |

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

## IV. 复合函数的求导法则

## V. 隐函数的求导

## VI. 幂指函数的求导

## VII. 由参数方程所确立的函数的求导