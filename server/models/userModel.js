import Sequelize from 'sequelize';
const bcrypt = require('bcrypt')

module.exports = (sequelize,type) => {
    return sequelize.define('user',{
        colab_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        colab_nombre : type.STRING,
        colab_apellido: type.STRING,
        colab_pseudo: type.STRING,
        sede_id: type.INTEGER,
        dpto_id: type_INTEGER,
        password: {
            type: type.STRING,
            allowNull: false,
            required : true
        }
    })
};

UserSchema.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password, 10, function (error, encrypted) {
        user.password = encrypted
        next()
    })
})

// Checks this because is the way it is made with moongose, see how to do this with sequelize

const user = sequelize.model('users',UserSchema)
module.exports = User;