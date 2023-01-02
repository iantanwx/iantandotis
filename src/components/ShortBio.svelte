<script lang="ts">
	import TwitterIcon from '../assets/icons/twitter.svg?component';
	import GithubIcon from '../assets/icons/github.svg?component';
	import LinkedInIcon from '../assets/icons/linkedin.svg?component';
</script>

<div
	class="flex flex-row justify-start space-x-12 py-8 prose dark:prose-invert prose-a:text-rose-500 hover:prose-a:text-rose-700  max-w-none"
>
	<div class="flex flex-col items-center justify-start">
		<img class="inline-block h-28 w-28 rounded-full mt-0 mb-6" src="/profile_picture.jpeg" alt="" />
		<div class="flex flex-row items-center justify-center space-x-4 mb-4">
			<a href="https://github.com/iantanwx" target="_blank" rel="noreferrer">
				<GithubIcon width="28" height="28" />
			</a>
			<a href="https://twitter.com/iantanwx" target="_blank" rel="noreferrer">
				<TwitterIcon width="28" height="28" />
			</a>
			<a href="https://www.linkedin.com/in/ian-tan-001129156" target="_blank" rel="noreferrer">
				<LinkedInIcon width="28" height="28" />
			</a>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center">
		<h1
			class="text-4xl leading-7 text-center m-0 after:w-10 after:h-1 after:block after:bg-purple-500 after:m-auto after:mt-4 after:mb-2"
		>
			Ian Tan
		</h1>
		<p class="text text-left">
			Product engineer. Currently senior backend engineer @ Foodpanda. Formerly ByteDance, GoJek.
			Passionate about start ups, productivity, coaching, and mentorship. Biohacker by night.
			Currently building Minmax in public.
		</p>
	</div>
</div>
