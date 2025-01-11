import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/apple-laptops", name: "Macbook", imageUrl: "/macbook.jpg" },
	{ href: "/laptops", name: "Laptops", imageUrl: "/sm.jpg" },
	{ href: "/iphone", name: "Iphone", imageUrl: "/61xJlx-3KDL._SX679_.jpg" },
	{ href: "/samsung", name: "Samsung", imageUrl: "/s23.jpg" },
	{ href: "/chargers", name: "Chargers", imageUrl: "/mm.jpg" },
	{ href: "/airpods", name: "Airpods", imageUrl: "/ai.webp" },
	{ href: "/monitors", name: "Monitors", imageUrl: "/mon.webp" },
	{ href: "/printers", name: "Printers", imageUrl: "/print.jpg" },
	{ href: "/cases", name: "Cases", imageUrl: "/case.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly Electronics in Somalia 
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
