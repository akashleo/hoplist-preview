import React from 'react';
import { ArrowRight, CircleDot, CheckCircle } from 'lucide-react';

export interface HopItem {
  hopTime: number;
  name: string;
}

export interface HopListProps {
  hopChunks: HopItem[][];
  startIcon?: React.ReactNode;
  stepIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  startColor?: string;
  stepColor?: string;
  endColor?: string;
  timelineColor?: string;
}

const timestampToDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString();
};

export function HopList({ 
  hopChunks, 
  startIcon = <ArrowRight className="w-5 h-5" />,
  stepIcon = <CircleDot className="w-5 h-5" />,
  endIcon = <CheckCircle className="w-5 h-5" />,
  startColor = "border-gray-500",
  stepColor = "border-gray-600",
  endColor = "border-gray-400",
  timelineColor = "bg-gray-500"
}: HopListProps) {
  return (
    <div className="flex flex-col justify-center">
      {hopChunks.map((item, index) => (
        <div key={index} className="flex flex-row justify-center">
          {index === 0 && (
            <div className={`h-10 w-10 border-4 ${startColor} rounded-full flex justify-center items-center`}>
              {startIcon}
            </div>
          )}
          {item.map(({ hopTime, name }, i) => (
            <div key={`${index}-${i}`} className="flex flex-col">
              <div
                className={`flex flex-row items-center ${
                  i === item.length - 1 && index < hopChunks.length - 1
                    ? 'max-w-[17.5rem] justify-center'
                    : 'max-w-[12.5rem] justify-end'
                } p-0 m-0`}
              >
                {index > 0 && i === 0 ? (
                  <div className={`${timelineColor} h-1 w-20`}></div>
                ) : (
                  <div className={`${timelineColor} h-1 w-40`}></div>
                )}
                {index === hopChunks.length - 1 && i === item.length - 1 ? (
                  <div className={`h-10 w-10 border-4 ${endColor} rounded-full flex justify-center items-center`}>
                    {endIcon}
                  </div>
                ) : (
                  <div className={`h-10 w-10 border-[3px] ${stepColor} rounded-full flex justify-center items-center`}>
                    {stepIcon}
                  </div>
                )}
                {i === item.length - 1 && index < hopChunks.length - 1 && (
                  <div className={`${timelineColor} h-1 w-20`}></div>
                )}
              </div>
              <div className="flex justify-end max-w-[12.5rem] font-mono h-8">
                <span>
                  <a>{name}</a>
                </span>
              </div>
              <div className="flex justify-end max-w-[12.5rem] font-mono text-xs h-8">
                <span>{timestampToDate(hopTime)}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HopList;