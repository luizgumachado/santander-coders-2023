function somaImposto(taxaImposto, custo) {
    let valorFinal = Math.floor(custo + (custo * taxaImposto));
    return {
        inicial: `R$ ${custo}`,
        imposto: `R$ ${taxaImposto}%`,
        final: `R$ ${valorFinal}`
    }
}

console.log(somaImposto(0.5, 1200));
console.log(somaImposto(0.12, 1500));
console.log(somaImposto(0.12, 12.24));