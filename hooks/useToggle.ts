import { useCallback, useState } from 'react';

export default function useToggle() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    return setToggle((prevState) => !prevState);
  }, []);

  return {
    isShow: toggle,
    handleToggle,
  };
}
