export type LessonType = "video" | "quiz" | "download";

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  creator: string;
  creatorId: string;
  price: number;
  rating: number;
  ratingCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  students: number;
  image: string;
  category: string;
  description: string;
  learn: string[];
  requirements: string[];
  curriculum: { title: string; lessons: { title: string; duration: string; type: LessonType }[] }[];
};

/* ------------------------------------------------------------------ *
 * Shared content
 * ------------------------------------------------------------------ */

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Courses" },
  { href: "/creators/purepearl-studio", label: "Creators" },
];

export const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export const categoryFilters = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

/* The nine chips drawn in the search-page chip row (verbatim from design). */
export const searchChips = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const levelFilters = ["Beginner", "Intermediate", "Advanced", "Expert"];

export const sortOptions = [
  { value: "most-relevant", label: "Most relevant" },
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Highest rated" },
  { value: "price-low", label: "Price: low to high" },
  { value: "price-high", label: "Price: high to low" },
] as const;

export const learningPaths = [
  { label: "Design", icon: "design" },
  { label: "Development", icon: "development" },
  { label: "IT & Software", icon: "software" },
  { label: "Business", icon: "business" },
  { label: "Marketing", icon: "marketing" },
  { label: "Photography", icon: "photography" },
];

export const discoverIntro =
  "At BytespaceCourses, we bring you closer to life-changing knowledge. Explore a variety of " +
  "courses across different fields, from technology to the arts, and make a difference in your " +
  "career and life.";

export const pathsIntro =
  "At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of " +
  "courses spans various fields, ensuring there's something for everyone. Unleash your potential " +
  "and explore our carefully curated categories.";

export const growthIntro =
  "Explore our curated selection of courses tailored to enhance your capabilities and accelerate " +
  "your career journey. Whether you are looking to sharpen specific skills, gain industry " +
  "expertise, or embark on a new career path entirely, we have the resources you need.";

export const creatorSupportCopy =
  "ByteSpace supports individuals or entities in the creation, publication, and administration of " +
  "educational courses.";

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my way of learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&h=160&q=80",
  },
];

export const testimonialsIntro =
  "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. " +
  "Hear directly from those who have experienced the transformative journey of learning and " +
  "creating on our platform. Explore testimonials that reflect the diverse perspectives of " +
  "enthusiastic learners and accomplished creators.";

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const revenueStats = [
  { label: "Total Revenue", period: "July 1-28", amount: "$120.29" },
  { label: "Year to Date", period: "2023", amount: "$1,200.38" },
];

export const creatorPillars = ["Share Your Expertise", "Monetize Your Passion", "Build a Community"];

export const creatorCtaIntro =
  "Experience the collaboration of numerous creators and an expanding selection of courses. " +
  "Register now and become a part of a community comprising over 10,000 local and international " +
  "creators. Utilize our Course Editor, and showcase your expertise by publishing your finest " +
  "course on the ByteSpace Course Library.";


export const partnerLogos = [
  "/assets/partner-logo-1.svg",
  "/assets/partner-logo-2.svg",
  "/assets/partner-logo-3.svg",
  "/assets/partner-logo-4.svg",
  "/assets/partner-logo-5.svg",
];

/* Decorative 3-D shapes scattered through the home page. */
export const blobShapes = [
  "/assets/cone-1.svg",
  "/assets/cone-2.svg",
  "/assets/donut-1.svg",
  "/assets/marshmellow-1.svg",
  "/assets/marshmellow-2.svg",
  "/assets/marshmellow-3.svg",
];

/* Avatars used in the "26+" stacks inside course cards. */
export const avatarPhotos = [
  "/assets/avatar-1.svg",
  "/assets/avatar-2.svg",
  "/assets/avatar-3.svg",
  "/assets/avatar-4.svg",
];

/* ------------------------------------------------------------------ *
 * Courses
 * ------------------------------------------------------------------ */

const sharedMeta = {
  creator: "purepearl studio",
  creatorId: "purepearl-studio",
  price: 25,
  rating: 4.5,
  ratingCount: 240,
  level: "Beginner" as const,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
};

export const courses: Course[] = [
  {
    ...sharedMeta,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    subtitle: "Design interfaces people love, from the very first artboard.",
    students: 2140,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&h=460&q=80",
    category: "UI/UX Design",
    description:
      "From the very first artboard to a fully designed product screen — this course takes you through Figma step by step. You will learn frames, auto layout, components, variants and hand-off basics that every product designer uses daily.",
    learn: [
      "Navigate the Figma interface with confidence",
      "Build reusable components and variants",
      "Design responsive screens using auto layout",
      "Prototype interactions and share with your team",
      "Prepare clean developer hand-off files",
    ],
    requirements: [
      "A free Figma account",
      "A laptop or desktop computer",
      "No prior design experience needed",
    ],
    curriculum: [
      {
        title: "Getting Started with Figma",
        lessons: [
          { title: "Course overview & setup", duration: "06:20", type: "video" },
          { title: "Frames, layers and pages", duration: "11:04", type: "video" },
          { title: "Tools you will use daily", duration: "09:41", type: "video" },
          { title: "Quiz: Figma basics", duration: "05:00", type: "quiz" },
        ],
      },
      {
        title: "Layouts & Auto Layout",
        lessons: [
          { title: "Auto layout explained", duration: "14:10", type: "video" },
          { title: "Responsive cards in practice", duration: "12:33", type: "video" },
          { title: "Design file resources", duration: "02:00", type: "download" },
        ],
      },
      {
        title: "Components & Variants",
        lessons: [
          { title: "Creating your first component", duration: "13:45", type: "video" },
          { title: "Variant properties deep dive", duration: "16:02", type: "video" },
          { title: "Building a button system", duration: "10:18", type: "video" },
        ],
      },
    ],
  },
  {
    ...sharedMeta,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    students: 199,
    level: "Intermediate",
    lessons: 112,
    duration: "24 hours",
    rating: 4.8,
    ratingCount: 172,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&h=460&q=80",
    category: "Digital Illustration",
    description:
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    learn: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    requirements: [
      "A computer with a stable internet connection",
      "Familiarity with at least one vector editor",
      "A desire to publish work publicly",
    ],
    curriculum: [
      {
        title: "Introduction to Digital Assets",
        lessons: [
          { title: "Understanding Digital Elements", duration: "12:00", type: "video" },
          { title: "Navigating Design Software Tools", duration: "18:30", type: "video" },
        ],
      },
      {
        title: "Design Principles for Impacts",
        lessons: [
          { title: "Color Theory in Practice", duration: "21:00", type: "video" },
          { title: "Typography That Reads", duration: "14:45", type: "video" },
        ],
      },
      {
        title: "Advanced Techniques in Digital Creation",
        lessons: [
          { title: "Layering and Depth", duration: "16:00", type: "video" },
          { title: "Exporting for Every Platform", duration: "11:20", type: "video" },
        ],
      },
    ],
  },
  {
    ...sharedMeta,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    subtitle: "Read the metrics that actually move a business.",
    students: 3020,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=460&q=80",
    category: "Data Science",
    description:
      "Big data is everywhere. Understand how modern companies collect, store and analyse huge datasets, and how you can turn raw numbers into decisions that matter.",
    learn: [
      "Understand the big data ecosystem",
      "Read dashboards and metrics",
      "Run your first dataset analysis",
      "Present insights to stakeholders",
    ],
    requirements: ["No programming experience required"],
    curriculum: [
      {
        title: "Data fundamentals",
        lessons: [
          { title: "What is big data?", duration: "09:05", type: "video" },
          { title: "Pipelines and warehouses", duration: "12:10", type: "video" },
        ],
      },
      {
        title: "Analysing data",
        lessons: [
          { title: "Metrics that matter", duration: "15:30", type: "video" },
          { title: "Quiz: data literacy", duration: "06:00", type: "quiz" },
        ],
      },
    ],
  },
  {
    ...sharedMeta,
    slug: "balancing-productivity",
    title: "Balancing Productivity and Life",
    subtitle: "Systems that protect focus, health and relationships.",
    students: 1420,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&h=460&q=80",
    category: "Productivity",
    description:
      "Practical systems for doing deep work without burning out. Build a weekly rhythm that protects your focus, your health and your relationships.",
    learn: [
      "Design a realistic weekly plan",
      "Protect deep work blocks",
      "Say no without guilt",
      "Review and reset every Sunday",
    ],
    requirements: ["A notebook or note-taking app"],
    curriculum: [
      {
        title: "Foundations",
        lessons: [
          { title: "Where your hours go", duration: "10:00", type: "video" },
          { title: "Energy vs time", duration: "08:45", type: "video" },
        ],
      },
      {
        title: "Systems",
        lessons: [
          { title: "The weekly reset", duration: "13:20", type: "video" },
          { title: "Template download", duration: "01:10", type: "download" },
        ],
      },
    ],
  },
  {
    ...sharedMeta,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    subtitle: "A clear, jargon-free path to financial control.",
    students: 2610,
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&h=460&q=80",
    category: "Business",
    description:
      "Budgeting, saving, investing and taxes — a clear, jargon-free path to taking control of your personal and freelance finances.",
    learn: [
      "Build a budget that survives real life",
      "Automate your savings",
      "Understand investing basics",
      "Prepare for tax season calmly",
    ],
    requirements: ["Willingness to track one month of spending"],
    curriculum: [
      {
        title: "Money mindset",
        lessons: [
          { title: "Your financial snapshot", duration: "07:30", type: "video" },
          { title: "Common money myths", duration: "09:15", type: "video" },
        ],
      },
      {
        title: "Investing",
        lessons: [
          { title: "Risk and time horizon", duration: "14:05", type: "video" },
          { title: "Quiz: investing basics", duration: "05:00", type: "quiz" },
        ],
      },
    ],
  },
  {
    ...sharedMeta,
    slug: "from-idea-to-startup",
    title: "From Idea to Startup Success",
    subtitle: "Validate, build and launch the early-stage playbook.",
    students: 1990,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=460&q=80",
    category: "Freelance & Entrepreneurship",
    description:
      "Validate, build and launch — the complete early-stage playbook used by founders who ship products people pay for.",
    learn: [
      "Validate an idea in two weeks",
      "Shape a product people want",
      "Launch your first 100 users",
      "Tell a story investors understand",
    ],
    requirements: ["An idea you are excited about"],
    curriculum: [
      {
        title: "Validation",
        lessons: [
          { title: "Interviewing customers", duration: "11:40", type: "video" },
          { title: "Landing page test", duration: "10:05", type: "video" },
        ],
      },
      {
        title: "Launch",
        lessons: [
          { title: "Shipping the MVP", duration: "16:15", type: "video" },
          { title: "Launch checklist", duration: "02:20", type: "download" },
        ],
      },
    ],
  },
];

/* The 18-card grid on /search repeats these six courses three times. */
export const searchGridCourses: Course[] = Array.from({ length: 3 }).flatMap(() => courses);

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ *
 * Course detail page — modules / key points / sidebar
 * ------------------------------------------------------------------ */

export const courseTitle = "Build Digital Asset: A Comprehensive Guide";
export const courseSubtitle = "Unlock the Power of Digital Creation with Expert Guidance";

export const courseDescription = [
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that lay the groundwork, setting the stage for mastery in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

export const courseKeyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export const courseIncludes = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
];

export const enrollCta = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

/* First three modules previewed in the sidebar, plus the collapsed remainder. */
export const sidebarModules = [
  { n: "01", title: "Introduction to Digital Assets", minutes: 12 },
  { n: "02", title: "Design Principles for Impacts", minutes: 21 },
  { n: "03", title: "Advanced Techniques in Digital Creation", minutes: 16 },
];

export const moreVideosLabel = "99 more videos";

export const courseModules = [
  {
    n: 1,
    title: "Module 1: Introduction to Digital Assets",
    body: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools: Dive into the essentials of digital asset creation.",
  },
  {
    n: 2,
    title: "Module 2: Design Principles for Impact",
    body: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Practice' and 'Typography Essentials: Elevate your visual communication skills.",
  },
  {
    n: 3,
    title: "Module 3: Advanced Techniques in Digital Creation",
    body: "Elevate your craft with advanced workflows, smart layers and non-destructive editing techniques used by professionals.",
  },
  {
    n: 4,
    title: "Module 4: User-Centric Design Strategies",
    body: "Essentials: Craft digital assets with a focus on user-centric design.",
  },
  {
    n: 5,
    title: "Module 5: Interactive Media and Engagement",
    body: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements: Master the art of creating immersive digital experiences.",
  },
  {
    n: 6,
    title: "Module 6: Project Showcase and Critique",
    body: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration: Showcase your work with confidence.'",
  },
  {
    n: 7,
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    body: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media: Ensure widespread accessibility and engagement across diverse digital landscapes.'",
  },
  {
    n: 8,
    title: "Module 8: Digital Asset Management Best Practices",
    body: "Organise, version and archive your work so it stays fast to find and easy to reuse across projects and clients.",
  },
];

export const modulesIntro =
  "Immerse yourself in the course content as we break down each module into comprehensive " +
  "lessons, providing practical insights and hands-on experiences.";

export const reviewsIntro =
  "Discover what our learners have to say about their experience with 'Build Digital Assets: A " +
  "Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the " +
  "transformative journey of mastering digital asset creation.";

export const ratingBreakdown = [
  { stars: 5, count: 720 },
  { stars: 4, count: 120 },
  { stars: 3, count: 21 },
  { stars: 2, count: 12 },
  { stars: 1, count: 16 },
];

export const overallRating = 4.7;

export const ratingFilters = ["All rating", "5", "4", "3", "2", "1"];

export const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    when: "a year ago",
    body: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    when: "a year ago",
    body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    when: "a year ago",
    body: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    when: "a year ago",
    body: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
  {
    name: "Kathryn Murphy",
    role: "Brand Designer",
    when: "a year ago",
    body: "What impressed me most was the balance between theory and practice. Every module ends with something I could apply to a real client brief straight away. The certificate looks great on a portfolio too.",
  },
  {
    name: "Darren Lowe",
    role: "Motion Designer",
    when: "2 years ago",
    body: "I had taken dozens of online courses and never finished one. I finished this in six weeks. The structure is clear, the feedback on projects is thoughtful, and the community is genuinely helpful.",
  },
];

/* ------------------------------------------------------------------ *
 * Creator
 * ------------------------------------------------------------------ */

export const creators = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    handle: "purepearl studio",
    tagline: "Passionate UI/UX, Web designer",
    avatar: "/assets/creator-avatar.svg",
    cover: "/assets/marshmellow-3.svg",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products: 3,
    followers: 12,
    socials: { dribbble: "#", behance: "#", x: "#", linkedin: "#" },
  },
];

export function getCreator(id: string) {
  return creators.find((c) => c.id === id);
}

export const searchFacets = {
  levels: ["Beginner", "Intermediate", "Advanced"],
  durations: ["0-2 Hours", "2-5 Hours", "5-10 Hours", "10+ Hours"],
  prices: ["Free", "Paid"],
  ratings: ["4.5 & up", "4.0 & up", "3.5 & up"],
  categories: categoryFilters.slice(1),
};

/* Copy that appears on the auth pages' left-hand column. */
export const authCopy = {
  login: {
    bannerTitle: "Sign in with ease",
    bannerBody:
      "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    eyebrow: "Sign In",
    heading: "Welcome Back",
    submit: "Sign In",
    divider: "or",
    switchPrompt: "New user?",
    switchAction: "Create an account",
    placeholder: { email: "designer@example.com", password: "********" },
  },
  register: {
    bannerTitle: "Sign up and come in",
    bannerBody:
      "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    eyebrow: "Create an Account",
    heading: "Welcome to",
    headingAccent: "ByteSpace",
    submit: "Continue",
    switchPrompt: "Already have an account?",
    switchAction: "Login",
    placeholder: { name: "Jamie Davis", email: "designer@example.com", password: "********" },
  },
};

/* 404 page copy. */
export const notFoundCopy = {
  line1: "The page you are looking",
  line2: "for doesn't exist",
  action: "Back to Home",
};

