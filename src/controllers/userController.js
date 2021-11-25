module.exports = {
    login:(req,res) =>{
        return res.render("login");
    },
    register:(req,res) =>{
        res.render("register");
    },
    admin: (req, res) => {
        let administradores = ['Ada','Greta','Vim','Tim'];
        return res.render("admin",administradores);    
      }        
}