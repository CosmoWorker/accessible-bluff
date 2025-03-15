module.exports.isAuth=(req, res, next)=>{
  if (req.isAuthenticated()){
    next();
    return;
  }
  res.redirect("/login");
}