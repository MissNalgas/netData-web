import { useContext } from "react";
import { SideModalContext } from ".";

export function useSideModal() {
	return useContext(SideModalContext);
}
