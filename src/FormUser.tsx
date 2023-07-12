
function FormUser(){
return (
  
    <form>
  <fieldset className = "FieldSetMain">
    <legend>New User</legend>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="username">Username</label>
      </div>
      <div className="col-sm-8">
        <input type="text" id="Username" placeholder="Username"/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="password"> Password</label>
      </div>
      <div className="col-sm-8">
        <input type="password" id="password" placeholder="Password"/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="fname">First name</label>
      </div>
      <div className="col-sm-8">
        <input type="text" id="fname" placeholder="First name"/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="lname">Last name</label>
      </div>
      <div className="col-sm-8">
        <input type="text" id="lname" placeholder="Last name"/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="email">Email</label>
      </div>
      <div className="col-sm-8">
        <input type="email" id="email" placeholder="Email"/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="image">Image</label>
      </div>
      <div className="col-sm-8">
        <input type="file" id="image" accept="image/png, image/jpeg"/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <input type="submit" id="submit" className="bordered"/>
      </div>
    </div>
  </fieldset>
</form>
)
}

export default FormUser;