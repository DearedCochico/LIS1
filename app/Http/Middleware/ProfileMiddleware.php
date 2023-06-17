<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use Auth;

class ProfileMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth::check()) {

            // user role == 0

            if(Auth::user()->roleName == 'Admin') {



                return $next($request);

            } else {
                return redirect('/profile')->with('message', 'Access Denied as you are not an Admin!');
            }

        } else {

            return redirect('/login')->with('message', 'Please login first');

        }

        return $next($request);

    }
}
