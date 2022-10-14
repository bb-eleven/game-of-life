<script lang="ts">
	import Leaderboards from '$lib/Leaderboards.svelte';
	import { LeaderboardsSize } from '$lib/types/leaderboard';

	const loadLeaderboards = fetch(import.meta.env.VITE_BASE_URL + '/leaderboards')
		.then((res) => res.json())
		.then((data) => data.leaderboards);

	let loadRecurringData: Promise<any>;
	const loadDayNumber = fetch(import.meta.env.VITE_BASE_URL + '/day')
		.then((res) => res.json())
		.then((data) => {
			const day = data.day;
			loadRecurringData = fetch(import.meta.env.VITE_BASE_URL + '/news/' + day)
				.then((res) => res.json())
				.then((data) => data.recurringData);
			return day;
		});
</script>

<section class="flex space-x-4">
	<div id="leaderboards" class="">
		{#await loadLeaderboards}
			<Leaderboards leaderboards={[]} leaderboardsSize={LeaderboardsSize.SMALL} />
		{:then leaderboards}
			<Leaderboards {leaderboards} leaderboardsSize={LeaderboardsSize.SMALL} />
		{/await}
	</div>

	<div id="news" class="">
		{#await loadDayNumber}
			<span>Loading... </span>
		{:then day}
			{#await loadRecurringData}
				<span>Getting news for day {day}</span>
			{:then recurringData}
				<ul>
					<li>Rental yield: {recurringData.propertyInvestment.rentalYield}%</li>
					<li>Property value: {recurringData.propertyInvestment.propertyValue}%</li>
					<li>Sales pitch: {recurringData.salesPitch}%</li>
					<li>Life insurance penalty: ${recurringData.lifeInsurancePenalty}</li>
				</ul>
			{/await}
		{/await}
	</div>
</section>
