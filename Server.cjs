const express = require("express");
const app = express();
const port = 5174;
const Razorpay = require("razorpay");
const cors = require('cors');
const bodyParser=require('body-parser')
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/jewel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  // amount: Number,
});

const User = mongoose.model('users', userSchema);


app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);
  try {
    const newUser = new User({ firstName, lastName, email , password});
    await newUser.save();
    res.json({ status: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false });
  }
});

// const userSchema1=new mongoose.Schema({
  //   username: String,
  //   password: String,
  // });
  // const User1 = mongoose.model('users', userSchema1);
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const data = await User.findOne({ email, password });
    
    if (data != null) {
      res.json({ status: true, email: data.email,password:data.password, firstName: data.firstName});
    } else   {
      res.json({ status: false });
    }
  });
  

  const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  });
  
  const Admin = mongoose.model('admins', adminSchema);

  
  app.post('/adminlogin', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const data = await Admin.findOne({ email, password });
  
    if (data != null) {
      res.json({ status: true, email: data.email});
    } else   {
      res.json({ status: false });
    }
  });


//   const userSchema1 = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: String,
//     password: String,
//   });
//   const Admin = mongoose.model('admins', userSchema1);


// app.post('/adminlogin', async (req, res) => {
//   const { email, password } = req.body;
//   console.log(email);
//   console.log(password);
//   const data = await Admin.findOne({ email, password });
//   if (data != null) {
//     res.json({ status: true, email: data.email,password:data.password});
//   } else   {
//     res.json({ status: false });
//   }
// });



// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.json({ status: false, message: 'User not found' });
//     }

//     const isPasswordMatch = await bcrypt.compare(password, user.password);

//     if (isPasswordMatch) {
//       return res.json({ status: true, message: 'Login successful', username: user.username });
//     } else {
//       return res.json({ status: false, message: 'Invalid password' });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ status: false, message: 'Internal server error' });
//   }
// });

const razorpay = new Razorpay({
  key_id: 'rzp_test_lecUDaCPM6P4FT',
  key_secret: 'WXhieUuX5oJLslz8inXseNmb',
});


const contactUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
},{ versionKey: false });

const ContactUsModel = mongoose.model('Contactus', contactUsSchema);

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/contactus', async (req, res) => {
  try {
    
    const { name, email, message } = req.body;
    const newContact = new ContactUsModel({
      name,
      email,
      message,
    },{ versionKey: false });
    await newContact.save();
    console.log(name);
    console.log(email);
    console.log(message);

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
app.get('/contactusget', async (req, res) => {
  try {
    const contactData = await ContactUsModel.find();
    res.json(contactData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// app.post("/payment", async (req, res) => {
//   const { amount, method } = req.body;

//   try {
//     const order = await razorpay.orders.create({
//       amount: amount * 100,
//       currency: "INR",
//       receipt: "receipt#1",
//     });

//     res.status(200).json({
//       success: true,
//       order,
//       amount,
//       method,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Payment failed' });
//   }
// });
const paymentSchema = new mongoose.Schema({
  amount: Number,
  email: String,
  timestamp: { type: Date, default: Date.now },
});

const Payment = mongoose.model('payments', paymentSchema);

app.post("/payment", async (req, res) => {
  try {
      const { email, amount } = req.body;
      // Create a new payment entry and save it to the database
      const paymentEntry = new Payment({ email, amount });
      await paymentEntry.save();
      res.status(200).json({
          success: true,
          message: "Payment successful",
          payment: paymentEntry,
      });
  } catch (error) {
      console.error("Error processing payment:", error);
      res.status(500).json({
          success: false,
          error: "Internal Server Error",
      });
  }
});

app.get('/payment-history', async (req, res) => {
  try {
    const paymentHistory = await Payment.find({}).sort({ timestamp: -1 });
    console.log(paymentHistory);
    res.json(paymentHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Internal server error' });
  }
});

// const userSchema1 = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   amount:Number,
// });
// const User1 = mongoose.model('users', userSchema1);

app.get('/pending', async (req, res) => {
  try {

    const userData = await User.find({}, 'firstName lastName amount');
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});


// app.post("/payment", async (req, res) => {
//   const { amount, method, userId } = req.body;

//   try {
//     const order = await razorpay.orders.create({
//       amount: amount * 100,
//       currency: "INR",
//       receipt: "receipt#1",
//     });

//     const payment = new Payment({ userId, amount });
//     await payment.save();

//     res.status(200).json({
//       success: true,
//       order,
//       amount,
//       method,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Payment failed' });
//   }
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
