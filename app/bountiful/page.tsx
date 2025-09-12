import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export default function BountifulPage() {
  const cityData = getCityData('bountiful');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}