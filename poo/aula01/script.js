class Triangulo {
    constructor(base, altura, cor, direção) {
        this.base = base;
        this.altura = altura;
        this.cor = cor;
        this.direção = direção;
    }

    area() {
        return (this.base * this.altura) / 2;
    }

    imprimir() {
        document.write(
            `<div style="width: 0; height: 0; border-left: ${(this.base / 2)}px solid transparent; border-right: ${(this.base / 2)}px solid transparent; border-bottom: ${this.altura}px solid ${this.cor};"></div>`
        )
    }
}

const triangle = new Triangulo(180, 60, 'green');
console.log(triangle.area());
triangle.imprimir();

const triangle2 = new Triangulo(75, 200, 'red');
console.log(triangle2.area());
triangle2.imprimir();