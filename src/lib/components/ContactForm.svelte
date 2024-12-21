<script lang="ts">
	let status = '';
	const handleSubmit = async (data: { currentTarget: HTMLFormElement | undefined }) => {
		status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			status = result.message || 'Success';
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="flex w-full max-w-xl flex-col gap-4 text-sm">
	<input type="hidden" name="access_key" value="156a0632-3a46-41fd-ac95-370026892c2f" />
	<div class="flex w-full gap-4">
		<div class="flex w-1/2 flex-col gap-1">
			<label for="name">name</label>
			<input
				type="text"
				name="name"
				required
				class="bg-vulcan-50 shadow-vulcan-800/50 w-full rounded-lg font-fira-code text-sm text-gray-800 shadow-lg"
			/>
		</div>
		<div class="flex w-1/2 flex-col gap-1">
			<label for="email">email address</label>
			<input
				type="email"
				name="email"
				required
				class="bg-vulcan-50 shadow-vulcan-800/50 w-full rounded-lg font-fira-code text-sm text-gray-800 shadow-lg"
			/>
		</div>
	</div>

	<div class="flex w-full flex-col gap-1">
		<label for="message">message</label>
		<textarea
			name="message"
			required
			rows="10"
			class="bg-vulcan-50 shadow-vulcan-800/50 w-full rounded-lg font-fira-code text-sm text-gray-800 shadow-lg"
		></textarea>
	</div>
	<button
		type="submit"
		class="shadow-vulcan-800/30 w-fit rounded bg-orange-800 px-3 py-1 shadow-lg transition duration-300 ease-in-out hover:bg-orange-900"
	>
		send
	</button>
	<div>{status}</div>
</form>
