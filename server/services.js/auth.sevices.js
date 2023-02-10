const { generateAccessToken } = require('../helpers/jwt.helper');
const users = require('../models/user.model')

module.exports = {
    login:async (data) => {
        try{
            let user = await users.find({ email: data?.email });
      if (user.length > 0 ) {
        if (user[0]?.password === data?.password) {
            let loginUser = {
              firstName: user[0]?.first_name,
              lastName: user[0]?.last_name,
              email: user[0]?.email,
            };

            const access_token = generateAccessToken(loginUser);

            return { loginUser, access_token };

        } else{
          return {error: 'Incorrect Email or Password! Please try again'}
        }
      } else {
        return { error: 'Invalid user, email not found Create an Account' }
      }
        }catch(err){
            console.log('Login Error: ', err);
            return err
        }
    },

    async register(data) {
        try {
          let user = await users.find({email: data?.email});
          if (user.length> 0) {
            return { error: "Account Already Exist!! Enter a Different Email" }
          } else {
            const newUser = await users.create(data);
            return (data = {
              email: newUser?.email,
              first_name: newUser?.first_name,
              last_name: newUser?.last_name,
            });
          }
        } catch (err) {
          console.log('register ERROR: ', err);
          return err
        }
      },
}