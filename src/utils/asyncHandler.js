const AsyncHandler =(func) => {
   return  async (res,req,next)=>{
          await Promise.all(func(res,req,next)).catch((error)=>{
              return next(error)
          })
    }
}   


