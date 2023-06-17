<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use Auth;

class CashierMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(Auth::check()) {

            // cashier role == 2
            // user role == 0

            if(Auth::user()->role == '2') {

                return $next($request);

            } else {
                return redirect('/dashboard')->with('message', 'Access Denied as you are not an Cashier!');
            }

        } else {

            return redirect('/login')->with('message', 'Please login first');

        }

        return $next($request);

    }
}
