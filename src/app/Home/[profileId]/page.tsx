import React, { ReactElement } from "react";

export default function Profile({
	params,
}: {
	params: { profileId: string };
}): ReactElement | null {
	return <div>id = {params.profileId}</div>;
}
