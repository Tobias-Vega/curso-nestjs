import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";

export const RawHeaders = createParamDecorator((data: string, ctx: ExecutionContext) => {

  const req = ctx.switchToHttp().getRequest()

  const headers = req.rawHeaders;

  return headers;
})