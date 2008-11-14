
//
//  create an object for our application data.  We can't just
//  use a 'scalar' as it would require us to modify the app scopea
//  which currently isn't allowed.  This is somethign we're working
//  on

data = {};
data.count = 0;

//
// this is a rather brutal mapper - every request goes to our controller.  Note that
// right now, this must be a jxp file, rather than a plain js
//
function mapUrlToJxpFile(uri) {
	
	// allow any request for a static asset to be just handled
	// by the appserver
    if( uri.match(/^\/assets\//) ) {
         return null;
    }

    // otherwise, just always return our "controller"
    return "controller.jxp";
}


