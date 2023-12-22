import React from "react";
import Icon from "../icons";

const MAX_PAGES = 5;
const MIDDLE = Math.floor(MAX_PAGES / 2);

function mapPages(selectedPage : number, totalPages: number) {
	return function(_ : null, index:number) {
		if (totalPages < MAX_PAGES) return 1 + index;
		if (selectedPage <= MIDDLE) return 1 + index;
		if (selectedPage > totalPages - MIDDLE) return index + totalPages - (MAX_PAGES - 1);
		return selectedPage + index - MIDDLE;
	}
}

export default function Pagination({selectedPage, setSelectedPage, totalPages}: PaginationProps) {

	const goBack = () => setSelectedPage(s => s > 1 ? s - 1 : s);
	const goNext = () => setSelectedPage(s => s < totalPages ? s + 1 : s);

	return (
		<div className="flex items-center gap-2">
			<button className="w-6 h-5 bg-white rounded-full place-content-center grid" onClick={goBack}>
				<Icon icon="left-arrow" size="24"/>
			</button>
			{Array(Math.min(totalPages, MAX_PAGES)).fill(null).map(mapPages(selectedPage, totalPages)).map(page => (
				<button
					onClick={() => setSelectedPage(page)}
					className={`w-6 grid place-content-center h-6 rounded-full ${selectedPage === page ? "bg-orange50" : "bg-orange30"}`}
					key={page}
				>
					<span className="text-white text-sm">{page}</span>
				</button>
			))}
			{totalPages > MAX_PAGES && selectedPage < (totalPages - MIDDLE) && (
				<span>
					...
				</span>
			)}
			<button className="w-6 h-5 bg-white rounded-full place-content-center grid" onClick={goNext}>
				<Icon icon="right-arrow" size="24"/>
			</button>
		</div>
	);
}

interface PaginationProps {
	selectedPage: number;
	setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
	totalPages: number;
}
