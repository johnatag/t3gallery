interface GalleryProps {
	children: React.ReactNode;
}

export function Gallery() {

	const mockUrls = [
		"https://9n1stvezum.ufs.sh/f/dsOUPd705iNUo9UpF1udmrW5Hxg6AK0YbOif8BcELpP1jUyw",
		"https://9n1stvezum.ufs.sh/f/dsOUPd705iNUyXBm5rNgpQUnGXqrzDHTvgL9VRSlx73Zk4bE",
		"https://9n1stvezum.ufs.sh/f/dsOUPd705iNU84nH712jGt9Cqr4oDyFw27xWOnQLBbKzdNR0",
		"https://9n1stvezum.ufs.sh/f/dsOUPd705iNUssMEVn0N3GQbv2UdLCP6njp85MZxwyKXiBhg"
		]

	const mockImages = [...mockUrls, ...mockUrls, ...mockUrls].map((url, idx) => ({
		id: idx + 1,
		url
	}));

	return (
		<>
			<div className="flex flex-wrap">{
				mockImages.map((image) => (
				<div key={image.id} className="w-1/2 p-4">
					<img src={image.url} alt="image"/>
				</div>
				))
			}</div>
		</>
	);
}
