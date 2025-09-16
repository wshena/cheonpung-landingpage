interface MainNavProps {
  label: string,
  link: string
}

interface IconProps {
  size: number,
  style: string
}

interface TimeLineProps {
  year:string,
  content:string[]
}

interface DroneProductProps {
  label:string,
  image:string,
  features:string[]
}

interface FooterNavProps {
  label:string,
  links: {label:string, link:string}[]
}