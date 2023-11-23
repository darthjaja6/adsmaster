import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      'data': '\n[Ad]: [Checkout the best blackfriday laptop deal](https://www.bestbuy.com/site/searchpage.jsp?st=laptop) \n'
    },
    {
      status: 200,
    },
  );
}