import React from "react";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<div>
			<header>
				<nav>{/* Aquí puedes agregar tu menú de navegación */}</nav>
			</header>
			<main>{children}</main>
			<footer>{/* Aquí puedes agregar tu footer */}</footer>
		</div>
	);
};

export default Layout;
