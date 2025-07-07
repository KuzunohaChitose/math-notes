# 第一节 函数

::: details Table of Contents

[[toc]]

:::

## I. 函数的概念

### 1.1 函数的定义

设$x$和$y$是两个变量，$D$是一个给定的数集，如果对于给定的$x \in D$，变量$y$按照法则$f$总有唯一确定的值与之对应，则称$y$是$x$的函数，记作$y = f(x)$，数集$D$叫做这个函数的定义域，$x$叫做自变量，$y$叫做因变量，$R_f = \{ y | y = f(x), x \in D \}$叫做函数的值域

::: tip Tip

函数的两要素：**定义域**、**对应法则**

:::
- **例1**：已知$f(e^x) = xe^{-x}$，则$f(x)$等于\_\_\_\_\_.

    ::: details Answer
    
    设 $u = e^x$，则有：
    $$
    x = \ln u \text{ 且 } e^{-x} = \frac{1}{u}
    $$
    所以：
    $$
    xe^{-x} = \frac{\ln x}{u}
    $$
    将$u$用$x$表示可得：
    $$
    f(x) = \frac{\ln x}{x}
    $$
    
    :::
    
- **例2**：设$f(x^2 - 1) = \ln \dfrac{x^2}{x^2 - 2}$，且$f[\varphi(x)] = \ln x$，求$\varphi(x)$.

    ::: details Answer

    设 $u  = x^2 - 1$，则有：
    $$
    x^2 = u + 1 \text{ 且 } x^2 - 2 = u - 1
    $$
    所以：
    $$
    f(x) = \ln \frac{x + 1}{x - 1}
    $$
    又因为$f[\varphi(x)] = \ln x$，则：
    $$
    \ln \frac{\varphi(x) + 1}{\varphi(x) - 1} = \ln x
    $$
    解得：
    $$
    \varphi(x) = \frac{x + 1}{x - 1}
    $$
    :::
    
- **例3**：设函数$f(x)$的定义域为$(0, +\infty)$，且满足$2f(x) + x^2f(\frac{1}{x}) = \dfrac{x^2 + 2x}{\sqrt{1 + x^2}}$，求$f(x)$.

    ::: details Answer

    设$u = \frac{1}{x}$，则原方程变为：
    $$
    2f(\frac{1}{u}) + \frac{f(u)}{u^2} = \frac{\frac{1}{u^2} + \frac{2}{u}}{\sqrt{1 + \frac{1}{u^2}}}
    $$
    整理可得：
    $$
    4u^2f(\frac{1}{u}) + 2f(u) = \frac{2u (1 + 2u)}{\sqrt{u^2 + 1}}
    $$
    将$u$用$x$表示后，得到式一：
    $$
    4x^2f(\frac{1}{x}) + 2f(x) = \frac{2x (1 + 2x)}{\sqrt{x^2 + 1}}
    $$
    式二：
    $$
    2f(x) + x^2f(\frac{1}{x}) = \frac{x^2 + 2x}{\sqrt{1 + x^2}}
    $$
    将式一减式二可得：
    $$
    4x^2f(\frac{1}{x}) + 2f(x) - 2f(x) - x^2f(\frac{1}{x}) = \frac{2x (1 + 2x)}{\sqrt{x^2 + 1}} - \frac{x^2 + 2x}{\sqrt{1 + x^2}}
    $$
    整理可得：
    $$
    f(\frac{1}{x}) = \frac{1}{\sqrt{x^2 + 1}}
    $$
    最终可解得$f(x)$为：
    $$
    f(x) = \frac{x}{\sqrt{1 + x^2}}
    $$
    :::

### 1.2 反函数的定义

设$y = f(x)$的定义域为$D_f$，值域为$V_f$，对于$\forall y \in v_f$，在$D_f$上可以确定一个$x$，满足$y = f(x)$，如果把$y$看作自变量、$x$看作因变量，可得新的函数：$x = f^{-1}(y)$，则称$x = f^{-1}(y)$为$y = f(x)$的反函数，把函数$y = f(x)$成为直接函数

::: tip Tip

1. 只有一一对应的函数才有反函数，所以单调函数一定存在反函数
2. 直接函数与反函数的图像关于$y = x$直线对称
3. 一个函数与其反函数组合成的复合函数，等同于$f(x) = x$，即$f \circ f^{-1} (x) = f^{-1} \circ f (x) = x$

:::

- **例4**：已知$y = \sin x$，则其反函数为\_\_\_\_\_.

    ::: details Answer

    $y = \sin x$的反函数为：
    $$
    y = \arcsin x
    $$
    其定义域为：
    $$
    x \in [-\frac{\pi}{2}, \frac{\pi}{2}]
    $$
    :::

## II. 函数的基本特性

### 2.1 有界性

上界：$\exists k_1$ 使 $\forall x \in D$ 有 $f(x) \leq k_1$

下界：$\exists k_2$ 使 $\forall x \in D$ 有 $f(x) \geq k_1$

有界：$\exists M \gt 0$ 使 $\forall x \in D$ 有 $|f(x)| \leq M$

无界：$\forall M \gt 0$ 使 $\exists x_0 \in D$ 有 $|f(x_0)| \lt M$

::: tip Tip

$f(x)$在$D$上有界 $\Leftrightarrow$ $f(x)$在$D$上既有上界、又有下界，否则称$f(x)$在$D$上无界

:::

### 2.2 单调性

对于区间$I \subset D$内任意两点$x_1 \lt x_2$，始终存在$f(x_1) \lt f(x_2)$，则称函数$f(x)$在区间$I$上是单调递增的，反之则称$f(x)$在区间$I$上是单调递减的

::: tip Tip

设函数$f(x)$、$g(x)$，则：

$$
\begin{cases}
f \uparrow (\downarrow), g \uparrow (\downarrow), f \gt 0 (f \lt 0), g \gt 0 (g \lt 0) \Rightarrow f \cdot g \uparrow \\
f \uparrow (\downarrow), g \uparrow (\downarrow), f \lt 0 (f \gt 0), g \lt 0 (g \gt 0) \Rightarrow f \cdot g \downarrow \\
f \uparrow (\downarrow), g \uparrow (\downarrow) \Rightarrow f \circ g \uparrow \\
f \uparrow (\downarrow), g \downarrow (\uparrow) \Rightarrow f \circ g \downarrow
\end{cases}
$$

:::

### 2.3 奇偶性

若函数$f(x)$在关于原点对称的区间$I$上满足$f(-x) = f(x)$（或$f(-x) = -f(x)$），则称之为偶函数（或奇函数）

::: tip Tip

1. 偶函数的图像关于$y$轴对称；奇函数的图像关于原点对称，且此函数若在$x = 0$有定义则其函数值必为$0$
2. 奇函数 $\pm$ 奇函数 = 奇函数；偶函数 $\pm$ 偶函数 = 偶函数
3. 奇函数 $\times (\div)$ 奇函数 = 偶函数；偶函数 $\times (\div)$ 偶函数 = 偶函数；奇函数 $\times (\div)$ 偶函数 = 奇函数

:::

- **例5**：判定函数$f(x) = \ln (x + \sqrt{x^2 +1})$的奇偶性，并求其反函数。

    ::: details Answer

    计算$f(-x) + f(x)$：
    $$
    \ln (-x + \sqrt{x^2 + 1}) + \ln (x + \sqrt{x^2 + 1})
    $$

    $$
    = \ln \left[ (\sqrt{x^2 + 1} + x) \cdot (\sqrt{x^2 + 1} - x) \right]
    $$

    $$
    = \ln (x^2 + 1 - x^2) = \ln 1 = 0
    $$

    由此可证$f(-x) = -f(x)$，所以函数$f(x)$为奇函数

    <br>

    设$y = f(x)$，则求$x = f^{-1}(y)$：
    $$
    e^y = x + \sqrt{x^2 + 1}
    $$

    $$
    e^{2y} + x^2 - 2xe^y = x^2 + 1
    $$

    $$
    2xe^y = 1 - e^{2y}
    $$

    $$
    x = \frac{1 - e^{2y}}{2e^y} = \frac{1}{2} (e^x - e^{-x})
    $$

    故函数$f(x)$的反函数为$y = \frac{1}{2} (e^x - e^{-x})$

    :::

- **例6**：判定函数$f(x) = \dfrac{1 - e^{-x}}{1 + e^{-x}}$的奇偶性。

    ::: details Answer

    计算$f(-x) + f(x)$：
    $$
    \frac{1 - e^x}{1 + e^x} + \frac{1 - e^{-x}}{1 + e^{-x}}
    $$

    $$
    = \frac{1 - e^x}{1 + e^x} + \frac{1 - \frac{1}{e^x}}{1 + \frac{1}{e^x}}
    $$

    $$
    = \frac{1 - e^x}{1 + e^x} + \frac{e^x - 1}{e^x} \cdot \frac{e^x}{e^x + 1}
    $$

    $$
    = \frac{1 - e^x + e^x - 1}{e^x + 1} = 0
    $$

    由此可证$f(-x) = -f(x)$，所以函数$f(x)$为奇函数

    :::

### 2.4 周期性

对于函数$y = f(x)$，如果存在一个非零常数$T$，使得对于定义域内的任意$x$均有$f(x + T) = f(x)$，则称函数$f(x)$为周期函数

::: tip Tip

1. 若$f(x + T) = f(x)$，则$f(ax + b)$以$\dfrac{T}{|a|}$为周期
2. 若$f(x)$以$T_1$为周期、$g(x)$以$T_2$为周期，则$f(x) \pm g(x)$、$f(x) \cdot g(x)$以$T_1$、$T_2$的最小公倍数为周期

:::

- **例7**：判断函数$f(x) = |x \sin x| e^{\cos x} (-\infty \lt x \lt \infty)$是\_\_\_\_\_.

    （A）有界函数
    
    （B）单调函数
    
    （C）周期函数
    
    （D）偶函数
    
    ::: details Answer
    
    - （A）
    
        $\forall M \in \mathbb{N}^+$，$\exists x' = 2M\pi + \frac{\pi}{2}$，则有：
        $$
        f(x') = |(2M\pi + \frac{\pi}{2}) \sin (2M\pi + \frac{\pi}{2})| \cdot e^{\cos (2M\pi + \frac{\pi}{2})} = 2M\pi + \frac{\pi}{2} \gt M
        $$
        由此可证函数$f(x)$无界
    
    - （B）
    
        计算$x \in \{ 0, \frac{\pi}{2}, \pi \}$的函数值：
        $$
        (x_1 = 0) \lt (x_2 = \frac{\pi}{2}) \lt (x_3 = \pi) \Rightarrow (f(0) = 0) \lt (f(\frac{\pi}{2}) = \frac{\pi}{2}) \gt (f(\pi) = 0)
        $$
        由此可证函数$f(x)$随着$x$的变化有增有减，并非单调函数
    
    - （C）
    
        因为$x$不具有周期性，则函数$f(x)$也不具有周期性
    
    - （D）
    
        已知$|x| = |-x|$、$|\sin x| = |\sin (-x)|$、$\cos x = \cos (-x)$，所以：
        $$
        |-x \sin (-x)| e^{\cos (-x)} - |x \sin x| e^{\cos x} = 0
        $$
        所以$f(-x) = f(x)$，由此可证函数$f(x)$为偶函数
    
    :::

## III. 基本初等函数

### 3.1 幂函数

一般形式：$f(x) = x^a$

### 3.2 指数函数

一般形式：$f(x) = a^x$

### 3.3 对数函数

一般形式：$f(x) = \log_{a} x \, (a \gt 0, a \neq 1)$

### 3.4 三角函数

|            |                           $\sin x$                           |                  $\cos x$                   |                        $\tan x$                         |            $\cot x$             |                    $\sec x$                    |             $\csc x$              |
| :--------: | :----------------------------------------------------------: | :-----------------------------------------: | :-----------------------------------------------------: | :-----------------------------: | :--------------------------------------------: | :-------------------------------: |
| **定义域** |                     $(-\infty, \infty)$                      |             $(-\infty, \infty)$             |     $x \neq k\pi + \frac{\pi}{2},k \in \mathbb{Z}$      | $x \neq k\pi,k \in \mathbb{Z}$  | $x \neq k\pi + \frac{\pi}{2},k \in \mathbb{Z}$ |  $x \neq k\pi,k \in \mathbb{Z}$   |
|  **值域**  |                          $[-1, 1]$                           |                  $[-1, 1]$                  |                   $(-\infty, \infty)$                   |       $(-\infty, \infty)$       |       $(-\infty, -1] \cup [1, +\infty)$        | $(-\infty, -1] \cup [1, +\infty)$ |
| **单调性** | $[-\frac{\pi}{2}, \frac{\pi}{2}] \uparrow, [\frac{\pi}{2}, \frac{3\pi}{2}] \downarrow$ | $[0, \pi] \downarrow, [\pi, 2\pi] \uparrow$ | $(k\pi - \frac{\pi}{2}, k\pi + \frac{\pi}{2}) \uparrow$ | $(k\pi, k\pi + \pi) \downarrow$ | $(k\pi - \frac{\pi}{2}, k\pi + \frac{\pi}{2}) \uparrow$ | $(k\pi, k\pi + \pi) \downarrow$ |
| **奇偶性** |                            奇函数                            |                   偶函数                    |                         奇函数                          |             奇函数              |                     偶函数                     |              奇函数               |
| **周期性** |                          $T = 2\pi$                          |                 $T = 2\pi$                  |                        $T = \pi$                        |            $T = \pi$            |                   $T = 2\pi$                   |               $T = 2\pi$          |

#### 3.4.1 常见公式

| $\sin^2 x + \cos^2 x = 1$ | $\tan x = \sin x / \cos x$ | $\cot x = \cos x / \sin x$ |
| :-----------------------: | :------------------------: | :------------------------: |
| $\sec^2 x = 1 + \tan^2 x$ |  $\csc^2 = 1 + \cot^2 x$   |                            |

#### 3.4.2 角度的和差公式
$$
\sin (\alpha \pm \beta) = \sin \alpha \cos \beta \pm \cos \alpha \sin \beta
$$

$$
\cos (\alpha \pm \beta) = \cos \alpha \cos \beta \mp \sin \alpha \sin \beta
$$

#### 3.4.3 积化和差公式
$$
\sin \alpha \cos \beta = \frac{1}{2} [\sin (\alpha + \beta) + \sin (\alpha - \beta)]
$$

$$
\cos \alpha \sin \beta = \frac{1}{2} [\sin (\alpha + \beta) - \sin (\alpha - \beta)]
$$

$$
\cos \alpha \cos \beta = \frac{1}{2} [\cos (\alpha + \beta) + \cos (\alpha - \beta)]
$$

$$
\sin \alpha \sin \beta = -\frac{1}{2} [\cos (\alpha + \beta) - \cos (\alpha - \beta)]
$$

#### 3.4.4 和差化积公式

> 设：$x = \alpha + \beta$、$y = \alpha - \beta$，则：$\alpha = \frac{x + y}{2}$、$\beta = \frac{x - y}{2}$

$$
\sin x + \sin y 
= \sin (\alpha + \beta) + \sin (\alpha - \beta) 
= 2 \sin \alpha \cos \beta
= 2 \sin \frac{x + y}{2} \cos \frac{x - y}{2}
$$

$$
\sin x - \sin y 
= \sin (\alpha + \beta) - \sin (\alpha - \beta) 
= 2 \cos \alpha \sin \beta
= 2 \cos \frac{x + y}{2} \sin \frac{x - y}{2}
$$

$$
\cos x + \cos y
= \cos (\alpha + \beta) + \cos (\alpha - \beta)
= 2 \cos \alpha \cos \beta
= 2 \cos \frac{x + y}{2} \cos \frac{x - y}{2}
$$

$$
\cos x - \cos y
= \cos (\alpha + \beta) - \cos (\alpha - \beta)
= -2 \sin \alpha \sin \beta
= -2 \sin \frac{x + y}{2} \sin \frac{x - y}{2}
$$

#### 3.4.5 万能公式及归一化公式
$$
\sin x = \sin (\frac{x}{2} + \frac{x}{2}) 
= 2 \sin \frac{x}{2} \cos \frac{\pi}{2}
= 2 \frac{\sin \frac{x}{2}}{\cos \frac{x}{2}} \cdot \cos^2 \frac{x}{2}
= 2 \tan \frac{x}{2} \cdot \frac{1}{\sec^2 \frac{x}{2}}
= \frac{2 \tan \frac{x}{2}}{1 + \tan^2 \frac{x}{2}}
$$

$$
\begin{aligned}
\cos x = \cos (\frac{x}{2} + \frac{x}{2}) 
= \cos^2 \frac{x}{2} - \sin^2 \frac{x}{2}
= \cos^2 \frac{x}{2} (1 - \tan^2 \frac{x}{2}) \\ \\
= (1 - \tan^2 \frac{x}{2}) / (1 + \tan^2 \frac{x}{2})
= 2 \cos^2 \frac{x}{2} - 1
= 1 - 2 \sin^2 \frac{x}{2}
\end{aligned}
$$

$$
1 + \cos x = 2 \cos^2 \frac{x}{2}, 1 - \cos x = 2 \sin^2 \frac{x}{2}
$$

$$
1 \pm \sin x = 1 \pm 2 \sin \frac{x}{2} \cos \frac{x}{2} 
= \sin^2 \frac{x}{2} + \cos^2 \frac{x}{2}
= \pm 2 \sin \frac{x}{2} \cos \frac{x}{2} 
= (\sin \frac{x}{2} \pm \cos \frac{x}{2})^2
$$

### 3.5 反三角函数

|            |            $\arcsin x$            |     $\arccos x$      |            $\arctan x$            |       $\text{arccot } x$        |
| :--------: | :-------------------------------: | :------------------: | :-------------------------------: | :-----------------------------: |
| **定义域** |             $[-1, 1]$             |      $[-1, 1]$       |       $(-\infty, +\infty)$        |      $(-\infty, +\infty)$       |
|  **值域**  | $[-\frac{\pi}{2}, \frac{\pi}{2}]$ |      $[0, \pi]$      | $(-\frac{\pi}{2}, \frac{\pi}{2})$ |           $(0, \pi)$            |
| **单调性** |        $[-1, 1] \uparrow$         | $[-1, 1] \downarrow$ |   $(-\infty, +\infty) \uparrow$   | $(-\infty, +\infty) \downarrow$ |
| **奇偶性** |              奇函数               |                      |              奇函数               |                                 |
| **周期性** |                                   |                      |                                   |                                 |

## IV. 其他函数类型

### 4.1 复合函数

若$y = f(u)$、$u = \varphi(x)$，当$\varphi(x)$的值域落在$f(u)$的定义域内时，称$y = f[\varphi(x)]$是由中间变量$u$复合成的复合函数

::: tip Example

编程语言中的函数组合：

```haskell
compose :: (a -> b) -> (t -> a) -> t -> b
compose = (.)

f :: (Fractional a) => a -> a
f x = x * 2

g :: (Fractional a) => a -> a
g x = x / 2

h :: (Fractional a) => a -> a
h = f `compose` g
```

由$f$与$g$组合得到的函数$h(x) = x$

:::

### 4.2 分段函数

如下所示，在不同情况下应用不同的法则的函数：
$$
y = f(x) =
\begin{cases}
f_1(x), & x \in I_1 \\
f_2(x), & x \in I_2 \\
\vdots & \vdots \\
f_n(x), & x \in I_n
\end{cases}
$$

::: tip Tip

1. 绝对值函数：
    $$
    f(x) = |x| =
    \begin{cases}
    x, & x \geq 0 \\
    -x, & x \lt 0
    \end{cases}
    $$

2. 符号函数：
    $$
    f(x) = \text{sgn } x =
    \begin{cases}
    1, & x \gt 0 \\
    0, & x = 0 \\
    -1, & x \lt 0
    \end{cases}
    $$

3. 取整函数：
    $$
    f(x) = [x]
    $$

4. 最值函数：
    $$
    \varphi_1(x) = \max \{ f(x), g(x) \}
    $$

    $$
    \varphi_2(x) = \min \{ f(x), g(x) \}
    $$

    

:::

- **例8**：设：
    $$
    g(x) =
    \begin{cases}
    2 - x, & x \leq 0 \\
    x + 2, & x \gt 0
    \end{cases}
    $$

    $$
    f(x) =
    \begin{cases}
    x^2, & x \lt 0 \\
    -x, & x \geq 0
    \end{cases}
    $$

    求复合函数$g \circ f$、$f \circ g$

    ::: details Answer
    $$
    g \circ f =
    \begin{cases}
    x^2 + 2, & x \lt 0 \\
    x + 2, & x \geq 0 
    \end{cases}
    $$

    $$
    f \circ g =
    \begin{cases}
    x - 2, & x \leq 0 \\
    -x - 2, & x \gt 0
    \end{cases}
    $$

    :::

### 4.3 由参数方程确立的函数

一般形式：
$$
\begin{cases}
x = f(t) \\
y = g(t)
\end{cases}
$$

### 4.4 隐函数

一般形式：
$$
F(x, y) = 0
% $$

## V. 练习题

1. 已知$f(x) = \sin x$，$f[\varphi(x)] = 1 - x^2$，则$\varphi(x) =$\_\_\_\_\_；其定义域为\_\_\_\_\_.

    ::: details Answer

    由题可得：
    $$
    \sin \varphi(x) = 1 - x^2
    $$
    则：
    $$
    \varphi(x) = \arcsin (1 - x^2)
    $$
    其定义域为：
    $$
    -\sqrt{2} \leq x \leq \sqrt{2}
    $$
    ::: 

2. 函数$f(x + \frac{1}{x}) = \dfrac{x + x^3}{1 + x^4}$，求$f(x)$.

    ::: details Answer
    $$
    f(x) = \frac{x}{x^2 - 2}
    $$
    :::

3. 判断函数$f(x) = \ln (\dfrac{1 - x}{1 + x})$的奇偶性。

    ::: details Answer

    计算$f(-x) + f(x)$：
    $$
    \ln \frac{1 + x}{1 - x} + \ln \frac{1 - x}{1 + x} 
    = \ln \frac{(1 + x)(1 - x)}{(1 - x)(1 + x)} 
    = \ln 1 = 0
    $$
    由此可证函数$f(x)$为奇函数

    :::

4. 判断函数$f(x) = \frac{1}{2} (a^x + a^{-x})$的奇偶性。

    ::: details Answer

    计算$f(-x) - f(x)$：
    $$
    \frac{a^{-x} + a^x}{2} - \frac{a^x + a^{-x}}{2} = 0
    $$
    由此可证函数$f(x)$为偶函数

    :::

5. 判断函数$f(x) = x (\dfrac{1}{2^x - 1} + \dfrac{1}{2})$的奇偶性。

    ::: details Answer

    计算$f(-x)$可得：
    $$
    f(-x) = -x (-\frac{2^x}{2^x - 1} + \frac{1}{2})
    = -x (-\frac{1}{2^x - 1} - \frac{1}{2}) 
    = x (\frac{1}{2^x - 1} + \frac{1}{2})
    $$

    可见$f(-x) = f(x)$，则此函数为偶函数

    :::

6. 设$f(x)$的定义域为$R$，存在常数$c \neq 0$，使$f(x + c) = -f(x)$，试证明$f(x)$为周期函数。

    ::: details Answer
    $$
    f(x + c) = -f(x)
    $$

    $$
    f(x + 2c) = -f(x + c) = f(x)
    $$

    $$
    f(x + 3c) = -f(x + 2c) = f(x + c) = -f(x)
    $$

    $$
    f(x + 4c) = -f(x + 3c) = f(x + 2c) = -f(x + c) = f(x)
    $$

    显然可见，$f(x)$的周期$T = 2c$，
    
    $f(x + 2kc) = f(x), k \in \mathbb{Z}$，

    $f(x + (2k - 1)c) = -f(x), k \in \mathbb{Z}$

    :::

7. 函数$y = \ln (x + \sqrt{x^2 - 1}), (x \geq 1)$的反函数是\_\_\_\_\_.

    ::: details Answer

    将此函数转换成用$x = f(y)$的形式：
    $$
    e^y = x + \sqrt{x^2 - 1}
    $$

    $$
    e^y - x = \sqrt{x^2 - 1}
    $$

    $$
    e^{2y} + x^2 - 2e^yx = x^2 - 1
    $$

    $$
    e^{2y} - 2e^yx = -1
    $$

    $$
    x = \frac{e^{2y} + 1}{2e^y}
    $$

    :::

