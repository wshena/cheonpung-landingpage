"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineContent as Content } from "@/const";
import ScrollAnimate from "./animations/ScrollAnimate";

type PositionType =
  | "left"
  | "right"
  | "alternate"
  | "alternate-reverse"
  | undefined;

const AltrnateTimeline = ({
  position,
  customSx,
}: {
  position: PositionType;
  customSx?: any;
}) => {
  return (
    <Timeline position={position} sx={customSx}>
      {Content.map((item: TimeLineProps, index: number) => {
        // Tentukan arah animasi
        let direction: "up" | "left" | "right" = "up";

        if (position === "left") {
          direction = "right"; // content selalu di kiri → animasi dari kanan
        } else if (position === "right") {
          direction = "left"; // content selalu di kanan → animasi dari kiri
        } else if (position === "alternate" || position === "alternate-reverse") {
          direction = index % 2 === 0 ? "right" : "left"; 
          // item genap di kiri → animasi dari kanan
          // item ganjil di kanan → animasi dari kiri
        }

        return (
          <TimelineItem key={item.year}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <ScrollAnimate direction={direction}>
                <h3 className="text-md font-semibold">{item.year}</h3>
                <ul className="flex flex-col gap-1">
                  {item.content.map((c: string, idx: number) => (
                    <li key={idx}>
                      <span className="text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimate>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default AltrnateTimeline;
