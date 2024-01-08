<script lang="ts">
	import Project from '$lib/components/project/project.svelte';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Work } from '$lib/components/work';
	import { Calendar, Github, Globe, Linkedin, Mail, Twitter } from 'lucide-svelte';

	const CONTACT_DETAILS = [
		{
			name: 'Email',
			href: 'mailto:iantanwx@gmail.com',
			icon: Mail
		},
		{
			name: 'Cal.com',
			href: 'https://app.cal.com/iantanwx/15min',
			icon: Calendar
		},
		{
			name: 'Twitter',
			href: 'https://x.com/iantanwx',
			icon: Twitter
		},
		{
			name: 'Github',
			href: 'https://github.com/iantanwx',
			icon: Github
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/ian-tan-001129156/',
			icon: Linkedin
		}
	];

	const SKILLS = [
		'JavaScript',
		'TypeScript',
		'React/Next.js',
		'Node.js',
		'GraphQL',
		'Go',
		'SQL',
		'AWS',
		'Kubernetes'
	];

	export let data;
</script>

<div class="container my-4 max-w-4xl space-y-10">
	<div class="grid grid-cols-12 gap-4">
		<div class="col-span-10 flex flex-1 flex-col">
			<h1 class="mb-4 text-3xl font-bold tracking-tight">Ian Tan</h1>
			<p class="mb-2 text-lg">Product engineer</p>
			<div class="mb-3 flex flex-row items-center space-x-2 text-sm text-foreground/80">
				<Globe size={18} class="text-foreground/80" />
				<p>Singapore / UTC +8</p>
			</div>
			<div class="flex flex-row space-x-2">
				{#each CONTACT_DETAILS as { name, href, icon }}
					<a
						class="rounded-sm border border-foreground/80 text-lg text-foreground/80 transition-colors hover:border-foreground/60 hover:text-foreground/60"
						{href}
						target="_blank"
						aria-label={name}
					>
						<svelte:component this={icon} class="p-1.5" strokeWidth={1} size={28} />
					</a>
				{/each}
			</div>
		</div>
		<div class="col-span-2">
			<AspectRatio ratio={1}>
				<Avatar.Root class="h-full w-full rounded-lg">
					<Avatar.Image src="/profile_picture.jpeg" alt="@iantanwx" />
					<Avatar.Fallback>Ian Tan</Avatar.Fallback>
				</Avatar.Root>
			</AspectRatio>
		</div>
	</div>
	<div class="flex flex-col space-y-2">
		<h3 class="mb-4 text-2xl font-bold tracking-tight">About</h3>
		<p class="prose max-w-none text-lg dark:prose-invert">
			Over the last 8 years, I've had the privilege of building a variety of products at companies
			of all conceivable scales and stages, from my own 5-person start up, to a 100,000+ headcount
			behemoth in ByteDance, and most recently at DeliveryHero. As a senior software engineer, I'm
			passionate about leading teams, and greatly enjoy coaching young developers starting out on
			their journeys. A tinkerer and maker at heart, I'm usually working on some side project or
			another, most recently in the generative AI space.
		</p>
	</div>
	<div class="flex flex-col">
		<h3 class="mb-4 text-2xl font-bold tracking-tight">Experience</h3>
		<div class="flex flex-col space-y-4">
			{#each data.workExperience as { company, title, from, to, description }}
				<Work {company} {title} {from} {to} {description} />
			{/each}
		</div>
	</div>
	<div class="flex flex-col space-y-2">
		<h3 class="mb-4 text-2xl font-bold tracking-tight">Skills</h3>
		<div class="flex flex-row flex-wrap gap-2">
			{#each SKILLS as skill}
				<Badge>{skill}</Badge>
			{/each}
		</div>
	</div>
	<div class="flex flex-col space-y-2">
		<h3 class="mb-4 text-2xl font-bold tracking-tight">Projects</h3>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
			{#each data.projects as { project, description, stack, href, wip }}
				<Project {project} {description} {stack} {href} {wip} />
			{/each}
		</div>
	</div>
</div>
