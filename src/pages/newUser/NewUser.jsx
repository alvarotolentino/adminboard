import './newUser.css';

export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='alvaro' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='Alvaro Tolentino' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='alvaro@tolentino.com' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='text' placeholder='+51 95656565' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='Lima | PERU' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select name='active' id='active' className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  );
}
