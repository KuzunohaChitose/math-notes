# 第四节 高阶线性微分方程

## I. 线性微分方程解的性质和结构

1. **二阶齐次线性微分方程**：

    **形式**：$\displaystyle y'' + P(x)y' + Q(x)y = 0$

    **解的性质**：若$y_1$、$y_2$为方程的两个解，则$C_1 y_1 + C_2 y_2$也是此方程的一个解

    **通解的结构**：若$y_1$、$y_2$为方程的两个线性无关[^1]的解，则$C_1 y_1 + C_2 y_2$是此方程的通解

2. **二阶非齐次线性微分方程**：

    **形式**：$y'' + P(x)y' + Q(x)y = f(x)$

    **解的性质**：

    - 若$y_1$、$y_2$为方程的两个解，则$y_1 - y_2$是其所对应的齐次微分方程的一个解
    - 若$\eta$为方程的一个解、而$\xi$是其所对应的齐次微分方程的一个解，则$\eta + \xi$也是此方程的一个解

    **通解的结构**：若$y^*(x)$是$y'' + P(x) y' + Q(x) y = f(x)$的一个特解、$Y(x)$是$y'' + P(x) y' + Q(x) y = 0$的通解，则$y'' + P(x) y' + Q(x) y = f(x)$的通解为：
    $$
    y(x) = Y(x) + y^*(x)
    $$

::: tip Tip

**解的叠加性原理**：

- 若：

    1. $y_1(x)$是$y'' + P(x) y' + Q(x) y = f_1(x)$的一个解
    2. $y_2(x)$是$y'' + P(x) y' + Q(x) y = f_2(x)$的一个解
    3. …………
    4. $y_n(x)$是$y'' + P(x) y' + Q(x) y = f_n(x)$的一个解

- 则：
    $$
    y(x) = \sum_{i = 1}^{n} a_i y_i(x) = a_1 y_1(x) + a_2 y_2(x) + \dots + a_n y_n(x)
    $$
    是方程：
    $$
    y'' + P(x) y' + Q(x) y = \sum_{i = 1}^{n} a_i f_i(x) = a_1 f_1(x) + a_2 f_2(x) + \dots + a_n f_n(x)
    $$
    的一个解

::: details Proof
$$
\begin{gather}
y''(x) + P(x) y'(x) + Q(x) y(x) \\
= \sum_{i = 1}^{n} a_i y_i''(x) + P(x) \sum_{i = 1}^{n} a_i y_i'(x) + Q(x) \sum_{i = 1}^{n} a_i y_i(x) \\
= \sum_{i = 1}^{n} a_i \left[ y_i''(x) + P(x) y_i'(x) + Q(x) y_i(x) \right]
= \sum_{i = 1}^{n} a_i f_i(x) \\
\end{gather}
$$
:::

- **例1**：设$y_1(x)$、$y_2(x)$、$y_3(x)$是方程$y'' + p(x) y' + q(x) y = f(x)$的三个线性无关的解，若$C_1$、$C_2$是任意常数，则该方程的通解是\_\_\_\_\_.

    - A：$C_1 y_1(x) + C_2 y_2(x) + y_3(x)$
    - B：$C_1 y_1(x) + C_2 y_2(x) - (C_1 + C_2) y_3(x)$
    - C：$C_1 y_1(x) + C_2 y_2(x) - (1 - C_1 - C_2) y_3(x)$
    - D：$C_1 y_1(x) + C_2 y_2(x) + (1 - C_1 - C_2) y_3(x)$

    ::: details Answer

    根据解的叠加性原理，对于选项A，其作为通解所对应的方程是：
    $$
    y'' + p(x) y' + q(x) y = (C_1 + C_2 + 1) f(x)
    $$
    对于选项B，其作为通解所对应的方程是：
    $$
    y'' + p(x) y' + q(x) y = 0
    $$
    对于选项C，其作为通解所对应的方程是：
    $$
    y'' + p(x) y' + q(x) y = (2 C_1 + 2 C_2 - 1) f(x)
    $$
    对于选项D，其作为通解所对应的方程是：
    $$
    y'' + p(x) y' + q(x) y = f(x)
    $$
    故选D

    :::

## II. 高阶常系数齐次线性微分方程的通解

1. **二阶常系数齐次线性微分方程**：

    **形式**：$y'' + p y' + q y = 0$

    **通解的求法**：

    1. 写出特征方程：$\lambda^2 + p \lambda + q = 0$

    2. 求出特征方程的两个根$\lambda_1$和$\lambda_2$

    3. 根据两个根的不同形式，依照下表得出通解：

        |                     根的形式                     |                           通解                           |
        | :----------------------------------------------: | :------------------------------------------------------: |
        |     两个不相等的实根$\lambda_1$和$\lambda_2$     |     $y = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$      |
        |      两个相等的实根$\lambda_1$和$\lambda_2$      |            $y = (C_1 + C_2 x) e^{\lambda x}$             |
        | 一对共轭复根$\lambda_{1,2} = \alpha \pm \beta i$ | $y = e^{\alpha x} (C_1 \cos \beta x + C_2 \sin \beta x)$ |

    ::: details Proof

    注意到：
    $$
    \frac{\mathrm{d}}{\mathrm{d}x} (e^{\lambda x}) = \lambda e^{\lambda x},
    \frac{\mathrm{d}^2}{\mathrm{d}x^2} (e^{\lambda x}) = \lambda^2 e^{\lambda x}
    $$
    如这般的函数，其导数与自身仅差常数倍，因此可以设其解形如：
    $$
    y_n(x) = e^{\lambda x}
    $$
    于是将这个形式代入原方程可得：
    $$
    \lambda^2 e^{\lambda x} + p \lambda e^{\lambda x} + q e^{\lambda x} = 0
    \Rightarrow \lambda^2 + p \lambda + q = 0
    $$
    由此便将一个微分方程转换为普通一元二次代数方程，根据根的判别式：
    $$
    \Delta = p^2 - 4q
    $$
    可知存在三种情况：

    - 当$\Delta \gt 0$时，根为$\lambda_1 \neq \lambda_2$：

        于是得出两个特解：
        $$
        y_1(x) = e^{\lambda_1 x}, y_2(x) = e^{\lambda_2 x}
        $$
        根据二阶齐次线性微分方程的解的性质可知，其通解为：
        $$
        y(x) = C_1 y_1(x) + C_2 y_2(x) = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}
        $$

    - 当$\Delta = 0$时，根为$\lambda_1 = \lambda_2 = r$，且$r = -\dfrac{p}{2}$、$p^2 = 4q$：

        此时仅可得出一个特解：
        $$
        y_1(x) = e^{r x}
        $$
        又因为所要求的两个特解不能是线性相关的，所以设两个特解之比为一个函数：
        $$
        \frac{y_2(x)}{y_1(x)} = u(x) \Rightarrow y_2(x) = u(x) y_1(x) = u(x) e^{r x}
        $$
        然后分别求出$y_2'(x)$：
        $$
        y_2'(x) = e^{r x} \left[ u'(x) + r u(x) \right] \\
        $$
        以及$y_2''(x)$：
        $$
        y_2''(x) = e^{r x} \left[ u''(x) + 2 r u'(x) + r^2 u(x) \right] \\
        $$
        再将其代入原方程：
        $$
        \begin{gather}
        e^{r x} \left[ u''(x) + 2 r u'(x) + r^2 u(x) \right] + p e^{r x} \left[ u'(x) + r u(x) \right] + q u(x) e^{r x} \\
        = u''(x) + 2 r u'(x) + r^2 u(x) + p u'(x) + p r u(x) + q u(x) \\
        = u''(x) - p u'(x) + \frac{p^2}{4} u(x) + p u'(x) - \frac{p^2}{2} u(x) + q u(x) \\
        = u''(x) - \frac{p^2}{4} u(x) + q u(x) = u''(x) - \frac{4q}{4} u(x) + q u(x) \\
        = u''(x) = 0 \Rightarrow u'(x) = C_1 \Rightarrow u(x) = C_1 x + C_2|_{C_1 = 1, C_2 = 0} \\
        \end{gather}
        $$
        于是将$u(x)$代入即可得到$y_2(x) = x e^{rx}$，然后通过这两个解便可得到通解：
        $$
        y(x) = C_1 y_1(x) + C_2 y_2(x) = (C_1 + C_2 x) e^{rx}
        $$

    - 当$\Delta \lt 0$时，根为$\lambda_{1, 2} = \alpha \pm \beta i$：

        此时依旧可以得到两个特解，并通过欧拉公式[^2]进行化简：
        $$
        y_1(x) = e^{(\alpha + \beta i) x} = e^{\alpha x} (\cos \beta x + i \sin \beta x)
        , y_2(x) = e^{(\alpha - \beta i) x} = e^{\alpha x} (\cos \beta x - i \sin \beta x)
        $$
        又因为齐次微分方程的解的线性组合依旧是它的解，所以可以设：
        $$
        \overline{y_1}(x) = \frac{y_1(x) + y_2(x)}{2} = e^{\alpha x} \cos \beta x
        , \overline{y_2}(x) = \frac{y_1(x) - y_2(x)}{2i} = e^{\alpha x} \sin \beta x
        $$
        于是可以得到通解：
        $$
        y(x) = C_1 \overline{y_1}(x) + C_2 \overline{y_2}(x)
        = e^{\alpha x} (C_1 \cos \beta x + C_2 \sin \beta x)
        $$
    
    :::

[^1]:线性无关：$y_1(x)$除以$y_2(x)$并非恒等于一个常数$C$
[^2]:欧拉公式：$e^{ix} = \cos x + i \sin x$