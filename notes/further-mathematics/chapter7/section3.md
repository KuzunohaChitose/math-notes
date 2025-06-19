# 第三节 偏导数的求导法则

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
    u = 2x - y, v = x \sin y, w = e^y \ln x  \\
    z(x, y) = f\left[ u(x, y), v(x, y) \right] + x g\left[ w(x, y) \right] \\
    \\
    \frac{\partial z}{\partial y} = \frac{\partial}{\partial y} f(u, v) + \frac{\partial}{\partial y} \left[ x g(w) \right] \\
    = \frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial y} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial y} + x \cdot \frac{\mathrm{d} g}{\mathrm{d} w} \cdot \frac{\partial w}{\partial y} \\
    = -f_u'(u, v) + x \cos y f_v'(u, v) + x \ln x e^y g'(w) \\
    \\
    \frac{\partial^2 z}{\partial x \partial y} 
    = \frac{\partial}{\partial x} \left[ -f_u'(u, v) + x \cos y f_v'(u, v) + x \ln x e^y g'(w) \right] \\
    = -\frac{\partial}{\partial u} f_u'(u, v) \cdot \frac{\partial u}{\partial x} - \frac{\partial}{\partial v} f_u'(u, v) \cdot \frac{\partial v}{\partial x} + \cos y f_v'(u, v) +  x \cos y \cdot \frac{\partial}{\partial u} f_v'(u, v) \cdot \frac{\partial u}{\partial x} \\
    + x \cos y \cdot \frac{\partial}{\partial v} f_v'(u, v) \cdot \frac{\partial v}{\partial x} + e^y g'(w) \cdot \frac{\mathrm{d}}{\mathrm{d}x} (x \ln x) + e^y x \ln x \cdot \frac{\mathrm{d}}{\mathrm{d}w} g'(w) \cdot \frac{\partial w}{\partial x} \\
    = -2 f_{uu}''(u, v) - \sin y f_{uv}''(u, v) + \cos y f_v'(u, v) + 2x \cos y f_{vu}''(u, v) \\
    + x \sin y \cos y f_{vv}''(u, v) + e^y g'(w) (\ln x + 1) + e^{2y} \ln x g''(w) \\
    $$
    :::

## II. 全微分形式不变性

## III. 隐函数的求导公式