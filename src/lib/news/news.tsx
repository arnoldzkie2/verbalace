import axios from "axios"

const URL = process.env.NEXT_PUBLIC_API_URL

const DEPARTMENT = process.env.NEXT_PUBLIC_DEPARTMENT

const getAllNews = async () => {

    const { data } = await axios.get(`${URL}/api/news?department=${DEPARTMENT}`)

    if (data.success) return data.data

    return []
    
}

const getSingleNews = async (id: string) => {

    try {

        const { data } = await axios.get(`${URL}/api/news?id=${id}`)

        if (data.success) return data.data

    } catch (error) {

        console.log(error);

    }

}

const getRelatedNews = async (keyword: string) => {

    try {

        const { data } = await axios.get(`${URL}/api/news?department=${DEPARTMENT}&keyword=${keyword}`)

        if (data.success) return data.data

    } catch (error) {

    }

}
export { getAllNews, getSingleNews, getRelatedNews }