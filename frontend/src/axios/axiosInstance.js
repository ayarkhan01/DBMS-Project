import {default as axiosImport}  from "axios"

export const axios = axiosImport.create({
    baseURL:"http://localhost:5000/v1"  
})