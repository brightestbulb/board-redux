import { USER_SERVER } from '../common/config';
import Axios from "axios";

export function getBoardListAPI(){
    return Axios.get(`${USER_SERVER}/board/`);
}

export function callApiLike() {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 1000);
    })
}
