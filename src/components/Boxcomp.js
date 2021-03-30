import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "300px",
	"height": "300px",
	"border-color": "#3154bb",
	"background": "#8514b5"
};
const overrides = {};

const Boxcomp = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Boxcomp, { ...Box,
	defaultProps,
	overrides
});
export default Boxcomp;