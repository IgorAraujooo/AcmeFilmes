export async function getFilmes() {
    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

export async function getFilme (id) {
    const url = `http://10.107.134.40:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]
}

export async function postFilme(filme){
    const url = 'http://10.107.134.40:8080/v2/acmefilmes/filme/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, option)
    return response.ok
}

// const filme = {
//     "nome": "SENAI Jandira",
//       "sinopse": "Moana Waialiki é uma corajosa jovem, filha única do chefe de uma tribo na Oceania, vinda de uma longa linhagem de navegadores. Quando os pescadores de sua ilha não conseguem pescar nenhum peixe e as colheitas falham, ela descobre que o semideus Maui causou a praga ao roubar o coração da deusa Te Fiti. Entusiasta das viagens marítimas, a jovem se vê querendo descobrir mais sobre seu passado e ajudar a comunidade, mesmo que a família queira proteger Moana a qualquer custo. Então, ela resolve partir em busca de seus ancestrais, habitantes de uma ilha mítica que ninguém sabe onde é. A única maneira de curar a ilha é persuadir Maui a devolver o coração de Te Fiti, então Moana parte em uma jornada épica pelo Pacífico. Moana começa sua jornada em mar aberto, onde enfrenta terríveis criaturas marinhas e descobre histórias do submundo. O filme é baseado em histórias da mitologia polinésia.",
//       "duracao": "14:26:00",
//       "data_lancamento": "2017-01-05",
//       "data_relancamento": null,
//       "foto_capa": "https://br.web.img3.acsta.net/c_310_420/pictures/16/09/12/22/13/415370.jpg",
//       "valor_unitario": 50
// }