export default [
  {
    title: 'Theme Buttons',
    code: [
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-primary duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
				Primary
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-secondary duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50">
				Secondary
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-accent duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50">
				Accent
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-neutral text-text duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-neutral focus:ring-opacity-50">
				Neutral
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-base-200 text-text duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-base-200 focus:ring-opacity-50">
				Base 200
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-transparent text-text duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 hover:bg-base-200 hover:text-text focus:outline-none focus:ring-2 focus:ring-base-200 focus:ring-opacity-50">
				Ghost
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-transparent text-primary duration-200 active:scale-x-90 active:scale-y-90 underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
				Link
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold text-base-200 bg-feature-text duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-feature-text focus:ring-opacity-50 hover:brightness-90">
				Feature Text
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold bg-text text-base-200 duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-text focus:ring-opacity-50 hover:brightness-90">
				Text
			</button>`,
    ],
  },
  {
    title: 'Outline Buttons',
    code: [
			`<button class="px-5 py-2.5 rounded-xl font-semibold border text-primary border-primary duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:bg-primary hover:text-base-100">
				Primary
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold border text-secondary border-secondary duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:bg-secondary hover:text-base-100">
				Secondary
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold border text-accent border-accent duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 hover:bg-accent hover:text-base-100">
				Accent
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold border text-feature-text border-feature-text duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-base-200 focus:ring-opacity-50 hover:bg-feature-text hover:text-base-100">
				Feature Text
			</button>`,
			`<button class="px-5 py-2.5 rounded-xl font-semibold border text-text border-text duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-text focus:ring-opacity-50 hover:bg-text hover:text-base-200">
				Text
			</button>`,
    ],
  },
  {
    title: 'Square Buttons',
    code: [
			`<button class="p-2 rounded-xl border border-primary text-primary duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:bg-primary hover:text-base-100">
				<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>`,
			`<button class="p-2 rounded-xl bg-secondary text-base-100 duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:brightness-90">
				<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>`,
			`<button disabled class="p-2 rounded-xl bg-accent disabled:brightness-75 text-base-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50">
				<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>`,
    ],
  },
  {
    title: 'Circle Buttons',
    code: [
			`<button class="p-2 rounded-full border border-secondary text-secondary duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:bg-secondary hover:text-base-100">
				<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>`,
			`<button class="p-2 rounded-full bg-accent text-base-100 duration-200 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 hover:brightness-90">
				<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>`,
			`<button disabled class="p-2 rounded-full bg-primary disabled:brightness-75 text-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
				<svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>`,
    ],
  },
  {
    title: 'Icon Buttons',
    code: [
			`<button class="px-4 py-2.5 rounded-xl bg-primary text-base-100 duration-200 flex gap-2 items-center font-bold [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:brightness-90">
				<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 0 0 .258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
				Button
			</button>`,
			`<button class="px-4 py-2.5 rounded-xl bg-secondary text-base-100 duration-200 flex gap-2 items-center flex-row-reverse font-bold [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-105 active:scale-y-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 hover:brightness-90">
				<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 0 0 .258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
				Button
			</button>`,
			`<button disabled class="px-4 py-2.5 rounded-xl bg-accent disabled:brightness-75 text-base-100 flex gap-2 items-center font-bold focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50">
				<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 0 0 .258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
				Button
			</button>`,
    ],
  },
  {
    title: 'Loading Buttons',
    code: [
			`<button disabled class="text-feature-text bg-primary hover:brightness-75 disabled:brightness-75 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center">
				<svg aria-hidden="true" role="status" class="inline w-6 h-6 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
					<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
				</svg>
			</button>`,
			`<button disabled class="text-feature-text bg-accent hover:brightness-75 disabled:brightness-75 focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg px-6 py-2.5 text-center inline-flex items-center gap-2">
				<svg aria-hidden="true" role="status" class="inline w-6 h-6 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
					<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
				</svg>
				Loading...
			</button>`,
    ],
  },
]
