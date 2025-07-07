# 第一节 行列式的定义

::: details Tables of Content

[[toc]]

:::

## I. 全排列与逆序数

## II. 行列式的定义

### 2.1 二阶、三阶行列式

1. **二阶行列式**：
    $$
    \det(a_{ij})_{2 \times 2} =
    \begin{vmatrix}
    a_{11} & a_{12} \\
    a_{21} & a_{22} \\
    \end{vmatrix}
    = a_{11} a_{22} - a_{12} a_{21}
    $$

2. **三阶行列式**：
    $$
    \det(a_{ij})_{3 \times 3} =
    \begin{vmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33} \\
    \end{vmatrix}
    $$
    
    $$
    \begin{equation}
    = a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32}
    - a_{13} a_{22} a_{31} - a_{23} a_{32} a_{11} - a_{33} a_{12} a_{21}
    \end{equation}
    $$

$$
\det(a_{ij})_{n \times n} = \sum_{j_1 j_2 \dots j_n} (-1)^{\sigma(j_1 j_2 \dots j_n)} a_{1 j_1} a_{2 j_2} \dots a_{n j}
$$

## III. 行列式的性质

## IV. 常用的特殊行列式

