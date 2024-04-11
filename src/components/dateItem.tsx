type DateItemProps = {
    date: string | number,
    topText?: string,
    bottomText?: string,
    isActive?: boolean,
    onClick?: () => void,
}

const dateItem = (props: DateItemProps) => {
  return (
    <>
      <div className={`text-center rounded-md ${props.isActive && 'bg-[rgb(22,119,255)]'} `}>
        <div className={`text-sm ${props.isActive ? 'invisible' : 'visible'}`}>{props.topText}</div>
        <div className={`text-2xl ${props.isActive ? 'text-white': 'text-red'}`}>{props.date}</div>
        <div className={`text-sm ${props.isActive ? 'invisible' : 'visible'}`}>{props.bottomText}</div>
      </div>
    </>
  );
};

export default dateItem;
