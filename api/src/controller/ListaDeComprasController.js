module.exports = {
    async createLista(req, res) {
        const { listaId, dataLista, itens } = req.body
        console.log(`Id da Lista: ${listaId}`)
        console.log(itens)
        return res.json({ listaId, dataLista, itens })
    }
}