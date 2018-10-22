import axios from 'axios'
import store from '../store'

const baseURL = '/hhdj'

const instance = axios.create({
    baseURL,
    timeout: 10000,
});

const xhr = {
    get(url, data, config = {}) {
        config.headers = {
            'token': store.state.token
        }
        return new Promise((resolve,reject)=>{
            instance.get(url, {params: data, ...config}).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url, data, config = {}, methods) {
        config.headers = {
            'token': store.state.token
        }
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
    options(url, data, config) {
        return this.fetch(url, data, config, 'options')
    }
}

export const $axios = xhr