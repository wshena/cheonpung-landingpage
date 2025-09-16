import ScrollAnimate from "@/components/animations/ScrollAnimate";
import ContentContainer from "@/components/ContentContainer";
import ProductCards from "@/components/ProductCards";
import AltrnateTimeline from "@/components/TimeLine";
import { H1 } from "@/components/typography";
import { AboutCheonpung, DroneProduct } from "@/const";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

export default function Home() {
  return (
    <main className="w-full">
      <section id="hero" className="pt-navbar w-full">
        <div className="relative">
          {/* video background */}
          <video
            className="w-full h-[500px]"
            playsInline
            loop
            autoPlay
            preload="auto"
            muted
            style={{
              objectFit: 'cover',
              overflowClipMargin: 'content-box',
              overflow: 'clip'
            }}
          >
            <source src="/video/default.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center text-white">
            <div className="px-5 md:px-0 flex flex-col items-center gap-3">
              <h1 className="text-center font-semibol capitalize text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]">The sky is calling! Let’s ride the wind and go!</h1>
              <button className="cursor-pointer transition-all duration-300 ease-in-out px-5 py-2 rounded-[5px] bg-white text-black hover:bg-black hover:text-white text-sm md:text-md lg:text-xl">Explore Our Drone</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 md:py-10">
        <ContentContainer>
          <ScrollAnimate direction="right">
            <H1 content="What We Do." />
          </ScrollAnimate>
          <ScrollAnimate direction="left">
            <div className="w-full flex items-center justify-center">
              <p className="w-full md:w-[90%] xl:w-[80%] text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-[400]">{AboutCheonpung}</p>
            </div>
          </ScrollAnimate>
        </ContentContainer>
      </section>
      
      <ContentContainer>
        <ScrollAnimate direction="right">
          <H1 content="10 Years of Expertise, Building a Diverse Product Lineup Driven by Market Needs" />
        </ScrollAnimate>
      </ContentContainer>

      <section id="time-line" className="py-5 md:py-10">
        <ContentContainer>
          <div className="flex flex-col items-center gap-5">
            <ScrollAnimate direction="down">
              <H1 content="Milestones" />
            </ScrollAnimate>
            {/* desktop timeline */}
            <div className="hidden md:block">
              <AltrnateTimeline position="alternate" />
            </div>
            {/* mobile timeline */}
            <div className="block md:hidden">
              <AltrnateTimeline position="right" customSx={
                {
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }
              } />
            </div>
          </div>
        </ContentContainer>
      </section>

      <section id="products" className="py-5 md:py-10">
        <ContentContainer>
          <div className="space-y-3 text-center">
            <H1 content="Our Drone" />
          </div>
          <div className="w-full flex items-center justify-center">
            <ul className="flex flex-col md:flex-row gap-7 md:gap-10">
              {DroneProduct.map((item: any, index: number) => {
                let direction: "up" | "down" | "left" | "right" = "up";

                if (index === 0) direction = "right"; // card kiri → masuk dari kanan
                if (index === 1) direction = "up";  // card tengah → masuk dari bawah (y: +50 → 0)
                if (index === 2) direction = "left";  // card kanan → masuk dari kiri

                return (
                  <li key={item.label}>
                    <ScrollAnimate direction={direction}>
                      <ProductCards item={item} />
                    </ScrollAnimate>
                  </li>
                );
              })}
            </ul>
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}
