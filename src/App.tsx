import React from 'react';
import { HopList } from './components/HopList';
import ReactMarkdown from 'react-markdown';
import { Play, Settings, Package, Truck, CheckCircle2, Rocket, Code, TestTube, ShoppingCart, CreditCard, Warehouse, MapPin, Home, FileText, Eye, MessageSquare, ThumbsUp, Send, Users, Calendar, Presentation as PresentationChart, Award, Briefcase, UserCheck, Building, Handshake, Stethoscope, Pill, FlaskConical, FileCheck, GraduationCap, BookOpen, PenTool, Trophy, Wrench, Cog, Bug, Zap } from 'lucide-react';

function App() {
  // Sample data to demonstrate the timeline component
  const sampleHopData = [
    [
      { hopTime: 1709347200000, name: "Project Started" }
    ],
    [
      { hopTime: 1709433600000, name: "Requirements Gathered" },
      { hopTime: 1709520000000, name: "Design Phase" }
    ],
    [
      { hopTime: 1709606400000, name: "Development" },
      { hopTime: 1709692800000, name: "Code Review" },
      { hopTime: 1709779200000, name: "Testing" }
    ],
    [
      { hopTime: 1709865600000, name: "Deployment" }
    ]
  ];

  // E-commerce Order Processing
  const ecommerceData = [
    [
      { hopTime: Date.now() - 86400000 * 5, name: "Order Placed" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 4, name: "Payment Processed" },
      { hopTime: Date.now() - 86400000 * 3, name: "Inventory Check" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 2, name: "Shipped" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 1, name: "Out for Delivery" }
    ],
    [
      { hopTime: Date.now(), name: "Delivered" }
    ]
  ];

  // Content Publishing Workflow
  const contentData = [
    [
      { hopTime: Date.now() - 86400000 * 7, name: "Draft Created" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 5, name: "Content Review" },
      { hopTime: Date.now() - 86400000 * 4, name: "Legal Review" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 2, name: "Approved" }
    ],
    [
      { hopTime: Date.now(), name: "Published" }
    ]
  ];

  // Marketing Campaign
  const marketingData = [
    [
      { hopTime: Date.now() - 86400000 * 14, name: "Campaign Planning" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 10, name: "Content Creation" },
      { hopTime: Date.now() - 86400000 * 8, name: "Audience Research" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 5, name: "Campaign Launch" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 2, name: "Performance Analysis" }
    ],
    [
      { hopTime: Date.now(), name: "Campaign Complete" }
    ]
  ];

  // HR Recruitment Process
  const recruitmentData = [
    [
      { hopTime: Date.now() - 86400000 * 21, name: "Job Posted" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 14, name: "Applications Received" },
      { hopTime: Date.now() - 86400000 * 10, name: "Initial Screening" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 7, name: "Interviews" },
      { hopTime: Date.now() - 86400000 * 5, name: "Reference Check" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 2, name: "Offer Extended" }
    ],
    [
      { hopTime: Date.now(), name: "Candidate Hired" }
    ]
  ];

  // Medical Treatment Process
  const medicalData = [
    [
      { hopTime: Date.now() - 86400000 * 10, name: "Initial Consultation" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 7, name: "Diagnosis" },
      { hopTime: Date.now() - 86400000 * 5, name: "Lab Tests" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 3, name: "Treatment Plan" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 1, name: "Follow-up" }
    ],
    [
      { hopTime: Date.now(), name: "Recovery Complete" }
    ]
  ];

  // Educational Course Progress
  const educationData = [
    [
      { hopTime: Date.now() - 86400000 * 30, name: "Course Enrollment" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 20, name: "Module 1 Complete" },
      { hopTime: Date.now() - 86400000 * 15, name: "Module 2 Complete" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 10, name: "Midterm Exam" },
      { hopTime: Date.now() - 86400000 * 5, name: "Final Project" }
    ],
    [
      { hopTime: Date.now(), name: "Course Completed" }
    ]
  ];

  // Software Bug Fix Process
  const bugFixData = [
    [
      { hopTime: Date.now() - 86400000 * 5, name: "Bug Reported" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 4, name: "Bug Triaged" },
      { hopTime: Date.now() - 86400000 * 3, name: "Investigation" }
    ],
    [
      { hopTime: Date.now() - 86400000 * 2, name: "Fix Developed" },
      { hopTime: Date.now() - 86400000 * 1, name: "Testing" }
    ],
    [
      { hopTime: Date.now(), name: "Fix Deployed" }
    ]
  ];

  const readmeContent = `# React Hop Timeline

A React component for displaying timeline hops with a beautiful and intuitive interface. Perfect for visualizing process flows, project milestones, order tracking, and workflow stages.

## Installation

\`\`\`bash
npm install hoplist
\`\`\`

## Basic Usage

\`\`\`jsx
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
\`\`\`

## Custom Icons

You can customize the start, step, and end icons to match your specific use case:

\`\`\`jsx
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
\`\`\`

## Custom Colors

You can customize the colors of the circles and timeline to match your brand:

\`\`\`jsx
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
\`\`\`

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| hopChunks | \`Array<Array<HopItem>>\` | Array of hop chunks where each chunk contains hop items | Required |
| startIcon | \`React.ReactNode\` | Custom icon for the start step | \`<ArrowRight />\` |
| stepIcon | \`React.ReactNode\` | Custom icon for intermediate steps | \`<CircleDot />\` |
| endIcon | \`React.ReactNode\` | Custom icon for the end step | \`<CheckCircle />\` |
| startColor | \`string\` | Tailwind CSS border color class for start circle | \`"border-gray-500"\` |
| stepColor | \`string\` | Tailwind CSS border color class for step circles | \`"border-gray-600"\` |
| endColor | \`string\` | Tailwind CSS border color class for end circle | \`"border-gray-400"\` |
| timelineColor | \`string\` | Tailwind CSS background color class for timeline | \`"bg-gray-500"\` |

### HopItem

| Property | Type | Description |
|----------|------|-------------|
| hopTime | number | Timestamp for the hop |
| name | string | Name or description of the hop |

## Complete Usage Guide

### Understanding hopChunks

The \`hopChunks\` prop is the core data structure that defines your timeline. It's an array of arrays, where:

- **Outer array**: Represents the main phases or stages of your process
- **Inner arrays**: Contain individual steps that happen within each phase
- **Each step**: Is a \`HopItem\` object with \`hopTime\` (timestamp) and \`name\` (description)

\`\`\`jsx
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
\`\`\`

### Icon Customization

Icons can be any React component, typically from icon libraries like Lucide React:

\`\`\`jsx
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
\`\`\`

### Color Customization

Colors use Tailwind CSS classes for consistency and theming:

\`\`\`jsx
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
\`\`\`

## Business Use Cases

### E-commerce Order Processing
\`\`\`jsx
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
\`\`\`

### Content Publishing Workflow
\`\`\`jsx
import { FileText, Eye, MessageSquare, Send } from 'lucide-react';

<HopList 
  hopChunks={contentData}
  startIcon={<FileText className="w-5 h-5 text-purple-600" />}
  stepIcon={<Eye className="w-5 h-5 text-blue-600" />}
  endIcon={<Send className="w-5 h-5 text-green-600" />}
/>
\`\`\`

### HR Recruitment Process
\`\`\`jsx
import { Briefcase, Users, UserCheck, Handshake } from 'lucide-react';

<HopList 
  hopChunks={recruitmentData}
  startIcon={<Briefcase className="w-5 h-5 text-indigo-600" />}
  stepIcon={<Users className="w-5 h-5 text-blue-600" />}
  endIcon={<Handshake className="w-5 h-5 text-green-600" />}
/>
\`\`\`

## Features

- **Visual Flow**: Connected circles and lines show progression from start to finish
- **Timestamps**: Each hop displays formatted date and time
- **Grouped Steps**: Multiple parallel steps can be grouped in the same phase
- **Customizable Icons**: Use any React component as start, step, or end icons
- **Customizable Colors**: Match your brand colors with Tailwind CSS classes
- **Responsive Design**: Works well on different screen sizes
- **TypeScript Support**: Full TypeScript definitions included

## License

MIT`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          HopList Timeline Component
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          A React component for visualizing process flows and timelines with connected steps
        </p>

        <div className="space-y-16">
          {/* Default Example */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              📋 Default Styling - Project Development Timeline
            </h2>
            <div className="overflow-x-auto">
              <HopList hopChunks={sampleHopData} />
            </div>
          </div>

          {/* E-commerce Order Processing */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🛒 E-commerce Order Processing
            </h2>
            <div className="overflow-x-auto">
              <HopList 
                hopChunks={ecommerceData}
                startIcon={<ShoppingCart className="w-5 h-5 text-blue-600" />}
                stepIcon={<CreditCard className="w-5 h-5 text-orange-600" />}
                endIcon={<Home className="w-5 h-5 text-green-600" />}
                startColor="border-blue-500"
                stepColor="border-orange-500"
                endColor="border-green-500"
                timelineColor="bg-blue-500"
              />
            </div>
          </div>

          {/* Content Publishing */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              📝 Content Publishing Workflow
            </h2>
            <div className="overflow-x-auto">
              <HopList 
                hopChunks={contentData}
                startIcon={<FileText className="w-5 h-5 text-purple-600" />}
                stepIcon={<Eye className="w-5 h-5 text-blue-600" />}
                endIcon={<Send className="w-5 h-5 text-green-600" />}
                startColor="border-purple-500"
                stepColor="border-blue-500"
                endColor="border-green-500"
                timelineColor="bg-purple-500"
              />
            </div>
          </div>

          {/* Marketing Campaign */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              📊 Marketing Campaign Timeline
            </h2>
            <div className="overflow-x-auto">
              <HopList 
                hopChunks={marketingData}
                startIcon={<Users className="w-5 h-5 text-pink-600" />}
                stepIcon={<PresentationChart className="w-5 h-5 text-indigo-600" />}
                endIcon={<Award className="w-5 h-5 text-yellow-600" />}
                startColor="border-pink-500"
                stepColor="border-indigo-500"
                endColor="border-yellow-500"
                timelineColor="bg-pink-500"
              />
            </div>
          </div>

          {/* HR Recruitment */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              👥 HR Recruitment Process
            </h2>
            <div className="overflow-x-auto">
              <HopList 
                hopChunks={recruitmentData}
                startIcon={<Briefcase className="w-5 h-5 text-indigo-600" />}
                stepIcon={<UserCheck className="w-5 h-5 text-blue-600" />}
                endIcon={<Handshake className="w-5 h-5 text-green-600" />}
                startColor="border-indigo-500"
                stepColor="border-blue-500"
                endColor="border-green-500"
                timelineColor="bg-indigo-500"
              />
            </div>
          </div>

          {/* Medical Treatment */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🏥 Medical Treatment Process
            </h2>
            <div className="overflow-x-auto">
              <HopList 
                hopChunks={medicalData}
                startIcon={<Stethoscope className="w-5 h-5 text-red-600" />}
                stepIcon={<FlaskConical className="w-5 h-5 text-blue-600" />}
                endIcon={<FileCheck className="w-5 h-5 text-green-600" />}
                startColor="border-red-500"
                stepColor="border-blue-500"
                endColor="border-green-500"
                timelineColor="bg-red-500"
              />
            </div>
          </div>

          {/* Educational Course */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🎓 Educational Course Progress
            </h2>
            <div className="overflow-x-auto">
              <HopList 
                hopChunks={educationData}
                startIcon={<GraduationCap className="w-5 h-5 text-emerald-600" />}
                stepIcon={<BookOpen className="w-5 h-5 text-blue-600" />}
                endIcon={<Trophy className="w-5 h-5 text-yellow-600" />}
                startColor="border-emerald-500"
                stepColor="border-blue-500"
                endColor="border-yellow-500"
                timelineColor="bg-emerald-500"
              />
            </div>
          </div>

          {/* Bug Fix Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🐛 Software Bug Fix Process
            </h2>
            <div className="overflow-x-auto">
              <HopList 
                hopChunks={bugFixData}
                startIcon={<Bug className="w-5 h-5 text-red-600" />}
                stepIcon={<Wrench className="w-5 h-5 text-orange-600" />}
                endIcon={<Zap className="w-5 h-5 text-green-600" />}
                startColor="border-red-500"
                stepColor="border-orange-500"
                endColor="border-green-500"
                timelineColor="bg-red-500"
              />
            </div>
          </div>

          {/* README Documentation */}
          <div className="bg-black rounded-xl shadow-lg p-8">
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown 
                className="text-green-400 font-mono text-sm leading-relaxed"
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-semibold text-green-300 mt-8 mb-4">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold text-green-300 mt-6 mb-3">{children}</h3>,
                  p: ({children}) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                  code: ({children}) => <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">{children}</code>,
                  pre: ({children}) => <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700">{children}</pre>,
                  ul: ({children}) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">{children}</ol>,
                  li: ({children}) => <li className="text-gray-300">{children}</li>,
                  table: ({children}) => <div className="overflow-x-auto mb-4"><table className="min-w-full border border-gray-600">{children}</table></div>,
                  thead: ({children}) => <thead className="bg-gray-800">{children}</thead>,
                  tbody: ({children}) => <tbody>{children}</tbody>,
                  tr: ({children}) => <tr className="border-b border-gray-600">{children}</tr>,
                  th: ({children}) => <th className="px-4 py-2 text-left text-green-300 font-semibold">{children}</th>,
                  td: ({children}) => <td className="px-4 py-2 text-gray-300">{children}</td>,
                  blockquote: ({children}) => <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-400 mb-4">{children}</blockquote>,
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;