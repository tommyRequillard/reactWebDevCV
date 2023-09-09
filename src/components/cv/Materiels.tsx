const mobile = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
  stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
</svg>
const tablette = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
  stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"/>
</svg>
const desktop = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
  stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round"
    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
</svg>

const materielsIcons = [mobile, tablette, desktop]

const Materiels = () => {
  return (
    <>
      <h3 className="flex justify-start text-sm font-semibold mt-5 mb-2">Matériels</h3>
      <div className="flex w-full flex-col items-center mx-auto mb-5">
        <ul className="flex flex-row flex-wrap justify-around">
          {materielsIcons.map((materielsIcons, index) => (
            <li key={index} className="flex flex-col justify-center">
              <div className="flex justify-center flex-col items-center"> {materielsIcons}
                <div className="flex justify-center items-center gap-2">
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Materiels
