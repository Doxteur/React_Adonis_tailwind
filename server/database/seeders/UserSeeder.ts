import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      password: await Hash.make('admin'),
      role: 'admin',
      status: 'active',
    })

  }
}
