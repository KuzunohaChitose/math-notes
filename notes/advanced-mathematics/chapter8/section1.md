# 第一节 二重积分的概念与性质

::: details Tables of Content

[[toc]]

:::

## I. 二重积分的概念

### 1.1 二重积分的定义

设$f(x, y)$是有界闭区域$D$上的有界函数，将区域$D$任意分为$n$个小区域：
$$
\Delta \sigma_1, \Delta \sigma_2, \dots, \Delta \sigma_n
$$
其中$\Delta \sigma_i$表示第$i$个小区域，也表示它的面积；在每一个$\Delta \sigma_i$上任取一点$(\xi_i, \eta_i)$，作乘积：
$$
f(\xi_i, \eta_i) \Delta \sigma_i \, (i = 1, 2, \dots, n)
$$
并作和：
$$
\sum_{i = 1}^{n} f(\xi_i, \eta_i) \Delta \sigma_i
$$
当各个小闭区域的直径中的最大值$\lambda \to 0$时，这个和的极限存在，且与区域$D$的分法以及点$(\xi_i, \eta_i)$的取法无关，则称此极限为函数$f(x, y)$在闭区域$D$上的二重积分，记作：
$$
\iint_{D} f(x, y) \mathrm{d} \sigma
$$
即：
$$
\iint_{D} f(x, y) \mathrm{d} \sigma = \lim_{\lambda \to 0} \sum_{i = 1}^{n} f(\xi_i, \eta_i) \Delta \sigma_i
$$
其中：

1. 被积函数：$f(x, y)$
2. 面积元素：$\mathrm{d} \sigma$
3. 被积表达式：$f(x, y) \mathrm{d} \sigma$
4. 积分变量：$x$、$y$
5. 积分区域：$D$
6. 积分和：$\sum_{i = 1}^{n} f(\xi_i, \eta_i) \mathrm{d} \sigma$

### 1.2 二重积分的几何意义

若$f(x, y) \geq 0$，则被积函数$f(x, y)$可以解释为曲顶柱体的顶在点$(x, y)$处的竖坐标，所以二重积分的几何意义就是柱体的体积；若$f(x, y) \lt 0$，柱体便在$xOy$面的下方，则二重积分的绝对值仍等于柱体的体积，但二重积分的值为负；若$f(x, y)$在$D$上部分为正、部分为负，则二重积分的值为$xOy$面上方的柱体体积减去$xOy$面下方的柱体体积

- **例1**：$\displaystyle \lim_{n \to \infty} \sum_{i = 1}^{n} \sum_{j = 1}^{n} \frac{1}{(n + i)(n + j)} = \_\_\_\_\_.$

    - A：$\displaystyle \int_{0}^{1} \mathrm{d}x \int_{0}^{x} \frac{1}{(1 + x)(1 + y^2)} \mathrm{d}y$
    - B：$\displaystyle \int_{0}^{1} \mathrm{d}x \int_{0}^{x} \frac{1}{(1 + x)(1 + y)} \mathrm{d}y$
    - C：$\displaystyle \int_{0}^{1} \mathrm{d}x \int_{0}^{1} \frac{1}{(1 + x)(1 + y)} \mathrm{d}y$
    - D：$\displaystyle \int_{0}^{1} \mathrm{d}x \int_{0}^{x} \frac{1}{(1 + x)(1 + y^2)} \mathrm{d}y$

    ::: details Answer

    定积分的定义：
    $$
    \begin{gather}
    \lim_{n \to \infty} \sum_{i = 1}^{n} \sum_{j = 1}^{n} \frac{1}{(n + i)(n + j)} \\
    = \lim_{n \to \infty} \sum_{i = 1}^{n} \frac{1}{n + i} \sum_{j = 1}^{n} \frac{1}{n + j} \\
    = \lim_{n \to \infty} \frac{1}{n} \sum_{i = 1}^{n} \frac{1}{1 + \frac{i}{n}} \cdot \lim_{n \to \infty} \frac{1}{n} \sum_{j = 1}^{n} \frac{1}{1 + \frac{j}{n}} \\
    = \int_{0}^{1} \frac{1}{1 + x} \mathrm{d}x \cdot \int_{0}^{1} \frac{1}{1 + y} \mathrm{d}y \\
    = \int_{0}^{1} \mathrm{d}x \int_{0}^{1} \frac{1}{(1 + x)(1 + y)} \mathrm{d}y \\
    \end{gather}
    $$
    重积分的定义：
    $$
    \begin{gather}
    \lim_{n \to \infty} \sum_{i = 1}^{n} \sum_{j = 1}^{n} \frac{1}{(n + i)(n + j)}
    = \lim_{n \to \infty} \frac{1}{n^2} \sum_{i = 1}^{n} \sum_{j = 1}^{n} \frac{1}{(1 + \frac{i}{n})(1 + \frac{j}{n})} \\
    = \iint_{D} \frac{1}{(1 + x)(1 + y)} \mathrm{d} \sigma, D = \{ 0 \leq x \leq 1, 0 \leq y \leq 1 \} \\
    \end{gather}
    $$
    :::

## II. 二重积分的性质

1. （线性运算）设$\alpha$与$\beta$为常数，则：
    $$
    \iint_D \left[ \alpha f(x, y) + \beta g(x, y) \right] \mathrm{d} \sigma
    = \alpha \iint_D f(x, y) \mathrm{d} \sigma + \beta \iint_D g(x, y) \mathrm{d} \sigma
    $$

2. （积分区域的可加性）若闭区域$D$被有限条曲线分为有限个部分闭区域，那么在$D$上的二重积分等于在各部分闭区域上的二重积分的和，即：若将$D$分割成不重叠的闭区域$D_1$和$D_2$，则：
    $$
    \iint_D f(x, y) \mathrm{d} \sigma = \iint_{D_1} f(x, y) \mathrm{d} \sigma + \iint_{D_2} f(x, y) \mathrm{d} \sigma
    $$

3. 若$\forall (x, y) \in D, f(x, y) = 1$，且$\sigma$为$D$的面积，则：
    $$
    \sigma = \iint_{D} 1 \cdot \mathrm{d} \sigma = \iint_D \mathrm{d} \sigma
    $$

4. 若$\forall (x, y) \in D, f(x, y) \leq g(x, y)$，则：
    $$
    \iint_D f(x, y) \mathrm{d} \sigma \leq \iint_D g(x, y) \mathrm{d} \sigma
    $$

5. 对于任意函数$f(x, y)$，在$D$上有：
    $$
    \left| \iint_D f(x, y) \mathrm{d} \sigma \right| \leq \iint_D \left| f(x, y) \right| \mathrm{d} \sigma
    $$

6. 设$M$和$m$分别是$f(x, y)$在闭区域$D$上的最大值和最小值，$\sigma$是$D$的面积，则：
    $$
    m \sigma \leq \iint_{D} f(x, y) \mathrm{d} \sigma \leq M \sigma
    $$

7. （二重积分的中值定理）设函数$f(x, y)$在闭区域$D$上连续，$\sigma$是$D$的面积，则：
    $$
    \exists (\xi, \eta) \in D, \text{使得} \iint_{D} f(x, y) \mathrm{d} \sigma = f(\xi, \eta) \sigma
    $$

- **例2**：设：
    $$
    \begin{gather}
    I_1 = \iint_{D} e^{-\sqrt{x^2 + y^2}} \mathrm{d}x \mathrm{d}y, \\
    I_2 = \iint_{D} e^{-(x^2 + y^2)} \mathrm{d}x \mathrm{d}y, \\
    I_3 = \iint_{D} e^{-(x^2 + y^2)^2} \mathrm{d}x \mathrm{d}y, \\
    D = \left\{\, (x, y) \;\middle|\; \lvert x\rvert \le \frac12,\; \lvert y\rvert \le \frac12 \,\right\} \\
    \end{gather}
    $$
    则：\_\_\_\_\_.
    
    - A：$I_1 \lt I_2 \lt I_3$
    - B：$I_3 \lt I_1 \lt I_2$
    - C：$I_3 \lt I_2 \lt I_1$
    - D：$I_2 \lt I_1 \lt I_3$
    
    ::: details Answer
    $$
    \begin{gather}
    \lvert x \rvert \leq \frac{1}{2}, \lvert y \rvert \leq \frac{1}{2} \\
    \Rightarrow 0 \leq x^2 + y^2 \leq \frac{1}{2} \\
    \Rightarrow (x^2 + y^2)^2 \leq x^2 + y^2 \leq (x^2 + y^2)^{\frac{1}{2}} \\
    \Rightarrow -(x^2 + y^2)^2 \geq -(x^2 + y^2) \geq -(x^2 + y^2)^{\frac{1}{2}} \\
    \Rightarrow e^{-(x^2 + y^2)^2} \geq e^{-(x^2 + y^2)} \geq e^{-(x^2 + y^2)^{\frac{1}{2}}} \\
    \Rightarrow I_1 \leq I_2 \leq I_3 \\
    \end{gather}
    $$
    :::
    
- **例3**：设：
    $$
    \begin{gather}
    I_1 = \iint_{\lvert x \rvert + \lvert y \rvert \leq 1} \ln (1 + x^2 + y^2) \mathrm{d}x \mathrm{d}y, \\
    I_2 = \iint_{\lvert x \rvert + \lvert y \rvert \leq 1} \sqrt{x^2 + y^2} \mathrm{d}x \mathrm{d}y, \\
    I_3 = \iint_{x^2 + y^2 \leq 1} \sqrt{x^2 + y^2} \mathrm{d}x \mathrm{d}y \\
    \end{gather}
    $$
    则：\_\_\_\_\_.

    - A：$I_1 \lt I_2 \lt I_3$
    - B：$I_2 \lt I_3 \lt I_1$
    - C：$I_3 \lt I_1 \lt I_2$
    - D：$I_3 \lt I_2 \lt I_1$

    ::: details Answer

    > 积分区间相同，比较函数大小；函数相同，比较积分区间大小

    - 比较$I_1$与$I_2$：

        根据重要不等式：
        $$
        \forall x \gt -1, \text{有} \ln (1 + x) \leq x
        $$
        可知：
        $$
        \forall (x, y) \in \left\{\, (x, y) \Bigm| \lvert x \rvert + \lvert y \rvert \leq 1 \,\right\}, \text{有} \ln (1 + x^2 + y^2) \leq x^2 + y^2
        $$
        于是：
        $$
        I_1 \lt I_2
        $$

    - 比较$I_2$与$I_3$：
        $$
        \begin{gather}
        A_{x^2 + y^2 \leq 1} = \pi \cdot 1^2 = \pi \\
        A_{\lvert x \rvert + \lvert y \rvert \leq 1} = (\sqrt{2})^2 = 2 \\
        \Rightarrow A_{x^2 + y^2 \leq 1} \gt A_{\lvert x \rvert + \lvert y \rvert \leq 1} \\
        \end{gather}
        $$
        于是：
        $$
        I_2 \lt I_3
        $$

    于是最终可得：
    $$
    I_1 \lt I_2 \lt I_3
    $$
    :::

