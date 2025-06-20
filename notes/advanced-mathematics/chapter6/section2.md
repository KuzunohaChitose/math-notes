# 第二节 一阶常微分方程

::: details Tables of Content

[[toc]]

:::

## I. 变量可分离的微分方程

形如：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = f(x) \cdot g(y)
$$
的微分方程，称之为变量可分离的微分方程；当$g(y) \neq 0$时，通过变量分离可得：
$$
\frac{\mathrm{d}y}{g(y)} = f(x) \mathrm{d}x
$$
对两边进行积分可得：
$$
\int \frac{1}{g(y)} \mathrm{d}y = \int f(x) \mathrm{d}x
$$
积分的结果即为此微分方程的通解

- **例1**：求下列微分方程的通解：

    1. $\displaystyle xy' - 2y \ln y = 0$

        ::: details Answer
        $$
        \begin{gather}
        xy' - 2y \ln y = 0 \\
        \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1}{x} \cdot 2y \ln y \\
        \int \frac{1}{2y \ln y} \mathrm{d}y = \int \frac{1}{x} \mathrm{d}x \\
        \frac{1}{2} \int \frac{1}{\ln y} \mathrm{d}(\ln y) = \ln \left| x \right| + \ln \left| C \right| \\
        \frac{1}{2} \ln \left| \ln y \right| = \ln \left| Cx \right| \\
        \ln y = C^2 x^2 \\
        y = e^{C^2 x^2} \\
        y = e^{C x^2}
        \end{gather}
        $$
        :::

    2. $\displaystyle x(1 + y^2) \mathrm{d}x - 3y(1 + x^2) \mathrm{d}y = 0$

        ::: details Answer
        $$
        \begin{gather}
        x (1 + y^2) \mathrm{d}x - 3y (1 + x^2) \mathrm{d}y = 0 \\
        \frac{\mathrm{d}y}{\mathrm{d}x} = \frac{1 + y^2}{3y} \cdot \frac{x}{1 + x^2} \\
        \int \frac{3y}{1 + y^2} \mathrm{d}y = \int \frac{x}{1 + x^2} \mathrm{d}x \\
        \frac{3}{2} \int \frac{1}{1 + y^2} \mathrm{d}(1 + y^2) = \frac{1}{2} \int \frac{1}{1 + x^2} \mathrm{d}(1 + x^2) \\
        3 \ln (1 + y^2) = \ln (1 + x^3) + C \\
        \ln (1 + y^2)^3 = \ln C(1 + x^3) \\
        (1 + y^2)^3 = C(1 + x^3) \\
        \end{gather}
        $$
        :::

## II. 齐次微分方程

形如：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = \varphi(\frac{y}{x})
$$
的微分方程，称之为齐次微分方程；设$u = \dfrac{y}{x}$，则可得到：
$$
y = ux
$$
对其两边关于$x$求导可得：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{d(ux)}{\mathrm{d}x} = \frac{\mathrm{d}u}{\mathrm{d}x} \cdot x + u
$$
将此代入原式可得：
$$
u + x \cdot \frac{\mathrm{d}u}{\mathrm{d}x} = \varphi(u)
$$
整理可得：
$$
\frac{\mathrm{d}u}{\mathrm{d}x} = \frac{\varphi(u) - u}{x}
$$
而正是变量可分离的微分方程的形式

- **例2**：求解下列微分方程：

    1. $\displaystyle y^2 + x^2 y' = xy y'$

        ::: details Answer
        $$
        \begin{gather}
        y^2 + x^2 \cdot \frac{\mathrm{d}y}{\mathrm{d}x} = xy \cdot \frac{\mathrm{d}y}{\mathrm{d}x} \\
        \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{y^2}{x^2 - xy} = -\frac{(\frac{y}{x})^2}{1 - \frac{y}{x}} \\
        u + x \cdot \frac{\mathrm{d}u}{\mathrm{d}x} = -\frac{u^2}{1 - u}, u = \frac{y}{x} \\
        \frac{\mathrm{d}u}{\mathrm{d}x} = -\frac{u}{1 - u} \cdot \frac{1}{x} \\
        - \int \frac{1 - u}{u} \mathrm{d}u = \int \frac{1}{x} \mathrm{d}x \\
        -\int \frac{1}{u} \mathrm{d}u - \int \mathrm{d}u = \int \frac{1}{x} \mathrm{d}x \\
        -\ln \left| u \right| - u = \ln \left| x \right| + C \\
        -\ln \left| \frac{y}{x} \right| - \frac{y}{x} = \ln \left| x \right| + C \\
        -\ln \left| y \right| + \ln \left| x \right| - \frac{y}{x} = \ln \left| x \right| + C \\
        \ln \left| y \right| + \frac{y}{x} + C = 0 \\
        \end{gather}
        $$
        :::

    2. $\displaystyle (x^2 + 2xy - y^2) \mathrm{d}x + (y^2 + 2xy - x^2) \mathrm{d}y = 0$

        ::: details Answer
        $$
        \begin{gather}
        (x^2 + 2xy - y^2) \mathrm{d}x + (y^2 + 2xy - x^2) \mathrm{d}y = 0 \\
         \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{x^2 + 2xy - y^2}{y^2 + 2xy - x^2} = -\frac{1 + 2 \frac{y}{x} - (\frac{y}{x})^2}{(\frac{y}{x})^2 + 2 \frac{y}{x} - 1} \\
         u + x \cdot \frac{\mathrm{d}u}{\mathrm{d}x} = -\frac{1 + 2u - u^2}{u^2 + 2u - 1}, u = \frac{y}{x} \\
         \frac{\mathrm{d}u}{\mathrm{d}x} = -(\frac{1 + 2u - u^2}{u^2 + 2u - 1} + u) \cdot \frac{1}{x} \\
         -\int \frac{u^2 + 2u - 1}{u^3 + u^2 + u + 1} \mathrm{d}u = \int \frac{1}{x} \mathrm{d}x \\
         -\int \frac{u^2 + 2u - 1}{(u + 1)(u^2 + 1)} \mathrm{d}u = \int \frac{1}{x} \mathrm{d}x \\
        \int \frac{1}{u + 1} \mathrm{d}u - 2 \int \frac{u}{u^2 + 1} \mathrm{d}u = \ln \left| x \right| + C \\
        \ln \left| u + 1 \right| - \ln (u^2 + 1) = \ln \left| x \right| + C \\
        \ln \left| \frac{y}{x} + 1 \right| - \ln (\frac{y^2}{x^2} + 1) = \ln \left| x \right| + C \\
        \ln \left| \frac{y + x}{x} \cdot \frac{x^2}{y^2 + x^2} \right| - \ln \left| x \right| = C \\
        \ln \left| \frac{x(x + y)}{x^2 + y^2} \cdot \frac{1}{x} \right| = \ln \left| C \right| \\
        \frac{x + y}{x^2 + y^2} = C \\
        \end{gather}
        $$
        :::

## III. 一阶线性微分方程

形如：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} + P(x) y = Q(x)
$$
的微分方程，若$Q(x) \neq 0$则称之为一阶非齐次线性微分方程，否之则称之为一阶齐次线性微分方程；对于一阶非齐次线性微分方程，设$\displaystyle y = u(x) \cdot e^{-\int P(x) \mathrm{d}x}$，则此方程可以写成：
$$
u'(x) \cdot e^{-\int P(x) \mathrm{d}x} - u(x) \cdot e^{-\int P(x) \mathrm{d}x} \cdot P(x) + P(x) \cdot u(x) \cdot e^{-\int P(x) \mathrm{d}x} = Q(x)
$$
于是有：
$$
u'(x) = Q(x) \cdot e^{\int P(x) \mathrm{d}x}
\Rightarrow u(x) = \int Q(x) \cdot e^{\int P(x) \mathrm{d}x} \mathrm{d}x
$$
最终可求得通解：
$$
y = e^{-\int P(x) \mathrm{d}x} \left[ \int Q(x) e^{\int P(x) \mathrm{d}x} \mathrm{d}x \right]
$$
而对于一阶齐次线性微分方程，显然它正是一个变量可分离的微分方程，则有：
$$
\int \frac{1}{y} \mathrm{d}y = -\int P(x) \mathrm{d}x
$$
最终可求得通解：
$$
y = C e^{-\int P(x) \mathrm{d}x}
$$

- **例3**：求解下列微分方程：

    1. $\displaystyle y' + y \tan x = \sin 2x$

        ::: details Answer
        $$
        \begin{gather}
        y = e^{-\int \tan x \mathrm{d}x} \left[ \int \sin 2x e^{\int \tan x \mathrm{d}x} \mathrm{d}x \right] \\
        = e^{\ln \left| \cos x \right|} \left[ \int \sin 2x e^{-\ln \left| \cos x \right| + C} \mathrm{d}x \right] \\
        = \cos x \left[ 2 \int \sin x \cos x \sec x \mathrm{d}x + C \right] \\
        = \cos x \left[ 2 \int \sin x \mathrm{d}x + C \right] \\
        = \cos x (C - 2 \cos x) \\
        \end{gather}
        $$
        :::

    2. $\displaystyle xy' \ln x + y = x(1 + \ln x)$

        ::: details Answer
        $$
        \begin{gather}
        x y' \ln x + y = x(1 + \ln x) \\
        y' \ln x + \frac{y}{x} = 1 + \ln x \\
        y' + \frac{y}{x \ln x} = \frac{1}{\ln x} + 1 \\
        y = e^{-\int \frac{1}{x \ln x} \mathrm{d}x} \left[ \int (\frac{1}{\ln x} + 1) e^{\int \frac{1}{x \ln x} \mathrm{d}x} \mathrm{d}x \right] \\
        = \frac{1}{\ln x} \left[ \int (1 + \ln x) \mathrm{d}x + C \right] \\
        = \frac{1}{\ln x} (x \ln x + C)
        = x + \frac{C}{\ln x}
        \end{gather}
        $$
        :::

- **例4**：求下列微分方程满足所给初始条件的特解：

    1. $\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x} + \frac{y}{x} = \frac{\sin x}{x}, y|_{x = \pi} = 1$

        ::: details Answer
        $$
        y = e^{-\int \frac{1}{x} \mathrm{d}x} \left[ \int \frac{\sin x}{x} e^{\int \frac{1}{x} \mathrm{d}x} \mathrm{d}x \right] \\
        = \frac{1}{x} \left[ \int \sin x \mathrm{d}x + C \right]
        = \frac{1}{x} (C - \cos x) \\
        y|_{x = \pi} = 1 \Rightarrow \frac{1}{\pi} (C - \cos \pi) = 1 \\
        \Rightarrow C = \pi - 1
        \Rightarrow y = \frac{1}{x} (\pi - 1 - \cos x)
        $$
        :::

    2. $\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x} + \frac{2 - 3x^2}{x^3} y = 1, y|_{x = 1} = 0$

        ::: details Answer
        $$
        \begin{gather}
        y = e^{-\int \frac{2 - 3x^2}{x^3} \mathrm{d}x} \left[ \int e^{\int \frac{2 - 3x^2}{x^3} \mathrm{d}x} \mathrm{d}x \right] \\
        = e^{x^{-2} + 3 \ln x} \left[ \int e^{-x^{-2} - 3 \ln x} \mathrm{d}x + C \right] \\
        = e^{x^{-2}} x^3 \left[ \int e^{-x^{-2}} x^{-3} \mathrm{d}x + C \right] \\
        = e^{x^{-2}} x^3 \left[ \frac{1}{2} \int e^{-x^{-2}} \mathrm{d}(-x^{-2}) + C \right] \\
        = e^{x^{-2}} x^3 (\frac{1}{2} e^{-x^{-2}} + C)
        = x^3 (\frac{1}{2} + C e^{x^{-2}}) \\
        y|_{x = 1} = 0 \Rightarrow \frac{1}{2} + Ce = 0 \\
        \Rightarrow C = -\frac{1}{2e}
        \Rightarrow y = \frac{1}{2} x^3(1 - e^{x^{-2} - 1}) \\
        \end{gather}
        $$
        :::

## IV. 伯努利方程

形如：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} + P(x) y = Q(x) y^{\alpha} ,\, \alpha \not \in \{ 0, 1 \}
$$
的微分方程，称之为伯努利方程；将伯努利方程的两端乘以$(1 - \alpha) y^{-\alpha}$可得：
$$
(1 - \alpha) y^{-\alpha} \frac{\mathrm{d}y}{\mathrm{d}x} + (1 - \alpha) y^{1 - \alpha} P(x) = (1 - \alpha) Q(x)
$$
然后令$z = y^{1 - \alpha}$，则：
$$
\frac{\mathrm{d}z}{\mathrm{d}x} = (1 - \alpha) y^{-a} \frac{\mathrm{d}y}{\mathrm{d}x}
$$
将其代入上式可得：
$$
\frac{\mathrm{d}z}{\mathrm{d}x} + (1 - \alpha) P(x) z = (1 - \alpha) Q(x)
$$
这正是一阶线性微分方程的形式，求出其同解后将$y^{1 - \alpha} = z$代回即可

- **例5**：求解下列微分方程：

    1. $\displaystyle \frac{\mathrm{d}y}{\mathrm{d}x} - 3xy = xy^2$

        ::: details Answer
        $$
        \begin{gather}
        \frac{\mathrm{d}y}{\mathrm{d}x} - 3xy = xy^2 \\
        -y^{-2} \frac{\mathrm{d}y}{\mathrm{d}x} + 3x y^{-1}  = -x \\
        \frac{\mathrm{d}z}{\mathrm{d}x} + 3xz = -x, z = y^{-1} \\
        z = e^{-\int 3x \mathrm{d}x} \left[ \int -x e^{\int 3x \mathrm{d}x} \mathrm{d}x  \right] \\
        e^{-\frac{3}{2} x^2} \left[ -\frac{1}{3} \int e^{\frac{3}{2} x^2} \mathrm{d}(\frac{3}{2} x^2) + C \right] \\
        e^{-\frac{3}{2} x^2} (C - \frac{1}{3} e^{\frac{3}{2} x^2})
        = Ce^{-\frac{3}{2} x^2} - \frac{1}{3} \\
        \Rightarrow \frac{1}{y} = Ce^{-\frac{3}{2} x^2} - \frac{1}{3} \\
        \end{gather}
        $$
        

        :::

    2. $\displaystyle x \mathrm{d}y - \left[ y + xy^3 (1 + \ln x) \right] \mathrm{d}x = 0$

        ::: details Answer
        $$
        \begin{gather}
        x \mathrm{d}y - \left[ y + xy^3 (1 + \ln x) \right] \mathrm{d}x = 0 \\
        \frac{\mathrm{d}y}{\mathrm{d}x} - \frac{y}{x} = y^3 (1 + \ln x) \\
        -2y^{-3} \frac{\mathrm{d}y}{\mathrm{d}x} + \frac{2y^{-2}}{x} = -2(1 + \ln x) \\
        \frac{\mathrm{d}z}{\mathrm{d}x} + \frac{2}{x} z = -2(1 + \ln x), z = y^{-2} \\
        z = e^{-\int \frac{2}{x} \mathrm{d}x} \left[ \int -2(1 + \ln x) e^{\int \frac{2}{x} \mathrm{d}x} \mathrm{d}x \right] \\
        = e^{-2 \ln x} \left[ -2 \int (1 + \ln x) e^{2 \ln x} \mathrm{d}x + C \right] \\
        = x^{-2} \left[ -2 \int x^2 \mathrm{d}x - 2 \int x^2 \ln x \mathrm{d}x + C \right] \\
        = -\frac{2}{3} x - \frac{2}{3} x \ln x + \frac{2}{9} x + Cx^{-2} \\
        \Rightarrow y^{-2} = -\frac{2}{3} x \ln x - \frac{4}{9} x + Cx^{-2} \\
        \end{gather}
        $$
        :::

