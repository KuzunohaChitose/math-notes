# 第二节 极限

## I. 极限的定义

### 1.1 数列的极限

> 数列可以认为是一个定义域为正整数的函数，即：$a_n = f(n), x \in \mathbb{N}$

设$\{ x_n \}$为一数列，如果存在常数$a$，对于任意给定的正数$\epsilon$，总存在正整数$N$，使得当$n \gt N$时，以下不等式恒成立：
$$
|x_n - a| \lt \epsilon
$$
则称常数$a$为数列$\{ x_n \}$的极限，或称数列$\{ x_n \}$收敛于$a$，记为：
$$
\lim_{n \to \infty} x_n = a
$$
或：
$$
x_n \to a (n \to \infty)
$$
也可描述为：
$$
\lim_{n \to \infty} x_n = a \Leftrightarrow \forall \epsilon \gt 0, \,
\exists \text{整数} N > 0, \, \text{当} n \gt N \text{时}, \, \text{有} |x_n - a| \lt \epsilon
$$


### 1.2 函数的极限

