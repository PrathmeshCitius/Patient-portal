const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./users.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticatedUser({ email, password }) {
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}


function isEmailExist({ email}){
  const user = userdb.users.find(user => user.email === email);
    if (user) return true;

}

// Register New User
server.post('/auth/register', (req, res) => {

  const { email, password, firstName, lastName, dob, phone, address, image, role, isAuthenticated } = req.body;

  if (isEmailExist({ email }) ){
    const status = 401;
    const message = 'Email already exist';
    res.status(status).json({ status, message });
    return
  }


  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());

    var last_item_id
    // Get the id of last user
    if (data.users.length == 0) {
      last_item_id = 0;
    }
    else {
      last_item_id = data.users[data.users.length - 1].id;
    }


    //Add new user
    data.users.push({
      id: last_item_id + 1, email: email, password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      dob: dob,
      phone: phone,
      address: address,
      image: image,
      role: role,
      isAuthenticated: isAuthenticated


    }); //add some data
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {
      // WRITE
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return
      } else {
        res.status(200).json({id:last_item_id +1})
      }
    });
  });

 // Create token for new user
  // const access_token = createToken({ email, password })

  
})

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {


  const { email, password } = req.body;
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data

    var data = JSON.parse(data.toString());


    const userdata = data.users.filter(x => x.email === email);
    console.log(userdata);
    if(userdata.length !== 0){
    if(userdata[0].role !== 'admin' && userdata[0].isAuthenticated == false){
      const status = 401;
      const message = 'Not authenticated by Admin'
      console.log(message);
      res.status(status).json({ status, message });
      return
    }
  }
   
    if (isAuthenticatedUser({ email, password }) === false) {
      const status = 401
      const message = 'Incorrect email or password'
      res.status(status).json({ status, message })
      return
    }
    const access_token = createToken({ email, password })
    const role = userdata[0].role
    res.status(200).json({ access_token ,role})


    // Get current users data





    //Add new user
    data.loggedin.push({
      "token": access_token,
      "userId": userdata[0].id,
      "email": userdata[0].email,
      "id": 1,
      "role": userdata[0].role


    }); //add some data
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {
      console.log(writeData);
      // WRITE
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return
      }
    });
  });

})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  console.log("auth header"+req.headers.authorization);
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({ status, message })
    return
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token not provided'
      res.status(status).json({ status, message })
      return
    }
    next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({ status, message })
  }
})

server.use(router)

server.listen(8000, () => {
  console.log('Run Auth API Server')
})