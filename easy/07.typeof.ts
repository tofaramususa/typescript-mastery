// Reference typehero.dev for more setup information for this challenge


const width = 800;


type Width = typeof width;
type Margin = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};

type Data = {
	category: string;
	value: number;
}[];

type YScale = {
	type: string;
	domain: number[];
	range: number[];
};

// type D3ChartConfig = typeof d3ChartConfig