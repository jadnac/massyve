const { login, register } = require("../services.js/auth.sevices")

module.exports = {
    Login:async (req, res) => {
        try{
            const data = req.body
            await login(data).then(response => {
                if(response?.error){
                    return res.status(400).send({error: response?.error})
                }else{
                    return res.status(200).send({data: response, message: 'Logged In Successfully'})
                }
            })
        }catch(err){
            return res.status(500).send(err)
        }
    },

    Register: async (req, res) => {
        try {
          const data = req.body;
          await register(data).then(response => {
            if (response?.error) {
              return res.status(400).send({ error: response?.error })
            } else {
                console.log(response?.data)
                  return res.status(200).send({ status: 200, 
                    message: "User Successfully registered! You will now receive a verification message to your email. Please verify your email address in order to continue." })
                }
            })
        } catch (err) {
          return res.status(500).send(err);
        }
      },
}