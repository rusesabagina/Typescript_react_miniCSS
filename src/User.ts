export class User {
     username: string;
     password: string;
     fName: string;
     lName: string;
     email: string;
     image: string;

     constructor(plaintext: any){
        this.username = plaintext.username;
        this.password = plaintext.password;
        this.fName = plaintext.fName;
        this.lName = plaintext.lName;
        this.email = plaintext.email;
        this.image = plaintext.image;
     }
    }
  
    