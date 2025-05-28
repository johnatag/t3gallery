import { desc } from "drizzle-orm";
import { db } from "~/server/db";

interface GalleryProps {
	children: React.ReactNode;
}

export async function Gallery() {

	const images = await db.query.images.findMany({
		orderBy: (model, { desc}) => desc(model.id),
	});

	return (
		<>
			<div className="flex flex-wrap">{
				 [...images, ...images, ...images].map((image) => (
				<div key={image.id} className="w-1/2 p-4">
					<img src={image.url} alt="image"/>
					<div>{image.name}</div>
				</div>
				))
			}</div>
		</>
	);
}
