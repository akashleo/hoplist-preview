declare module 'hoplist' {
  export interface HopItem {
    hopTime: number | string;
    name: string;
  }

  export interface HopListProps {
    hops: HopItem[];
    startIconColor?: string;
    timelineColor?: string;
    stepIconColor?: string;
    endIconColor?: string;
    startIcon?: React.ComponentType;
    stepIcon?: React.ComponentType;
    endIcon?: React.ComponentType;
  }

  const HopList: React.FC<HopListProps>;
  export default HopList;
} 