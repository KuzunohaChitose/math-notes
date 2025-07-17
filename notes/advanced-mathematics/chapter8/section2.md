# 第二节 二重积分的计算方法

::: details Answer

[[toc]]

:::

## I. 利用直角坐标计算二重积分

> 在直角坐标系下计算二重积分，是通过将二重积分转换为两次定积分来进行计算的，其中面积元素$\mathrm{d} \sigma = \mathrm{d}x \cdot \mathrm{d}y$

### 1.1 当积分区域为$X$型区域时

若积分区域$D$可以表示为：
$$
D = \left\{\, (x, y) \;\middle|\; a \leq x \leq b, \varphi_1(x) \leq y \leq \varphi_2(x) \,\right\}
$$
则：
$$
\iint_{D} f(x, y) \mathrm{d} \sigma = \int_{a}^{b} \mathrm{d}x \int_{\varphi_1(x)}^{\varphi_2(x)} f(x, y) \mathrm{d}y
$$
称这种积分次序为先对$y$后对$x$的二次积分

::: tip Tip

$X$型区域的特点：穿过$D$内部且平行于$y$轴的直线与$D$的边界相交不多于两点

:::

### 1.2 当积分区域为$Y$型区域时

若积分区域$D$可以表示为：
$$
D = \left\{\, (x, y) \;\middle|\; c \leq y \leq d, \psi_1(y) \leq x \leq \psi_2(y) \,\right\}
$$
则：
$$
\iint_{D} f(x, y) \mathrm{d} \sigma = \int_{c}^{d} \mathrm{d}y \int_{\psi_1(x)}^{\psi_2(x)} f(x, y) \mathrm{d}x
$$
称这种积分次序为先对$x$后对$y$的二次积分

::: tip Tip

$Y$型区域的特点：穿过$D$内部且平行于$x$轴的直线与$D$的边界相交不多于两点

:::

### 1.3 当积分区域既非$X$型也非$Y$型时

可用与坐标轴平行的直线将区域$D$分割成若干部分，使得每个部分都是$X$型或$Y$型区域，然后分别计算各部分的二重积分，最后求和即可

- **例1**：计算$\displaystyle \iint_{D} xy \mathrm{d} \sigma$，其中$D$是由抛物线$y^2 = x$与直线$y = x - 2$围成的闭区域

    ::: details Answer

    先找出$y^2 = x$与$y = x - 2$的交点：
    $$
    (x - 2)^2 = x\Rightarrow x_1 = 1, x_2 = 4 \\
    $$
    则交点为$(1, -1)$和$(4, 2)$，$D = D_1 \cup D_2$，其中：
    $$
    \begin{gather}
    D_1 = \left\{\, (x, y) \;\middle|\; 0 \leq x \leq 1, -\sqrt{x} \leq y \leq \sqrt{x} \,\right\} \\
    D_2 = \left\{\, (x, y) \;\middle|\; 1 \leq x \leq 4, x - 2 \leq y \leq \sqrt{x} \,\right\} \\
    \end{gather}
    $$
    于是：
    $$
    \begin{gather}
    \iint_{D} xy \mathrm{d} \sigma = \iint_{D_1} xy \mathrm{d} \sigma + \iint_{D_2} xy \mathrm{d} \sigma \\
    = \int_{0}^{1} \mathrm{d}x \int_{-\sqrt{x}}^{\sqrt{x}} xy \mathrm{d}y + \int_{1}^{4} \mathrm{d}x \int_{x - 2}^{\sqrt{x}} xy \mathrm{d}y \\
    = \frac{1}{2} \int_{0}^{1} \left[ x \cdot (\sqrt{x})^2  - x \cdot (-\sqrt{x})^2 \right] \mathrm{d}x + \frac{1}{2} \int_{1}^{4} \left[ x^2 - x(x - 2)^2 \right] \mathrm{d}x \\
    = \frac{1}{2} \int_{1}^{4} (-x^3 + 5x^2 - 4x) \mathrm{d}x
    = \frac{1}{2} \left[ -\frac{1}{4} x^4 + \frac{5}{3} x^3 - 2x^2 \right]_{1}^{4} \\
    = \frac{1}{2} (-64 + \frac{320}{3} - 32 + \frac{1}{4} - \frac{5}{3} + 2)
    = \frac{45}{8} \\
    \end{gather}
    $$
    :::
    
- **例2**：计算二重积分$\displaystyle \iint_{D} y \sqrt{1 + x^2 - y^2} \mathrm{d} \sigma$，其中$D$是由直线$x = -1$、$y = 1$及$y = x$所围成的闭区域

    ::: details Answer
    $$
    \begin{gather}
    \iint_{D} y \sqrt{1 + x^2 - y^2} \mathrm{d} \sigma \\
    = \int_{-1}^{1} \mathrm{d}x \int_{x}^{1} y \sqrt{1 + x^2 - y^2} \mathrm{d}y \\
    = -\frac{1}{2} \int_{-1}^{1} \mathrm{d}x \int_{x}^{1} (1 + x^2 - y^2)^{\frac{1}{2}} \mathrm{d}(1 + x^2 - y^2) \\
    = -\frac{1}{3} \int_{-1}^{1} \left[ (1 + x^2 - 1^2)^{\frac{3}{2}} - (1 + x^2 - x^2)^{\frac{3}{2}} \right] \mathrm{d}x \\
    = -\frac{1}{3} \int_{-1}^{1} (\lvert x \rvert^3 - 1) \mathrm{d}x \\
    = -\frac{1}{3} \left[ \int_{-1}^{0} (-x^3 - 1) \mathrm{d}x + \int_{0}^{1} (x^3 - 1) \mathrm{d}x \right] \\
    = \frac{1}{3} \int_{-1}^{0} (x^3 + 1) \mathrm{d}x - \frac{1}{3} \int_{0}^{1} (x^3 - 1) \mathrm{d}x \\
    = \frac{1}{3} \left[ \frac{1}{4} x^4 + x \right]_{-1}^{0} - \frac{1}{3} \left[ \frac{1}{4} x^4 - x \right]_{0}^{1} \\
    = \frac{1}{3} (-\frac{1}{4} + 1) - \frac{1}{3} (\frac{1}{4} - 1) \\
    = \frac{1}{3} (2 - \frac{1}{2}) = \frac{1}{2} \\
    \end{gather}
    $$
    :::
    
- **例3**：设$f(x, y)$为连续函数，则$\displaystyle \int_{0}^{2} \mathrm{d}x \int_{0}^{\frac{x^2}{2}} f(x, y) \mathrm{d}y + \int_{2}^{2\sqrt{2}} \mathrm{d}x \int_{0}^{\sqrt{8 - x^2}} f(x, y) \mathrm{d}y = \_\_\_\_\_.$

    - A：$\displaystyle \int_{0}^{2} \mathrm{d}y \int_{\sqrt{2y}}^{\sqrt{8 - y^2}} f(x, y) \mathrm{d}x$
    - B：$\displaystyle \int_{0}^{2} \mathrm{d}y \int_{1}^{\sqrt{8 - y^2}} f(x, y) \mathrm{d}x$
    - C：$\displaystyle \int_{0}^{1} \mathrm{d}y \int_{\sqrt{2y}}^{\sqrt{8 - y^2}} f(x, y) \mathrm{d}x$
    - D：$\displaystyle \int_{0}^{2} \mathrm{d}y \int_{\sqrt{2y}}^{1} f(x, y) \mathrm{d}x$

    ::: details Answer
    $$
    \begin{gather}
    \{ (x, y) | 0 \leq x \leq 2, 0 \leq y \leq \frac{1}{2} x^2 \} 
    \cup \{ (x, y) | 2 \leq x \leq 2\sqrt{2}, 0 \leq y \leq \sqrt{8 - x^2} \} \\
    = \{ (x, y) | 0 \leq y \leq 2, \sqrt{2y} \leq x \leq \sqrt{8 - y^2} \} \\
    \end{gather}
    $$
    :::

- **例4**：设函数$f(x, y)$连续，且$\displaystyle f(x, y) = xy + \iint_{D} uf(u, v) \mathrm{d}u \mathrm{d}v$，其中$D$为$y = 0$、$y = \sqrt{x}$与$x = 1$所围成的区域，则$f(x, y) = \_\_\_\_\_.$

    - A：$xy$
    - B：$\dfrac{2}{3} xy$
    - C：$xy + \dfrac{5}{24}$
    - D：$xy + \dfrac{5}{4}$

    ::: details Answer
    $$
    \begin{gather}
    I = \iint_{D} uf(u, v) \mathrm{d}u \mathrm{d}v \\
    = \int_{0}^{1} \mathrm{du} \int_{0}^{\sqrt{u}} (u^2 v + uI) \mathrm{d}v \\
    = \int_{0}^{1} (\frac{1}{2} u^3 + Iu^{\frac{3}{2}}) \mathrm{d}u \\
    = \left[ \frac{1}{2} \cdot \frac{1}{4} \cdot u^4 + I \cdot \frac{2}{5} \cdot u^{\frac{5}{2}} \right]_{0}^{1} \\
    = \frac{1}{8} + \frac{2}{5} I
    \Rightarrow I = \frac{5}{24} \\
    \end{gather}
    $$
    :::

## II. 利用极坐标计算二重积分

### 2.1 极点$O$在区域$D$的外部

设区域：
$$
D = \left\{\, (\rho, \theta) \;\middle|\; \alpha \leq \theta \leq \beta, \rho_1(\theta) \leq \rho \leq \rho_2(\theta) \,\right\}
$$
则：
$$
\begin{gather}
\iint_{D} f(x, y) \mathrm{d}x \mathrm{d}x
= \iint_{D} f(\rho \cos \theta, \rho \sin \theta) \rho \mathrm{d} \rho \mathrm{d} \theta \\
= \int_{\alpha}^{\beta} \mathrm{d} \theta \int_{\rho_1(\theta)}^{\rho_2(\theta)} f(\rho \cos \theta, \rho \sin \theta) \rho \mathrm{d} \rho \\
\end{gather}
$$

### 2.2 极点$O$在区域$D$的边界上

设区域：
$$
D = \left\{\, (\rho, \theta) \;\middle|\; \alpha \leq \theta \leq \beta, 0 \leq \rho \leq \rho(\theta) \,\right\}
$$
则：
$$
\begin{gather}
\iint_{D} f(x, y) \mathrm{d}x \mathrm{d}x
= \iint_{D} f(\rho \cos \theta, \rho \sin \theta) \rho \mathrm{d} \rho \mathrm{d} \theta \\
= \int_{\alpha}^{\beta} \mathrm{d} \theta \int_{0}^{\rho(\theta)} f(\rho \cos \theta, \rho \sin \theta) \rho \mathrm{d} \rho \\
\end{gather}
$$

### 2.3 极点$O$在区域$D$的内部

设区域：
$$
D = \left\{\, (\rho, \theta) \;\middle|\; 0 \leq \theta \leq 2\pi, 0 \leq \rho \leq \rho(\theta) \,\right\}
$$
则：
$$
\begin{gather}
\iint_{D} f(x, y) \mathrm{d}x \mathrm{d}x
= \iint_{D} f(\rho \cos \theta, \rho \sin \theta) \rho \mathrm{d} \rho \mathrm{d} \theta \\
= \int_{0}^{2\pi} \mathrm{d} \theta \int_{0}^{\rho(\theta)} f(\rho \cos \theta, \rho \sin \theta) \rho \mathrm{d} \rho \\
\end{gather}
$$
::: tip Tip

极坐标的适用场景：

1. 积分区域用极坐标表示更简单时
2. 被积函数含有$x^2 + y^2$、$\dfrac{y}{x}$或$\dfrac{x}{y}$时

:::

- **例5**：计算$\displaystyle \iint_{D} \sqrt{x^2 + y^2} \mathrm{d} \sigma$，其中$D$是圆$x^2 + y^2 = 2x$所围区域

    ::: details Answer
    $$
    \begin{gather}
    \iint_{D} \sqrt{x^2 + y^2} \mathrm{d} \sigma
    = \int_{-\frac{1}{2} \pi}^{\frac{1}{2} \pi} \mathrm{d} \theta \int_{0}^{2 \cos \theta}  \rho^2 \mathrm{d} \rho \\
    = \frac{8}{3} \int_{-\frac{1}{2} \pi}^{\frac{1}{2} \pi} \cos^3 \theta \mathrm{d} \theta
    = \frac{8}{3} \int_{-\frac{1}{2} \pi}^{\frac{1}{2} \pi} (1 - \sin^2 \theta) \mathrm{d} \sin \theta \\
    = \frac{8}{3} \left[ \sin \theta - \frac{1}{3} \sin^3 \theta \right]_{-\frac{1}{2} \pi}^{\frac{1}{2} \pi} = \frac{8}{3} \cdot \frac{4}{3} = \frac{32}{9} \\
    \end{gather}
    $$
    :::

- **例6**：若区域$D$是由圆周$x^2 + y^2 = 4$、$x^2 + y^2 = 1$及直线$y = 0$、$y = x$所围成的第一象限内的闭区域，求二重积分$\displaystyle \iint_{D} \arctan \frac{y}{x} \mathrm{d} \sigma.$

    ::: details Answer
    $$
    \begin{gather}
    \iint_{D} \arctan \frac{y}{x} \mathrm{d} \sigma
    = \int_{0}^{\frac{1}{4} \pi} \mathrm{d} \theta \int_{1}^{2} \theta \rho \mathrm{d} \rho \\
    = \frac{3}{2} \int_{0}^{\frac{1}{4} \pi} \theta \mathrm{d} \theta
    = \frac{3}{64} \pi^2 \\
    \end{gather}
    $$
    :::
    
- **例7**：设$f(x, y)$为连续函数，则$\displaystyle \int_{0}^{\frac{\pi}{4}} \mathrm{d} \theta \int_{0}^{1} f(\rho \cos \theta, \rho \sin \theta) \rho \mathrm{d} \rho = \_\_\_\_\_.$

    - A：$\displaystyle \int_{0}^{\frac{\sqrt{2}}{2}} \mathrm{d}x \int_{x}^{\sqrt{1 - x^2}} f(x, y) \mathrm{d}y$
    - B：$\displaystyle \int_{0}^{\frac{\sqrt{2}}{2}} \mathrm{d}x \int_{0}^{\sqrt{1 - x^2}} f(x, y) \mathrm{d}y$
    - C：$\displaystyle \int_{0}^{\frac{\sqrt{2}}{2}} \mathrm{d}y \int_{y}^{\sqrt{1 - y^2}} f(x, y) \mathrm{d}x$
    - D：$\displaystyle \int_{0}^{\frac{\sqrt{2}}{2}} \mathrm{d}y \int_{0}^{\sqrt{1 - y^2}} f(x, y) \mathrm{d}x$

    ::: details Answer

    注意到极坐标下的积分区域：
    $$
    D_1 = \{ (\theta, \rho) | 0 \leq \theta \leq \frac{\pi}{4}, 0 \leq \rho \leq 1 \}
    $$
    它是一个扇形区域，将其转换到直角坐标下：
    $$
    D_2 = \{ (x, y) | 0 \leq y \leq \frac{\sqrt{2}}{2}, y \leq x \leq \sqrt{1 - y^2} \}
    $$
    故选C

    :::

## III. 利用对称性计算二重积分

1. 若积分区域$D$关于$y$轴对称，$f(x, y)$关于$x$有奇偶性，则：
    $$
    \iint_{D} f(x, y) \mathrm{d}x \mathrm{d}y =
    \begin{cases}
    \displaystyle 2 \iint_{D_1} f(x, y) \mathrm{d}x \mathrm{d}y, & f(-x, y) = f(x, y) \\
    0, & f(-x, y) = -f(x, y) \\
    \end{cases}
    $$
    其中$D_1$为$D$在右半平面（$x \geq 0$）的部分

2. 若积分区域$D$关于$x$轴对称，$f(x, y)$关于$y$有奇偶性，则：
    $$
    \iint_{D} f(x, y) \mathrm{d}x \mathrm{d}y =
    \begin{cases}
    \displaystyle 2 \iint_{D_1} f(x, y) \mathrm{d}x \mathrm{d}y, & f(x, -y) = f(x, y) \\
    0, & f(x, -y) = -f(x, y) \\
    \end{cases}
    $$
    其中$D_1$为$D$在上半平面（$y \geq 0$）的部分

3. 若积分区域$D$关于$y = x$对称（即关于变量$x$和$y$具有轮换对称性）,则：
    $$
    \iint_{D} f(x, y) \mathrm{d}x \mathrm{d}y 
    = \iint_{D} f(y, x) \mathrm{d}x \mathrm{d}y
    = \frac{1}{2} \iint_{D} \left[ f(x, y) + f(y, x) \right] \mathrm{d}x \mathrm{d}y
    $$

- **例8**：设区域：
    $$
    D = \{ (x, y) | -\ln x \leq y \leq \ln x, 1 \leq x \leq e \}
    $$
    则下列选项正确的是\_\_\_\_\_.

    - A：$\displaystyle \iint_{D} x^2 \sin y \mathrm{d}x \mathrm{d}y = 0$
    - B：$\displaystyle \iint_{D} x^3 \cos y \mathrm{d}x \mathrm{d}y = 0$
    - C：$\displaystyle \iint_{D} (\sin xy + \cos y) \mathrm{d}x \mathrm{d}y = 0$
    - D：$\displaystyle \iint_{D} \sin (\cos y) \mathrm{d}x \mathrm{d}y = 0$
    
    ::: details Answer
    
    首先观察区域$D$，注意到它关于$x$轴对称，于是考虑找出一个满足$f(x, -y) = -f(x, y)$的函数：
    $$
    \begin{gather}
    x^2 \sin (-y) = -x^2 \sin y \\
    x^3 \cos (-y) = x^3 \cos y \\
    \sin (-xy) + \cos (-y) = -\sin xy + \cos y \\
    \sin (\cos (-y)) = \sin (\cos y) \\
    \end{gather}
    $$
    故选A
    
    :::
    
- **例9**：设区域：
    $$
    D = \{ (x, y) | x^2 + y^2 \leq 1, x \geq 0 \}
    $$
    计算二重积分：
    $$
    \iint_{D} \frac{2 + x^2 y}{1 + \sqrt{x^2 + y^2}} \mathrm{d}x \mathrm{d}y
    $$
    ::: details Answer

    注意到区域$D$是一个圆心为$(0, 0)$、半径为$1$的圆的右半部分，故其关于$x$轴对称，于是有：
    $$
    \begin{gather}
    \iint_{D} \frac{2 + x^2 y}{1 + \sqrt{x^2 + y^2}} \mathrm{d}x \mathrm{d}y \\
    = \iint_{D} \frac{2}{1 + \sqrt{x^2 + y^2}} \mathrm{d}x \mathrm{d}y + \iint_{D} \frac{x^2 y}{1 + \sqrt{x^2 + y^2}} \mathrm{d}x \mathrm{d}y \\
    = 2 \iint_{D} \frac{1}{1 + \sqrt{x^2 + y^2}} \mathrm{d}x \mathrm{d}y + 0 \\
    = 2 \iint_{\{ (\theta, \rho) | -\frac{\pi}{2} \leq \theta \leq \frac{\pi}{2}, 0 \leq \rho \leq 1 \}} \frac{1}{1 + \sqrt{(\rho \cos \theta)^2 + (\rho \sin \theta)^2}} \rho \mathrm{d} \rho \mathrm{d} \theta \\
    = 2 \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \mathrm{d} \theta \int_{0}^{1} \frac{\rho}{1 + \rho} \mathrm{d} \rho
    = 2 \pi (1 - \ln 2) \\
    \end{gather}
    $$
    :::
    
- **例10**：设区域：
    $$
    D = \{ (x, y) | x^2 + y^2 \leq R^2 \}
    $$
    计算二重积分：
    $$
    \iint_{D} (\frac{x^2}{a^2} + \frac{y^2}{b^2}) \mathrm{d}x \mathrm{d}y
    $$
    ::: details Answer

    由于区域$D$关于$y = x$对称，根据轮换对称性可知：
    $$
    \iint_{D} x^2 \mathrm{d} \sigma = \iint_{D} y^2 \mathrm{d} \sigma = \frac{1}{2} \iint_{D} (x^2 + y^2) \mathrm{d} \sigma
    $$
    于是：
    $$
    \begin{gather}
    \iint_{D} (\frac{x^2}{a^2} + \frac{y^2}{b^2}) \mathrm{d} \sigma \\
    = \frac{1}{a^2} \iint_{D} x^2 \mathrm{d} \sigma + \frac{1}{b^2} \iint_{D} y^2 \mathrm{d} \sigma \\
    = (\frac{1}{2a^2} + \frac{1}{2b^2}) \iint_{D} (x^2 + y^2) \mathrm{d} \sigma \\
    = (\frac{1}{2a^2} + \frac{1}{2b^2}) \iint_{\{ (\theta, \rho) | 0 \leq \theta \leq 2\pi, 0 \leq \rho \leq R \}} \rho^2 \cdot \rho \mathrm{d} \rho \\
    = (\frac{1}{2a^2} + \frac{1}{2b^2}) \int_{0}^{2\pi} \mathrm{d} \theta \int_{0}^{R} \rho^3 \mathrm{d} \rho \\
    = \frac{R^4}{4} (\frac{1}{2a^2} + \frac{1}{2b^2}) \int_{0}^{2\pi} \mathrm{d} \theta \\
    = \frac{\pi}{4} (a^{-2} + b^{-2}) R^4 \\
    \end{gather}
    $$
    
    
    :::

## IV. 分段函数的二重积分

- **例11**：计算：
    $$
    \iint_{D} \max \{ xy, 1 \} \mathrm{d}x \mathrm{d}y
    $$
    其中：
    $$
    D = \{ (x, y) | 0 \leq x \leq 2, 0 \leq y \leq 2 \}
    $$
    ::: details Answer

    考虑双曲线$xy = 1$，对于区域$D$中处于其上的点，则$\max \{ xy, 1 \} = xy$；对于区域$D$中处于其下的点，则$\max \{ xy, 1 \} = 1$，于是可以考虑将积分区域分割成数个区域分别进行积分：
    $$
    \begin{gather}
    \iint_{D} \max \{ xy, 1 \} \mathrm{d} \sigma
    = \iint_{\{ (x, y) | 0 \leq x \leq \frac{1}{2}, 0 \leq y \leq 2 \}} \mathrm{d} \sigma \\
    + \iint_{\{ (x, y) | \frac{1}{2} \leq x \leq 2, 0 \leq y \leq \frac{1}{x} \}} \mathrm{d} \sigma
    + \iint_{\{ (x, y) | \frac{1}{2} \leq x \leq 2, \frac{1}{x} \leq y \leq 2 \}} xy \mathrm{d} \sigma \\
    = \int_{0}^{\frac{1}{2}} \mathrm{d}x \int_{0}^{2} \mathrm{d}y + \int_{\frac{1}{2}}^{2} \mathrm{d}x \int_{0}^{\frac{1}{x}} \mathrm{d}y + \int_{\frac{1}{2}}^{2} \mathrm{d}x \int_{\frac{1}{x}}^{2} xy \mathrm{d}y \\
    = 1 + 2 \ln 2 + \frac{15}{4} - \ln 2 = \frac{19}{4} + \ln 2 \\
    \end{gather}
    $$
    :::

- **例12**：设函数：
    $$
    f(x, y) =
    \begin{cases}
    \dfrac{1}{(x^2 + y^2)^2}, & 1 \leq x \leq 3, \dfrac{\sqrt{3}}{3} x \leq y \leq x, \\
    0, & \text{其他} \\
    \end{cases}
    $$
    区域$D$由$x = 1$、$x = 3$、$y = 0$以及$y = 3$围成，求$\displaystyle \iint_{D} f(x, y) \mathrm{d} \sigma.$

    ::: details Answer
    $$
    \begin{gather}
    \iint_{D} f(x, y) \mathrm{d} \sigma
    = \int_{1}^{3} \mathrm{d}x \int_{\frac{\sqrt{3}}{3} x}^{x} (x^2 + y^2)^{-2} \mathrm{d}y \\
    = \int_{\frac{\pi}{6}}^{\frac{\pi}{4}} \mathrm{d} \theta \int_{\sec \theta}^{3 \sec \theta} (\rho^2 \cos^2 \theta + \rho^2 \sin^2 \theta)^{-2} \cdot \rho \mathrm{d} \rho \\
    = \int_{\frac{\pi}{6}}^{\frac{\pi}{4}} \mathrm{d} \theta \int_{\sec \theta}^{3 \sec \theta} \rho^{-3} \mathrm{d} \rho
    = \frac{4}{9} \int_{\frac{\pi}{6}}^{\frac{\pi}{4}} \cos^2 \theta \mathrm{d} \theta \\
    = \frac{2}{9} \left[ \sin \theta \cos \theta + \theta \right]_{\frac{\pi}{6}}^{\frac{\pi}{4}}
    = \frac{6 - 3\sqrt{3} + \pi}{54} \\
    \end{gather}
    $$
    :::

## V. 无界区域上的二重积分

- **例13**：计算二重积分$\displaystyle \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} e^{-(x^2 + y^2)} \cos (x^2 + y^2) \mathrm{d}x \mathrm{d}y.$

    ::: details Answer
    $$
    \begin{gather}
    \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} e^{-(x^2 + y^2)} \cos (x^2 + y^2) \mathrm{d}x \mathrm{d}y \\
    = \lim_{R \to +\infty} \int_{0}^{2\pi} \mathrm{d} \theta \int_{0}^{R} \rho e^{-\rho^2} \cos \rho^2 \mathrm{d} \rho \\
    = \pi \lim_{R \to +\infty} \int_{0}^{R^2} e^{-t} \cos t \mathrm{d}t \\
    = \frac{\pi}{2} \lim_{R \to +\infty} \left[ \frac{\sin t - \cos t}{e^{t}} \right]_{0}^{R^2} \\
    = \frac{\pi}{2} \lim_{R \to +\infty} (\frac{\sin R^2 - \cos R^2}{e^{R^2}} + 1) \\
    = \frac{\pi}{2} \cdot (0 + 1) = \frac{\pi}{2} \\
    \end{gather}
    $$
     :::

