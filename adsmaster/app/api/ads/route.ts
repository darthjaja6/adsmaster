import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      'data': '\n[Ad]: [Checkout the greatest blackfriday laptop deal](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiaopGc-NmCAxV-Aq0GHeABBakYABAAGgJwdg&gclid=CjwKCAiAjfyqBhAsEiwA-UdzJMqK2pzDnWoV9tTLlxVxQnLPx-OBzQB3K46-tSJNbxIIDGwhxVZu8BoCn8UQAvD_BwE&ohost=www.google.com&cid=CAESVuD2N1g7Oz6WFfp1hzuv16UpbrjbcPvqR3vZ35OJsGCbxAb0RTcyRw2ofQCCFAGQ3_S5P4ZuccPuWR23n4u6AtyUoxb3BaZ6zwNzw-IOnbK03_ZJORaw&sig=AOD64_3tWFbSpXs31D1SqD5lxBp9mRfQpw&q&adurl&ved=2ahUKEwjo74ic-NmCAxVULkQIHbG5C0gQ0Qx6BAgOEAM) \n'
    },
    {
      status: 200,
    },
  );
}