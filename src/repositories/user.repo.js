import { db } from "../db/index.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = async (body) => {
     try {
         const {rows}  =await  db.query(
           `INSERT INTO users (fullname,email,password,username,avatar,cover_image) 
           VALUES ($1,$2,$3,$4,$5,$6)
           RETURNING fullname,username,email,avatar,cover_image
           `,
            [body.fullname,body.email,body.password,body.username,body.avatar,body.cover_image]
         )
         
         return rows[0]
     } catch (error) {
        throw new ApiError(406,error?.message)
     }
}
const findUserbyEmailandID= async (email,username) => {
          const {rows} = await db.query(
                    `SELECT * FROM users WHERE email=$1 OR username=$2
                     
                    `,  
                    [email,username]
                    )
                    console.log("find row" , rows);
                    
                    if (!rows) {
                             return null
                    }
                    return rows[0]
}



const loginUser = async ({email,refresh_token}) => {
   // email
   // password
   //  accesstoken and refresToken 
   
   const query = `
       UPDATE users
       SET refresh_token = $1
       WHERE $2
      `
   const values = [refresh_token,email]
   const {rows} = await db.query(query,values)
   return rows[0]

}





export default {registerUser,findUserbyEmailandID,loginUser}