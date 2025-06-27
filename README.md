# React Hop Timeline

A React component for displaying timeline hops with a beautiful and intuitive interface. Perfect for visualizing process flows, project milestones, order tracking, and workflow stages.

## Installation

```bash
npm install hoplist
```

## Basic Usage

```jsx
import { HopList } from 'hoplist';

const hopData = [
  [
    { hopTime: 1709347200000, name: "Start" }
  ],
  [
    { hopTime: 1709347200000, name: "Middle" },
    { hopTime: 1709347200000, name: "Process" }
  ],
  [
    { hopTime: 1709347200000, name: "End" }
  ]
];

function App() {
  return (
    <HopList hopChunks={hopData} />
  );
}
```

## Custom Icons

You can customize the start, step, and end icons to match your specific use case:

```jsx
import { HopList } from 'hoplist';
import { Play, Settings, CheckCircle } from 'lucide-react';

const hopData = [
  [{ hopTime: Date.now(), name: "Started" }],
  [{ hopTime: Date.now(), name: "Processing" }],
  [{ hopTime: Date.now(), name: "Completed" }]
];

function App() {
  return (
    <HopList 
      hopChunks={hopData}
      startIcon={<Play className="w-5 h-5 text-orange-600" />}
      stepIcon={<Settings className="w-5 h-5 text-blue-600" />}
      endIcon={<CheckCircle className="w-5 h-5 text-green-600" />}
    />
  );
}
```

## Custom Colors

You can customize the colors of the circles and timeline to match your brand:

```jsx
import { HopList } from 'hoplist';

function App() {
  return (
    <HopList 
      hopChunks={hopData}
      startColor="border-purple-500"
      stepColor="border-purple-600"
      endColor="border-purple-400"
      timelineColor="bg-purple-500"
    />
  );
}
```

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| hopChunks | `Array<Array<HopItem>>` | Array of hop chunks where each chunk contains hop items | Required |
| startIcon | `React.ReactNode` | Custom icon for the start step | `<ArrowRight />` |
| stepIcon | `React.ReactNode` | Custom icon for intermediate steps | `<CircleDot />` |
| endIcon | `React.ReactNode` | Custom icon for the end step | `<CheckCircle />` |
| startColor | `string` | Tailwind CSS border color class for start circle | `"border-gray-500"` |
| stepColor | `string` | Tailwind CSS border color class for step circles | `"border-gray-600"` |
| endColor | `string` | Tailwind CSS border color class for end circle | `"border-gray-400"` |
| timelineColor | `string` | Tailwind CSS background color class for timeline | `"bg-gray-500"` |

### HopItem

| Property | Type | Description |
|----------|------|-------------|
| hopTime | number | Timestamp for the hop |
| name | string | Name or description of the hop |

## Complete Usage Guide

### Understanding hopChunks

The `hopChunks` prop is the core data structure that defines your timeline. It's an array of arrays, where:

- **Outer array**: Represents the main phases or stages of your process
- **Inner arrays**: Contain individual steps that happen within each phase
- **Each step**: Is a `HopItem` object with `hopTime` (timestamp) and `name` (description)

```jsx
const hopChunks = [
  // Phase 1: Single step
  [
    { hopTime: 1709347200000, name: "Project Kickoff" }
  ],
  
  // Phase 2: Multiple parallel steps
  [
    { hopTime: 1709433600000, name: "Requirements Analysis" },
    { hopTime: 1709520000000, name: "UI/UX Design" },
    { hopTime: 1709606400000, name: "Technical Planning" }
  ],
  
  // Phase 3: Sequential steps in same phase
  [
    { hopTime: 1709692800000, name: "Development" },
    { hopTime: 1709779200000, name: "Code Review" }
  ],
  
  // Phase 4: Final step
  [
    { hopTime: 1709865600000, name: "Deployment" }
  ]
];
```

### Icon Customization

Icons can be any React component, typically from icon libraries like Lucide React:

```jsx
import { 
  Rocket,        // For start
  Cog,          // For steps
  Trophy,       // For end
  User,         // Custom icons
  Calendar,
  Mail
} from 'lucide-react';

<HopList 
  hopChunks={hopChunks}
  startIcon={<Rocket className="w-5 h-5 text-blue-600" />}
  stepIcon={<Cog className="w-4 h-4 text-gray-600" />}
  endIcon={<Trophy className="w-5 h-5 text-yellow-600" />}
/>
```

### Color Customization

Colors use Tailwind CSS classes for consistency and theming:

```jsx
// Professional blue theme
<HopList 
  hopChunks={hopChunks}
  startColor="border-blue-500"
  stepColor="border-blue-600"
  endColor="border-blue-400"
  timelineColor="bg-blue-500"
/>

// Success green theme
<HopList 
  hopChunks={hopChunks}
  startColor="border-green-500"
  stepColor="border-green-600"
  endColor="border-green-400"
  timelineColor="bg-green-500"
/>

// Warning amber theme
<HopList 
  hopChunks={hopChunks}
  startColor="border-amber-500"
  stepColor="border-amber-600"
  endColor="border-amber-400"
  timelineColor="bg-amber-500"
/>
```

## Business Use Cases

### E-commerce Order Processing
```jsx
import { ShoppingCart, CreditCard, Warehouse, Truck, Home } from 'lucide-react';

const orderData = [
  [{ hopTime: Date.now() - 86400000 * 5, name: "Order Placed" }],
  [{ hopTime: Date.now() - 86400000 * 4, name: "Payment Processed" }],
  [{ hopTime: Date.now() - 86400000 * 2, name: "Shipped" }],
  [{ hopTime: Date.now(), name: "Delivered" }]
];

<HopList 
  hopChunks={orderData}
  startIcon={<ShoppingCart className="w-5 h-5 text-blue-600" />}
  stepIcon={<Truck className="w-5 h-5 text-orange-600" />}
  endIcon={<Home className="w-5 h-5 text-green-600" />}
/>
```

### Content Publishing Workflow
```jsx
import { FileText, Eye, MessageSquare, Send } from 'lucide-react';

<HopList 
  hopChunks={contentData}
  startIcon={<FileText className="w-5 h-5 text-purple-600" />}
  stepIcon={<Eye className="w-5 h-5 text-blue-600" />}
  endIcon={<Send className="w-5 h-5 text-green-600" />}
/>
```

### HR Recruitment Process
```jsx
import { Briefcase, Users, UserCheck, Handshake } from 'lucide-react';

<HopList 
  hopChunks={recruitmentData}
  startIcon={<Briefcase className="w-5 h-5 text-indigo-600" />}
  stepIcon={<Users className="w-5 h-5 text-blue-600" />}
  endIcon={<Handshake className="w-5 h-5 text-green-600" />}
/>
```

## Features

- **Visual Flow**: Connected circles and lines show progression from start to finish
- **Timestamps**: Each hop displays formatted date and time
- **Grouped Steps**: Multiple parallel steps can be grouped in the same phase
- **Customizable Icons**: Use any React component as start, step, or end icons
- **Customizable Colors**: Match your brand colors with Tailwind CSS classes
- **Responsive Design**: Works well on different screen sizes
- **TypeScript Support**: Full TypeScript definitions included

## License

MIT