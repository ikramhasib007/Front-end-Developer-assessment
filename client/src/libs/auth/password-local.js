import Local from 'passport-local'
import getClient from "apollo"
import { LOGIN } from 'src/operations/user'

const client = getClient()

export const localStrategy = new Local.Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function (
  req,
  username,
  password,
  done
) {
  let variables = { data: { email: username, password, type: req.body.type }}
  client.mutate({mutation: LOGIN, variables})
    .then(({data, errors}) => {
      if(errors) return done(errors[0])
      let user = {
        token: data.login.token
      }
      done(null, user)
    })
    .catch((error) => done(error))
})