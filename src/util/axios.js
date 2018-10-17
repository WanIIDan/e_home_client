import axios from 'axios'

const baseURL = '/hhdj'

const instance = axios.create({
    baseURL,
    timeout: 10000,
});

const xhr = {
    get(url, data, config) {
        return new Promise((resolve,reject)=>{
            instance.get(url, {params: data}, config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Promise((resolve,reject)=>{
            instance[methods](url, data, config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return this.fetch(url, data, config, 'post')
    },
    put(url, data, config) {
        return this.fetch(url, data, config, 'put')
    },
    detele(url, data, config) {
        return this.fetch(url, data, config, 'detele')
    },
}

export const $axios = xhr