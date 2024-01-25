import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [Data, setData] = useState(null)
    useEffect(() => {
        fetch(url).then(res => {
            res.json()
                .then(result => {
                    setData(result.products)
                })
        })
    })
    return Data
}


export default useFetch