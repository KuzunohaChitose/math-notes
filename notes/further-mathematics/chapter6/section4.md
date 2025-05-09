# 第四节 高阶线性微分方程

::: details Tables of Content

[[toc]]

:::

## I. 线性微分方程解的性质和结构

### 1.1 解的性质与结构

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

### 1.2 解的叠加性原理

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

### 2.1 二阶常系数齐次线性微分方程

其形式为：
$$
y'' + p y' + q y = 0
$$
其通解的求法为：

1. 写出特征方程：$\lambda^2 + p \lambda + q = 0$

2. 求出特征方程的两个根$\lambda_1$和$\lambda_2$

3. 根据两个根的不同形式，依照下表得出通解：

    |                     根的形式                     |                           通解                           |
    | :----------------------------------------------: | :------------------------------------------------------: |
    |    两个不相等的实根$\lambda_1 \neq \lambda_2$    |     $y = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$      |
    |    两个相等的实根$\lambda_1 = \lambda_2 = r$     |                $y = (C_1 + C_2 x) e^{rx}$                |
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
    y_2'(x) = e^{r x} \left[ u'(x) + r u(x) \right]
    $$
    以及$y_2''(x)$：
    $$
    y_2''(x) = e^{r x} \left[ u''(x) + 2 r u'(x) + r^2 u(x) \right]
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

- **例2**：求解下列微分方程：

    1. $\displaystyle y'' - y' - 6y = 0$

        ::: details Answer
        $$
        \begin{gather}
        \lambda^2 - \lambda - 6 = 0 \\
        \Rightarrow \lambda_1 = 3, \lambda_2 = -2 \\
        \Rightarrow y(x) = C_1 e^{3x} + C_2 e^{-2x} \\
        \end{gather}
        $$
        :::

    2. $\displaystyle y'' - 2y' + y = 0$

        ::: details Answer
        $$
        \begin{gather}
        \lambda^2 - 2\lambda + 1 = 0 \\
        \Rightarrow \lambda_1 = \lambda_2 = 1 \\
        \Rightarrow y(x) = (C_1 + C_2 x) e^{x} \\
        \end{gather}
        $$
        :::

    3. $\displaystyle y'' - 4y' + 5y = 0$

        ::: details Answer
        $$
        \begin{gather}
        \lambda^2 - 4\lambda + 5 = 0 \\
        \Rightarrow \lambda_{1,2} = 2 \pm i \\
        \Rightarrow y(x) = e^{2x} (C_1 \cos x + C_2 \sin x) \\
        \end{gather}
        $$
        :::
    
    4. $\displaystyle y'' + 2y = 0$
    
        ::: details Answer
        $$
        \begin{gather}
        \lambda^2 + 2 = 0
        \Rightarrow \lambda_{1,2} = \pm \sqrt{2} i \\
        \Rightarrow y(x) = C_1 \sin \sqrt{2} x + C_2 \cos \sqrt{2} x \\
        \end{gather}
        $$
        :::

### 2.2 $n$阶常系数齐次线性微分方程

其形式为：
$$
y^{(n)} + p_1 y^{(n - 1)} + p_2 y^{(n - 2)} + \dots + p_{n - 1} y' + p_n y = 0
$$
其特征方程为：
$$
\lambda^n + p_1 \lambda^{n - 1} + p_2 \lambda^{n - 2} + \dots + p_{n - 1} \lambda + p_n = 0
$$
根据根的不同情况得到对应的通解：

1. 对于其中每一个不重复的实根$\lambda$，在通解中所对应的项为：
    $$
    y(x) = C_1 e^{\lambda x}
    $$

2. 对于其中每一组$k$个重复的实根$\lambda_1 = \lambda_2 = ... = \lambda_k = r$，在通解中所对应的项为：
    $$
    y(x) = \left[ C_1 + C_2 x + C_3 x^2 + \dots + C_k x^{k - 1} \right] e^{rx}
    $$

3. 对于其中每一对不重复的复根$\lambda_{1, 2} = \alpha \pm \beta i$，在通解中所对应的项为：
    $$
    y(x) = e^{\alpha x} (C_1 \cos \beta x + C_2 \sin \beta x)
    $$

4. 对于其中每一组$k$对重复的复根$\lambda_{1,2} = \lambda_{3,4} = ... = \lambda_{2k - 1, 2k} = \alpha \pm \beta i$，在通解中所对应的项为：
    $$
    y(x) = e^{\alpha x} \left[ (C_1 + C_2 x + \dots + C_k x^{k - 1}) \cos \beta x + (D_1 + D_2 x + \dots + D_k x^{k - 1}) \sin \beta x \right]
    $$

- **例3**：求解微分方程$\displaystyle y^{(4)} - 2y''' + 5y'' = 0$.

    ::: details Answer
    $$
    \begin{gather}
    \lambda^4 - 2 \lambda^3 + 5 \lambda^2
    = \lambda^2 (\lambda^2 - 2 \lambda + 5) = 0 \\
    \Rightarrow \lambda_{1} = \lambda_{2} = 0, \lambda_{3, 4} = 1 \pm 2 i \\
    \Rightarrow y(x) = C_1 + C_2 x + e^{x} (C_3 \cos 2x + C_4 \sin 2x) \\
    \end{gather}
    $$
    :::
    
- **例4**：在下列微分方程中，以$y = C_1 e^x + C_2 \cos 2x + C_3 \sin 2x$为通解的是：

  - A：$y''' + y'' - 4y' - 4y = 0$
  - B：$y''' + y'' + 4y' + 4y = 0$
  - C：$y''' - y'' - 4y' + 4y = 0$
  - D：$y''' - y'' + 4y' - 4y = 0$
  
  ::: details Answer
  $$
  \begin{gather}
  \lambda_1 = 1, \lambda_2 = 2i, \lambda_3 = -2i \\
  \Rightarrow (\lambda - 1) \left[ \lambda^2 - (\pm 2i)^2 \right] = 0 \\
  \Rightarrow (\lambda - 1)(\lambda^2 + 4) = 0 \\
  \Rightarrow \lambda^3 + 4\lambda - \lambda^2 - 4 = 0 \\
  \Rightarrow y''' - y'' + 4y' - 4y = 0 \\
  \end{gather}
  $$
  :::

## III. 二阶常系数非齐次线性微分方程

其形式为：
$$
y'' + py' + qy = f(x)
$$
写出它的特征方程：
$$
\lambda^2 + p\lambda + q = 0
$$
求出方程的两个根$\lambda_1, \lambda_2$，然后根据$f(x)$不同形式得到特解：

1. $\displaystyle f(x) = e^{\lambda x} P_n(x)$，$P_n(x)$为关于$x$的$n$次多项式

    对于特征方程$\lambda^2 + p\lambda + q = 0$

    - 若$\lambda$不是特征方程的根：
        $$
        y^*(x) = R_n(x) e^{\lambda x}
        $$

    - 若$\lambda$是特征方程的单根：
        $$
        y^*(x) = x R_n(x) e^{\lambda x}
        $$

    - 若$\lambda$是特征方程的二重根：
        $$
        y^*(x) = x^2 R_n(x) e^{\lambda x}
        $$

    ::: tip Tip

    其中$R_n(x)$是一个与$P_n(x)$同阶的待定系数多项式，设其为：
    $$
    P_n(x) = A_0 + A_1 x + A_2 x^2 + \dots + A_n x^n
    $$
    :::

2. $\displaystyle e^{\alpha x} \left[ P_l(x) \cos \beta x + Q_n(x) \sin \beta x \right]$

    - 若$\lambda_{1,2} = \alpha \pm \beta i$是特征方程的根：
        $$
        y^*(x) = e^{\alpha x} \left[ R_m^{(1)}(x) \cos \beta x + R_m^{(2)}(x) \sin \beta x \right]
        $$

    - 若$\lambda_{1,2} = \alpha \pm \beta i$不是特征方程的根：
        $$
        y^*(x) = x e^{\alpha x} \left[ R_m^{(1)}(x) \cos \beta x + R_m^{(2)}(x) \sin \beta x \right]
        $$

    ::: tip Tip

    其中$m = \max \{ l, n \}$，$R_m^{(1)}(x)$和$R_m^{(2)}(x)$是关于$x$的$m$次多项式，分别设其为：
    $$
    R_m^{(1)}(x) = A_0 + A_1 x + A_2 x^2 + \dots + A_m x^m
    $$
    以及：
    $$
    R_m^{(2)}(x) = B_0 + B_1 x + B_2 x^2 + \dots + B_m x^m
    $$
    :::

最后再将此特解与对应的齐次微分方程$y'' + py' + qy = 0$的通解相加即可得到通解

- **例5**：求下列微分方程的特解：

    1. $\displaystyle y'' - 2y' - 3y = 3x + 1$

        ::: details Answer

        首先根据$f(x)$的形式以及特征方程的根求出特解的形式：
        $$
        \begin{gather}
        \lambda^2 - 2\lambda - 3 = 0
        \Rightarrow \lambda_{1, 2} = -1, 3 \\
        \Rightarrow y^* = R_1(x) = A_0 + A_1 x \\
        \end{gather}
        $$
        然后将$y^* = A_0 + A_1 x$代入原微分方程：
        $$
        -2 A_1 - 3 A_0 - 3 A_1 x = 3x + 1
        $$
        可知：
        $$
        \begin{cases}
        -3 A_1 = 3 \\
        -2 A_1 - 3 A_0 = 1 \\
        \end{cases}
        $$
        于是：
        $$
        \begin{cases}
        A_0 = \dfrac{1}{3} \\
        A_1 = -1 \\
        \end{cases}
        $$
        所以最终可得特解为：
        $$
        y^* = -x + \frac{1}{3}
        $$
        :::
    
    2. $\displaystyle y'' - y' = 2e^x$
    
        ::: details Answer
    
        首先根据$f(x)$的形式以及特征方程的根求出特解的形式：
        $$
        \begin{gather}
        \lambda^2 - \lambda = 0 \Rightarrow \lambda_{1,2} = 0, 1 \\
        \Rightarrow y^* = x e^x R_0(x) = A_0 x e^x  \\
        \end{gather}
        $$
        然后将$y^* = A_0 x e^x$代入原微分方程以求得特解：
        $$
        \begin{gather}
        (y^*)' = A_0 e^x + A_0 x e^x,
        (y^*)'' = 2 A_0 e^x + A_0 x e^x \\
        2 A_0 e^x + A_0 x e^x - A_0 e^x - A_0 x e^x = 2e^x \\
        A_0 e^x = 2e^x \Rightarrow A_0 = 2
        \Rightarrow y^* = 2xe^x \\
        \end{gather}
        $$
        :::
    
    3. $\displaystyle y'' - 4y' + 3y = xe^x$
    
        ::: details Answer
    
        首先根据$f(x)$的形式以及特征方程的根求出特解的形式：
        $$
        \begin{gather}
        \lambda^2 - 4\lambda + 3 = 0
        \Rightarrow \lambda_{1,2} = 1, 3 \\
        \Rightarrow y^* = x R_1(x) e^x = x e^x (A_0 + A_1 x) \\
        \end{gather}
        $$
        然后将$y^* = A_0 x e^x + A_1 x^2 e^x$代入原微分方程：
        $$
        \begin{gather}
        (y^*)' = A_0 (e^x + xe^x) + A_1 (2xe^x + x^2e^x) \\
        (y^*)'' = A_0 (2e^x + xe^x) + A_1(2e^x + 4xe^x + x^2e^x) \\
        A_0 (2e^x + xe^x) + A_1(2e^x + 4xe^x + x^2e^x) - A_0 (4e^x + 4xe^x) - A_1 (8xe^x + 4x^2e^x) + 3A_0 xe^x + 3A_1 x^2 e^x = xe^x \\
        A_0 (2e^x + xe^x - 4e^x - 4xe^x + 3xe^x) + A_1 (2e^x + 4xe^x + x^2e^x - 8xe^x - 4x^2e^x + 3x^2e^x) = xe^x \\
        -2 A_0 + 2 A_1 - 4 A_1 x = x \\
        \end{gather}
        $$
        可知：
        $$
        \begin{cases}
        -4 A_1 = 1 \\
        2 A_1 - 2 A_0 = 0 \\
        \end{cases}
        $$
        于是：
        $$
        \begin{cases}
        A_0 = -\dfrac{1}{4} \\
        A_1 = -\dfrac{1}{4} \\
        \end{cases}
        $$
        所以最终可得特解为：
        $$
        y^* = -\frac{1}{4} xe^x (1 + x) \\
        $$
        :::
    
    4. $\displaystyle y'' - y = e^x \cos 2x$
    
        ::: details Answer
    
        首先根据$f(x)$的形式以及特征方程的根求出特解的形式：
        $$
        \begin{gather}
        \lambda^2 - 1 = 0 \Rightarrow \lambda_{1,2} = \pm 1 \\
        \Rightarrow y^* = e^x \left[ A \cos 2x + B \sin 2x \right] \\
        \end{gather}
        $$
        然后将$y^* = e^x \left[ A \cos 2x + B \sin 2x \right]$代入原微分方程：
        $$
        \begin{gather}
        y^* = A e^x \cos 2x + B e^x \sin 2x \\
        (y^*)' = e^x \left[ (A + 2B) \cos 2x + (B - 2A) \sin 2x \right] \\
        (y^*)'' = e^x \left[ (4B - 3A) \cos 2x - (4A + 3B) \sin 2x \right] \\
        e^x \left[ (4B - 3A) \cos 2x - (4A + 3B) \sin 2x \right] - A e^x \cos 2x - B e^x \sin 2x = e^x \cos 2x \\
        (4B - 3A) \cos 2x - (4A + 3B) \sin 2x - A \cos 2x - B \sin 2x = \cos 2x \\
        (4B - 4A) \cos 2x - (4A + 4B) \sin 2x = \cos 2x \\
        \end{gather}
        $$
        可知：
        $$
        \begin{cases}
        4B - 4A = 1 \\
        4A + 4B = 0 \\
        \end{cases}
        $$
        于是：
        $$
        \begin{cases}
        B = \dfrac{1}{8} \\
        A = -\dfrac{1}{8} \\
        \end{cases}
        $$
        所以最终可得特解为：
        $$
        y^* = \frac{1}{8} e^x (\sin 2x - \cos 2x) \\
        $$
        
        :::

---

[^1]:线性无关：$y_1(x)$​除以$y_2(x)$​并非恒等于一个常数$C$​
[^2]:欧拉公式：$e^{ix} = \cos x + i \sin x$
