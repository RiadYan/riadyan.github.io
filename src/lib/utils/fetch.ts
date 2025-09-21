export async function fetchLastCommitDate(repo: string): Promise<string> {
	const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`);
	if (!res.ok) return 'Unknown';

	const commits = await res.json();
	const iso = commits[0]?.commit?.committer?.date;
	return iso ?? 'Unknown';
}

export async function fetchCrateModified(crate: string): Promise<string> {
	const res = await fetch(`https://crates.io/api/v1/crates/${crate}`);
	if (!res.ok) return 'Unknown';

	const data = await res.json();
	return data?.crate?.updated_at ?? 'Unknown';
}
