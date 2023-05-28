import { Response, Request, NextFunction } from "express"
import * as yup from "yup"

const registragionValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = yup.object({
            email: yup.string().required("O e-mail é obrigatório.").email("Digite um endereço e e-mail válido."),
            password: yup.string().required("A senha é obrigatória.").min(6, "A senha deve ter no minímo 6 caracteres."),
            name: yup.string().required("O nome de usúario é obrigatório.")
        })
        await schema.validate(req.body)
        next()
    } catch (error: any) {
        res.status(400).json({ errors: error.errors })
    }
}

export { registragionValidation }
