module.exports = (req,res,next) => {
        let administradores = ["Ada","Greta","Vim","Tim"];
        let checkAd = administradores.find(admin => admin === req.query.user)
        if(checkAd){
            res.send("Hola Admin:" + checkAd);
    
        }else{
            res.send("No tienes los privilegios para ingresar");
        }
        next();
    }
