import React from 'react';
import HopList from 'hoplist';
import ReactMarkdown from 'react-markdown';
import { Settings, Package, CheckCircle2, Rocket, Code, ShoppingCart, Home, Users, UserCheck, Award, GraduationCap, BookOpen, Trophy, Wrench, Cog } from 'lucide-react';

function App() {
  // Basic example - Project Development Timeline
  const basicExample = [
    { hopTime: 1699123200, name: "Project Started" },
    { hopTime: 1699209600, name: "Requirements Gathered" },
    { hopTime: 1699296000, name: "Design Phase" },
    { hopTime: 1699382400, name: "Development Phase" },
    { hopTime: 1699468800, name: "Project Completed" }
  ];

  // Advanced example with ISO date strings
  const advancedExample = [
    { hopTime: "2023-11-04T12:00:00Z", name: "Kickoff Meeting" },
    { hopTime: "2023-11-05T12:00:00Z", name: "Requirements Analysis" },
    { hopTime: "2023-11-06T12:00:00Z", name: "Design Phase" },
    { hopTime: "2023-11-07T12:00:00Z", name: "Development Start" },
    { hopTime: "2023-11-08T12:00:00Z", name: "Feature Complete" }
  ];

  // Real-world project timeline with extensive milestones
  const projectTimeline = [
    { hopTime: 1699123200, name: "Kickoff Meeting" },
    { hopTime: 1699209600, name: "Requirements Analysis" },
    { hopTime: 1699296000, name: "Design Phase" },
    { hopTime: 1699382400, name: "Development Start" },
    { hopTime: 1699468800, name: "Feature Complete" },
    { hopTime: 1699555200, name: "Code Review" },
    { hopTime: 1699641600, name: "Testing" },
    { hopTime: 1699728000, name: "Bug Fixes" },
    { hopTime: 1699814400, name: "Production Deploy" }
  ];

  // Software Development Lifecycle
  const softwareLifecycle = [
    { hopTime: "2023-12-01T09:00:00Z", name: "Planning" },
    { hopTime: "2023-12-03T09:00:00Z", name: "Analysis" },
    { hopTime: "2023-12-05T09:00:00Z", name: "Design" },
    { hopTime: "2023-12-07T09:00:00Z", name: "Implementation" },
    { hopTime: "2023-12-10T09:00:00Z", name: "Testing" },
    { hopTime: "2023-12-12T09:00:00Z", name: "Deployment" },
    { hopTime: "2023-12-14T09:00:00Z", name: "Maintenance" }
  ];

  // E-commerce Order Journey
  const orderJourney = [
    { hopTime: Math.floor(Date.now() / 1000) - 432000, name: "Order Placed" },
    { hopTime: Math.floor(Date.now() / 1000) - 345600, name: "Payment Confirmed" },
    { hopTime: Math.floor(Date.now() / 1000) - 259200, name: "Processing" },
    { hopTime: Math.floor(Date.now() / 1000) - 172800, name: "Shipped" },
    { hopTime: Math.floor(Date.now() / 1000) - 86400, name: "Out for Delivery" },
    { hopTime: Math.floor(Date.now() / 1000), name: "Delivered" }
  ];

  // User Onboarding Process
  const userOnboarding = [
    { hopTime: 1701360000, name: "Account Created" },
    { hopTime: 1701363600, name: "Email Verified" },
    { hopTime: 1701367200, name: "Profile Setup" },
    { hopTime: 1701370800, name: "Tutorial Completed" },
    { hopTime: 1701374400, name: "First Action" },
    { hopTime: 1701378000, name: "Onboarding Complete" }
  ];

  // Learning Path Progress
  const learningPath = [
    { hopTime: "2023-10-01T00:00:00Z", name: "Course Enrollment" },
    { hopTime: "2023-10-15T00:00:00Z", name: "Module 1: Basics" },
    { hopTime: "2023-11-01T00:00:00Z", name: "Module 2: Intermediate" },
    { hopTime: "2023-11-15T00:00:00Z", name: "Module 3: Advanced" },
    { hopTime: "2023-12-01T00:00:00Z", name: "Final Project" },
    { hopTime: "2023-12-15T00:00:00Z", name: "Certification" }
  ];

  const readmeContent = `# HopList - React Horizontal Timeline Component

A beautiful and customizable React horizontal timeline component with minimal parameters. Perfect for displaying progress steps, journey milestones, or any sequential data.

## Features

- 🎨 **Fully Customizable Colors** - Customize timeline and icon colors.
- 🔧 **Custom Icons** - Replace default icons with your own React components or SVGs.
- 📱 **Responsive & Scrollable** - A horizontally scrollable timeline that works on all screen sizes.
- ⚡ **Lightweight** - Minimal dependencies and optimized performance.
- 🎯 **TypeScript Ready** - Built with TypeScript support in mind.

## Installation

\`\`\`bash
npm install hoplist
\`\`\`

## Usage

### Basic Usage

\`\`\`jsx
import React from 'react';
import HopList from 'hoplist';

const MyComponent = () => {
  const hops = [
    { hopTime: 1699123200, name: "Project Started" },
    { hopTime: 1699209600, name: "Requirements Gathered" },
    { hopTime: 1699296000, name: "Development Phase" },
    { hopTime: 1699382400, name: "Testing Phase" },
    { hopTime: 1699468800, name: "Project Completed" }
  ];

  return <HopList hops={hops} />;
};

export default MyComponent;
\`\`\`

### Advanced Usage with Customization

\`\`\`jsx
import React from 'react';
import HopList from 'hoplist';
import { PlayArrow, CheckCircle, Settings } from '@mui/icons-material'; // Example using Material-UI

const MyComponent = () => {
  const hops = [
    { hopTime: "2023-11-04T12:00:00Z", name: "Project Started" },
    { hopTime: "2023-11-05T12:00:00Z", name: "Requirements Gathered" },
    { hopTime: "2023-11-06T12:00:00Z", name: "Development Phase" },
    { hopTime: "2023-11-07T12:00:00Z", name: "Testing Phase" },
    { hopTime: "2023-11-08T12:00:00Z", name: "Project Completed" }
  ];

  return (
    <HopList 
      hops={hops}
      startIconColor="#4CAF50"
      timelineColor="#2196F3"
      stepIconColor="#FF9800"
      endIconColor="#9C27B0"
      startIcon={PlayArrow}
      endIcon={CheckCircle}
      stepIcon={Settings}
    />
  );
};

export default MyComponent;
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`hops\` | \`Array<{hopTime: number | string, name: string}>\` | **Required** | Array of objects containing timeline data. |
| \`startIconColor\` | \`string\` | \`"#6B7280"\` | Color for the start icon border. |
| \`timelineColor\` | \`string\` | \`"#6B7280"\` | Color for the timeline lines. |
| \`stepIconColor\` | \`string\` | \`"#6B7280"\` | Color for the step icon borders. |
| \`endIconColor\` | \`string\` | \`"#6B7280"\` | Color for the end icon border. |
| \`startIcon\` | \`React.Component\` | \`Default SVG\` | React component for the start icon. |
| \`endIcon\` | \`React.Component\` | \`Default SVG\` | React component for the end icon. |
| \`stepIcon\` | \`React.Component\` | \`Default SVG\` | React component for intermediate step icons. |

## Data Structure

### Hops Format

The \`hops\` prop expects a flat array of objects, where each object represents a single event on the timeline:

\`\`\`javascript
const hops = [
  { 
    hopTime: 1699123200,      // Unix timestamp or ISO Date String
    name: "Event Name"        // Display name for the event
  },
  { 
    hopTime: "2023-11-05T12:00:00Z",
    name: "Another Event"
  },
  // ... more events
];
\`\`\`

### Event Object Properties

| Property | Type | Description |
|----------|------|-------------|
| \`hopTime\` | \`number \\| string\` | Unix timestamp (in seconds) or a date string parsable by \`new Date()\`. |
| \`name\` | \`string\` | Display name that will be shown below the timeline icon. |

### Example with Real Data

\`\`\`javascript
const projectTimeline = [
  { hopTime: 1699123200, name: "Kickoff Meeting" },
  { hopTime: 1699209600, name: "Requirements Analysis" },
  { hopTime: 1699296000, name: "Design Phase" },
  { hopTime: 1699382400, name: "Development Start" },
  { hopTime: 1699468800, name: "Feature Complete" },
  { hopTime: 1699555200, name: "Code Review" },
  { hopTime: 1699641600, name: "Testing" },
  { hopTime: 1699728000, name: "Bug Fixes" },
  { hopTime: 1699814400, name: "Production Deploy" }
];
\`\`\`

## Styling

The component can be styled by:

1. **Using the color props** (recommended):
   \`\`\`jsx
   <HopList 
     hops={data}
     timelineColor="#your-color"
     // ... other color props
   />
   \`\`\`

2. **Overriding CSS classes**:
   \`\`\`css
   .hoplist-container {
     /* Your custom styles for the main container */
   }
   
   .hoplist-timeline-line {
     /* Custom timeline styling */
   }
   \`\`\`

## CSS Classes Available for Customization

- \`.hoplist-container\` - The main container that centers the component.
- \`.hoplist-scroll-container\` - The wrapper that handles horizontal scrolling.
- \`.hoplist-timeline\` - The flex container for all timeline items.
- \`.hoplist-item\` - An individual timeline item, including the icon and text.
- \`.hoplist-timeline-elements\` - A wrapper for the icon and connecting line.
- \`.hoplist-timeline-line\` - The connecting line between icons.
- \`.hoplist-icon\` - General class for all icons.
- \`.hoplist-start-icon\` - Specific class for the start icon.
- \`.hoplist-step-icon\` - Specific class for the step icons.
- \`.hoplist-end-icon\` - Specific class for the end icon.
- \`.hoplist-name\` - The event name text.
- \`.hoplist-timestamp\` - The timestamp text.

## Time Format

The component automatically formats the \`hopTime\` value using the built-in \`timestampToDate\` function, which produces a readable format: \`YYYY-MM-DD HH:MM:SS\`.

If you need a different time format, you can modify the \`datetime-formatters.js\` file.

## Dependencies

- React 16.8+ (for hooks support)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository.
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`).
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`).
4. Push to the branch (\`git push origin feature/amazing-feature\`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

Made with ❤️ for the React community`;

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
          {/* Basic Example */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              📋 Basic Example - Default Styling
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Simple usage with Unix timestamps and default styling
            </p>
            <div className="overflow-x-auto">
              <HopList hops={basicExample} />
            </div>
          </div>

          {/* Advanced Example */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🎨 Advanced Example - Custom Colors & ISO Dates
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Using ISO date strings with custom color scheme
            </p>
            <div className="overflow-x-auto">
              <HopList 
                hops={advancedExample}
                startIconColor="#4CAF50"
                timelineColor="#2196F3"
                stepIconColor="#FF9800"
                endIconColor="#9C27B0"
              />
            </div>
          </div>

          {/* Real Project Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🚀 Real Project Timeline - Extensive Milestones
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Comprehensive project timeline from planning to deployment
            </p>
            <div className="overflow-x-auto">
              <HopList 
                hops={projectTimeline}
                startIcon={() => <Rocket style={{ color: "#3B82F6" }} />}
                stepIcon={() => <Code style={{ color: "#F97316" }} />}
                endIcon={() => <CheckCircle2 style={{ color: "#22C55E" }} />}
                startIconColor="#3B82F6"
                stepIconColor="#F97316"
                endIconColor="#22C55E"
                timelineColor="#3B82F6"
              />
            </div>
          </div>

          {/* Software Development Lifecycle */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              💻 Software Development Lifecycle
            </h2>
            <p className="text-center text-gray-600 mb-4">
              SDLC phases using ISO date strings for precise timing
            </p>
            <div className="overflow-x-auto">
              <HopList 
                hops={softwareLifecycle}
                startIcon={() => <Settings style={{ color: "#6366F1" }} />}
                stepIcon={() => <Cog style={{ color: "#8B5CF6" }} />}
                endIcon={() => <Wrench style={{ color: "#22C55E" }} />}
                startIconColor="#6366F1"
                stepIconColor="#8B5CF6"
                endIconColor="#22C55E"
                timelineColor="#6366F1"
              />
            </div>
          </div>

          {/* E-commerce Order Journey */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🛒 E-commerce Order Journey
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Real-time order tracking with dynamic timestamps
            </p>
            <div className="overflow-x-auto">
              <HopList 
                hops={orderJourney}
                startIcon={() => <ShoppingCart style={{ color: "#3B82F6" }} />}
                stepIcon={() => <Package style={{ color: "#F97316" }} />}
                endIcon={() => <Home style={{ color: "#22C55E" }} />}
                startIconColor="#3B82F6"
                stepIconColor="#F97316"
                endIconColor="#22C55E"
                timelineColor="#3B82F6"
              />
            </div>
          </div>

          {/* User Onboarding */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              👤 User Onboarding Process
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Step-by-step user activation and onboarding flow
            </p>
            <div className="overflow-x-auto">
              <HopList 
                hops={userOnboarding}
                startIcon={() => <Users style={{ color: "#8B5CF6" }} />}
                stepIcon={() => <UserCheck style={{ color: "#06B6D4" }} />}
                endIcon={() => <Award style={{ color: "#F59E0B" }} />}
                startIconColor="#8B5CF6"
                stepIconColor="#06B6D4"
                endIconColor="#F59E0B"
                timelineColor="#8B5CF6"
              />
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              🎓 Learning Path Progress
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Educational journey from enrollment to certification
            </p>
            <div className="overflow-x-auto">
              <HopList 
                hops={learningPath}
                startIcon={() => <BookOpen style={{ color: "#059669" }} />}
                stepIcon={() => <GraduationCap style={{ color: "#3B82F6" }} />}
                endIcon={() => <Trophy style={{ color: "#F59E0B" }} />}
                startIconColor="#059669"
                stepIconColor="#3B82F6"
                endIconColor="#F59E0B"
                timelineColor="#059669"
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