# 第三节 特殊类型函数的积分

## I. 有理函数的积分

设$P_n(x)$、$Q_m(x)$分别为$n$次和$m$次的多项式，则称：
$$
R(x) = \frac{P_n(x)}{Q_m(x)} = \frac{a_0 x^n + a_1 x^{n - 1} + \dots + a_{n - 1} x + a_n}{b_0 x^{m} + b_1 x^{m - 1} + \dots + b_{m - 1} x + b_m}
$$
为有理函数，其中$a_0 \neq 0$、$b_0 \neq 0$；

当$n \lt m$时，称此有理函数为真分式，利用分解部分分式的方法，可以将有理函数$R(x)$分解为如下四种类型的部分分式：
$$
\frac{A}{x - a} ,\, \frac{A}{(x - a)^k} ,\, \frac{Ax + B}{x^2 + bx + c} ,\, \frac{Ax + B}{(x^2 + bx + c)^k}
$$
其中$b^2 - 4c \lt 0$，上述函数的不定积分均可用上一节的积分技巧来计算；

当$n \geq m$时，称此有理函数为假分式，利用多项式除法，将有理假分式化简为多项式与真分式之和后，再使用上述的真分式分解法进行计算

- **例1**：求下列不定积分：
    1. $\int \dfrac{2x + 3}{x^2 - 3x + 2} \mathrm{d}x$
    
        ::: details Answer
    
        首先对分母进行因式分解：
        $$
        x^2 - 3x + 2 = (x - 1)(x - 2)
        $$
        然后使用待定系数法将其分解成部分分式：
        $$
        \frac{2x + 3}{x^2 - 3x + 2} = \frac{A}{x - 1} + \frac{B}{x - 2}
        $$
        化简得：
        $$
        2x + 3 = A(x - 2) + B(x - 1)
        $$
        当$x = 2$时：
        $$
        2 \cdot 2 + 3 = B(2 - 1) \Rightarrow B = 7
        $$
        当$x = 1$时：
        $$
        2 \cdot 1 + 3 = A(1 - 2) \Rightarrow A = -5
        $$
        然后继续进行积分计算：
        $$
        \begin{gather}
        \int \frac{2x + 3}{x^2 - 3x + 2} \mathrm{d}x
        = \int (\frac{-5}{x - 1} + \frac{7}{x - 2}) \mathrm{d}x \\
        = -5 \int \frac{1}{x - 1} \mathrm{d}x + 7 \int \frac{1}{x - 2} \mathrm{d}x \\
        = -5 \int \frac{1}{x - 1} \mathrm{d}(x - 1) + 7 \int \frac{1}{x - 2} \mathrm{d}(x - 2) \\
        = -5 \ln \left| x - 1 \right| + 7 \ln \left| x - 2 \right| + C
        \end{gather}
        $$
        :::
    
    2. $\int \dfrac{\mathrm{d}x}{x^2 (x - 1)}$
    
        ::: details Answer
    
        使用待定系数法将其分解成部分分式：
        $$
        \frac{1}{x^2(x - 1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x - 1}
        $$
        化简得：
        $$
        1 = Ax(x - 1) + B(x - 1) + Cx^2
        $$
        当$x = 1$时：
        $$
        C = 1
        $$
        当$x = 0$时：
        $$
        B = -1
        $$
        当$x = 2$时，代入$B = -1$、$C = 1$：
        $$
        1 = A \cdot 2 \cdot (2 - 1) - (2 - 1) + 4
        $$
        解得：
        $$
        A = -1
        $$
        然后继续进行积分计算：
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{x^2(x - 1)}
        = \int (\frac{-1}{x} + \frac{-1}{x^2} + \frac{1}{x - 1}) \mathrm{d}x \\
        = -\int \frac{1}{x} \mathrm{d}x - \int x^{-2} \mathrm{d}x + \int \frac{1}{x - 1} \mathrm{d}x \\
        = -\ln \left| x \right| - \frac{1}{x} + \ln \left| x - 1 \right| + C \\
        = \ln \left| \frac{x - 1}{x} \right| - \frac{1}{x} + C
        \end{gather}
        $$
        :::
    
    3. $\int \dfrac{\mathrm{d}x}{(x + 1)(x^2 + 2x + 2)}$
    
        ::: details Answer
    
        使用待定系数法将其分解成部分分式：
        $$
        \frac{1}{(x + 1)(x^2 + 2x + 2)} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 + 2x + 2}
        $$
        化简得：
        $$
        1 = A(x^2 + 2x + 2) + (x + 1)(Bx + C)
        $$
        当$x = -1$时：
        $$
        1 = A(1 - 2 + 2) \Rightarrow A = 1
        $$
        当$x = 0$时，代入$A = 1$：
        $$
        1 = 2 + C \Rightarrow C = -1
        $$
        当$x = 1$时，代入$A = 1$、$C = -1$：
        $$
        1 = 5 + 2(B - 1) \Rightarrow B = -1
        $$
        然后继续进行积分计算：
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{(x + 1)(x^2 + 2x + 2)}
        = \int (\frac{1}{x + 1} + \frac{-x - 1}{x^2 + 2x + 2}) \mathrm{d}x \\
        = \int \frac{1}{x + 1} \mathrm{d}x - \int \frac{x + 1}{x^2 + 2x + 2} \mathrm{d}x \\
        = \int \frac{1}{x + 1} \mathrm{d}x - \frac{1}{2} \int \frac{1}{x^2 + 2x + 2} \mathrm{d}(x + 1)^2 \\
        = \int \frac{1}{x + 1} \mathrm{d}(x + 1) - \frac{1}{2} \int \frac{1}{x^2 + 2x + 2} \mathrm{d}(x^2 + 2x + 2) \\
        = \ln \left| x + 1 \right| - \frac{1}{2} \ln (x^2 + 2x + 2) + C
        \end{gather}
        $$
        :::
    
    4. $\int \dfrac{x^5 + 1}{x^2 + 1} \mathrm{d}x$
    
        ::: details Answer
    
        注意到分子的最高次数大于分母的最高次数，所以先使用多项式除法进行化简：
        $$
        x^5 + 1 = (x^3 - x)(x^2 + 1) + (x + 1)
        $$
        所以对原式化简可得：
        $$
        \int x^3 \mathrm{d}x - \int x \mathrm{d}x + \int \frac{x}{x^2 + 1} \mathrm{dx} + \int \frac{1}{x^2 + 1} \mathrm{dx}
        $$
        最终解得：
        $$
        \frac{1}{4} x^4 - \frac{1}{2} x^2 + \frac{1}{2} \ln (x^2 + 1) + \arctan x + C
        $$
        :::

## II. 三角函数有理式的不定积分

由三角函数$\sin x$、$\cos x$与常数经过有限次四则运算所构成的函数称为三角有理函数，记作$R(\sin x, \cos x)$。对于三角函数有理式的积分，由于：
$$
\sin x = \frac{2 \tan \frac{x}{2}}{1 + \tan^2 \frac{x}{2}},
\cos x = \frac{1 - \tan^2 \frac{x}{2}}{1 + \tan^2 \frac{x}{2}},
\tan x = \frac{2 \tan \frac{x}{2}}{1 - \tan^2 \frac{x}{2}}
$$
通常利用万能公式$u = \tan \frac{x}{2}$，将其转换为有理函数的积分，即：
$$
\int R(\sin x, \cos x) \mathrm{d}x = \int R(\frac{2u}{1 + u^2}, \frac{1 - u^2}{1 + u^2}) \frac{2}{1 + u^2} \mathrm{d}x, u = \tan \frac{x}{2}
$$

- **例2**：求下列不定积分：

    1. $\int \dfrac{\mathrm{d}x}{\sin x + \tan x}$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{\sin x + \tan x}
        = \int \frac{1}{\frac{2u}{1 + u^2} + \frac{2u}{1 - u^2}} \cdot \frac{2}{1 + u^2} \mathrm{d}u, u = \tan \frac{x}{2} \\
        = \int \frac{(1 + u^2)(1 - u^2)}{4u} \cdot \frac{2}{1 + u^2} \mathrm{d}u
        = \frac{1}{2} \int \frac{1 - u^2}{u} \mathrm{d}u \\
        = \frac{1}{2} \int \frac{1}{u} \mathrm{d}u - \frac{1}{2} \int u \mathrm{d}u
        = \frac{1}{2} \ln \left| u \right| - \frac{1}{4} u^2 + C \\
        = \frac{1}{2} \ln \left| \tan \frac{x}{2} \right| - \frac{1}{4} \tan^2 \frac{x}{2} + C
        \end{gather}
        $$
        :::

    2. $\int \dfrac{\mathrm{d}x}{5 + \cos x}$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{5 + \cos x}
        = \int \frac{1}{5 + \frac{1 - u^2}{1 + u^2}} \cdot \frac{2}{1 + u^2} \mathrm{d}u, u = \tan \frac{x}{2} \\
        = \int \frac{1 + u^2}{6 + 4u^2} \cdot \frac{2}{1 + u^2} \mathrm{d}u
        = \int \frac{\mathrm{d}u}{3 + 2u^2} 
        = \frac{1}{2} \int \frac{\mathrm{d}u}{\frac{3}{2} + u^2} \\
        = \frac{1}{\sqrt{6}} \arctan \frac{2u}{\sqrt{6}} + C
        = \frac{\sqrt{6}}{6} \arctan (\frac{\sqrt{6}}{3} \tan \frac{x}{2}) + C
        \end{gather}
        $$
        :::

## III. 简单无理函数的不定积分

对于简单无理函数$R(x, \sqrt[n]{\dfrac{ax + b}{cx + d}})$的积分，通常通过变量代换$t = \sqrt[n]{\dfrac{ax + b}{cx + d}}$将其转换为有理函数的积分

- **例3**：求下列不定积分：

    1. $\int \dfrac{\mathrm{d}x}{\sqrt{x} + \sqrt[3]{x}}$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{\sqrt{x} + \sqrt[3]{x}}
        = \int \frac{\mathrm{d}(t^6)}{t^3 + t^2}, x^6 = t \\
        = 6 \int \frac{t^5}{t^3 + t^2} \mathrm{d}t = 6 \int \frac{t^3}{t + 1} \mathrm{d}t \\
        = 6 \int \frac{(t + 1)(t^2 - t + 1) - 1}{t + 1} \mathrm{d}t  \\
        = 6 \int (t^2 - t + 1 - \frac{1}{t + 1}) \mathrm{d}t \\
        = 6 \int t^2 \mathrm{d}t - 6 \int t \mathrm{d}t + 6 \int \mathrm{d}t - 6 \int \frac{\mathrm{d}t}{t + 1} \\
        = 2 t^3 - 3t^2 + 6t - 6 \ln (t + 1) + C \\
        = 2 \sqrt{x} - 3 \sqrt[3]{x} + 6 \sqrt[6]{x} - 6 \ln (\sqrt[6]{x} + 1) + C
        \end{gather}
        $$
        :::

    2. $\int \dfrac{\mathrm{d}x}{1 + \sqrt[3]{x + 1}}$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{\mathrm{d}x}{1 + \sqrt[3]{x + 1}}
        = \int \frac{\mathrm{d}t^3}{1 + t}, x + 1 = t^3 \\
        = 3 \int \frac{t^2}{1 + t} \mathrm{d}t
        = 3 \int \frac{(t + 1)(t - 1) + 1}{t + 1} \mathrm{d}t \\
        = 3 \int t \mathrm{d}t - 3 \int \mathrm{d}t + 3 \int \frac{1}{t + 1} \mathrm{d}t \\
        = \frac{3}{2} t^2 - 3t + 3 \ln \left| t + 1 \right| + C \\
        = \frac{3}{2} (x + 1)^{\frac{2}{3}} - 3 (x + 1)^{\frac{1}{3}} + 3 \ln \left| (x + 1)^{\frac{1}{3}} + 1 \right| + C
        \end{gather}
        $$
        :::

    3. $\int \dfrac{1}{x} \sqrt{\dfrac{1 + x}{x}} \mathrm{d}x$

        ::: details Answer
        $$
        \begin{gather}
        \int \frac{1}{x} \sqrt{\dfrac{1 + x}{x}} \mathrm{d}x
        = \int \frac{1}{\frac{1}{t^2 - 1}} \sqrt{\dfrac{1 + \frac{1}{t^2 - 1}}{\frac{1}{t^2 - 1}}} \mathrm{d}(\frac{1}{t^2 - 1}), t = \sqrt{\frac{1 + x}{x}} \\
        = \int (t^3 - t) \mathrm{d} (\frac{1}{t^2 - 1}) 
        = -2 \int \frac{t^2(t^2 - 1)}{(t^2 - 1)^2} \mathrm{d}t 
        = -2 \int \frac{t^2}{t^2 - 1} \mathrm{d}t \\
        = -2 \int (1 + \frac{1}{t^2 - 1}) \mathrm{d}t
        = -2 \int \mathrm{d}t - 2 \int \frac{1}{t^2 - 1} \mathrm{d}t \\
        = -2t - \ln \left| \frac{t - 1}{t + 1} \right| + C
        = -2\sqrt{\frac{1 + x}{x}} - \ln \left| \frac{\sqrt{\frac{1 + x}{x}} - 1}{\sqrt{\frac{1 + x}{x}} + 1} \right| + C \\
        = -2\sqrt{\frac{1 + x}{x}} - \ln \left| \frac{\sqrt{1 + x} - \sqrt{x}}{\sqrt{1 + x} + \sqrt{x}} \right| + C
        \end{gather}
        $$
        :::
