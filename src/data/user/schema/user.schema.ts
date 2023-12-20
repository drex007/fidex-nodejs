import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  firstname:{type:String, required:true},
  lastname:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  phonenumber:{type:String, required:true, unique:true},
  password:{type:String, required:true},
  bvn:{type:String, default:""},
  is_active:{type:Boolean, default:true},
  is_admin:{type:Boolean, default:false},
  jwt:{type:String, default:""},
  salt:{type:String, required:true},
  referralcode:{type:String, unique:true},
  pin:{type:String, required:true},
  email_verification_code:{type:String, required:true},
  referee:{type:String, required:true},
  username:{type:String, required:true, unique:true},


  
})

export const UserModel = mongoose.model('UserModel', userSchema)


const userAccount = new mongoose.Schema({
  user_id:{type:String,required:true,},
  bankname:{ type:String,required:true},
  accountnumber:{type:Number,required:true},
  accountname:{ type:String,required:true,},
  balance:{type:Number,default:0.0},
  bankcode:{ type:String,required:true},
    
})
export const userAccountModel = mongoose.model('userAccountModel', userAccount)


const userCryptocurrencyAccount = new mongoose.Schema({
  user_id:{type:String,required:true,unique: true},
  btc_address:{type:String,required:true,unique: true},
  btc_balance:{
  type: Number,
    default: 0.0
  },
  //
  eth_address:{
     type:String,
    required:true,
    unique: true
  },
  eth_balance:{
    type: Number,
    default: 0.0
  },
  //
  bnb_address:{
     type:String,
    required:true,
    unique: true
  },
  bnb_balance:{
      type: Number,
    default: 0.0
  },
  //
  solana_address:{
     type:String,
    required:true,
    unique: true
  },
  solana_balance:{
      type: Number,
    default: 0.0
  },
  //
  doge_address:{
     type:String,
    required:true,
    unique: true
  },
  doge_balance:{
      type: Number,
    default: 0.0
  },
  
    
})

export const userCryptocurrencyAccountModel = mongoose.model('userCryptocurrencyAccountModel', userCryptocurrencyAccount)