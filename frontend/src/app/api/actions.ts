"use server";

import axios from 'axios';

const create = async(body: {[key: string]: string}, url: string = "http://127.0.0.1:3001/api/v1/users"): Promise<void> => {
	await axios.post(url, body);
}

export default create;

