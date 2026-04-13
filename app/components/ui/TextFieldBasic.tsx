import { TextField } from '@idds/react';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

export default function TextFieldBasic() {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col gap-6 max-w-100">
      <TextField
        label="Basic Input"
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Enter text..."
      />
      <TextField
        label="With Prefix Icon"
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Search..."
        prefixIcon={<IconSearch size={16} />}
      />
      <TextField
        label="With Clear Button"
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Type something..."
        showClearButton
      />
    </div>
  );
}
