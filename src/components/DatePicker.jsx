import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function DatePicker() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ padding: '0px', display: 'flex', justifyContent: 'center',height:'290px' }}>
        <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
    </LocalizationProvider>
  );
}

export default DatePicker;
