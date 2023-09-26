import { load_getEmployees } from '$houdini'

export const load = async (event) => {
	const variables = {
		page: event.url.searchParams.get('page')
	  };
	
	return {
		...(await load_getEmployees({ event, variables}))
	}
}