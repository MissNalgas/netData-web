import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../app/Home/layout"; // Ajusta la ruta de importación según tu estructura de archivos
import { describe, it, expect } from "@jest/globals";

describe("Layout Component", () => {
	it("should render the Layout component with header, main, and footer", () => {
		render(
			<Layout>
				<div>Content goes here</div>
			</Layout>
		);

		const headerElement = screen.getByRole("divww");
		const mainElement = screen.getByRole("main");
		const footerElement = screen.getByRole("footer");

		// Utiliza directamente la función de expect de Jest
		expect(headerElement).toBeInTheDocument();
		expect(mainElement).toBeInTheDocument();
		expect(footerElement).toBeInTheDocument();
	});
});
