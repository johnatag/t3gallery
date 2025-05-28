import { desc } from "drizzle-orm";
import { db } from "~/server/db";
import { getMyImages } from "~/server/db/queries";
import Image from "next/image";

interface GalleryProps {
	children: React.ReactNode;
}

export async function Gallery() {

	const images = await getMyImages();

	return (
		<>
			<div className="flex flex-wrap justify-center gap-4">{
				 images.map((image) => (
				<div key={image.id} className="flex h-48 w-48 flex-col">
					<Image
						src={image.url}
						style={{ objectFit: "contain" }}
						width={192}
						height={192}
						alt={image.name}
					/>
					<div>{image.name}</div>
				</div>
				))
			}</div>
		</>
	);
}
