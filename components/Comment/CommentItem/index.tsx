import Avatar from 'components/Avatar';

interface Prop {
  avatar: string;
  username: string;
  time: string;
  content: string;
}

function CommentItem({ avatar, username, time, content }: Prop) {
  return (
    <div className={'tw-flex'}>
      <Avatar src={avatar} />
      <div className={'tw-flex tw-flex-col tw-ml-2'}>
        <div className="tw-flex">
          <div>
            <p className={'tw-m-0 tw-font-semibold'}>{username}</p>
          </div>
          <div className={'tw-flex tw-flex-col tw-justify-center tw-h-full'}>
            <div className={'tw-ml-2 tw-text-sm tw-font-light'}>{time}</div>
          </div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default CommentItem;
