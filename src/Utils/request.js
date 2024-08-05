async function requestApi(link) {
    const request = await fetch(link)
    const jsonRequest = await request.json()

    return jsonRequest
}

export async function dataApi() {
    const request = await requestApi('https://raw.githubusercontent.com/CaioColli/BmwJson/main/BmwDB.db.json')
    return(request)
}
