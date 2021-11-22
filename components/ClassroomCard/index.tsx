function ClassroomCard() {
  return (
    <div
      className={
        'w-80 rounded-xl cursor-pointer  shadow hover:bg-gray-100 transition ease-in-out duration-300'
      }
    >
      <div>
        <img
          className={'rounded-t-xl'}
          src="https://shub-storage-siujq.s3.ap-southeast-1.amazonaws.com/profile_images/44-01.jpg"
          alt=""
        />
      </div>
      <div className={'flex justify-between py-3 px-5'}>
        <div>
          <p>Số học</p>
          <p>QABDFWS</p>
        </div>
        <div className={'flex flex-col justify-center'}>Ba chấm</div>
      </div>
    </div>
  );
}

export default ClassroomCard;
