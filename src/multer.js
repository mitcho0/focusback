const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req,file, callback) =>callback(null, __dirname + '/../uploud'),
    filename:(req, file, callback)=>callback(null,file.fieldname + '-' + Date.now() + '.jpg')
})

const uploud = multer({storage});

module.exports= uploud;