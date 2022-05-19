const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center w-12 sm:w-20 hover:text-white">
      <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
      <p className='group-hover:opacity-100 transition-opacity opacity-0 tracking-widest'>{title}</p>
    </div>
  );
}

export default HeaderItem;