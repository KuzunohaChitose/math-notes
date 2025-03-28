import {defineConfig} from "vitepress";
import {withMermaid} from "vitepress-plugin-mermaid";
import mdFootnote from "markdown-it-footnote";
import mdMathJax3 from "markdown-it-mathjax3";
import mdkatex from "markdown-it-katex";
import {text} from "function-plot/dist/graph-types";

const tags = [
    "mjx-container",
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
export default withMermaid({
    mermaid: {},
    mermaidPlugin: {
        class: "mermaid my-class",
    },
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
                href: "/math-notes/resources/logo.png",
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
        math: false,
        lineNumbers: false,
        toc: {
            level: [2, 3, 4],
        },
        config: (it) => {
            const fakeMd = {
                inline: {
                    ruler: {
                        after(a, b, c) {
                            it.inline.ruler.after(a, b, c);
                        },
                    },
                },
                block: {
                    ruler: {
                        after(...args) {
                        },
                    },
                },
                renderer: {
                    rules: new Proxy(
                        {},
                        {
                            get(target, p) {
                                return it[p];
                            },
                            set(target, p: string, newValue) {
                                if (p !== "math_block") {
                                    it.renderer.rules[p] = newValue;
                                }
                                return true;
                            },
                        }
                    ),
                },
            };

            it.use(mdMathJax3 as any, {
                options: {
                    format: {
                        output: "svg",
                    },
                },
            });
            mdkatex(fakeMd);
            it.use(mdFootnote);
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
                text: "第一章 函数、极限与连续",
                collapsed: true,
                items: [
                    {
                        text: "第一节 函数",
                        link: "/further-mathematics/chapter1/section1",
                    },
                    {
                        text: "第二节 极限",
                        link: "/further-mathematics/chapter1/section2",
                    },
                    {
                        text: "第三节 连续",
                        link: "/further-mathematics/chapter1/section3",
                    },
                ],
            },
            {
                text: "第二章 导数与微分",
                collapsed: true,
                items: [
                    {
                        text: "第一节 导数的概念",
                        link: "/further-mathematics/chapter2/section1",
                    },
                    {
                        text: "第二节 导数的计算",
                        link: "/further-mathematics/chapter2/section2",
                    },
                    {
                        text: "第三节 高阶导数",
                        link: "/further-mathematics/chapter2/section3",
                    },
                    {
                        text: "第四节 函数的微分",
                        link: "/further-mathematics/chapter2/section4",
                    },
                ],
            },
            {
                text: "第三章 微分中值定理与导数的应用",
                collapsed: true,
                items: [
                    {
                        text: "第一节 微分中值定理",
                        link: "/further-mathematics/chapter3/section1",
                    },
                    {
                        text: "第而节 洛必达法则",
                        link: "/further-mathematics/chapter3/section2",
                    },
                    {
                        text: "第三节 函数的单调性与极值",
                        link: "/further-mathematics/chapter3/section3",
                    },
                    {
                        text: "第四节 曲线的凹凸性与拐点",
                        link: "/further-mathematics/chapter3/section4",
                    },
                ],
            },
            {
                text: "第四章 不定积分",
                collapsed: true,
                items: [
                    {
                        text: "第一节 不定积分的概念与性质",
                        link: "/further-mathematics/chapter4/section1",
                    },
                    {
                        text: "第二节 不定积分的基本积分法",
                        link: "/further-mathematics/chapter4/section2",
                    },
                    {
                        text: "第三节 几种特殊类型函数的积分",
                        link: "/further-mathematics/chapter4/section3",
                    },
                ],
            },
            {
                text: "第五章 定积分及其应用",
                collapsed: true,
                items: [
                    {
                        text: "第一节 定积分",
                        link: "/further-mathematics/chapter5/section1",
                    },
                    {
                        text: "第二节 反常积分",
                        link: "/further-mathematics/chapter5/section2",
                    },
                    {
                        text: "第三节 定积分的应用",
                        link: "/further-mathematics/chapter5/section3",
                    },
                ],
            },
            {
                text: "第六章 常微分方程",
                collapsed: true,
                items: [],
            },
            {
                text: "第七章 多元函数微分学",
                collapsed: true,
                items: [],
            },
            {
                text: "第八章 二重积分",
                collapsed: true,
                items: [],
            },
            {
                text: "第九章 无穷级数",
                collapsed: true,
                items: [],
            },
        ],
        socialLinks: [
            {icon: "github", link: "https://github.com"},
            {icon: "twitter", link: "https://twitter.com"},
            {icon: "youtube", link: "https://youtube.com"},
        ],
    },
});
