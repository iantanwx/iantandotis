import { SITE_TITLE } from '$lib/constants';
import { compile } from 'mdsvex';

interface WorkExperience {
	company: string;
	title: string;
	from: string;
	to?: string;
	description: string;
}

const WORK_EXPERIENCE: Array<WorkExperience> = [
	{
		company: 'DeliveryHero',
		title: 'Senior Software Engineer',
		from: '2023',
		to: 'present',
		description: `
			- Responsible for owning and developing multiple complex, cross-cutting features in the vendor funded deals domain, such as fraud detection.
			- Manage the teams's AWS infrastructure across multiple environments and regions.
			- Lead the squad-level backend development in areas such as API design, data modeling, observability and system architecture.
			- Increase observability in all systems by introducing end-to-end tracing and logging, leading to a 50% reduction in load times for key paths.
			- Lead tribe-wide GraphQL migration to Apollo Federation, leading to far better developer experience and API discovery.
			`
	},
	{
		company: 'Voyage Finance',
		title: 'Co-founder & CTO',
		from: '2022',
		description: `
			- Responsible for the technical direction of the company across the stack.
			- Designed and developed the core protocol, a trustless lending and leverage protocol for NFT traders.
			- Managed and deployed all infrastructure on AWS, leveraging ECS for serverless deployments.
			- Hired and managed a team of 3 engineers and one product manager, delivering a web UI, browser extension, and fully audited smart contracts in 4 months.
			- Raised US$1m in seed funding from top investors in the space, such as Delphi and Tangent.
			`
	},
	{
		company: 'ByteDance',
		title: 'Senior Software Engineer',
		from: '2020',
		to: '2022',
		description: `
			- Contributed to and developed rich text editors with ByteDance's in-house editor framework.
			- Improved developer tooling (hot reloading) for working with micro frontends.
			- Own and implement multiple complex features in Lark and TikTok LIVE, collaborating with stakeholders in mainland China and international teams.
			- Conduct interviews and mentor junior engineers.
			`
	},
	{
		company: 'GoJek',
		title: 'Software Engineer',
		from: '2019',
		to: '2020',
		description: `
			- Developed large scale batch jobs in Java and Kotlin to automate collection of instalment payments for GoJek's financial products and services.
			- Managed the team's Kubernetes and Kafka clusters in AWS for deployment of batch jobs and microservices.
			- Gained a deep understanding of the financial domain, particularly in lending, and its regulatory requirements.
			- Contributed to GoJek's consumer applications in Android and iOS.
			`
	},
	{
		company: 'Zilliqa',
		title: 'Software Engineer',
		from: '2018',
		to: '2019',
		description: `- Developed and launched an in-browser playground for Scilla, Zilliqa's smart contract language, enabling new developers to rapidly test their smart contracts.
- Overhauled the JavaScript SDK and led the development of SDKs in Java and C#, leading to the growth of Zilliqa's developer ecosystem.
- Created a command-line tool and comprehensive test suites in JS and C++ to evaluate the stability and readiness of new core protocol releases.
- Led the swap of ERC20 tokens to native ZIL.
- Implemented a semi-automated system for setting up a robust Prometheus server and Grafana dashboards, streamlining data monitoring and visualization.
- Collaborated with Infrastructure Lead on maintaining and hardening our production Kubernetes cluster consisting of thousands of pods.`
	},
	{
		company: 'Tech in Asia',
		title: 'Software Engineer',
		from: '2016',
		to: '2018',
		description: `- Developed a Rich Text Editor in React, enabling users to submit user-generated articles.
- Created foundational form rendering and internal internationalization libraries for the web platform.
- Transitioned legacy JavaScript codebase to TypeScript, enhancing maintainability.
- Built multiple AWS Lambda functions in Node.js, complete with an automated build-deployment pipeline using the Serverless framework and AWS API Gateway.
- Designed and developed a REST API in Go for a new product.`
	}
];

interface Project {
	project: string;
	href?: string;
	description: string;
	stack: string[];
	wip?: boolean;
}

const PROJECTS: Array<Project> = [
	{
		project: 'Scribbler',
		href: 'https://app.scribbler.so',
		description: 'Instant podcast summaries via GPT and Whisper.',
		stack: ['Next.js', 'FastAPI', 'Sqlalchemy', 'Whisper', 'LangChain', 'Modal', 'Prisma']
	},
	{
		project: 'OnlyPrompts',
		description: 'A collection of small, open source AI tools.',
		stack: ['Next.js', 'Prisma', 'SWC', 'TRPC', 'FastAPI', 'Modal'],
		wip: true
	}
];

/** @type {import('./$types').PageLoad} */
export async function load() {
	const workExperience = await Promise.all(
		WORK_EXPERIENCE.map(async (work) => {
			const { company, title, from, to, description } = work;
			const d = await compile(description);
			return {
				company,
				title,
				from,
				to,
				description: d!!.code
			};
		})
	);

	return {
		title: `${SITE_TITLE} - About`,
		workExperience,
		projects: PROJECTS
	};
}
