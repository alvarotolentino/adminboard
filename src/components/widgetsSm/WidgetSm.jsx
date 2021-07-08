import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src='/images/avatar.png' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Alvaro Tolentino</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'></Visibility>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/avatar.png' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Alvaro Tolentino</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'></Visibility>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/avatar.png' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Alvaro Tolentino</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'></Visibility>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/avatar.png' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Alvaro Tolentino</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility></Visibility>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/avatar.png' alt='User' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Alvaro Tolentino</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility></Visibility>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
