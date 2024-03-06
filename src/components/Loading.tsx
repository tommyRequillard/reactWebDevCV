const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-[80px] h-[80px] relative animate-spin-custom">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full absolute ${
              index % 2 === 0 ? 'bg-cvblued' : 'bg-cvbluetitle'
            } animate-delay-${index}`}
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${45 * (index - 1)}deg) translate(30px)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Loading
