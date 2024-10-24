import { text } from "stream/consumers";
import { onMounted, useTemplateRef } from "vue";

const drawBorderedBox =
    (ctx: CanvasRenderingContext2D) =>
    (
        x: number,
        y: number,
        height: number,
        width: number,
        borderWidth: number = 1
    ) => {
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = borderWidth;
        ctx.strokeRect(
            x + borderWidth,
            y + borderWidth,
            height - borderWidth,
            width - borderWidth
        );
    };

const drawLine =
    (ctx: CanvasRenderingContext2D) =>
    (start: [number, number], ...steps: [number, number][]) => {
        ctx.beginPath();
        ctx.moveTo(...start);
        steps.forEach((step) => ctx.lineTo(...step));
        ctx.stroke();
    };

const drawText =
    (ctx: CanvasRenderingContext2D) => (text: string, x: number, y: number) => {
        ctx.fillStyle = "black"; // 设置文字颜色
        ctx.font = "15px Arial"; // 设置字体和大小
        ctx.fillText(text, x, y); // 绘制填充文字
    };

export const useExmaple2_4_1 = () => {
    onMounted(() => {
        const canvas: HTMLCanvasElement = document.querySelector(
            "#example-graph-2-4-1"
        )!;

        const parentWidth = canvas.parentElement!.parentElement!.clientWidth;
        canvas.width = (parentWidth / 4) * 3;
        canvas.height = canvas.width / 10 * 9;
        const x_0 = (canvas.width / 10) * 7;
        const deltaX = (canvas.width / 10) * 1;
        const padding = (canvas.width / 10) * 1;

        const ctx = canvas.getContext("2d")!;
        const lineDrawer = drawLine(ctx);
        const textDrawer = drawText(ctx);
        lineDrawer(
            [padding + 1, 1],
            [padding + 1, x_0 + deltaX + 1],
            [x_0 + deltaX + padding + 1, x_0 + deltaX + 1],
            [x_0 + deltaX + padding + 1, 1],
            [padding + 1, 1]
        );
        lineDrawer(
            [x_0 + padding + 1, x_0 + deltaX + 1],
            [x_0 + padding + 1, 1]
        );
        lineDrawer(
            [padding + 1, deltaX + 1],
            [x_0 + deltaX + padding + 1, deltaX + 1]
        );
        textDrawer("A", padding + 1 - 15, x_0 + deltaX + 1 + 15);
        textDrawer("D", padding + 1 - 15, deltaX + 1 + 15);
        textDrawer("C", x_0 + padding + 1 - 15, deltaX + 1 + 15);
        textDrawer("B", x_0 + padding + 1 - 15, x_0 + padding + 1 + 15);
        textDrawer("E", x_0 + deltaX + padding + 1 - 15, x_0 + padding + 1 + 15);
        textDrawer("F", x_0 + deltaX + padding + 1 - 15, padding + 1 + 15);
        textDrawer("G", padding + 1 - 15, 1 + 15);
        textDrawer("H", x_0 + deltaX + padding + 1 - 15, 1 + 15);
        textDrawer("I", x_0 + padding + 1 - 15, 1 + 15);
    });
};
