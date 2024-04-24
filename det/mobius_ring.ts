class MobiusStrip {
    private readonly canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private readonly width: number;
    private readonly height: number;
 
    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.draw();
    }
    private draw(): void {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const radius = Math.min(this.width, this.height) / 2;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }
}
const mobiusStrip = new MobiusStrip('Canvas');