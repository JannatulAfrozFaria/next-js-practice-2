import { NextResponse } from "next/server"

const user =  true;
const coo = 'next-superhero'
export const middleware = (request) =>{
    //return NextResponse.redirect(new URL('/contact',request.url))

    // if(request.nextUrl.pathname.startsWith('/about')){
    //     return NextResponse.redirect(new URL('/contact',request.url))
    // }
    const cookies = request.cookies.get('token')
    if(!cookies || cookies.value !== coo){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();

    // if(!user){
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
    // return NextResponse.next();
    
    //redirect changes the url and content
    //rewrite changes the content but does not change the url path name
}
export const config = {
    // matcher: '/about'
    //redirect can be used for multiple pages as below with [ ] and comma(,)
     matcher: ['/dashboard','/service']
}