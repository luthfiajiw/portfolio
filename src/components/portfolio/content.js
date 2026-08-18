import {
	AtomIcon,
	BracketsCurlyIcon,
	CloudIcon,
	CodeIcon,
	CpuIcon,
	CubeIcon,
	DatabaseIcon,
	FileTsIcon,
	GlobeSimpleIcon,
	SealCheckIcon,
	StudentIcon,
	TerminalWindowIcon
} from 'phosphor-svelte';

import ut from '../../assets/logo-universitas-terbuka.png'
import react from '../../assets/react.svg'
import go from '../../assets/go.svg'
import hono from '../../assets/hono.svg'
import flutter from '../../assets/flutter.svg'
import postgres from '../../assets/postgres.svg'
import docker from '../../assets/docker.svg'

import attendanceLogo from '../../assets/projects/attendance-logo.png'
import clipoLogo from '../../assets/projects/clipo-logo.png'
import actfastLogo from '../../assets/projects/actfast-logo.png'
import posxLogo from '../../assets/projects/posx-logo.png'
import wasuhLogo from '../../assets/projects/wasuh-logo.png'
import zoLogo from '../../assets/projects/zo-logo.png'


import actfast1 from '../../assets/projects/actfast-1.png'
import actfast2 from '../../assets/projects/actfast-2.png'
import actfast3 from '../../assets/projects/actfast-3.png'
import actfast4 from '../../assets/projects/actfast-4.png'
import actfast5 from '../../assets/projects/actfast-5.png'
import actfast6 from '../../assets/projects/actfast-6.png'

import zo1 from '../../assets/projects/zo-1.png'
import zo2 from '../../assets/projects/zo-2.png'
import zo3 from '../../assets/projects/zo-3.png'
import zo4 from '../../assets/projects/zo-4.png'

import cp1 from '../../assets/projects/cp-1.png'
import cp2 from '../../assets/projects/cp-2.png'
import cp3 from '../../assets/projects/cp-3.png'
import cp4 from '../../assets/projects/cp-4.png'

import posx0 from '../../assets/projects/posx-0.png'
import posx1 from '../../assets/projects/posx-1.png'
import posx2 from '../../assets/projects/posx-2.png'
import posx3 from '../../assets/projects/posx-3.png'
import posx4 from '../../assets/projects/posx-4.png'
import posx5 from '../../assets/projects/posx-5.png'

import za1 from '../../assets/projects/za-1.jpg'
import za2 from '../../assets/projects/za-2.jpg'
import za3 from '../../assets/projects/za-3.jpg'

export const profile = {
	role: 'Full Stack Developer',
	firstName: 'Luthfi Aji',
	lastName: 'Wicaksono',
	intro: 'Crafting seamless user interfaces and resilient server-side architectures. Dedicated to building scalable full-stack applications with clean code, high performance, and smooth data flow.',
	location: 'South Tangerang, Indonesia',
	resume: 'https://drive.google.com/file/d/1W_M4f2VJi8SJGw7jGR5Cvyg2vRWMBEA8/view',
	github: 'https://github.com/luthfiajiw',
	linkedin: 'https://linkedin.com/in/luthfiaw/',
	summary: 'Solving complex problems through elegant codebases.',
	skills: ['Next JS', 'Go', 'Hono', 'Flutter', 'PostgreSQL', "Docker"]
};

export const projects = [
	{
		title: 'Actfast',
		subtitle: 'Finance & Accounting',
		techs: ["Next JS", "Hono"],
		description: 'A Financial management and accounting application with accurate and real-time reporting.',
		fullDescription: 'Actfast is a Financial management and accounting application with accurate and real-time reporting, it is an app rewritten using Next JS and Hono, with the goal to provide a better and modern user experience, and also improving the performance and scalability of the application.',
		previews: [actfast1, actfast2, actfast3, actfast4, actfast5, actfast6],
		logo: actfastLogo,
	},
	{
		title: 'Wasuh',
		subtitle: 'Laundry Management',
		techs: ["Flutter", "Fiber", "Svelte"],
		description: 'Laundry management application with accounting support and standard-compliant financial reports.',
		fullDescription: 'Wasuh is a laundry management application that provides accounting support and standard-compliant financial reports. Designed to be simple and easy to use for users unfamiliar with accounting concepts and principles.',
		previews: [],
		logo: wasuhLogo,
	},
	{
		title: 'Zahir Apps',
		subtitle: 'ERP',
		techs: ["Flutter"],
		description: 'An integrated financial and ERP application that produces financial reports quickly and accurately.',
		fullDescription: 'Zahir Apps is an integrated financial and ERP application that produces financial reports quickly and accurately. This app is built using a modular approach where several modules within Zahir Apps are utilized in other sub-applications.',
		previews: [zo1, zo2, zo3, zo4],
		logo: zoLogo,
	},
	{
		title: 'Zahir POSX',
		subtitle: 'Point of Sale',
		techs: ["Flutter", "Next JS"],
		description: 'A Modular Point of Sale (POS) application for retails, restaurants and franchises.',
		fullDescription: 'POSX is a Point of Sale (POS) application for retails, restaurants and franchises. This app provides an offline-first feature to ensure smooth transactions even with poor internet connection. This app was available in mobile phone and web platforms, for the complete features, users can access via the mobile app.',
		previews: [posx0, posx1, posx2, posx3, posx4, posx5],
		logo: posxLogo,
	},
	{
		title: 'Zahir Attendance',
		subtitle: 'HR',
		techs: ["Flutter"],
		description: 'An attendance application created to make it easier for employees who are working onsite or working from home.',
		fullDescription: 'An attendance application created to make it easier for employees who are working onsite or working from home. This app is the beginning of the HR app and later the name was changed to Zahir HR.',
		previews: [za1, za2, za3],
		logo: attendanceLogo,
	},
	{
		title: 'Clipo',
		subtitle: 'Client Portal',
		techs: ["Flutter"],
		description: 'Prioritizing client comfort by sending psychological test results reports.',
		fullDescription: 'Clipo is an innovative breakthrough in the field of professional selection. Prioritizing client comfort by sending integrated and practical psychological test results reports.',
		previews: [cp1, cp2, cp3, cp4],
		logo: clipoLogo,
	},
];

export const experiences = [
	{
		period: '2024 - Present',
		start: '2024',
		end: '',
		title: 'Full Stack Developer',
		company: 'Firstasia Consultants, Jakarta',
		achievements: [
			'Migrated finance and accounting system to Next JS and Hono, improving staff productivity and system scalability.',
		],
		technologies: ['Next JS', 'Hono', 'PostgreSQL']
	},
	{
		period: '2023 - 2024',
		start: '2023',
		end: '2024',
		title: 'Mobile Developer',
		company: 'Firstasia Consultants, Jakarta',
		achievements: [
			'Worked with SQLite for caching purposes by abstracting layers to reduce latency associated with database query requests.'
		],
		technologies: ['Flutter']
	},
	{
		period: '2019 - 2023',
		start: '2019',
		end: '2023',
		title: 'Frontend & Mobile Developer',
		company: 'Zahir, Jakarta',
		achievements: [
			'Introduced a modular development approach with each module providing a single source.',
			'Prepared and implemented modular development.'
		],
		technologies: ['Flutter', 'Next JS']
	},
	{
		period: '2019 - 2019',
		start: '2019',
		end: '2019',
		title: 'Mentor',
		company: 'Pondok IT, Yogyakarta',
		achievements: [
			'In charge of compiling the frontend curriculum.',
			'Conducted technical sessions and provided one-on-one mentoring, helping participants build a strong foundation in React.'
		],
		technologies: ['React', 'Git']
	},
];

export const academicItems = [
	{
		title: 'Bachelor of Computer Science',
		issuer: 'Indonesia Open University',
		detail: 'Information Systems',
		year: '2026',
		logo: ut,
		topics: ['System Analysis', 'Business', 'Software Engineering', 'Management']
	},
];

export const stack = [
	{ name: 'React', img: react, className: 'text-cyan-300' },
	{ name: 'Go', img: go, className: 'text-cyan-300' },
	{ name: 'Hono', img: hono, className: 'text-cyan-300' },
	{ name: 'Flutter', img: flutter, className: 'text-cyan-300' },
	{ name: 'PostgreSQL', img: postgres, className: 'text-cyan-300' },
	{ name: 'Docker', img: docker, className: 'text-cyan-300' },
];
