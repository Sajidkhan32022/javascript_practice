function Employee(name){
    this.name = name;
    }

    Employee.prototype.info = function(){
    console.log("Name is", this.name, "Works for", this.company);
    }

    var julie = new Employee('Julie');
    var annie = new Employee('Annie');

    Employee.prototype.setcompany = function (companyname){
        this.company = companyname       
    }

    julie.setcompany('Google')
    annie.setcompany('Google')
    julie.info();
    annie.info();

    //write your code here such that calling julie.info() and annie.info() prints
    // Name is Julie Works for Google
    // Name is Annie Works for Microsoft
    julie.info();
    annie.setcompany('Microsoft')
    annie.info();

    //write your code here such that calling julie.info() and annie.info() prints
    // Name is Julie Works for SpaceX
    // Name is Annie Works for Microsoft
    julie.setcompany('SpaceX')
    julie.info();
    annie.setcompany('Microsoft')
    annie.info();