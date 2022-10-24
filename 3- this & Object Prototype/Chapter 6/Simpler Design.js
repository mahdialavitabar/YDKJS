//parent class
function Controller() {
    this.errors = []
}
Controller.prototype.showDialog(title,msg) ={
    //display title & message to user in dialog
}
Controller.prototype.success = function (msg) {
    this.showDialog("Success",msg)
}
Controller.prototype.failure = function (err) {
    this.errors.push(err)
    this.showDialog("Error",err)
}
//child class
function LoginController() {
    Controller.call(this)
}
//Link child class to parent
LoginController.prototype = Object.create(Controller.prototype)
LoginController.prototype.getUser = function() {
    return document.getElementById("Login_username").value 
}
LoginController.prototype.getPassword = function() {
    return document.getElementById("Login_password").value 
}
LoginController.prototype.validateEntry = function(user,pw) {
    user = user || this.getUser()
    pw = pw || this.getPassword()
    if(!(user&&pw)){
        return this.failure("Please enter a username & password!")
    }
    else if (user.length <5) {
        return this.failure("Password must be 5+ characters!")
    }
    //got here? validated!
    return true
}
//Override to extend bas failure()
LoginController.prototype.failure= function(err) {
    //super call
    Controller.prototype.failure.call(
        this,
        "Login invalid: " +err
    )
}
//child class
function AuthController(login) {
    Controller.call(this)
    //in addition to inheritance, we also need composition
    this.login = login
}
//link child class to parent
AuthController.prototype= Object.create(Controller.prototype)
AuthController.prototype.server= function(url,data) {
    return $.ajax({
        url:url,
        data:data
    })
}
AuthController.prototype.checkAuth = function() {
    var user = this.login.getUser()
    var pw = this.login.getPassword()
    if(this.login.validateEntry(user,pw)){
        this.server("/check.auth", {
            user:user,
            pw:pw
        })
        .then(this.success.bind(this))
        .fail(this.failure.bind(this))
    }
}
//override to extend base success()
AuthController.prototype.success=function(){
    //super call
    Controller.prototype.success.call(this,"Authenticated")
}
//Override to extend bas failure()
AuthController.prototype.failure = function(err){
    //super call 
    Controller.prototype.failure.call(
        this,
        "Auth Failed:" + err
    )
}
var auth = new AuthController()
auth.checkAuth (
    // in addition to inheritance, we also need composition
    new LoginController()
)
