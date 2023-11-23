import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      'data': '\n[Ad]: The adsense of gpts: gptads.market \n'
    },
    {
      status: 200,
    },
  );
}