import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetsSm/WidgetSm';
import WidgetLg from '../../components/widgetsLg/WidgetLg';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo></FeaturedInfo>
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      ></Chart>
      <div className='homeWidgets'>
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
}
