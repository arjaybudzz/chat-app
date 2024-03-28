"use server"

import axios from 'axios'

const create = async (data: {[key: string]: any}, url = "http://127.0.0.1:3001/api/v1/users") => {
    await axios.post(url, data);
}

export default create