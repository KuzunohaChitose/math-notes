# 第三节 高阶导数

::: details Tables of Content

[[toc]]

:::

## I. 高阶导数的概念

顾名思义啊，高阶导数，就是指导数的导数，例如$y = f(x)$、$y' = f'(x)$、$y'' = f''(x)$这样的三个函数，$y' = f'(x)$是$y = f(x)$的导函数，$y'' = f''(x)$是$y' = f'(x)$的导函数，而$y'' = f''(x)$则是$y = f(x)$的高阶导数（二阶导数），记作$y''$或$\dfrac{\mathrm{d}^2 y}{\mathrm{d} x^2}$

类似的，$y = f(x)$的导数的导数是它的二阶导数，它的二阶导数的导数是它的三阶导数……总而言之：$y = f(x)$的$n - 1$阶导数的导数是它的$n$阶导数，对于更高阶的导数，可以表示为$y^{(n)}$或$\dfrac{\mathrm{d}^ny}{\mathrm{d}x^n}$

## II. 高阶导数的计算

### 2.1 常见的高阶导数公式

1. $(e^x)^{(n)} = e^x$，$(a^x)^{(n)} = a^x \ln^n a$
2. $(\sin x)^{(n)} = \sin (x + \dfrac{\pi x}{2})$
3. $(\cos x)^{(n)} =\cos (x + \dfrac{\pi x}{2})$
4. $(x^a)^{(n)} = a(a - 1) \, ... \, (a - n + 1)x^{a - n} ,\, (a \geq n)$
5. $(\dfrac{1}{x})^{(n)} = (-1)^n n! x^{-1 - n}$
6. $(\ln x)^{(n)} = (-1)^{n - 1} (n - 1)! x^{-n}$

### 2.2 高阶导数运算法则

1. $(u \pm v)^{(n)} = u^{(n)} + v^{(n)}$
2. $(uv)^{n} = \sum^{n}_{k = 0} C^{k}_{n} u^{(n - k)} v^{(k)}$[^1]（莱布尼茨公式）

- **例1**：已知函数$f(x)$具有任意阶导数，且$f'(x) = \left[ f(x) \right]^2$，则当$n \in \mathbb{N}_+$且$n \geq 2$时，$f(x)$的$n$阶导数$f^{(n)}(x)$如何表示？

    ::: details Answer
    $$
    \begin{gather}
    f'(x) = f^2(x) \\
    f''(x) = 2f(x) \cdot f'(x) = 2f^3(x) \\
    f^{(3)}(x) = 6f^2(x) \cdot f'(x) = 6f^4(x) \\
    f^{(4)}(x) = 24f^3(x) \cdot f'(x) = 24f^5(x) \\
    f^{(n)}(x) = n! \left[ f(x) \right]^{n + 1}
    \end{gather}
    $$
    :::

- **例2**：求函数$f(x) = x^2 \ln (1 + x)$在$x = 0$处的$n$阶导数$f^{(n)}(0) \, (n \geq 3)$.

    ::: details Answer

    根据莱布尼茨公式可知：
    $$
    \begin{gather}
    f^{(n)}(x) = \sum^{n}_{k = 0} C^{k}_{n} \left[ \ln (1 + x) \right]^{(n - k)} (x^2)^{(k)} \\
    = \left[ \ln (1 + x) \right]^{(n)} x^2 + C^1_n \left[ \ln (1 + x) \right]^{(n - 1)} 2x + C^2_n \left[ \ln (1 + x) \right]^{(n - 2)} 2 + \dots
    \end{gather}
    $$
    观察这个式子，当$k \geq 3$时$(x^2)^{(k)} = 0$，可见$k \geq 3$的项的值通通为$0$，而前两项当$x = 0$时也为$0$，因此只需计算第三项的值：
    $$
    f^{(n)}(0) = n(n - 1) \left[ \ln (1 + x) \right]^{(n - 2)}|_{x = 0}
    $$
    接下来求$y = \ln (1 + x)$的$n$阶导数：
    
    - 当$n = 1$时：
        $$
        y' = (1 + x)^{-1}
        $$
    
    - 当$n = 2$时：
        $$
        y'' = -(1 + x)^{-2}
        $$
    
    - 当$n = 3$时：
        $$
        y^{(3)}= 2(1 + x)^{-3}
        $$
    
    - 当$n = 4$时：
        $$
        y^{(4)} = -6(1 + x)^{-4}
        $$
    
    - 当$n = n$时：
        $$
        y^{(n)} = (-1)^{n - 1} (n - 1)! (1 + x)^{-n}
        $$
    
    则最终结果为：
    $$
    f^{(n)}(0) = n(n - 1) \cdot (-1)^{n - 3} \cdot (n - 3)! \cdot (1 + 0)^{-n + 2}
    = \frac{(-1)^{n - 3} n!}{n - 2} \, (n \geq 3)
    $$
    :::

## III. 反函数的二阶导数

设函数$y = f(x)$具有二阶导数$f''(x)$，且$f'(x) \neq 0$，$x = \varphi(y)$是$y = f(x)$的反函数，则：
$$
\varphi''(y) = \frac{\mathrm{d} \left[ \frac{1}{f'(x)} \right]}{\mathrm{d} y} = \frac{\mathrm{d} \left[ \frac{1}{f'(x)} \right]}{\mathrm{d} x} \cdot \frac{\mathrm{d} x}{\mathrm{d} y} = -\frac{f''(x)}{\left[ f'(x) \right]^2} \cdot \frac{1}{f'(x)} = -\frac{f''(x)}{\left[ f'(x) \right]^3}
$$

- **例3**：已知$f'(x) = ae^{2x} \, (a \gt 0)$，求$f(x)$的反函数的二阶导数。

    ::: details Answer
    
    - 积分法：
        $$
        a \int e^{2x} \mathrm{d}x = \frac{a}{2} \int e^{2x} \mathrm{d}(2x) = \frac{a}{2} e^{2x} \\
        f(x) = \frac{a}{2} e^{2x} ,\, f^{-1}(y) = \frac{1}{2} \ln (\frac{2}{a} y) \\
        (f^{-1}(y))' = \frac{1}{2y} \\
        (f^{-1}(y))'' = -\frac{1}{2y^2} \\
        $$
    
    - 公式法：
    
        首先求出$f''(x)$：
        $$
        f''(x) = 2ae^{2x}
        $$
        然后将$f'(x)$和$f''(x)$代入公式：
        $$
        (f^{-1}(y))'' = -\frac{2ae^{2x}}{a^3 e^{6x}} = -\frac{2}{a^2 e^{4x}}
        $$
    
    :::

## IV. 参数方程所确立的函数的二阶导数

设参数方程：
$$
\begin{cases}
x = \varphi(t) \\
y = \psi(t)
\end{cases}
$$
其确定了$y$与$x$间的关系，若$x = \varphi(x)$具有单调连续的反函数$t = \varphi^{-1}(x)$，$x = \varphi(t)$和$y = \psi(t)$皆二阶可导，且$\varphi'(t) \neq 0$，则：
$$
\frac{\mathrm{d}^2y}{\mathrm{d}x} = \frac{\mathrm{d}}{\mathrm{d}x} \left[ \frac{\psi'(t)}{\varphi'(t)} \right] = \frac{\mathrm{d}}{\mathrm{d}t} \left[ \frac{\psi'(t)}{\varphi'(t)} \right] \cdot \frac{\mathrm{d}t}{\mathrm{d}x} = \frac{\psi''(t) \varphi'(t) - \psi'(t) \varphi''(t)}{\varphi'^3(t)}
$$

- **例4**：设函数$y = y(x)$由参数方程：
    $$
    \begin{cases}
    x = t - \ln (1 + t) \\
    y = t^3 + t^2
    \end{cases}
    $$
    所确定，则$\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2} =$ \_\_\_\_\_.

    ::: details Answer

    首先求得$\dfrac{\mathrm{d}y / \mathrm{d}t}{\mathrm{d}x / \mathrm{d}t}$：
    $$
    \frac{(t^3 + t^2)'}{(t - \ln (1 + t))'} = 5t + 3t^2 + 2
    $$
    然后计算$\dfrac{\mathrm{d}}{\mathrm{d}t} (\dfrac{\mathrm{d}y / \mathrm{d}t}{\mathrm{d}x / \mathrm{d}t}) \cdot \dfrac{\mathrm{d}t}{\mathrm{d}x}$：
    $$
    \frac{(5t + 3t^2 + 2)'}{(t - \ln (1 + t))'} = \frac{(5 + 6t)(1 + t)}{t}
    $$
    :::

[^1]:$C_{n}^{k} = \dfrac{n!}{k!(n - k)!}$

