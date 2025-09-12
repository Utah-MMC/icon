import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export default function DraperPage() {
  const cityData = getCityData('draper');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}