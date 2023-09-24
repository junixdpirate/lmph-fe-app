import { HoudiniClient } from '$houdini';
import { GRAPHQL_API_URL } from '$lib/Env';
export default new HoudiniClient({
    url: GRAPHQL_API_URL

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) { 
    //     return { 
    //         headers: {
    //             Authentication: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})
