import { Injectable } from '@angular/core';

import { Region } from './region.interface';

@Injectable()
export class RegionData {
  static regions: Region[] = [
    { id: 1, state: 'Andhra Pradesh', capital: 'Amaravati' },
    { id: 2, state: 'Arunachal Pradesh', capital: 'Itanagar' },
    { id: 3, state: 'Assam', capital: 'Dispur' },
    { id: 4, state: 'Bihar', capital: 'Patna' },
    { id: 5, state: 'Chattisgarh', capital: 'Raipur' },
    { id: 6, state: 'Goa', capital: 'Panaji' },
    { id: 7, state: 'Gujarat', capital: 'Gandhinagar' },
    { id: 8, state: 'Haryana', capital: 'Chandigarh' },
    { id: 9, state: 'Himachal Pradesh', capital: 'Shimla' },
    { id: 10, state: 'Jharkhand', capital: 'Ranchi' },
    { id: 11, state: 'Karnataka', capital: 'Bengaluru' },
    { id: 12, state: 'Kerala', capital: 'Thiruvananthapuram' },
    { id: 13, state: 'Madhya Pradesh', capital: 'Bhopal' },
    { id: 14, state: 'Maharashtra', capital: 'Mumbai' },
    { id: 15, state: 'Manipur', capital: 'Imphal' },
    { id: 16, state: 'Meghalaya', capital: 'Shillong' },
    { id: 17, state: 'Mizoram', capital: 'Aizawl' },
    { id: 18, state: 'Nagaland', capital: 'Kohima' },
    { id: 19, state: 'Odisha', capital: 'Bhubaneshwar' },
    { id: 20, state: 'Punjab', capital: 'Chandigarh' },
    { id: 21, state: 'Rajasthan', capital: 'Jaipur' },
    { id: 22, state: 'Sikkim', capital: 'Gangtok' },
    { id: 23, state: 'Tamil Nadu', capital: 'Chennai' },
    { id: 24, state: 'Telangana', capital: 'Hyderabad' },
    { id: 25, state: 'Tripura', capital: 'Agartala' },
    { id: 26, state: 'Uttarakhand', capital: 'Dehradun' },
    { id: 27, state: 'Uttar Pradesh', capital: 'Lucknow' },
    { id: 28, state: 'West Bengal', capital: 'Kolkata' },
    { id: 29, state: 'Andaman and Nicobar Islands', capital: 'Port Blair' },
    { id: 30, state: 'Dadra & Nagar Haveli and Daman & Diu', capital: 'Daman' },
    { id: 31, state: 'Jammu & Kashmir', capital: 'Srinagar & Jammu' },
    { id: 32, state: 'Lakshadweep', capital: 'Kavaratti' },
    { id: 33, state: 'Chandigarh', capital: 'Chandigarh' },
    { id: 34, state: 'The Government of NCT of Delhi', capital: 'Delhi' },
    { id: 35, state: 'Ladakh', capital: 'Leh' },
    { id: 36, state: 'Puducherry', capital: 'Puducherry' }
  ];
}
