import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PersonOutline,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
            <li className='sidebarListItem'>
              <LineStyle className='sidebarIcon'></LineStyle>
              Home
            </li>
            </Link>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon'></Timeline>
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon'></TrendingUp>
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem'>
                <PersonOutline className='sidebarIcon'></PersonOutline>
                Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sidebarListItem'>
                <Storefront className='sidebarIcon'></Storefront>
                Products
              </li>
            </Link>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcon'></AttachMoney>
              Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon'></BarChart>
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailOutline className='sidebarIcon'></MailOutline>
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed className='sidebarIcon'></DynamicFeed>
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutline className='sidebarIcon'></ChatBubbleOutline>
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <WorkOutline className='sidebarIcon'></WorkOutline>
              Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon'></Timeline>
              Analytics
            </li>
            <li className='sidebarListItem'>
              <Report className='sidebarIcon'></Report>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
