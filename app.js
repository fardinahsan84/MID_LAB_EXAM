var express =         require('express');
var ejs 			=       require('ejs');
var bodyParser =      require('body-parser');
var exSession =       require('express-session');
var expressValidator= require('express-validator');
var cookieParser	=   require('cookie-parser');
var fileUpload    =      require('express-fileupload');
var path					=			 require('path');

var login =           require('./controller/login');
var logout=           require('./controller/logout');
var admin =           require('./controller/admin');
var employee=         require('./controller/employee');

var app =           express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//middleware

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUnitialized: true,resave: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/login',login);
app.use('/logout',logout);
app.use('/admin',admin);
app.use('/employee',employee);

//routes(app);


app.listen(58822,function(){
  console.log('express http server started at ....58822');
})
