import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nookies from "nookies"
import { adminAuth } from "~/server/lib/firebaseAdmin"

export async function middleware(request: NextRequest) {
    const currentPath = request.nextUrl.pathname
    const authPath = currentPath.startsWith("/auth")
    const landingPath = currentPath.startsWith("/landing")
    const { token } = nookies.get(null, "token")
    console.log({ token })
    NextResponse.next()
    // if (currentPath.includes("/auth")) {
    //     const { token } = nookies.get(null, "token")
    //     if(token){
    //         const hasAuth = await adminAuth.verifyIdToken(token)
    //         if(hasAuth){
    //             return NextResponse.rewrite(new URL('/', request.url))
    //         }
    //     }
    //     NextResponse.next()
    // }

    // if (currentPath.startsWith('/dashboard')) {
    //     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    // }
}