import { Input as AntdInput } from 'antd';
import styled from 'styled-components';

const CustomAntdInput = styled(AntdInput)`
  height: 100%;
  border-radius: 0.5rem;
`;

interface Prop {
  id?: string;
  label?: string;
}

function Input({ id, label }: Prop) {
  return (
    <div className={'tw-h-full'}>
      <label htmlFor={id}>{label}</label>
      <CustomAntdInput id={id} />
    </div>
  );
}

export default Input;
