import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const { data }= await axios.get((url), {
        headers: {
    'X-RapidAPI-Key': '7be2c46f37msh02a16a67277b42bp17efb7jsna7f812ef0bd9',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
  },
    });
    return data;
}