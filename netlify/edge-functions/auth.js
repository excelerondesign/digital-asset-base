// @ts-check
/**
 * @param {Request} req
 */
export default async (req, _ctx) => {
    //console.log('something');
    // console.log(req);
    // const url = await fetch(req.url);
    if (_ctx.cookies.get('authed')) {
        return Response.redirect(req.url);
    }
    console.log(req.referrer, _ctx )
    // @TODO _ctx.site.url goes to the *actual* url not the local dev url, gotta
    // figure how to get the local host
    //
    // Using req.url or req.host or req.referrer ends up being undefined despite
    // being console-able
    return Response.redirect(req.referrer + '/auth');
}

export const config = {
    path: ['/*']
};