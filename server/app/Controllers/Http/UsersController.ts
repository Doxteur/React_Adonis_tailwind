import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'




export default class UsersController {
    public async index({ response }: HttpContextContract) {
        const users = await User.all()
        return response.json(users)
    }

    public async store({ request, response }: HttpContextContract) {
        const { name, email, password, role, status } = request.body()
        const user = await User.create({ name, email, password, role, status })
        return response.json(user)
    }

    public async show({ params, response }: HttpContextContract) {
        const user = await User.findOrFail(params.id)
        return response.json(user)
    }

    public async update({ params, request, response }: HttpContextContract) {
        const { name, email, password, role, status } = request.body()
        const user = await User.findOrFail(params.id)
        user.merge({ name, email, password, role, status })
        await user.save()
        return response.json(user)
    }

    public async destroy({ params, response }: HttpContextContract) {
        const user = await User.findOrFail(params.id)
        await user.delete()
        return response.json({ message: 'User deleted' })
    }



}
