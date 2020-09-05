import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { RegionData } from './region-data.service';

export class AppData implements InMemoryDbService {

  createDb() {
    return {
      regions: RegionData.regions
    };
  }
}
