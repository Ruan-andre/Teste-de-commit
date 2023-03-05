function pedido(codigo, quantidade, preco) {
    const hotDog = 'Cachorro quente'; const hamb = 'Hambúrguer Simples'; const xburguer = 'Cheeseburguer'; const bauru = 'Bauru';
    const refri = 'Refrigerante'; const suco = 'Suco'


    
    switch (codigo) {
        case 100:
            preco = 3.00
            console.log(`O total é R$${quantidade * preco} de ${quantidade} ${hotDog}(s) `)
            break;
        case 200:
            preco = 4.00
            return `O total é R$${quantidade * preco} de ${quantidade} ${hamb} `
        case 300:
            preco = 5.50
            return `O total é R$${quantidade * preco} de ${quantidade} ${xburguer}(s) `
        case 400:
            preco = 7.50
            return `O total é R$${quantidade * preco} de ${quantidade} ${bauru}(s) `
        case 500:
            preco = 3.50
            return `O total é R$${quantidade * preco} de ${quantidade} ${refri}(s) `
        case 600:
            preco = 2.80
            return `O total é R$${quantidade * preco} de ${quantidade} ${suco}(s) `
        default:
            return "Produto não existe!"
    }
}
pedido(100, 10)
pedido(200, 10)
pedido(300, 10)
pedido(400, 10)
pedido(500, 10)
pedido(600, 10)

