export const H1 = ({content}:{content:string}) => {
  return (
    <h1 className="leading-[40px] md:leading-[50px] lg:leading-[65px] mb-5 lg:mb-10 text-black capitalize text-[2rem] md:text-[3rem] lg:text-[4rem]">{content}</h1>
  )
}