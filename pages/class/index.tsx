import { NextPage } from 'next';
import LeftSide from 'components/Main/LeftSide';
import Comment from 'components/Comment';

const ClassRoom: NextPage = () => {
  return (
    <div className={'tw-bg-gray-200 tw-h-screen'}>
      <LeftSide />l
      <div className={'tw-w-3/5 tw-ml-10'}>
        <Comment />
      </div>
    </div>
  );
};

export default ClassRoom;
