//https://joi.dev/api/?v=17.9.1
//https://www.npmjs.com/package/joi

import Joi from "joi"

export const validar = producto => {

    const productoSchema = Joi.object({
        nombre: Joi.string().alphanum().required(),
        precio: Joi.number().min(100).max(10000000).required(),
        stock: Joi.number().integer().min(0).max(999).required(),
    })
    
    const { error } = productoSchema.validate(producto);
    if(error) {
        return { result: false, error }     // validación falló
    }

    return { result: true }     // validación ok
}