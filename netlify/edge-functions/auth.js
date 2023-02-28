// @ts-check
/**
 * @param {Request} req
 */
/*
// @NOTE: Man who knows,,, at this point I'm starting to think it might not be possible
export default async (req, _ctx) => {
    const clone = req.clone()
    const url = new URL(req.url);
    console.log('something');
    console.log(await _ctx.cookeis.get('authed'));

    // console.log(req);
    // const url = await fetch(req.url);
    if (_ctx.cookies.get('authed')) {
        console.log(clone.headers.get('host'));
        return Response.redirect(url);
    }
    
    return _ctx.next();
    // const host = req.headers.get('host');
    // console.log(req.headers.get('host'), _ctx,next)
    // @TODO _ctx.site.url goes to the *actual* url not the local dev url, gotta
    // figure how to get the local host
    //
    // Using req.url or req.host or req.referrer ends up being undefined despite
    // being console-able
    // return Response.redirect(new URL('/auth'));
}*/

export default async (req, ctx) => {
    console.log('is literally anything happening???');
    return ctx.rewrite('/auth');
}