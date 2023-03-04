import axios from "axios";
const BASE_URL="http://localhost:3300/"


export class cardApi{

    static async card(){
    
        return (await axios.get(`${BASE_URL}card`)).data
    }

}