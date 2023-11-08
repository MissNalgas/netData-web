export default function Tabs<T extends string>({tabs, selectedTab, onChange} : TabsProps<T>) {


	return (
		<ul style={{gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`}} className="grid w-full bg-primary-200 rounded-lg">
			{tabs.map(t => (
				<button
					key={t}
					className={`${selectedTab === t ? "bg-primary text-white" : "transparent text-gray-400"} p-3 rounded-lg font-semibold`}
					onClick={() => onChange(t)}
				>
					{t}
				</button>
			))}
		</ul>
	);
}

interface TabsProps<T extends string> {
	tabs: ReadonlyArray<T>;
	selectedTab: T;
	onChange: (_newTab: T) => void;
}
