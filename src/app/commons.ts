export function showLoading() {
	console.log("loading ...");
}

export function hideLoading() {
	console.log("loaded");
}

export function doNothing () {}

export const webServiceServer: string = 'http://23.22.16.146:8080';
export const webServiceEndpoint: string = webServiceServer + '/personapp/api';
