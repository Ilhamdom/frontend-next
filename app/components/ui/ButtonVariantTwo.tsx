import { Button } from '@idds/react';
import { IconDownload, IconArrowRight, IconCheck } from '@tabler/icons-react';

export default function ButtonVariantTwo() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Button hierarchy="primary" prefixIcon={<IconDownload size={16} />}>
          Download
        </Button>
        <Button hierarchy="secondary" suffixIcon={<IconArrowRight size={16} />}>
          Continue
        </Button>
        <Button
          hierarchy="primary"
          prefixIcon={<IconCheck size={16} />}
          suffixIcon={<IconArrowRight size={16} />}
        >
          Submit
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Button hierarchy="primary" disabled>
          Disabled
        </Button>
        <Button hierarchy="secondary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
}
