<script lang="ts">
	import TwitterIcon from '../assets/icons/twitter.svg?component';
	import GithubIcon from '../assets/icons/github.svg?component';
	import LinkedInIcon from '../assets/icons/linkedin.svg?component';
</script>

<div class="prose flex max-w-none flex-row justify-start space-x-12 py-8 dark:prose-invert">
	<div class="flex flex-col items-center justify-start">
		<img class="mt-0 mb-6 inline-block h-28 w-28 rounded-full" src="/profile_picture.jpeg" alt="" />
		<div class="mb-4 flex flex-row items-center justify-center space-x-4">
			<a
				class=" hover:text-rose-500"
				href="https://github.com/iantanwx"
				target="_blank"
				rel="noreferrer"
			>
				<GithubIcon width="28" height="28" />
			</a>
			<a
				class="hover:text-rose-500"
				href="https://twitter.com/iantanwx"
				target="_blank"
				rel="noreferrer"
			>
				<TwitterIcon width="28" height="28" />
			</a>
			<a
				class="hover:text-rose-500"
				href="https://www.linkedin.com/in/ian-tan-001129156"
				target="_blank"
				rel="noreferrer"
			>
				<LinkedInIcon width="28" height="28" />
			</a>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center">
		<h1
			class="m-0 text-center text-4xl leading-7 after:m-auto after:mt-4 after:mb-2 after:block after:h-1 after:w-10 after:bg-purple-500"
		>
			Ian Tan
		</h1>
		<p class="text text-left">
			Product engineer. Currently senior backend engineer @ Foodpanda and recovering crypto founder.
			Past lives ByteDance, GoJek and Tech in Asia. Passionate about start ups, productivity, and
			mentorship. Indie hacker by night, building in public and sharing my journey.
		</p>
	</div>
</div>
