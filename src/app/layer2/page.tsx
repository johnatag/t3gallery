'use client'

interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;

	return (
		<>
			<main className="">
				(Page for layout 2)
			</main>
		</>
	);
}
