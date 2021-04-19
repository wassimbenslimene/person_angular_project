export function showLoading() {
	console.log("loading ...");
}

export function hideLoading() {
	console.log("loaded");
}

export function doNothing () {}

export const webServiceServer: string = 'http://3.85.41.219:8080';
export const webServiceEndpoint: string = webServiceServer + '/personapp/api';
