import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src='/images/avatar.png' alt='' className='userShowImg' />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Alvaro Tolentino</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon'></PermIdentity>
              <span className='userShowInfoTitle'>alvaro99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon'></CalendarToday>
              <span className='userShowInfoTitle'>10.12.1981</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon'></PhoneAndroid>
              <span className='userShowInfoTitle'>+51 956566565</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon'></MailOutline>
              <span className='userShowInfoTitle'>alvaro@tolentino.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon'></LocationSearching>
              <span className='userShowInfoTitle'>Lima | PERU</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='alvaro99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full name</label>
                <input
                  type='text'
                  placeholder='Alvaro Tolentino'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='alvaro@tolentino.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+51 956566565'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='Lima | PERU'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='/images/avatar.png'
                  alt=''
                  className='userUpdateImg'
                />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon'></Publish>{' '}
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
