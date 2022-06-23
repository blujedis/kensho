<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	const bullets = [
		{
			title: 'Invite team members',
			description: 'You can manage phone, email and chat conversations all from a single mailbox.'
		},
		{
			title: 'Invite team members',
			description:
				'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscin sagittis vel nulla nec.'
		},
		{
			title: 'Invite team members',
			description: 'You can manage phone, email and chat conversations all from a single mailbox.'
		},
		{
			title: 'Invite team members',
			description:
				'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscin sagittis vel nulla nec.'
		}
	];
</script>

<Head title="Home" description="Kensho Form Controller" />

<div class="h-full">
	<Header />

	<!-- Main Content -->
	<main class="pt-24 overflow-y-auto w-full">
		<!-- Background Graphic -->
		<div
			class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full z-0"
			aria-hidden="true"
		>
			<div class="relative  overflow-x-hidden  h-full mx-auto">
				<svg
					class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
					width="404"
					height="784"
					fill="none"
					viewBox="0 0 404 784"
				>
					<defs>
						<pattern
							id="f210dbf6-a58d-4871-961e-36d5016a0f49"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect
								x="0"
								y="0"
								width="4"
								height="4"
								class="text-gray-200 dark:text-gray-500"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect width="404" height="340" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
				</svg>
				<svg
					class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
					width="404"
					height="784"
					fill="none"
					viewBox="0 0 404 784"
				>
					<defs>
						<pattern
							id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect
								x="0"
								y="0"
								width="4"
								height="4"
								class="text-gray-200 dark:text-gray-500"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
				</svg>
			</div>
		</div>

		<div class="container mx-auto">
			<div class="mx-auto max-w-2xl px-4 sm:mt-14">
				<div class="text-center">
					<h1
						class="text-4xl tracking-tight font-extrabold text-gray-700 dark:text-gray-200 sm:text-5xl md:text-6xl"
					>
						<span class="block xl:inline">Fast & Elegant</span>
						<span class="block text-indigo-600 xl:inline">Form Controller</span>
					</h1>
					<p
						class="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
					>
						Plain JavaScript form controller exposing validation and hooks for managing form
						submissions in responsive web applications.
					</p>
					<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
						<div class="rounded-md shadow">
							<a
								href="/started"
								class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
							>
								Get started
							</a>
						</div>
						<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
							<a
								href="/demo"
								class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
							>
								Live demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-100 dark:bg-gray-900 mt-0 md:mt-24 z-30">
			<div class="mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
				<div>
					<h2 class="text-base font-semibold text-indigo-600 uppercase tracking-wide">
						Everything you need
					</h2>
					<p class="mt-2 text-3xl font-extrabold text-gray-700 dark:text-gray-200">
						Platform Agnostic
					</p>
					<p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
						Kensho was written in plain JavaScript. This allows for writing adapters, essentially
						plugins that can be used to work with nearly any platform you may choose.
					</p>
				</div>
				<div class="mt-12 lg:mt-0 lg:col-span-2">
					<dl
						class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
					>
						{#each bullets as bullet}
							<div class="relative">
								<dt>
									<!-- Heroicon name: outline/check -->
									<svg
										class="absolute h-6 w-6 text-green-500"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
									</svg>
									<p class="ml-9 text-lg leading-6 font-medium text-gray-700 dark:text-gray-200">
										{bullet.title}
									</p>
								</dt>
								<dd class="mt-2 ml-9 text-base text-gray-500">
									{bullet.description}
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
		</div>

		<div class="p-16 xl:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
			<div class="max-w-max lg:max-w-7xl mx-auto">
				<div class="relative z-10 mb-8 md:mb-2 md:px-6">
					<div class="text-base max-w-prose lg:max-w-none">
						<h2 class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
							Transactions
						</h2>
						<p
							class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 dark:text-gray-200 sm:text-4xl"
						>
							A better way to send money
						</p>
					</div>
				</div>
				<div class="relative">
					<svg
						class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="95e8f2de-6d30-4b7e-8159-f791729db21b"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									class="text-gray-200 dark:text-gray-500"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
					</svg>
					<svg
						class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									class="text-gray-200 dark:text-gray-500"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
					</svg>
					<div class="relative bg-gray-100 dark:bg-gray-800 p-6">
						<div class="lg:grid lg:grid-cols-2 lg:gap-6">
							<div
								class="prose prose-indigo prose-lg text-gray-500 dark:text-gray-400 lg:max-w-none"
							>
								<p>
									Ultrices ultricies a in odio consequat egestas rutrum. Ut vitae aliquam in ipsum.
									Duis nullam placerat cursus risus ultrices nisi, vitae tellus in. Qui non fugiat
									aut minus aut rerum. Perspiciatis iusto mollitia iste minima soluta id.
								</p>
								<p>
									Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus
									felis id dignissim eget. Est augue <a href="/">maecenas</a> risus nulla ultrices congue
									nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula elit.
								</p>
								<ol>
									<li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
									<li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
								</ol>
								<p>
									Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed pellentesque
									scelerisque interdum blandit lectus. Nec viverra amet ac facilisis vestibulum.
									Vestibulum purus nibh ac ultricies congue.
								</p>
							</div>
							<div
								class="mt-6 prose prose-indigo prose-lg text-gray-500 dark:text-gray-400 lg:mt-0"
							>
								<p>
									Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus
									felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc
									tortor.
								</p>
								<p>
									Eu leo risus porta integer suspendisse sed sit ligula elit. Elit egestas lacinia
									sagittis pellentesque neque dignissim vulputate sodales. Diam sed mauris felis
									risus, ultricies mauris netus tincidunt. Mauris sit eu ac tellus nibh non eget sed
									accumsan. Viverra ac sed venenatis pulvinar elit. Cras diam quis tincidunt lectus.
									Non mi vitae, scelerisque felis nisi, netus amet nisl.
								</p>
								<p>
									Eu eu mauris bibendum scelerisque adipiscing et. Justo, elementum consectetur
									morbi eros, posuere ipsum tortor. Eget cursus massa sed velit feugiat sed ut.
									Faucibus eros mauris morbi aliquam nullam. Scelerisque elementum sit magna
									ullamcorper dignissim pretium.
								</p>
							</div>
						</div>
						<div class="mt-8 inline-flex rounded-md shadow">
							<a
								href="/"
								class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
							>
								Contact sales
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
