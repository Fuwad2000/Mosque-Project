"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Period } from '@/interfaces/PrayerPeriods';

export default function Database() {
    const [prayerPeriods, setPrayerPeriods] = useState<Period[]>([]);

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        setPrayerPeriods(response.data);
      })
      .catch(error => {
        console.error('Error fetching prayer periods:', error);
      });
  }, []);

  return (
    <div>
      <h1>Prayer Periods</h1>
      <ul>
        {prayerPeriods.map((period) => (
          <li key={period.start_date.toLocaleString()}>{period.start_date.toLocaleString()}: {period.end_date.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

