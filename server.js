const express =require("express");
const  mongoose  = require("mongoose");
const router =express.Router();
const bodyParser =require("body-parser")
require("dotenv").config();
const cors =require("cors")
const app = express();




app.use(cors());
app.use(bodyParser.json());

const middleware = require('./routes/pro')
const userroutes =require("./routes/userroutes")
const userdataroutes =require("./routes/userdataroute")
const ratingroute =require("./routes/rating&review")
const quoteroute =require('./routes/quote')
const cleaningServiceRoutes = require('./routes/cleaningserviceroute');
const bookingroute = require("./routes/bookinrouter")

app.use('/api',middleware)
app.use('/api/users',userroutes)
app.use('/api/usersdata',userdataroutes)
app.use('/api/rating',ratingroute)
app.use('/api/quote',quoteroute)
app.use('/api/cleaningservices', cleaningServiceRoutes);
app.use('/api/bookings',bookingroute)

mongoose
 .connect(process.env.MONGODB)
 .then(()=>{
  console.log("connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch((error) =>{
 console.log("conection error",error.message)
});