import CommentItem from 'components/Comment/CommentItem';
import Comments from 'factory/Comment';
import useToggle from 'hooks/useToggle';
import Avatar from 'components/Avatar';
import { DynamicInput as Input } from 'components/Dynamic';

function Comment() {
  const { isShow, handleToggle } = useToggle();

  return (
    <div className={'tw-bg-white tw-rounded tw-p-4'}>
      <div>
        <CommentItem {...Comments[0]} content={'abc'} />
        <div className={'tw-mt-3'}>Content</div>
      </div>
      <hr />
      <div className={'tw-flex tw-justify-between'}>
        <p>2 bình luận</p>
        <div onClick={handleToggle} className={'tw-cursor-pointer'}>
          {isShow ? 'Ẩn' : 'Hiện'} bình luận
        </div>
      </div>
      {isShow && (
        <div>
          {Comments.map((comment) => (
            <CommentItem {...comment} />
          ))}
        </div>
      )}

      <div className={'tw-mt-5 tw-flex'}>
        <Avatar src={Comments[0].avatar} />
        <div className={'tw-flex tw-justify-center tw-flex-col tw-ml-2'}>
          <div className={'h-full'}>
            <Input id={'comment'} />
          </div>
          {/*<p>Enter để gửi</p>*/}
        </div>
      </div>
    </div>
  );
}

export default Comment;
