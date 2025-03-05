import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Charta() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <Box sx={{ width: '100%',  marginTop:4}}>
      <BarChart
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        
      />
     
      <Typography id="input-item-number" gutterBottom>
        Number of Day
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      />
      <Typography id="input-series-number" gutterBottom>
        Number of Class
      </Typography>
      <Slider
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        aria-labelledby="input-series-number"
      />
    </Box>
  );
}

const highlightScope = {
  highlight: 'series',
  fade: 'global',
} as const;

const series = [
  {
    label: 'Class 1',
    data: [
      24, 22, 30, 18, 14, 13, 18, 21, 42, 35, 24, 17, 49,
      18, 26, 36, 21, 36, 17, 32,
    ],
  },
  {
    label: 'Class 2',
    data: [
      23,28,38,48,18,28,49,42,18,19,20,24,37,9,48,29,45,28,30,46
    ],
  },
  {
    label: 'Class 3',
    data: [
      42,18,19,20,24,37,9,48,29,45,28,30,46,28,49,42,18,19,20,24
    ],
  },
  {
    label: 'Class 4',
    data: [
      24,37,9,48,29,45,28,30,46,28,49,42,20,24,37,9,48,29,19,20
    ],
  },
  {
    label: 'Class 5',
    data: [
      28,30,46,28,49,42,20,24,37,9,48,29,45,28,30,46,28,49,42,29
    ],
  },
  {
    label: 'Class 6',
    data: [
      48,28,38,48,18,28,49,42,18,19,20,24,37,9,48,29,45,28,30,46
    ],
  },
  {
    label: 'Class 7',
    data: [
      24,37,9,48,29,45,28,30,46,28,49,42,29,18,28,49,42,18,19,24
    ],
  },
  {
    label: 'Class 8',
    data: [
      49,42,18,19,20,24,37,9,48,29,28,30,46,28,49,42,29,18,28,49
    ],
  },
  {
    label: 'Class 9',
    data: [
      19,20,24,37,9,48,29,28,30,46,28,49,42,29,49,42,29,18,28,49
    ],
  },
  {
    label: 'Class 10',
    data: [
      37,9,48,29,45,28,30,46,28,49,42,29,18,28,49,42,18,29,18,28
    ],
  },
].map((s) => ({ ...s, highlightScope }));
