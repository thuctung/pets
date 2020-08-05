import axios from 'axios'
import * as urlConfig from '../constants/ConfigApi'

export default function callAPi(endpoint, method = 'GET', body = null) {
    return axios({
        method,
        url: `${urlConfig.API_URL}/${endpoint}`,
        data: body
    })
}

