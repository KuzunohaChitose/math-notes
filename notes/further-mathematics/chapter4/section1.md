# 第一节 不定积分的概念与性质

::: details Tables of Content

[[toc]]

:::

## I. 原函数与不定积分

### 1.1 原函数的概念

如果在区间$I$上，可导函数$F(x)$的导函数为$f(x)$，即为任一$x$，都有$F'(x) = f(x)$，则称$F(x)$为$f(x)$在区间$I$上的一个原函数

::: tip Tip

**原函数存在定理**：

1. 连续函数必有原函数（反之并不成立）
2. 函数存在第一类间断点时一定没有原函数；存在第二类间断点时未必没有原函数

:::

- **例1**：当$x \in (0, 1)$时，试证明：函数$\arcsin (2x - 1)$、$\arccos (1 - 2x)$、$2 \arctan \sqrt{\dfrac{x}{1 - x}}$都是$\dfrac{1}{\sqrt{x - x^2}}$的原函数。

    ::: details Answer

    话不多说，直接对着就是导：
    $$
    \left[ \arcsin (2x - 1) \right]'
    = \frac{2}{\sqrt{1 - 4x^2 - 1 + 4x}} 
    = \frac{1}{\sqrt{x - x^2}}
    $$

    $$
    \left[ \arccos (1 - 2x) \right]' = -\frac{-2}{\sqrt{1 - 1 - 4x^2 + 4x}} = \frac{1}{\sqrt{x - x^2}}
    $$

    $$
    \begin{gather}
    \left[ 2 \arctan \sqrt{\frac{x}{1 - x}} \right]' \\
    = \frac{2}{1 + \frac{x}{1 - x}} \cdot \frac{1}{2} (\frac{x}{1 - x})^{-\frac{1}{2}} \cdot \frac{1 - x + x}{(1 - x)^2} \\
    = (1 - x) \cdot \frac{\sqrt{1 - x}}{\sqrt{x}} \cdot \frac{1}{(1 - x)^2} \\
    = \frac{1}{\sqrt{x}} \cdot \frac{1}{\sqrt{1 - x}} 
    = \frac{1}{\sqrt{x - x^2}}
    \end{gather}
    $$

    显然可见，这哥仨导完都是$\dfrac{1}{\sqrt{x - x^2}}$，所以它们都是$\dfrac{1}{\sqrt{x - x^2}}$的原函数

    :::
    
- **例2**：设函数$f(x) = \dfrac{e^{1/x} - 1}{e^{1/x} +1}$，
    $$
    g(x) =
    \begin{cases}
    x \sin \frac{1}{x}, & x \gt 0 \\
    x^2, & x \leq 0
    \end{cases}
    $$
    则在区间$(-1, 1)$内：

    - （A）$f(x)$与$g(x)$都存在原函数
    - （B）$f(x)$与$g(x)$都不存在原函数
    - （C）$f(x)$存在原函数，$g(x)$不存在原函数
    - （D）$f(x)$不存在原函数，$g(x)$存在原函数
    
    ::: details Answer
    
    对于函数$f(x)$：
    $$
    \lim_{x \to 0^-} \frac{e^{1/x} - 1}{e^{1/x} +1} = -1 ,\, 
    \lim_{x \to 0^+} \frac{e^{1/x} - 1}{e^{1/x} +1} = 1
    $$
    显然可见，因为$\lim_{x \to 0^-} f(x) \neq \lim_{x \to 0^+} f(x)$，所以$x = 0$是第一类间断点，所以$f(x)$在$(-1, 1)$内不存在原函数；
    
    对于函数$g(x)$：
    $$
    \lim_{x \to 0^-} x^2 = 0 ,\, \lim_{x \to 0^+} x \sin \frac{1}{x} = 0
    $$
    显然可见，因为$\lim_{x \to 0^-} g(x) = \lim_{x \to 0^+} g(x) = g(0) = 0$，所以$g(x)$在$x = 0$处连续，所以$g(x)$在$(-1, 1)$内存在原函数；所以最终选D
    
    :::

### 1.2 不定积分的概念

在区间$I$上，函数$f(x)$的带有任意常数项的原函数称为$f(x)$在区间$I$上的不定积分，记作$\int f(x) \mathrm{d}x$，其中记号$\int$为积分符号，$f(x)$为被积函数，$f(x) \mathrm{d}x$为被积表达式，$x$为积分变量，即：
$$
F'(x) = f(x) \Rightarrow \int f(x) \mathrm{d}x = F(x) + C
$$

- **例3**：已知函数：
    $$
    f(x) =
    \begin{cases}
    2(x - 1), & x \lt 1 \\
    \ln x, & x \geq 1
    \end{cases}
    $$
    则$f(x)$的一个原函数是\_\_\_\_\_.

    - （A）
        $$
        F(x) =
        \begin{cases}
        (x - 1)^2, & x \lt 1 \\
        x (\ln x - 1), & x \geq 1
        \end{cases}
        $$

    - （B）
        $$
        F(x) =
        \begin{cases}
        (x - 1)^2, & x \lt 1 \\
        x (\ln x + 1) - 1, & x \geq 1
        \end{cases}
        $$

    - （C）
        $$
        F(x) =
        \begin{cases}
        (x - 1)^2, & x \lt 1 \\
        x (\ln x + 1) + 1, & x \geq 1
        \end{cases}
        $$

    - （D）
        $$
        F(x) =
        \begin{cases}
        (x - 1)^2, & x \lt 1 \\
        x (\ln x - 1) + 1, & x \geq 1
        \end{cases}
        $$

    ::: details Answer

    话不多说，直接开导：
    $$
    \begin{gather}
    \left[ (x - 1) \right]' = 2 (x - 1) \\
    \left[ x (\ln x - 1) \right]' = \left[ x (\ln x - 1) + 1 \right]' = \ln x \\
    \left[ x (\ln x + 1) - 1 \right]' = \left[ x (\ln x + 1) - 1 \right]' = \ln x + 2
    \end{gather}
    $$
    显然可见，根据求导的结果可知，只有A、D满足要求，接下来判断它们的连续性：
    $$
    \begin{gather}
    \left[ \lim_{x \to 1^-} (x - 1)^2 = 0 \right] \neq \left[ \lim_{x \to 1^+} x (\ln x - 1) = -1 \right] \\
    \left[ \lim_{x \to 1^-} (x - 1)^2 = 0 \right] = \left[ \lim_{x \to 1^+} x (\ln x - 1) + 1 = 0 \right]
    \end{gather}
    $$
    所以最终仅有D满足要求，则选D

    :::

## II. 不定积分的性质

以下均假定函数$f(x)$（或$f'(x)$）、$g(x)$在所讨论的区间上连续：

$$
\frac{\mathrm{d}}{\mathrm{d}x} \left[ \int f(x) \mathrm{d}x \right] = f(x) ,\,
\mathrm{d} \left[ \int f(x) \mathrm{d}x \right] = f(x) \mathrm{d}x \tag{1}
$$

$$
\int \mathrm{d} f(x) = \int f'(x) \mathrm{d}x = f(x) + C \tag{2}
$$

$$
\int \left[ f(x) \pm g(x) \right] \mathrm{d}x = \int f(x) \mathrm{d}x \pm \int g(x) \mathrm{d}x \tag{3}
$$

$$
\int k f(x) \mathrm{d}x = k \int f(x) \mathrm{d}x ,\, k \neq 0 \tag{4}
$$

- **例4**：如果$f(x)$的一个原函数是$x \ln x - x$，则$\int f'(x) \mathrm{d}x$为\_\_\_\_\_.

    - （A）$x \ln x + C$
    - （B）$\ln x + C$
    - （C）$x \ln x + x + C$
    - （D）$-x \ln x + C$

    ::: details Answer
    $$
    \int f'(x) \mathrm{d}x = f(x) + C = (x \ln x - x)' + C = \ln x + 1 - 1 + C = \ln x + C
    $$
    :::

## III. 基本积分表

|          $\int k \mathrm{d}x = kx + C$（$k$为常数）          |   $\int \dfrac{\mathrm{d}x}{x} = \ln \mathrm{abs}(x) + C$    |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| $\int x^{\eta} \mathrm{d}x = \dfrac{x^{\eta + 1}}{\eta + 1} + C$（$\eta \neq -1$） |            $\int \cos x \mathrm{d}x = \sin x + C$            |
|           $\int \sin x \mathrm{d}x = -\cos x + C$            |           $\int \sec^2 x \mathrm{d}x = \tan x + C$           |
|          $\int \csc^2 x \mathrm{d}x = -\cot x + C$           |        $\int \sec x \tan x \mathrm{d}x = \sec x + C$         |
|        $\int \csc x \cot x \mathrm{d}x = -\csc x + C$        | $\int a^x \mathrm{d}x = \dfrac{a^x}{\ln a} + C$（$a \gt 0$且$a \neq 1$） |
|               $\int e^x \mathrm{d}x = e^x + C$               |  $\int \tan x \mathrm{d}x = -\ln \mathrm{abs}(\cos x) + C$   |
|   $\int \cot x \mathrm{d}x = \ln \mathrm{abs}(\sin x) + C$   | $\int \sec x \mathrm{d}x = \ln \mathrm{abs}(\sec x + \tan x) + C$ |
| $\int \csc x \mathrm{d}x = \ln \mathrm{abs}(\csc x - \cot x) + C$ | $\int \dfrac{\mathrm{d}x}{a^2 + x^2} = \dfrac{1}{a} \arctan \dfrac{x}{a} + C$ |
|     $\int \dfrac{\mathrm{d}x}{1 + x^2} = \arctan x + C$      | $\int \dfrac{\mathrm{d}x}{x^2 - a^2} = \dfrac{1}{2a} \ln \mathrm{abs}(\dfrac{x - a}{x + a}) + C$（$a \gt 0$） |
| $\int \dfrac{\mathrm{d}x}{\sqrt{a^2 - x^2}} = \arcsin \dfrac{x}{a} + C$（$a \gt 0$） |  $\int \dfrac{\mathrm{d}x}{\sqrt{1 - x^2}} = \arcsin x + C$  |
| $\int \dfrac{\mathrm{d}x}{\sqrt{x^2 + a^2}} = \ln (x + \sqrt{x^2 + a^2}) + C$（$a \gt 0$） | $\int \dfrac{\mathrm{d}x}{\sqrt{x^2 - a^2}} = \ln \mathrm{abs}(x + \sqrt{x^2 - a^2}) + C$（$a \gt 0$） |

- **例5**：求下列不定积分：

    1. $\int \dfrac{\sqrt{x} + 2}{\sqrt[4]{x}} \mathrm{d}x$

        ::: details Answer
        $$
        \int \frac{\sqrt{x} + 2}{\sqrt[4]{x}} \mathrm{d}x
        = \int \frac{u^2 + 2}{u} \mathrm{d}(u^4), u = x^{\frac{1}{4}} \\
        = 4 \int u^4 \mathrm{d}u + 8 \int u^2 \mathrm{d}u
        = \frac{4}{5} x^{\frac{5}{4}} + \frac{8}{3} x^{\frac{3}{4}} + C
        $$
        :::

    2. $\int \dfrac{2x^4 + x^2 + 3}{x^2 + 1} \mathrm{d}x$

        ::: details Answer

        :::

    3. $\int \dfrac{\cos 2x}{\cos x - \sin x} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\cos 2x}{\cos x - \sin x} \mathrm{d}x
        = \int \frac{\cos^2 x - \sin^2 x}{\cos x - \sin x} \mathrm{d}x \\
        = \int \frac{(\cos x + \sin x)(\cos x - \sin x)}{\cos x - \sin x} \mathrm{d}x = \int (\cos x + \sin x) \mathrm{d}x \\
        = \int \cos x \mathrm{d}x + \int \sin x \mathrm{d}x 
        = \sin x - \cos x + C
        \end{gather}
        $$
        :::

    4. $\int \dfrac{e^{2x} - 1}{e^x - 1} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{e^{2x} - 1}{e^x - 1} \mathrm{d}x
        = \int \frac{(e^x + 1)(e^x - 1)}{e^x - 1} \mathrm{d}x \\
        = \int e^x \mathrm{d}x + \int \mathrm{d}x 
        = e^x + x + C
        \end{gather}
        $$
        :::
