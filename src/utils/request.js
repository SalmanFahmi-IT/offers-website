import offersData from '../data/offers.json';

const request = url => {
    const urlParams = url.split('/');
    const baseUrl = urlParams[0];
    const urlService = urlParams[1];
    if(baseUrl === 'FAKE_DATA'){
        return new Promise((resolve, reject) => {
            if(urlService === 'offers'){
                resolve(offersData)
            }else{
                reject('Bad request')
            }
        })
    }
    else return fetch(url).then(response => response.json());
}
export default request;