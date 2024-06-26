import {
	web,
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	java,
	summazon,
	fm,
	sql,
	sprout,
	owncast,
	mern,
	ps,
	sde,
	express,
	typescript,
	nextjs,
	artifize,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Software Development Engineer",
		icon: sde,
	},
	{
		title: "MERN Stack Developer",
		icon: mern,
	},
	{
		title: "Next.js",
		icon: nextjs,
	},
	{
		title: "Java Programmer",
		icon: java,
	},
	{
		title: "Problem Solver",
		icon: ps,
	},
];

const technologies = [
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Next JS",
		icon: nextjs,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Express JS",
		icon: express,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "SQL",
		icon: sql,
	},
];

const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "Clinic Bharat",
		icon: sprout,
		iconBg: "#383E56",
		date: "Oct 2023 - Mar 2024",
		points: [
			"Spearheaded the development of a full-fledged MERN (MongoDB, Express.js, React, Node.js) stack healthcare web application.",
			"Designed and implemented a robust OTP-based authentication system, enhancing user registration and login security.",
			"Collaborated closely with a cross-functional team to set up the project's infrastructure and ensure seamless integration between front-end and back-end components.",
		],
	},
	{
		title: "Open Source Contributor",
		company_name: "Owncast",
		icon: owncast,
		iconBg: "#383E56",
		date: "Oct 2023",
		points: [
			"Collaborated with a community of developers, enhancing my skills.",
			"Fixed bugs, Added features, and Improved documentation.",
			"Technologies: React.js, Next.js, Golang.",
		],
	},
	{
		title: "Searching for a Full Time job as a Software Development Engineer",
		company_name: "",
		icon: sprout,
		iconBg: "#383E56",
		date: "",
		points: [
			"With unwavering passion, I'm actively seeking my inaugural role as a Software Development Engineer. Proficient in JavaScript, Java, MERN Stack Development, and Problem Solving, I'm poised to contribute innovative solutions and embrace challenges. Eager to collaborate, learn, and grow within a dynamic team, I'm excited to channel my creativity and dedication toward propelling technological advancements.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Artifize (AI-Powered Image Solutions)",
		description:
			["Developed a SaaS web app with robust authentication and AI features using NEXT.js and Clerk.",
			"Features: AI generative fill, image restoration, recolouring, and object/background removal.",
			"Integrated Stripe for payments a credit system and Google auto-tagging for search.",
			"I used MongoDB, Mongoose and Cloudinary for efficient data management and image handling.",
			"And, Next.js serverless architecture with caching, Webhooks, React Hook Form, and Zod."],
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "Clerk",
				color: "green-text-gradient",
			},
			{
				name: "Cloudinary",
				color: "pink-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "orange-text-gradient",
			},
			{
				name: "Webhooks",
				color: "yellow-text-gradient",
			},
			{
				name: "MongoDB",
				color: "blue-text-gradient",
			},
			{
				name: "Stripe",
				color: "green-text-gradient",
			},

		],

		image: artifize,
		source_code_link: "https://github.com/Anubhav-Chauhan3367/AIImageTools",
		visit_link: "https://ai-image-tools-nu.vercel.app/",
	},
	{
		name: "Summazon",
		description:
			["A React-based web application which has a responsive and interactive user interface.", "The website This website summarises articles using AI, It uses OpenAI's GPT model under the hood.",
			"You can use any news article from the internet, paste its URL in the search box and it will summarise the article in a matter of seconds."],
		tags: [
			{
				name: "React.js",
				color: "blue-text-gradient",
			},
			{
				name: "Vite",
				color: "green-text-gradient",
			},
			{
				name: "RTK",
				color: "pink-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "orange-text-gradient",
			},
			{
				name: "API Integeration",
				color: "yellow-text-gradient",
			},
		],

		image: summazon,
		source_code_link: "https://github.com/Anubhav-Chauhan3367/Summazon",
		visit_link: "https://superb-gnome-3252de.netlify.app/",
	},
	{
		name: "Fitness Mavericks",
		description:
			["A React-based web application that has aresponsive and interactive user interface.", "The website showcase over a thousand exercises categorized on the basis of different body parts and equipment used.", "The website also provides multiple links toyoutube tutorials for these exercises.",],
		tags: [
			{
				name: "React.js",
				color: "blue-text-gradient",
			},
			{
				name: "Material UI",
				color: "green-text-gradient",
			},
			{
				name: "API Integeration",
				color: "pink-text-gradient",
			},
		],

		image: fm,
		source_code_link:
			"https://github.com/Anubhav-Chauhan3367/Fitness-Mavericks",
		visit_link:
			"https://fitness-mavericks-49pc-4b4pqy3p7.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
