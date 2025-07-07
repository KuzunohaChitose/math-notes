# 第四节 多元函数的极值及其求法

::: details Tables of Content

[[toc]]

:::

## I. 多元函数的极值

### 1.1 极值的概念

设函数$z = f(x, y)$在$U(x_0, y_0)$上有定义，若：
$$
\forall (x, y) \in \mathring{U}(x_0, y_0), f(x, y) \lt f(x_0, y_0)
$$
则称$f(x_0, y_0)$为极大值；若：
$$
\forall (x, y) \in \mathring{U}(x_0, y_0), f(x, y) \gt f(x_0, y_0)
$$
则称$f(x_0, y_0)$为极小值

- **例1**：设$f(x, y)$在点$(0, 0)$的邻域内连续，若：
    $$
    \lim_{(x, y) \to (0, 0)} \frac{f(x, y)}{\cos (x^2 + y^2) - 1} = 1
    $$
    则\_\_\_\_\_.

    - A：点$(0, 0)$不是$f(x, y)$的极值点
    - B：点$(0, 0)$是$f(x, y)$的极大值点
    - C：点$(0, 0)$是$f(x, y)$的极小值点
    - D：无法判断点$(0, 0)$是否为$f(x, y)$的极值点

    ::: details Answer

    因为$f(x, y)$在$U(0, 0)$上连续，所以：
    $$
    f(0, 0) = \lim_{(x, y) \to (0, 0)} f(x, y) = \lim_{(x, y) \to (0, 0)} \frac{f(x, y)}{\cos (x^2 + y^2) - 1} \left[ \cos (x^2 + y^2) - 1 \right] = 1 \cdot 0 = 0
    $$
    又根据极限的保号性可知：
    $$
    \exists \delta \gt 0, \text{使得} \forall (x, y) \in \{ (x, y) | 0 \lt \sqrt{(x - x_0)^2 + (y - y_0)^2} \lt \delta \}, \text{有} \frac{f(x, y)}{\cos (x^2 + y^2) - 1} \gt 0
    $$
    且此时：
    $$
    \cos (x^2 + y^2) - 1 \lt 0
    \Rightarrow f(x, y) \lt 0 = f(0, 0)
    $$
    所以$f(0, 0)$为极大值，故选B
    
    :::

### 1.2 极值的必要条件

设函数$z = f(x, y)$在点$(x_0, y_0)$处具有偏导数，且在点$(x_0, y_0)$处有极值，则有：
$$
f_x'(x_0, y_0) = 0, f_y'(x_0, y_0) = 0
$$
即：可偏导函数在极值点处的偏导数必为零

::: tip Tip

所有可能的极值点：驻点[^1]、偏导数不存在的点，对于偏导数不存在的点只能通过定义来判断是否为极值点

:::

### 1.3 极值的充分条件

设函数$z = f(x, y)$在点$(x_0, y_0)$的某邻域内具有二阶连续偏导数，且：
$$
\begin{cases}
f_x'(x_0, y_0) = 0 \\ 
f_y'(x_0, y_0) = 0 \\
\end{cases}
$$
令：
$$
\begin{cases}
A = f_{xx}''(x_0, y_0) \\
B = f_{xy}''(x_0, y_0) \\
C = f_{yy}''(x_0, y_0) \\
\end{cases}
$$
则有：
$$
\begin{cases}
AC - B^2 \gt 0 \Rightarrow \begin{cases}
A \lt 0 \Rightarrow \text{极大值} \\
A \gt 0 \Rightarrow \text{极小值} \\
\end{cases} \\
AC - B^2 \lt 0 \Rightarrow 无极值 \\
AC - B^2 = 0 \Rightarrow 无法确定 \\
\end{cases}
$$

- **例2**：设函数$f(x)$、$g(x)$均有二阶连续导数，且：
    $$
    f(0) \gt 0, g(0) \lt 0, f'(0) = g'(0) = 0
    $$
    则函数$z = f(x) \cdot g(y)$在点$(0, 0)$处取得极小值的一个充分条件是\_\_\_\_\_.

    - A：$f''(0) \lt 0, g''(0) \gt 0$
    - B：$f''(0) \lt 0, g''(0) \lt 0$
    - C：$f''(0) \gt 0, g''(0) \gt 0$
    - D：$f''(0) \gt 0, g''(0) \lt 0$

    ::: details Answer
    
    已知：
    $$
    z = f(x) \cdot g(y)
    $$
    则它的一阶偏导数为：
    $$
    \begin{cases}
    z_x' = g(y) \cdot f'(x) \\
    z_y' = f(x) \cdot g'(y) \\
    \end{cases}
    $$
    它的二阶偏导数为：
    $$
    \begin{cases}
    z_{xx}'' = g(y) \cdot f''(x) \\
    z_{xy}'' = f'(x) \cdot g'(y) \\
    z_{yy}'' = f(x) \cdot g''(y) \\
    \end{cases}
    $$
    根据极值的充分条件，需要满足：
    $$
    \begin{cases}
    z_{xx}''(0, 0) \cdot z_{yy}''(0, 0) \gt \left[ z_{xy}''(0, 0) \right]^2 \\
    z_{xx}''(0, 0) \gt 0 \\
    \end{cases}
    $$
    即：
    $$
    \begin{cases}
    g(0) \cdot f''(0) \cdot f(0) \cdot g''(0) \gt \left[ f'(0) \cdot g'(0) \right]^2 = 0 \\
    g(0) \cdot f''(0) \gt 0 \\
    \end{cases}
    $$
    可推得：
    $$
    \begin{cases}
    f''(0) \lt 0 \\
    g''(0) \gt 0 \\
    \end{cases}
    $$
    故选A
    
    :::
    
- **例3**：求函数$f(x, y) = xe^{-\frac{x^2 + y^2}{2}}$的极值

    ::: details Answer

    首先计算出一阶偏导数：
    $$
    \begin{cases}
    f_x'(x, y) = (1 - x^2) e^{-\frac{x^2 + y^2}{2}} \\
    f_y'(x, y) = -xy e^{-\frac{x^2 + y^2}{2}} \\
    \end{cases}
    $$
    然后找出$f(x, y)$的驻点：
    $$
    f_x'(x, y) = f_y'(x, y) = 0
    \Rightarrow \{ (x, y) \in \mathbb{R}^2 | x = \pm 1, y = 0 \} \\
    $$
    然后计算出二阶偏导数：
    $$
    \begin{cases}
    f_{xx}''(x, y) = (x^3 - 3x) e^{-\frac{x^2 + y^2}{2}} \\
    f_{xy}''(x, y) = (x^2y - y) e^{-\frac{x^2 + y^2}{2}} \\
    f_{yy}''(x, y) = (xy^2 - x) e^{-\frac{x^2 + y^2}{2}} \\
    \end{cases}
    $$
    根据极值的充分条件对$(1, 0)$和$(-1, 0)$两个点进行校验：
    $$
    \begin{cases}
    \displaystyle f_{xx}''(1, 0) \cdot f_{yy}''(1, 0) - \left[ f_{xy}''(1, 0) \right]^2
    = (1 - 3) e^{-\frac{1}{2}} \cdot (-1) e^{-\frac{1}{2}} = \frac{2}{e} \gt 0 \\
    \displaystyle f_{xx}''(-1, 0) \cdot f_{yy}''(-1, 0) - \left[ f_{xy}''(-1, 0) \right]^2
    = (-1 + 3) e^{-\frac{1}{2}} \cdot e^{-\frac{1}{2}} =  \frac{2}{e} \gt 0 \\
    \end{cases}
    $$
    故$(1, 0)$和$(-1, 0)$均为极值点，且：
    $$
    f(1, 0) = e^{-\frac{1}{2}},
    f(-1, 0) = -e^{-\frac{1}{2}}
    $$
    :::

## II. 条件极值与拉格朗日乘数法

条件极值，即目标函数$z = f(x, y)$在条件$\varphi(x, y) = 0$下的极值；其求法为，设函数：
$$
F(x, y, \lambda) = f(x, y) + \lambda \varphi(x, y)
$$
然后求解方程组：
$$
\begin{cases}
F_x'(x, y, \lambda) = f_x'(x, y) + \lambda \varphi_x'(x, y) = 0, \\
F_y'(x, y, \lambda) = f_y'(x, y) + \lambda \varphi_y'(x, y) = 0, \\
F_{\lambda}'(x, y, \lambda) = \varphi(x, y) = 0,
\end{cases}
$$
所得到的点$(x, y, z)$就是可能的极值点

::: tip Tip

对于实际问题，若驻点唯一，且由实际意义可知存在最大值或最小值，则该驻点即为最大值或最小值点；若存在多个驻点，且由实际意义可知既存在最大值又存在最小值，则只需比较各驻点处的函数值，最大的即为最大值，最小的即为最小值

:::

## III. 连续函数在有界闭区域上的最值问题

设函数$f(x, y)$在有界闭区域$D$上连续，则求$f(x, y)$在$D$上最值的步骤为：

1. 求出$f(x, y)$在$D$上可能的极值点（即驻点和偏导数不存在的点）
2. 求出$f(x, y)$在$D$边界上的最大值与最小值（求法参考条件极值）
3. 比较前两步得出的各点处函数值

这样，最后比较出来的最小的函数值便是最小值，最大的函数值便是最大值

- **例4**：求函数$f(x, y, z) = xyz$在约束条件$x^{-1} + y^{-1} + z^{-1} = 1 \, (x \gt 0, y \gt 0, z \gt 0)$下的最小值

    ::: details Answer

    设函数：
    $$
    F(x, y, z, \lambda) = xyz + \lambda (x^{-1} + y^{-1} + z^{-1} - 1)
    $$
    然后求解方程组：
    $$
    \begin{cases}
    \dfrac{\partial F}{\partial x} = yz - \lambda x^{-2} = 0 \Rightarrow \lambda = x^2 yz \\
    \dfrac{\partial F}{\partial y} = xz - \lambda y^{-2} = 0 \Rightarrow \lambda = y^2 xz \\
    \dfrac{\partial F}{\partial z} = xy - \lambda z^{-2} = 0 \Rightarrow \lambda = z^2 xy \\
    \end{cases}
    $$
    于是可解得：
    $$
    \lambda = x^2yz = y^2xz = z^2xy \Rightarrow x = y = z
    $$
    代入约束式可得：
    $$
    \begin{gather}
    x^{-1} + y^{-1} + z^{-1} = 3x^{-1} = 3y^{-1} = 3z^{-1} = 1 \\
    \Rightarrow x^{-1} = y^{-1} = z^{-1} = \frac{1}{3} \\
    \Rightarrow x = y = z = 3 \\
    \end{gather}
    $$

    于是这个最小值为：
    $$
    f(3, 3, 3) = 3 \cdot 3 \cdot 3 = 27
    $$
    :::

- **例5**：求函数$f(x, y) = x^2 + 2y^2 - x^2y^2$在区域$D = \{ (x, y) | x^2 + y^2 \leq 4, y \geq 0 \}$上的最大值和最小值

    ::: details Answer
    
    - 区域$D$边界处的最大值与最小值：
    
        区域$D$的边界由：
        $$
        y = \sqrt{4 - x^2}
        $$
        和：
        $$
        y = 0
        $$
        组成，首先设：
        $$
        g_1(x) = f(x, 0) = x^2, x \in \left[ -2, 2 \right]
        $$
        找出$g_1'(x) = 0$的点：
        $$
        g_1'(x) = 2x = 0 \Rightarrow x = 0 \\
        $$
        再分别计算每个可能的点对应的函数值：
        $$
        f(0, 0) = 0, f(\pm 2, 0) = 4
        $$
        其次设：
        $$
        g_2(x) = f(x, \sqrt{4 - x^2}) = x^4 - 5x^2 + 8
        $$
        找出$g_2'(x) = 0$的点：
        $$
        g_2'(x) = 4x^3 - 10x = 0 \Rightarrow x_1 = 0, x_{2, 3} = \pm \frac{\sqrt{10}}{2}
        $$
        再分别计算出每个可能的点对应的函数值：
        $$
        f(0, 2) = 8, f(\pm \frac{\sqrt{10}}{2}, \sqrt{4 - \frac{5}{2}}) = \frac{7}{4}
        $$
    
    - 区域$D$内的最大值与最小值：
    
        首先计算出驻点：
        $$
        \begin{cases}
        \dfrac{\partial f}{\partial x} = 2x - 2y^2x = 0 \\
        \dfrac{\partial f}{\partial x} = 4y - 2x^2y = 0 \\
        \end{cases}
        $$
        解得：
        $$
        (x, y) = (\pm \sqrt{2}, 1)
        $$
        再计算出所对应的$f(x, y)$的值：
        $$
        f(\pm \sqrt{2}, 1) = 2
        $$
    
    最后通过比较可得：最大值为$8$，最小值为$0$
    
    
    :::

[^1]:即偏导数均为零的点

