import axios from "axios"

const URL = process.env.NEXT_PUBLIC_API_URL

const DEPARTMENT = process.env.NEXT_PUBLIC_DEPARTMENT

const getAllNews = async () => {

    const { data } = await axios.get(`${URL}/api/news`, {
        params: {
            departmentID: DEPARTMENT
        }
    })

    if (data.ok) return data.data

    return []

}

const getSingleNews = async (id: string) => {

    try {

        const { data } = await axios.get(`${URL}/api/news`, {
            params: {
                newsID: id
            }
        })

        if (data.ok) return data.data

    } catch (error) {

        console.log(error);

    }

}

const getRelatedNews = async (keyword: string) => {

    try {

        const { data } = await axios.get(`${URL}/api/news`, {
            params: {
                departmentID: DEPARTMENT,
                keyword: keyword
            }
        })

        if (data.ok) return data.data

    } catch (error) {

    }

}
export { getAllNews, getSingleNews, getRelatedNews }