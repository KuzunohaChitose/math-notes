# 第三节 偏导数的求导法则

::: details Tables of Content

[[toc]]

:::

## I. 多元复合函数的求导法则

### 1.1 当多元函数与一元函数复合时

若函数$u = \varphi(t)$、$b = \psi(t)$都在点$t$处可导，函数$z = f(u, v)$在对应点$(u, v)$具有连续偏导数，则复合函数$z = f\left[ \varphi(t), \psi(t) \right]$在点$t$处可导，且有：
$$
\frac{\mathrm{d}z}{\mathrm{d}t} = \frac{\partial z}{\partial u} \cdot \frac{\mathrm{d}u}{\mathrm{d}t} + \frac{\partial z}{\partial v} \cdot \frac{\mathrm{d}v}{\mathrm{d}t}
$$

### 1.2 当多元函数与多元函数复合时

若函数$u = \varphi(x, y)$与$v = \psi(x, y)$均在点$(x, y)$处具有对$x$以及对$y$的偏导数，函数$z = f(u, v)$在对应点$(u, v)$处具有连续偏导数，则复合函数$z = f\left[ \varphi(x, y), \psi(x, y) \right]$在点$(x, y)$的两个偏导数均存在，且有：
$$
\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \cdot \frac{\partial v}{\partial x}
\frac{\partial z}{\partial y} = \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial y} + \frac{\partial z}{\partial v} \cdot \frac{\partial v}{\partial y}
$$

### 1.3 当多元函数与一元及多元函数复合时

若$u = \varphi(x, y)$在点$(x, y)$处具有对$x$及对$y$的偏导数、函数$v = \psi(y)$在点$y$处可导、函数$z = f(u, v)$在对应点$(u, v)$处具有连续的偏导数，则复合函数$z = f\left[ \varphi(x, y), \psi(y) \right]$在点$(x, y)$处的两个偏导数皆存在，且有：
$$
\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial x},
\frac{\partial z}{\partial y} = \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial y} + \frac{\partial z}{\partial v} \cdot \frac{\mathrm{d}v}{\mathrm{d}y}
$$

- **例1**：设$u = f(x, y, z) = e^{x^2 + y^2 + z^2}$，而$z = x^2 \sin y$，求$\dfrac{\partial u}{\partial x}$、$\dfrac{\partial u}{\partial y}$.

    ::: details Answer
    $$
    \begin{gather}
    \frac{\partial u}{\partial x} = \frac{\partial u}{\partial x} + \frac{\partial u}{\partial z} \cdot \frac{\partial z}{\partial x} \\
    = 2x e^{x^2 + y^2 + z^2} + 2z e^{x^2 + y^2 + z^2} \cdot 2x \sin y \\
    = e^{x^2 + y^2 + x^4 \sin^2 y} (2x + 4 x^3 \sin^2 y) \\
    \frac{\partial u}{\partial y} = \frac{\partial u}{\partial y} + \frac{\partial u}{\partial z} \cdot \frac{\partial z}{\partial y} \\
    = 2y e^{x^2 + y^2 + z^2} + 2z e^{x^2 + y^2 + z^2} \cdot x^2 \cos y \\
    = e^{x^2 + y^2 + x^4 \sin^2 y} (2y + 2x^4 \sin y \cos y)
    \end{gather}
    $$
    :::
    
- **例2**：设$z = f(2x - y, x \sin y) + xg(e^y \ln x)$，其中$f$具有二阶连续偏导数，$g$具有二阶导数，求$\dfrac{\partial^2 z}{\partial x \partial y}$.

    ::: details Answer
    $$
    \begin{gather}
    u = 2x - y, v = x \sin y, w = e^y \ln x  \\
    \Rightarrow z = f(u, v) + x g(w) \\
    \frac{\partial z}{\partial x} = \frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial x} + g(w) + x \cdot \frac{\mathrm{d}g}{\mathrm{d}w} \cdot \frac{\partial w}{\partial x} \\
    = 2 f_u' + \sin y f_v' + g(w) + e^y g'(w) \\
    \frac{\partial^2 z}{\partial x \partial y} 
    = \frac{\partial}{\partial y} (\frac{\partial z}{\partial x})
    = \frac{\partial}{\partial y} \left[ 2 f_u' + \sin y f_v' + g(w) + e^y g'(w) \right] \\
    = -2 f_{uu}'' + 2x \cos y f_{uv}'' + \cos y f_v' - \sin y f_{vu}'' + x \sin y \cos y f_{vv}'' \\
    + g'(w) e^{y} \ln x + e^y g'(w) + e^{2y} g''(w) \ln x \\
    \end{gather}
    $$
    :::

## II. 全微分形式不变性

若函数$z = f(u, v)$可微，则有：
$$
\mathrm{d}z = \frac{\partial f}{\partial u} \mathrm{d}u + \frac{\partial f}{\partial v} \mathrm{d}v
$$
而当$u = u(x, y)$、$v = v(x, y)$时，此时的$u$、$v$为中间变量，则：
$$
\begin{gather}
\mathrm{d}z = \frac{\partial f}{\partial x} \mathrm{d}x + \frac{\partial f}{\partial y} \mathrm{d}y \\
= (\frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial x}) \mathrm{d}x + (\frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial y} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial y}) \mathrm{d}y \\
= \frac{\partial f}{\partial u} (\frac{\partial u}{\partial x} \mathrm{d}x + \frac{\partial u}{\partial y} \mathrm{d}y) + \frac{\partial f}{\partial v} (\frac{\partial v}{\partial x} \mathrm{d}x + \frac{\partial v}{\partial y} \mathrm{d}y) \\
= \frac{\partial f}{\partial u} \mathrm{d}u + \frac{\partial f}{\partial v} \mathrm{d}v \\
\end{gather}
$$
由此可见，无论$u$、$v$是自变量还是中间变量，函数$z = f(u, v)$的全微分形式都是一样的，此即全微分形式不变性

- **例3**：设$z = e^u \sin v, u = xy, v = x + y$，求$\mathrm{d}z$.

    ::: details Answer
    $$
    \mathrm{d}u = \frac{\partial u}{\partial x} \mathrm{d}x + \frac{\partial u}{\partial y} \mathrm{d}y = y \mathrm{d}x + x \mathrm{d}y \\
    \mathrm{d}v = \frac{\partial v}{\partial x} \mathrm{d}x + \frac{\partial v}{\partial y} \mathrm{d}y = \mathrm{d}x + \mathrm{d}y \\
    \mathrm{d}z = \frac{\partial z}{\partial u} \mathrm{d}u + \frac{\partial z}{\partial v} \mathrm{d}v \\
    = e^{xy} \sin (x + y) (y \mathrm{d}x + x \mathrm{d}y) + e^{xy} \cos (x + y) (\mathrm{d}x + \mathrm{d}y) \\
    $$
    :::

## III. 隐函数的存在定理

### 3.1 当仅有一个二元方程时

对于方程$F(x, y) = 0$，若满足以下三条：

1. $F(x, y)$在$U(x_0, y_0)$有一阶连续偏导数
2. $F(x_0, y_0) = 0$
3. $F_y'(x_0, y_0) \neq 0$

则方程$F(x, y) = 0$在$U(x_0)$上唯一确定一个具有连续导数的函数$y = y(x)$，且：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{F_x'(x, y)}{F_y'(x, y)}
$$
::: details Proof
$$
F\left[ x, y(x) \right] \equiv 0 \\
\Rightarrow \frac{\partial F}{\partial x} + \frac{\partial F}{\partial y} \cdot \frac{\mathrm{d}y}{\mathrm{d}x} = 0 \\
\Rightarrow \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{F_x'(x, y)}{F_y'(x, y)}
$$
:::

- **例4**：设$y = y(x)$由方程$x^2 + y^2 - \sin (xy) = 0$所确定，试求$y'(x)$.

    ::: details Answer
    $$
    \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{2x - y \cos (xy)}{2y - x \cos (xy)}
    $$
    :::

### 3.2 当仅有一个三元方程时

对于方程$F(x, y, z) = 0$，若满足以下三条：

1. $F(x, y, z)$在$U(x_0, y_0, z_0)$具有一阶连续偏导数
2. $F(x_0, y_0, z_0) = 0$
3. $F_z'(x_0, y_0, z_0) \neq 0$

则方程$F(x, y, z) = 0$在$U(x_0, y_0)$上唯一确定一个具有连续偏导数的函数$z = z(x, y)$，且：
$$
\frac{\partial z}{\partial x} = -\frac{F_x'}{F_z'},
\frac{\partial z}{\partial y} = -\frac{F_y'}{F_z'}
$$

- **例5**：设$e^{-xy} - 2z + e^z = 0$，求$\dfrac{\partial z}{\partial x}$、$\dfrac{\partial z}{\partial y}$.

    ::: details Answer
    $$
    \begin{gather}
    F(x, y, z) = e^{-xy} - 2z + e^z = 0 \\
    \frac{\partial z}{\partial x} = -\frac{F_x'}{F_z'}
    = \frac{-e^{-xy} y}{e^z - 2} \\
    \frac{\partial z}{\partial y} = -\frac{F_y'}{F_z'}
    = \frac{-e^{-xy} x}{e^z - 2} \\
    \end{gather}
    $$
    :::

- **例6**：设有三元方程$xy - z \ln y + e^{xz} = 1$，根据隐函数存在定理，存在点$(0, 1, 1)$的一个邻域，在此邻域内该方程可以确定几个具有连续偏导数的隐函数？

    ::: details Answer
    $$
    \begin{gather}
    F(x, y, z) = xy - z \ln y + e^{xz} - 1 = 0 \\
    F_x'(0, 1, 1) = \left. (y + z e^{xz}) \right|_{(x, y, z) = (0, 1, 1)} = 2 \neq 0 \\
    F_y'(0, 1, 1) = \left. (x - z/y) \right|_{(x, y, z) = (0, 1, 1)} = -1 \neq 0 \\
    F_z'(0, 1, 1) = \left. (-\ln y + x e^{xz}) \right|_{(x, y, z) = (0, 1, 1)} = 0 \\
    \end{gather}
    $$
    :::