import { defineConfig } from "vitepress";
import mdItKatex from "markdown-it-katex";
import mdItFootnote from "markdown-it-footnote";

const tags = [
    "math",
    "maction",
    "maligngroup",
    "malignmark",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mi",
    "mlongdiv",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mscarries",
    "mscarry",
    "mscarries",
    "msgroup",
    "mstack",
    "mlongdiv",
    "msline",
    "mstack",
    "mspace",
    "msqrt",
    "msrow",
    "mstack",
    "mstack",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "semantics",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mspace",
    "mtext",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "msqrt",
    "mstyle",
    "mmultiscripts",
    "mover",
    "mprescripts",
    "msub",
    "msubsup",
    "msup",
    "munder",
    "munderover",
    "none",
    "maligngroup",
    "malignmark",
    "mtable",
    "mtd",
    "mtr",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "msline",
    "msrow",
    "mstack",
    "maction",
    "semantics",
    "annotation",
    "annotation-xml",
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        server: {
            host: "0.0.0.0",
        },
    },
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/english-notes/resources/logo.png",
                type: "image/png",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
            },
        ],
    ],
    title: "Math Notes",
    description: "Some knowledge of advanced mathematics...",
    markdown: {
        lineNumbers: false,
        config: (it) => {
            it.use(mdItKatex);
            it.use(mdItFootnote);
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tags.includes(tag),
            },
        },
    },
    base: "/math-notes",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/resources/logo.png",
        search: {
            provider: "local",
        },
        nav: [
            {
                text: "Home",
                link: "/",
            },
            {
                text: "Intro",
                link: "/quick-start",
            },
        ],
        sidebar: [
            {
                text: "第一章 函数与极限",
                collapsed: true,
                items: [
                    {
                        text: "第一节 函数",
                        link: "/further-mathematics/chapter1/section1",
                    },
                    {
                        text: "第二节 数列的极限",
                        link: "/further-mathematics/chapter1/section2",
                    },
                    {
                        text: "第三节 函数的极限",
                        link: "/further-mathematics/chapter1/section3",
                    },
                    {
                        text: "第四节 无穷小与无穷大",
                        link: "/further-mathematics/chapter1/section4",
                    },
                    {
                        text: "第五节 极限运算法则",
                        link: "/further-mathematics/chapter1/section5",
                    },
                    {
                        text: "第六节 极限存在准则 两个重要极限",
                        link: "/further-mathematics/chapter1/section6",
                    },
                    {
                        text: "第七节 无穷小的比较",
                        link: "/further-mathematics/chapter1/section7",
                    },
                    {
                        text: "第八节 函数的连续性与间断点",
                        link: "/further-mathematics/chapter1/section8",
                    },
                    {
                        text: "第九节 连续函数的运算与初等函数的连续性",
                        link: "/further-mathematics/chapter1/section9",
                    },
                    {
                        text: "第十节 闭区间上连续函数的性质",
                        link: "/further-mathematics/chapter1/section10",
                    },
                    {
                        text: "总习题",
                        link: "/further-mathematics/chapter1/exercises",
                    },
                ],
            },
            {
                text: "第二章 导数与微分",
                collapsed: true,
                items: [],
            },
            {
                text: "第三章 微分中值定理与导数的应用",
                collapsed: true,
                items: [],
            },
            {
                text: "第四章 不定积分",
                collapsed: true,
                items: [],
            },
            {
                text: "第五章 定积分",
                collapsed: true,
                items: [],
            },
            {
                text: "第六章 定积分的应用",
                collapsed: true,
                items: [],
            },
            {
                text: "第七章 微分方程",
                collapsed: true,
                items: [],
            },
            {
                text: "第八章 多元函数微分法及其应用",
                collapsed: true,
                items: [],
            },
            {
                text: "第九章 二重积分",
                collapsed: true,
                items: [],
            }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/KuzunohaChitose" },
            { icon: "twitter", link: "https://twitter.com" },
            { icon: "youtube", link: "https://youtube.com" },
        ],
    },
});
