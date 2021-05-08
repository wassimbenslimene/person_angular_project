export function showLoading() {
	console.log("loading ...");
}

export function hideLoading() {
	console.log("loaded");
}

export function doNothing () {}

export const webServiceServer: string = 'http://18.234.191.144:31200';
export const webServiceEndpoint: string = webServiceServer + '/personapp/api';
