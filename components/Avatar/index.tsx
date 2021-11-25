import { useMemo } from 'react';
import clsx from 'clsx';

interface Prop {
  src: string;
  size?: 'medium';
}

function Avatar({ src, size = 'medium' }: Prop) {
  const calculateSize = useMemo(() => {
    const calculate = {
      medium: 'tw-w-10 tw-h-10',
    };

    return calculate[size];
  }, [size]);

  return (
    <div>
      <img
        className={clsx(['tw-rounded-full  tw-object-cover', calculateSize])}
        src={src}
        alt=""
      />
    </div>
  );
}

export default Avatar;
