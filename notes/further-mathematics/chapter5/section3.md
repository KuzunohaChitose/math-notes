# 第三节 定积分的应用

::: details Tables of Content

[[toc]]

:::

## I. 定积分的元素法

> 已知$\displaystyle \int_{a}^{b} f(x) \mathrm{d}x = \lim_{\lambda \to 0} \sum_{i = 1}^{n} f(\xi_i) \cdot \Delta x_i$，其中$\Delta x_i = x_i - x_{i - 1}$，记$\displaystyle \lambda = \max_{1 \leq i \leq n} \{ \Delta x_i \}$

可利用定积分解决的整体量$U$需要满足：

1. $U$与$x \in \left[ a, b \right]$相关
2. $U$可分割为部分量$\Delta U_i$（$1 \leq i \leq n$），且$U = \sum \Delta U_i$，以及$\Delta U_i \approx f(\xi_i) \Delta x_i$
3. 若$\forall x \in \left[ a, b \right]$有$x + \mathrm{d}x \in \left[ a, b \right]$，则在$\left[ x, x + \mathrm{d}x \right]$上$U$的元素$f(x) \mathrm{d}x = \mathrm{d}u$

于是有：
$$
U = \int_{a}^{b} \mathrm{d}u = \int_{a}^{b} f(x) \mathrm{d}x
$$
::: tip Tip

元素法可以解决的问题：平面图形的面积、体积、弧长、侧面积、变力沿直线做功、水压力、引力等

:::

## II. 平面图形的面积

### 2.1 直角坐标系的情况

由曲线$y = f(x)$、$y = g(x)$与直线$x = a$、$x = b$（$a \lt b$）所围成的平面图形的面积为：
$$
A = \int_{a}^{b} \left| f(x) - g(x) \right| \mathrm{d}x
$$

- **例1**：求由曲线$y = \ln x$与两直线$y = -x + e + 1$及$y = 0$所围成的平面图形的面积

    ::: details Answer
    $$
    \begin{gather}
    A = \int_{1}^{e} \ln x \mathrm{d}x + \int_{e}^{e + 1} (-x + e + 1) \mathrm{d}x \\
    = \left[ x \ln x - x \right]_{1}^{e} + \left[ -\frac{1}{2} x^2 + ex + x \right]_{e}^{e + 1} \\
    = 1 + \left[ \frac{1}{2}e^2 - \frac{1}{2} + e + 1 \right] - (\frac{1}{2} e^2 + e) \\
    = 1 - \frac{1}{2} + 1 = \frac{3}{2} \\
    \end{gather}
    $$
    :::

- **例2**：求由抛物线$y^2 = 2x$和直线$y = x - 4$所围成的平面图形的面积

    ::: details Answer
    $$
    A = 2 \int_{0}^{2} \sqrt{2x} \mathrm{d}x + \int_{2}^{8} \left| \sqrt{2x} - x + 4 \right| \mathrm{d}x \\
    = 2\sqrt{2} \int_{0}^{2} x^{\frac{1}{2}} \mathrm{d}x + \sqrt{2} \int_{2}^{8} x^{\frac{1}{2}} \mathrm{d}x - \int_{2}^{8} x \mathrm{d}x + 4 \int_{2}^{8} \mathrm{d}x \\
    = \frac{4\sqrt{2}}{3} \left[ x^{\frac{3}{2}} \right]_{0}^{2} + \frac{2\sqrt{2}}{3} \left[ x^{\frac{3}{2}} \right]_{2}^{8} - \frac{1}{2} \left[ x^2 \right]_{2}^{8} + 4 \left[ x \right]_{2}^{8} \\
    = \frac{4\sqrt{2}}{3} (\sqrt{2^3} - \sqrt{0^3}) + \frac{2\sqrt{2}}{3} (\sqrt{8^3} - \sqrt{2^3}) - \frac{1}{2} (8^2 - 2^2) + 4 (8 - 2) \\
    = \frac{16}{3} + \frac{56}{3} - 30 + 24
    = 24 - 6 = 18 \\
    $$
    :::

### 2.2 参数方程的情况

若曲线$y = y(x)$由参数方程：
$$
\begin{cases}
x = \varphi(t) \\
y = \psi(t) \\
\end{cases}
$$
所确立，且$\varphi(\alpha) = a$、$\varphi(\beta) = b$，则由曲线$y = y(x)$、直线$x = a$和$x = b$以及$x$轴所围成的图形的面积为：
$$
\begin{gather}
A = \int_{a}^{b} \left| y(x) \right| \mathrm{d}x
= \int_{\alpha}^{\beta} \left| y\left[ \varphi(t) \right] \right| \mathrm{d}\varphi(t) \\
= \int_{\alpha}^{\beta} \left| \psi(t) \right| \mathrm{d}\varphi(t)
= \int_{\alpha}^{\beta} \left| \psi(t) \right| \varphi'(t) \mathrm{d}t \\
\end{gather}
$$

### 2.3 极坐标系的情况

在极坐标系下，曲线$\rho = \rho(\theta)$由：
$$
\begin{cases}
x = r \cdot \cos \theta \\
y = r \cdot \sin \theta \\
\end{cases}
$$
所确立，则由曲线$\rho = \rho(\theta)$及射线$\theta = \alpha$、$\theta = \beta$（$\alpha \lt \beta$）所围成的曲边扇形的面积为：
$$
A = \frac{1}{2} \int_{\beta}^{\alpha} \rho^2(\theta) \mathrm{d}\theta
$$
::: info Notice

1. $r = a$意味着以极点$O$为圆心、$a$为半径的圆，即：$r^2 = a^2 \Leftrightarrow x^2 + y^2 = a^2$
2. $\theta = \alpha$意味着与极轴夹角为$\alpha$的射线

:::

::: tip Tip

1. 心形线：$\rho = a(1 + \cos \theta)$

2. 星形线：
    $$
    x^{\frac{3}{2}} + y^{\frac{2}{3}} = a^{\frac{2}{3}}
    \Rightarrow
    \begin{cases}
    x = a \cos^3 \theta \\
    y = a \sin^3 \theta \\
    \end{cases}
    $$

3. 双纽线：
    $$
    \begin{gather}
    (x^2 + y^2)^2 = a^2 (x^2 - y^2) \\
    \Rightarrow \rho^4 = a^2 (\rho^2 \cos^2 \theta - \rho^2 \sin^2 \theta) \\
    \Rightarrow \rho^2 = a^2 \cos (2 \theta) \\
    \end{gather}
    $$

4. 摆线：（$t \in \left[ 0, 2\pi \right]$）
    $$
    \begin{cases}
    x = a(t - \sin t) \\
    y = a(1 - \cos t) \\
    \end{cases}
    $$

:::

- **例3**：求由曲线$\rho = a \sin \theta$及$\rho = a(\cos \theta + \sin \theta) \, (a \gt 0)$所围图形公共部分的面积

    ::: details Answer

    通过$r^2 = x^2 + y^2$、$\sin \theta = \dfrac{y}{r}$以及$\cos \theta = \dfrac{x}{r}$可知：
    $$
    \begin{gather}
    \rho = a \sin \theta \Rightarrow x^2 + (y - \frac{a}{2})^2 = \frac{a^2}{4} \\
    \rho = a (\cos \theta + \sin \theta) \Rightarrow (x - \frac{a}{2})^2 + (y - \frac{a}{2})^2 = \frac{a^2}{2} \\
    \end{gather}
    $$
    即：
    $$
    \begin{gather}
    A = \frac{\pi}{8} a^2 + \frac{a^2}{2} \int_{\frac{\pi}{2}}^{\frac{3}{4}\pi} (\cos \theta + \sin \theta)^2 \mathrm{d}\theta \\
    = \frac{\pi}{8} a^2 + \frac{a^2}{2} \left[ \theta - \frac{1}{2} \cos (2\theta) \right]_{\frac{\pi}{2}}^{\frac{3}{4}\pi} \\
    = \frac{\pi}{8} a^2 + \frac{a^2}{2} \left[ \frac{3}{4}\pi - \frac{1}{2} \cos (\frac{3}{2}\pi) - \frac{\pi}{2} + \frac{1}{2} \cos \pi \right] \\
    = \frac{\pi}{8} a^2 + \frac{a^2}{2} \left[ \frac{1}{4}\pi - \frac{1}{2} \right]
    = \frac{\pi}{4} a^2 - \frac{1}{4} a^2 \\
    \end{gather}
    $$
    :::

- **例4**：求由曲线$\rho = 3 \cos \theta$和$\rho = 1 + \cos \theta$所围成的图形的公共部分的面积

    ::: details Answer
    $$
    \begin{gather}
    A = 2 \left[ \frac{1}{2} \int_{0}^{\frac{\pi}{3}} (1 + \cos \theta)^2 \mathrm{d}\theta + \frac{1}{2} \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} (3 \cos \theta)^2 \mathrm{d}\theta \right] \\
    = \int_{0}^{\frac{\pi}{3}} (1 + \cos^2 \theta + 2 \cos \theta) \mathrm{d}\theta + 9 \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \cos^2 \theta \mathrm{d}\theta \\
    = \int_{0}^{\frac{\pi}{3}} \mathrm{d}\theta + \int_{0}^{\frac{\pi}{3}} \cos^2 \theta \mathrm{d}x + 2 \int_{0}^{\frac{\pi}{3}} \cos \theta \mathrm{d}\theta + 9 \int_{\frac{\pi}{3}}^{\frac{\pi}{2}} \cos^2 \theta \mathrm{d}\theta \\
    = \left[ \theta \right]_{0}^{\frac{\pi}{3}} + \frac{1}{2} \left[ \sin \theta \cos \theta + \theta \right]_{0}^{\frac{\pi}{3}} + 2 \left[ \sin \theta \right]_{0}^{\frac{\pi}{3}} + \frac{9}{2} \left[ \sin \theta \cos \theta + \theta \right]_{\frac{\pi}{3}}^{\frac{\pi}{2}} \\
    = \frac{\pi}{3} + \frac{\sqrt{3}}{8} + \frac{\pi}{6} + \sqrt{3} + \frac{3\pi}{4} - \frac{9\sqrt{3}}{8} \\
    = \frac{4\pi + 2\pi + 9\pi}{12} + \frac{\sqrt{3} + 8\sqrt{3} - 9\sqrt{3}}{8}
    = \frac{5}{4} \pi \\
    \end{gather}
    $$
    :::

## III. 体积和侧面积

### 3.1 旋转体的体积

设函数$f(x)$在$\left[ a, b \right]$上可积，且由曲线$y = f(x)$和直线$x = a$、$x = b$以及$x$轴所围成的图形为$D$，则有：

1. 若$D$绕$x$轴旋转一周，则产生的旋转体的体积为：
    $$
    \pi \int_{a}^{b} f^2(x) \mathrm{d}x
    $$
    ::: details Proof

    **圆盘法**：将区间$\left[ a, b \right]$平均分为$n$份，则有：

    1. 设每一份的宽：$w = \frac{b - a}{n}$
    2. 设第$i$个小区间的起点：$s_i = a + (i - 1)w$
    3. 设第$i$个小区间的终点：$e_i = s_i + w = a + iw$
    4. 则第$i$个小区间可以表示为：$\left[ s_i, e_i \right]$
    5. 则第$i$个小区间内近似形成的小矩形的高：$h_i = f(s_i)$
    6. 则由第$i$个小矩形绕$x$轴一圈所形成的旋转体的体积：$V_i = \pi h_i^2 w$（以$h_i$为半径、$w$为高的圆柱体）

    于是可以将$D$绕$x$轴旋转一圈所形成的旋转体的体积表示为：
    $$
    \begin{gather}
    V = \lim_{n \to \infty} \sum_{i = 1}^{n} V_i
    = \pi \lim_{n \to \infty} \sum_{i = 1}^{n}  h_i^2 w \\
    = \pi \lim_{n \to \infty} \sum_{i = 1}^{n} w f^2(s_i)
    = \pi \int_{a}^{b} f^2(x) \mathrm{d}x \\
    \end{gather}
    $$
    :::

2. 若$D$绕$y$轴旋转一周，则产生的旋转体的体积为：
    $$
    V = 2\pi \int_{a}^{b} x f(x) \mathrm{d}x
    $$
    ::: details Proof

    **柱壳法**：将区间$\left[ a, b \right]$平均分为$n$份，则有：

    1. 设每一份的宽：$w = \frac{b - a}{n}$
    2. 设第$i$个小区间的起点：$s_i = a + (i - 1)w$
    3. 设第$i$个小区间的终点：$e_i = s_i + w = a + iw$
    4. 则第$i$个小区间可以表示为：$\left[ s_i, e_i \right]$
    5. 则第$i$个小区间内近似形成的小矩形的高：$h_i = f(s_i)$
    6. 则由第$i$个小矩形绕$y$轴一圈所形成的旋转体的体积：$V_i = e_i^2 \pi h_i - s_i^2 \pi h_i$（由大圆柱体的体积减去小圆柱体的体积得到）

    于是可以将$D$绕$y$轴旋转一圈所形成的旋转体的体积表示为：
    $$
    \begin{gather}
    V = \lim_{n \to \infty} \sum_{i = 1}^{n} V_i
    = \lim_{n \to \infty} \sum_{i = 1}^{n} (e_i^2 \pi h_i - s_i^2 \pi h_i) \\
    = \pi \lim_{n \to \infty} \sum_{i = 1}^{n} h_i \left[ (s_i + w)^2 - s_i^2 \right]
    = \pi \lim_{n \to \infty} \sum_{i = 1}^{n} w f(s_i) (2s_i + w) \\
    = 2\pi \lim_{n \to \infty} \sum_{i = 1}^{n} w f(s_i) s_i + \pi \lim_{n \to \infty} \sum_{i = 1}^{n} w^2 f(s_i) \\
    \end{gather}
    $$
    考虑第二个极限，由于$f(x)$在$\left[ a, b \right]$上可积，所以其中存在一个标准的黎曼和形式：
    $$
    \pi \lim_{n \to \infty} w \sum_{i = 1}^{n} w f(s_i) = \pi \int_{a}^{b} f(x) \mathrm{d}x \lim_{n \to \infty} w
    $$
    而当$n \to \infty$时，$w \to 0$，则此极限值为零；然后再考虑第一个极限，它也是一个标准的黎曼和形式，则有：
    $$
    V = 2\pi \lim_{n \to \infty} \sum_{i = 1}^{n} w f(s_i) \cdot s_i 
    = 2\pi \int_{a}^{b} x f(x) \mathrm{d}x
    $$
    :::

- **例5**：求椭圆$\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$所围成的图形绕$x$旋转一周所形成的旋转体的体积

    ::: details Answer
    $$
    \begin{gather}
    V = \pi \int_{-a}^{a} \left[ b \sqrt{1 - \dfrac{x^2}{a^2}} \right]^2 \mathrm{d}x \\
    = b^2 \pi \int_{-a}^{a} (1 - \frac{x^2}{a^2}) \mathrm{d}x \\
    = b^2 \pi \int_{-a}^{a} \mathrm{d}x - \frac{b^2}{a^2} \pi \int_{-a}^{a} x^2 \mathrm{d}x \\
    = 2a b^2 \pi - \frac{2a^3 b^2 \pi}{3a^2} \\
    = 2a b^2 \pi - \frac{2}{3} a b^2 \pi
    = \frac{4}{3} a b^2 \pi \\
    \end{gather}
    $$
    :::

- **例6**：求圆盘$(x - 2)^2 + y^2 \leq 1$绕$y$轴旋转而成的旋转体的体积

    ::: details Answer
    $$
    \begin{gather}
    V = 2 \left[ 2\pi \int_{1}^{3} x \sqrt{1 - (x - 2)^{2}} \mathrm{d}x \right] \\
    = 4\pi \int_{-1}^{1} (t + 2) \sqrt{1 - t^2} \mathrm{d}t, t = x - 2 \\
    = 4\pi \int_{-1}^{1} t \sqrt{1 - t^2} \mathrm{d}t + 8 \pi \int_{-1}^{1} \sqrt{1 - t^2} \mathrm{d}t \\
    = 0 + 8\pi \cdot \frac{1}{2} \pi = 4\pi^2 \
    \end{gather}
    $$
    :::

### 3.2 立体的体积

已知立体，设该立体在过点$x = a$、$x = b$且垂直于$x$轴的两个平面之间，以$S(x)$表示过点$x$且垂直于$x$轴的截面面积，则该立体的体积为：
$$
V = \int_{a}^{b} S(x) \mathrm{d}x
$$

- **例7**：计算底面是半径为$R$的圆、且垂直于底面上一条固定直径的所有截面都是等边三角形的立体体积

    ::: details Answer
    $$
    \begin{gather}
    V = 2 \int_{0}^{R} \frac{1}{2} \cdot 2 \sqrt{R^2 - x^2} \cdot \sqrt{3} \sqrt{R^2 - x^2} \mathrm{d}x \\
    = 2 \sqrt{3} \int_{0}^{R} (R^2 - x^2) \mathrm{d}x
    = 2 \sqrt{3} R^2 \int_{0}^{R} \mathrm{d}x - 2 \sqrt{3} \int_{0}^{R} x^2 \mathrm{d}x \\
    = 2 \sqrt{3} R^3 - \frac{2}{3} \sqrt{3} R^3 = \frac{4 \sqrt{3}}{3} R^3 \\
    \end{gather}
    $$
    :::

### 3.3 旋转体的侧面积

由曲线$y = f(x)$与直线$y = 0$、$x = a$、$x = b$所围成的平面图形绕$x$轴旋转一周，生成的旋转体的侧面积为：
$$
S_x = 2 \pi \int_{a}^{b} \left| f(x) \right| \sqrt{1 + \left[ f'(x) \right]^2} \mathrm{d}x
$$
::: details Proof

将区间$\left[ a, b \right]$平均分为$n$份，则有：

1. 每一份的宽度为：$w = \dfrac{b - a}{n}$
2. 每一份的起点为：$s_i = a + (i - 1) w$
3. 每一份的终点为：$e_i = s_i + w = a + iw$
4. 每一份的起点$(s_i, f(s_i))$和终点$(e_i, f(e_i))$之间的距离可以近似为：$\sqrt{(e_i - s_i)^2 + \left[ f(e_i) - f(s_i) \right]^2}$

则可将此旋转体的侧面积表示为：
$$
\begin{gather}
S = \lim_{n \to \infty} \sum_{i = 1}^{n} 2\pi \left| f(s_i) \right| \sqrt{(e_i - s_i)^2 + \left[ f(e_i) - f(s_i) \right]^2} \\
= 2\pi \lim_{n \to \infty} \sum_{i = 1}^{n} \left| f(s_i) \right| \sqrt{w^2 + \left[ f(e_i) - f(s_i) \right]^2} \\
\end{gather}
$$

根据拉格朗日中值定理可知：
$$
\exists \xi_i \in (s_i, e_i) \rightarrow f(e_i) - f(s_i) = f'(\xi_i) (e_i - s_i)
$$
于是可以进一步写成：
$$
\begin{gather}
S = 2\pi \lim_{n \to \infty} \sum_{i = 1}^{n} \left| f(s_i) \right| \sqrt{w^2 + \left[ f'(\xi_i) (e_i - s_i) \right]^2} \\
= 2\pi \lim_{n \to \infty} \sum_{i = 1}^{n} \left| f(s_i) \right| \sqrt{w^2 + w^2 \left[ f'(\xi_i) \right]^2} \\
= 2\pi \lim_{n \to \infty} \sum_{i = 1}^{n} w \left| f(s_i) \right| \sqrt{1 + \left[ f'(\xi_i) \right]^2} \\
\end{gather}
$$
而当$n \to \infty$时，$w \to 0$，而$e_i - s_i = w$、$\xi_i \in (e_i, s_i)$，则$\xi_i \to s_i$，于是有：
$$
\begin{gather}
S = 2\pi \lim_{n \to \infty} \sum_{i = 1}^{n} w \left| f(s_i) \right| \sqrt{1 + \left[ f'(s_i) \right]^2} \\
= 2\pi \int_{a}^{b} \left| f(x) \right| \sqrt{1 + \left[ f'(x) \right]^2} \\
\end{gather}
$$
:::

由连续曲线$x = \varphi(y)$与直线$x = 0$、$y = c$、$y = d$（$c \lt d$）所围成的平面图形绕$y$轴旋转一周，形成的旋转体的侧面积为：
$$
S_y = 2\pi \int_{c}^{d} \left| \varphi(y) \right| \sqrt{1 + \left[ \varphi'(y) \right]^2} \mathrm{d}x
$$

- **例8**：求曲线$y = 2 \sqrt{x} \, (0 \leq x \leq 3)$绕$x$轴旋转一周所得曲面的面积

    ::: details Answer
    $$
    \begin{gather}
    S_x = 2\pi \int_{0}^{3} \left| 2\sqrt{x} \right| \sqrt{1 + \left[ (2\sqrt{x})' \right]^2} \mathrm{d}x \\
    = 4\pi \int_{0}^{3} \sqrt{x(1 + x^{-1})} \mathrm{d}x
    = 4\pi \int_{0}^{3} (x + 1)^{\frac{1}{2}} \mathrm{d}(x + 1) \\
    = 4\pi \left[ \frac{2}{3} (x + 1)^{\frac{3}{2}} \right]_{0}^{3}
    = \frac{8}{3}\pi (\sqrt{(3 + 1)^3} - \sqrt{(0 + 1)^3}) \\
    = \frac{8}{3}\pi (\sqrt{64} - \sqrt{1})
    = \frac{8}{3}\pi \cdot 7 = \frac{56}{3}\pi \\
    \end{gather}
    $$
    :::

## IV. 平面曲线的弧长

> 对于曲线$y = f(x)$，其弧微分为：
> $$
> \mathrm{d}s = \sqrt{(\mathrm{d}x)^2 + (\mathrm{d}y)^2} = \sqrt{(\mathrm{d}x)^2 + \left[ \mathrm{d}x f'(x) \right]^2} = \sqrt{1 + \left[ f'(x) \right]^2} \mathrm{d}x
> $$

1. 曲线$y = f(x)$在$a \leq x \leq b$时的弧段的弧长为：
    $$
    s = \int_{a}^{b} \sqrt{1 + \left[ f'(x) \right]^2} \mathrm{d}x
    $$

2. 曲线$\{ x = x(t), y = y(t)$在$\alpha \leq t \leq \beta$时的弧段的弧长为：
    $$
    s = \int_{\alpha}^{\beta} \sqrt{\left[ x'(t) \right]^2 + \left[ y'(t) \right]^2} \mathrm{d}x
    $$

3. 曲线$\rho = \rho(\theta)$在$\alpha \leq \theta \leq \beta$时的弧段的弧长为：
    $$
    s = \int_{\alpha}^{\beta} \sqrt{\rho^2(\theta) + \left[ \rho'(\theta) \right]^2} \mathrm{d}\theta
    $$

- **例9**：求曲线$y = \displaystyle \int_{0}^{x} \tan t \mathrm{d}t (0 \leq x \leq \frac{\pi}{4})$的弧长

    ::: details Answer
    $$
    \begin{gather}
    y' = (\int_{0}^{x} \tan t \mathrm{d}t)' = \tan x \\
    s = \int_{0}^{\frac{\pi}{4}} \sqrt{1 + (y')^2} \mathrm{d}x \\
    = \int_{0}^{\frac{\pi}{4}} \sqrt{1 + \tan^2 x} \mathrm{d}x
    = \int_{0}^{\frac{\pi}{4}} \sec x \mathrm{d}x \\
    = \ln \left| \sec \frac{\pi}{4} + \tan \frac{\pi}{4} \right| - \ln \left| \sec 0 + \tan 0 \right| \\
    = \ln (1 + \sqrt{2}) - 0 = \ln (1 + \sqrt{2}) \\
    \end{gather}
    $$
    :::

## V. 函数的平均值

设$y = f(x)$是$\left[ a, b \right]$上的连续函数，则$f(x)$在$\left[ a, b \right]$上的平均值定义为：
$$
\bar{y} = \frac{1}{b - a} \int_{a}^{b} f(x) \mathrm{d}x
$$

- **例10**：求函数$y = \sqrt{1 - \sin x}$在区间$\left[ 0, \pi \right]$上的平均值

    ::: details Answer
    $$
    \begin{gather}
    \bar{y} = \frac{1}{\pi} \int_{0}^{\pi} \sqrt{1 - \sin x} \mathrm{d}x \\
    = \frac{1}{\pi} \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \sqrt{1 - \sin (t + \frac{\pi}{2})} \mathrm{d}t, x = t + \frac{\pi}{2} \\
    = \frac{1}{\pi} \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \sqrt{1 - \cos t} \mathrm{d}t
    = \frac{2}{\pi} \int_{0}^{\frac{\pi}{2}} \sqrt{1 - \cos t} \mathrm{d}t \\
    = \frac{2}{\pi} \int_{1}^{0} \sqrt{1 - u} \mathrm{d}(\arccos u), t = \arccos u \\
    = -\frac{2}{\pi} \int_{1}^{0} \frac{\sqrt{1 - u}}{\sqrt{1 - u^2}} \mathrm{d}u
    = -\frac{2}{\pi} \int_{1}^{0} (u + 1)^{-\frac{1}{2}} \mathrm{d}(u + 1) \\
    = -\frac{4}{\pi} \left[ \sqrt{u + 1 } \right]_{1}^{0}
    = -\frac{4}{\pi} (\sqrt{0 + 1} - \sqrt{1 + 1}) \\
    = -\frac{4 (1 - \sqrt{2})}{\pi}
    = \frac{4 (\sqrt{2} - 1)}{\pi} \\
    \end{gather}
    $$
    :::

## VI. 简单物理量的表示和计算

### 6.1 变力沿直线做功

> 做功公式：
> $$
> W = F \cdot S
> $$
> 其中$W$为功，$F$为力，$S$为位移（1焦耳等于1牛顿乘以1米）

若$F = f(x)$为恒力，则直接套用做功公式$W = F \cdot S$；

若$F = f(x)$为变力，则：
$$
W = \int_{a}^{b} f(x) \mathrm{d}x
$$

### 6.2 液体的静压力

> 压力公式：
> $$
> F = p \cdot A = \rho \cdot g \cdot h \cdot A
> $$
> 这个公式描述了流体对面积为$A$的平面所施加的总静压力，其中$p$是流体在深度$h$处的压强、$\rho$是流体密度、$g$是重力加速度（980牛顿等于1000kg/$m^3$乘以9.8$m/s^2$乘以1米乘以0.1平方米）

若将一平板竖直放入液体中：（其中$l$为平板的长度）
$$
\forall \left[ x, x + \mathrm{d}x \right] \Rightarrow \mathrm{d}F = \rho g l x \mathrm{d}x
$$
则此平板单侧所受的静压力为：
$$
F = \int_{0}^{h} \rho g l x \mathrm{d}x
$$

### 6.3 引力

> 平面上两个质点之间的引力公式：
> $$
> F = G \cdot \frac{m_1 \cdot m_2}{r^2}
> $$
> 其中$G$为引力系数、$m_1$和$m_2$分别为两个质点的质量、$r$为两个质点之间的距离，此力$F$沿两点连线方向

- **例11**：设有一长度为$l$，线密度为$\mu$的均匀细直棒，在其中垂线上距棒$a$单位处有一质量为$m$的质点$M$，试计算该棒对质点$M$的引力

    ::: details Answer

    假设这根细直棒处于平面直角坐标系的$x$轴上，且其中点位于零点，则质点$M$位于$(0, a)$，

    :::
